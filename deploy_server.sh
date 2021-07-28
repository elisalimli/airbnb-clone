#! /bin/bash

# ssh to my server's ip & pull from docker hub & tag it & deploy it via dokku
ssh root@164.90.169.15 "docker pull alisalim17/abb:latest && docker tag alisalim17/abb:latest dokku/api:latest && dokku tags:deploy api latest"

