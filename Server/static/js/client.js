//Client for connecting to websocket server
//The websocket server is the server for all gameplay functionality
//Client contains all functionality for basic gameplay

var ws = new WebSocket('ws://165.22.143.177:5122');
  ws.onmessage = function (event) {
    console.log(event.data);
};