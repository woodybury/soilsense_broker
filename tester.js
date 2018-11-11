var mqtt = require('mqtt');
var broker = 'localhost'

var client  = mqtt.connect('mqtt://' + broker);
client.on('connect', function () {
  setInterval(function() {
    client.publish('events', 'Hello soilsense google data masters, this message was sent from Woodys test mqtt device.');
    console.log('Message Sent');
  }, 5000);
});