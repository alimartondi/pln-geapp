module.exports = {
  apps: [
    {
      name: "pln-web",
      script: "node_modules/.bin/next",
      args: "start -p 3011",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
