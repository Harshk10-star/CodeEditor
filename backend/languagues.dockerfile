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

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Default command to keep the container running
CMD tail -f /dev/null
