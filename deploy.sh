echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* bunintheoven:/var/www/estimate-react-front/

echo "Deleting distribution folder"
rm -rf dist

echo "Done!"