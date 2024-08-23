const dotenv=require("dotenv");

dotenv.config();

module.exports={
    PORT:process.env.PORT,
    DB_USERNAME:process.env.DB_USERNAME,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_HOST:process.env.DB_HOST,
    DB_NAME:process.env.DB_NAME,
    NODE_ENV:process.env.NODE_ENV
};