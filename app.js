
var appjs = require('appjs');

appjs.serveFilesFrom(__dirname + '/content');

var window = appjs.createWindow({
  width: 640,
  height: 460,
  alpha: false
});

window.on('ready', function(){
  window.frame.show();
  window.frame.openDevTools();
});

window.on('close', function(){
  process.exit(0);
});

setInterval(function(){
  console.log("Node.js event loop alive here" + new Date().toString());
}, 500);

