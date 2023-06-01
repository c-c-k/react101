# install eslint
npm init @eslint/config
# setup prettier
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
cp .gitignore .prettierignore
# adjust eslint to prettier
npm install --save-dev eslint-config-prettier
