# Use an official Ubuntu runtime as a parent image
FROM ubuntu:20.04

# Set the working directory
WORKDIR /usr/src/app

# Install necessary packages
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    openjdk-11-jdk \
    golang \
    nodejs \
    npm \
    gcc \
    g++ \
    make \
    && apt-get clean

# Install Go dependencies
RUN go install github.com/gin-gonic/gin@latest

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Build the Go application
RUN go build -o server .

# Expose the port the server will run on
EXPOSE 8080

# Default command to run the Go application
CMD ["./server"]

