package main

import (
	"fmt"
	"mymodule/goclient/database"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	db, err := database.Connect("root:@tcp(localhost:3306)/gopay")
	if err != nil {
		http.Error(w, fmt.Sprintf("Database connection failed: %v", err), http.StatusInternalServerError)
		return
	}

	defer db.Close()

	fmt.Fprintf(w, "Database connected successfully")
}

func main() {
	http.HandleFunc("/", handler)
	fmt.Println("Server is running in 8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("eror starting server:", err)
	}
}
