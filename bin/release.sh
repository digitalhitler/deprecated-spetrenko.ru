#!/usr/bin/env bash
cd ..
git pull origin master
### Running webpack
#   -p          optimize
#   -v          verbose output
webpack -p -v