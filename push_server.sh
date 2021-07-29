#! /bin/bash

# Build code
npm run build:server

# Build docker image
docker build -t alisalim17/abb:latest .  

# Push to docker hub
docker push alisalim17/abb:latest
