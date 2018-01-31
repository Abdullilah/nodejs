var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myFirstEvent', function (name, surname) {
    console.log(name + ' ' + surname);
});

setTimeout(function () {
    eventEmitter.emit('myFirstEvent', 'Abdullilah', 'Alhaj Younes');
} ,2000);