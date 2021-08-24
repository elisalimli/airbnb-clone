#! /bin/bash

echo What should be the version ?
read VERSION

# Build docker image
docker build -t alisalim17/abb:$VERSION .  

# Push to docker hub
docker push alisalim17/abb:$VERSION

# ssh to my server's ip & pull from docker hub & tag it & deploy it via dokku
ssh root@167.71.64.47 "docker pull alisalim17/abb:$VERSION && docker tag alisalim17/abb:$VERSION dokku/api:latest && dokku tags:deploy api latest"