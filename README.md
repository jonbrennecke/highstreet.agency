Blog
---------------

Usage
============

### Part 1: Run WordPress and MySQL

WordPress and MySQL run inside docker containers. To start docker, run the `start-wordpress.sh` shell script.

```bash
./scripts/start-wordpress.sh
```

### Part 2: Run the webpack dev server

The front end run separately from the backend, using the WordPress API to fetch data from WordPress.
Start the front end with NPM.

```bash
npm run develop
```


Copyright and License
============
Code and documentation copyright 2018 Brett Berry. Code released under the MIT license. Docs released under Creative Commons.
