const ENV = process.env;

module.exports = Object.assign({}, ENV, {
  DEVELOPMENT: ENV.DEVELOPMENT === 'true'
});
