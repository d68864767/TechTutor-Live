// Server configuration

const config = {
  videoStreamingApi: {
    apiKey: 'YOUR_API_KEY',
    apiSecret: 'YOUR_API_SECRET',
  },
  authentication: {
    jwtSecret: 'YOUR_JWT_SECRET',
    oauthProviders: {
      google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      },
      github: {
        clientId: 'YOUR_GITHUB_CLIENT_ID',
        clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
      },
    },
  },
  database: {
    host: 'YOUR_DATABASE_HOST',
    port: 'YOUR_DATABASE_PORT',
    username: 'YOUR_DATABASE_USERNAME',
    password: 'YOUR_DATABASE_PASSWORD',
    database: 'YOUR_DATABASE_NAME',
  },
};

module.exports = config;
