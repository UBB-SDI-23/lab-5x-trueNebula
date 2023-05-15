module.exports = {
    HOST: "127.0.0.1",
    USER: "me",
    PASSWORD: "password",
    DB: "api",
    PORT: 5000,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
