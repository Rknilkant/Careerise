package main

/*
   default: no library, (unless necessary)
*/

import "net/http"

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		rw.Write([]byte("<h1>Home Route</h1>"))
	})
	mux.HandleFunc("/profile", func(rw http.ResponseWriter, r *http.Request) {
		rw.Write([]byte("<h1>Profile Route</h1>"))
	})
}
