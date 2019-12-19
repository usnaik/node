const EventEmitter  = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter  {

    log(message) {

        // Send an HTTP request to the url
        console.log('sent HTTPS message ', message);
    
        // Raise an Event
        this.emit('messageLogged' , {id: 1, msg: message});
    
    }
    
}

module.exports = Logger;