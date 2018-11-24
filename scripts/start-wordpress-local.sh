# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Starts a local wordpress setup inside docker containers
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

cat ./header.txt
echo "\n"

# Check dependencies
dependencies=('docker' 'docker-machine')
for dep in "${dependencies[@]}"; do
  if ! [ -x "$(command -v $dep)" ]; then
    echo "Error: $dep not installed." >&2
    exit 1
  fi
done

# load configuration from .env file
source ./.env

if [ -z "$MYSQL_ROOT_PASSWORD" ]; then
  echo "MYSQL_ROOT_PASSWORD must be set"
  exit 1
fi

docker-machine create mathhacks-wordpress-machine --driver $DOCKER_DEV_DRIVER
docker-machine start mathhacks-wordpress-machine
eval $(docker-machine env mathhacks-wordpress-machine)

docker pull mysql:5.7.8
docker stop mathhacks-wordpress-db
docker rm mathhacks-wordpress-db
docker run \
  -d \
  --name=mathhacks-wordpress-db \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -v /mnt/sda1/var/mysql_data:/var/lib/mysql \
  -p 3306:3306 \
  mysql:5.7.8

docker pull wordpress
docker stop mathhacks-wordpress
docker rm mathhacks-wordpress
docker run \
  -d \
  --name=mathhacks-wordpress \
  --link mathhacks-wordpress-db:mysql \
  -p 80:80 \
  wordpress
