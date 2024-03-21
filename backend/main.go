// Made with code found @ https://tutorialedge.net/projects/chat-system-in-go-and-react

package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// Defines the upgrader
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,

	// For now, no checking
	CheckOrigin: func(r *http.Request) bool { return true },
}

// The reader will listen for new messages
// being sent to the WebSocket endpoint
func reader(conn *websocket.Conn) {
	for {
		// read in a message
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		// Print out the message for clarity
		fmt.Println(string(p))

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

// define the WebSocekt endpoint
func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	// upgrade the connection to a webSocket connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}
	// listend indefinitely for new messages coming
	// through on our WebSocket connection
	reader(ws)
}

func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple Server")
	})
	// map the '/ws' endpoint to the 'serveWs' function

	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("Anthony's Website v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}
