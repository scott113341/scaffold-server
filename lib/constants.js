const ENV = process.env;

const DEVELOPMENT = ENV.DEVELOPMENT === 'true';
const PORT = ENV.PORT;

module.exports = {
  DEVELOPMENT,
  PORT
};
