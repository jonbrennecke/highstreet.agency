#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

required_vars=('1' 'ANSIBLE_VAULT_PASSWORD')
for var in "${required_vars[@]}"; do
  if [ -z ${!var} ]; then
    echo "Error: missing required variable \"$var\"." >&2
    exit 1
  fi
done

if [ "$1" != "production" ] && [ "$1" != "staging" ]; then
  echo "Error: The first argument must either 'production' or 'staging'."
  exit 1
fi

docker build \
  -t mathhacksco/blog \
  $(pwd)/deploy

openssl aes-256-cbc -K $encrypted_deae71ea1931_key -iv $encrypted_deae71ea1931_iv -in ./deploy/ssh-keys/deploy_key.enc -out ./deploy/ssh-keys/deploy_key -d
chmod 400 ./deploy/ssh-keys/deploy_key

docker run \
  -e "ANSIBLE_VAULT_PASSWORD=$ANSIBLE_VAULT_PASSWORD" \
  -e "ANSIBLE_ENV=$1" \
  -e "TRAVIS_COMMIT=$TRAVIS_COMMIT" \
  -e "TRAVIS_BRANCH=$TRAVIS_BRANCH" \
  -v $(pwd)/deploy/ssh-keys:/root/.ssh \
  mathhacksco/blog

# clean up deploy key
git reset --hard HEAD
