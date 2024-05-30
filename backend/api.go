package main

import (
	"database/sql"

	"github.com/gin-gonic/gin"
)

func getUserRepos(c *gin.Context) {

}

func connectDatabse() {
	connStr := "username:mypassword@tcp(127.0.0.1:3306)/mydb"
	db, err := sql.Open("mysql", connStr)

}
func main() {
	router := gin.Default()
	router.GET("/repos/:id")
	router.Run("localhost:8080")

}
