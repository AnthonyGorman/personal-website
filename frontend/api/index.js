// This code was found @ https://tutorialedge.net/projects/chat-system-in-go-and-react

// api/index.js
var socket = new WebSocket("ws://localhost:8080/ws");

let connect = () => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Successfully Connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Closed Connection: ", event);
    };
};

export {connect};