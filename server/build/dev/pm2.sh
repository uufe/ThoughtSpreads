
echo 'kill pm2 node process'

PORT=`lsof -i tcp:3000 | grep node | sed 's/node[ ]*\([0-9]*\).*/\1/g'`
echo `lsof -i tcp:3000 | grep node`

kill -9 $PORT
echo "kill -9 $PORT"

echo '-------------------------------------'


pm2 start --node-args='--inspect' ./index.js --watch -f
echo "pm2 start --node-args='--inspect' ./index.js --watch -f"
