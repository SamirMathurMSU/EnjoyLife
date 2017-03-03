//Import events module
var events = require('events');

//Create an eventEmitter Object

var eventEmitter = new events.EventEmitter();

// Create an event handler as follows

var connectHandler = function connected() {
    console.log('connection successful');
    
    //Fire the data_received event
    eventEmitter.emit('data_received');
} 

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received',function(){
console.log('data received successfully');

});

eventEmitter.emit('connection');

console.log('Program Ended');

