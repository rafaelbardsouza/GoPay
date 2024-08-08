package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}

func main() {
	http.HandleFunc("/", handler)
	fmt.Println("Server is running in 8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("eror starting server:", err)
	}
}
