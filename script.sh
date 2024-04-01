#!/bin/sh

# install Node dependencies
npm install 

# Install JSON-server
npm install json-server

# Navigate to Next.js folder
cd /taobin-dashboard

# Install project dependencies
npm install

# Run the 'both' script from package.json
npm run both
