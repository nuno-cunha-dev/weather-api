echo '[.....] 0%'
git pull
echo '[>....] 20%'
rm -rf dist node_modules
echo '[=>...] 40%'
npm i
echo '[==>..] 60%'
npm run build
echo '[===>.] 80%'
npm run start:prod &
echo '[====>] 100% Done'
