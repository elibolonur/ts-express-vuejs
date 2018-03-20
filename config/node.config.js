const env = process.env.NODE_ENV;
// TODO: add dotenv
const dev = {
  server: {
    host: "localhost",
    port: 3000
  },
  client: {
    host: "localhost",
    port: 8080
  }
};

const test = {
  app: {
    port: 3001
  }
};

const config = {
  dev,
  test
};

module.exports = config[env];
