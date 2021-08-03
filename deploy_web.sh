#! /bin/bash

# Build code
npm run build:web

netlify build

netlify deploy