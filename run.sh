#!/usr/bin/env bash


CODEDIR=/home/aw/projects/echoService


## to make relative paths work
cd $CODEDIR

## Environment variables
# . $CODEDIR/tokens.sh

## exec, to follow existing thread (service-PID will be accurate). Fire!
exec /home/aw/.nvm/versions/node/v8.9.4/bin/node ./bin/www
