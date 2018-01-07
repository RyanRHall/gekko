// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
  headless: true,
  api: {
    host: '0.0.0.0',
    port: 80,
    // timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    host: '54.245.44.243',
    port: 80,
    path: '/'
  },
  adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
