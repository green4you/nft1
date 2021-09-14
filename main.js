var http = require('http');
var fs = require('fs');
const { mainModule } = require('process');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000); // 포트번호.

//사용전 현재 경로에서 node main.js  입력해서 웹서버 실행