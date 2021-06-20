require("dotenv").config();

const { DEV_DB_USERNAME, DEV_DB_PASSWORD, DEV_DB_NAME, DEV_DB_HOSTNAME } =
  process.env;

module.exports = {
  production: {
    username: "baa565a4618413",
    password: "79af72cb",
    database: "heroku_e2df8f146fb34f4",
    host: "us-cdbr-east-04.cleardb.com",
    dialect: "mysql",
  },
};
