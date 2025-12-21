module.exports = {
  apps: [
    // NEXTJS
    {
      name: "pln-web",
      script: "node_modules/.bin/next",
      args: "start -p 3011",
      cwd: "/home/stagingserver-pln/htdocs/pln.stagingserver.id",
      env: {
        NODE_ENV: "production"
      }
    },

    // EXPRESS API (PRODUCTION)
    {
      name: "pln-api",
      script: "dist/index.js", // ✅ BENAR karena dist ada di root
      cwd: "/home/stagingserver-pln/htdocs/pln.stagingserver.id",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 4000
      }
    }
  ]
};