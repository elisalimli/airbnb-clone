#! /bin/bash

# echo What should be the version ?
# read VERSION

# Build code
npm run build:server

# Build docker image
docker build -t alisalim17/abb:latest .  

# Push to docker hub
docker push alisalim17/abb:latest

# ssh to my server's ip & pull from docker hub & tag it & deploy it via dokku
ssh root@68.183.214.220 "docker pull alisalim17/abb:latest && docker tag alisalim17/abb:latest dokku/api:latest && dokku tags:deploy api latest"