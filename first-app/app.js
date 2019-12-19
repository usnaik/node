const EventEmitter  = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.addListener('messageLogged', (arg) => {
    console.log('Listner called, with message', arg);
});

logger.log({id:1, url:'http://test.org' });

