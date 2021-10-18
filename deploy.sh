echo '[......] 0%'
git pull
echo '[......] 16%'
rm -rf dist node_modules
echo '[>.....] 32%'
npm i
echo '[=>....] 64%'
npm run build
echo '[==>...] 80%'
kill -9 ps -aux | grep node | awk '{print $2}'
echo '[===>..] 96%'
npm run start:prod &
echo '[====>] 100% Done'
