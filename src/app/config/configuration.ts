export default () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.NODE_PORT, 10) || 3000,
  postgreSqlDatabase: {
    host: process.env.POSTGRESQL_HOST,
    port: parseInt(process.env.POSTGRESQL_PORT, 10) || 5432,
    username: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.POSTGRESQL_DATABASE,
    testHost: process.env.POSTGRESQL_TEST_HOST,
    testPort: parseInt(process.env.POSTGRESQL_TEST_PORT, 10) || 5432,
    testUsername: process.env.POSTGRESQL_TEST_USERNAME,
    testPassword: process.env.POSTGRESQL_TEST_PASSWORD,
    testDatabase: process.env.POSTGRESQL_TEST_DATABASE,
  }
});