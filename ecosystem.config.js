module.exports = {
  apps : [{
    name: 'nextjs',
    script: 'server.js',
    watch: true,
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
