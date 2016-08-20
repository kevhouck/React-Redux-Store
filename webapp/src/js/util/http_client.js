var axios = require('axios').create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
});

module.exports = axios;