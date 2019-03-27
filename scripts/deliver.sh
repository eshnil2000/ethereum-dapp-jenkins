#!/usr/bin/env sh

set -x
python -m http.server 8081 &
sleep 1
echo $! > .pidfile
set +x
