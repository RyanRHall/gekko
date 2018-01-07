// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
  headless: true,
  api: {
    host: '127.0.0.1',
    port: 3000,
    // timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: process.env.NODE_ENV === "production",
    host: process.env.NODE_ENV === "production" ? '54.245.198.64' : "localhost" ,
    port: process.env.NODE_ENV === "production" ? 443 : 3000,
    path: '/'
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
