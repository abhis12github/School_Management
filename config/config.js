const {DB_USERNAME,DB_PASSWORD,DB_NAME,DB_HOST}=require("./serverConfig");

console.log('Database Config:', {
  username: DB_USERNAME,
  database: DB_NAME,
  host: DB_HOST,
  dialect: "mysql",
  NODE_ENV:process.env.NODE_ENV
});

module.exports = {
  development: {
    username: DB_USERNAME ,
    password: DB_PASSWORD ,
    database: DB_NAME ,
    host: DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql"
  }
};
