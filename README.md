# Viet Hung Alumni

## Technologies used

### Databases

1. MySQL

### Libraries/frameworks

1. ExpressJS
2. Sequelize ORM
3. JSON Web Token
4. Joi
5. Bcrypt
6. Cors

### Testing Locally for API

1. Ensure you have NodeJs 14+ and yarn installed on your system
2. Open your terminal and clone this repo

```
$ git clone https://github.com/fvtien/viu-alumni.git
```

3. Switch into the project root directory and install dependencies

```
$ cd viu-alumni && yarn install
```

4. Ensure xampp is started and run the following command to create the database

```
yarn create-db
```

```
yarn migrate
```

5. Run server

```
yarn dev
```
