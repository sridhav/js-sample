#!/bin/bash

apt-get-y update
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs

apt-get -y install npm

npm install -g npm

npm install -g gulp

npm install -g gulp-uglify

npm install -g gulp-bundle-assets
cd /data/env/dev/ && npm install