package main

import (
	"bytes"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.POST("/lang/run", runCode)
	router.Run("localhost:8080")
}
func runCode(c *gin.Context) {
	// Get code from request
	var requestBody struct {
		Code     string `json:"code"`
		Language string `json:"language"`
	}
	if err := c.BindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Save the code to a file with the appropriate extension
	codeFile := filepath.Join("/tmp", fmt.Sprintf("code.%s", getFileExtension(requestBody.Language)))
	err := os.WriteFile(codeFile, []byte(requestBody.Code), 0644)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save code"})
		return
	}

	// Construct the command to run the code file
	runCommand := getRunCommand(requestBody.Language)

	// Execute the command using exec.Command
	cmd := exec.Command("bash", "-c", runCommand)
	var out bytes.Buffer
	cmd.Stdout = &out
	cmd.Stderr = &out

	// Run the command and capture the output
	err = cmd.Run()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to run code", "details": out.String()})
		return
	}

	// Return the result
	c.JSON(http.StatusOK, gin.H{"result": out.String()})
}

func getFileExtension(language string) string {
	switch language {
	case "python":
		return "py"
	case "java":
		return "java"
	case "go":
		return "go"
	case "javascript":
		return "js"
	case "c":
		return "c"
	case "cpp":
		return "cpp"
	default:
		return "txt"
	}
}

func getRunCommand(language string) string {
	switch language {
	case "python":
		return "python3 /usr/src/app/code.py"
	case "java":
		return "javac /usr/src/app/code.java && java -cp /usr/src/app Code"
	case "go":
		return "go run /usr/src/app/code.go"
	case "javascript":
		return "node /usr/src/app/code.js"
	case "c":
		return "gcc /usr/src/app/code.c -o /usr/src/app/code && /usr/src/app/code"
	case "cpp":
		return "g++ /usr/src/app/code.cpp -o /usr/src/app/code && /usr/src/app/code"
	default:
		return "cat /usr/src/app/code.txt"
	}
}
