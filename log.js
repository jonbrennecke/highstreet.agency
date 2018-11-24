const log4js = require('log4js');

log4js.configure({
    appenders: [
        {
            type: 'console'
        }
    ],
    replaceConsole: false
});

module.exports = log4js.getLogger();
