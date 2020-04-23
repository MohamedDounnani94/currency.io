export default () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.NODE_PORT, 10) || 3000,
  postgreSqlDatabase: {
    host: process.env.POSTGRESQL_HOST,
    port: parseInt(process.env.POSTGRESQL_PORT, 10) || 5432,
    username: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
  }
});