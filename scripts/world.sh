#!/bin/sh

cp -a ../template/* ../../../../../world

cd ../../../../

zip -r inconvenient-world.zip ./world

rm -rf ./world