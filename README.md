1. Clone project from:
https://github.com/ungureanuramona1324/genderize.git

2. Go to project files
cd genderize

3. install the npm dependencies
npm install

4. Set server port
for heroku:
uncomment line 11: 
var port = process.env.PORT || 3000;

and comment line 14:
var port = 3000


for local:
comment line 11: 
var port = process.env.PORT || 3000;

and uncomment line 14:
var port = 3000

5. for local go to your_ip::3000
