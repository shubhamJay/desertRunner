const http = require('http');
const fs = require('fs');
// console.log(runnerGame);


const requestHandler = function(req,res){
  console.log(req.url);
  let dataToSend = '';
  if(req.url == "/runner.html"){
    dataToSend = fs.readFileSync("./desertRunner.html","utf8");
    res.writeHead(200,{'Content-Type':'text-html'});
  }
  if(req.url == "/desertRunner.css"){
    dataToSend = fs.readFileSync("./desertRunner.css","utf8");
    res.writeHead(200,{'Content-Type':'text-css'});
  }
  if (req.url == "/desertRunner.js") {
    dataToSend = fs.readFileSync("desertRunner.js","utf8");
    res.writeHead(200,{"Content-Type":"text-javascript"})
  }
  if(req.url == "/road.png"){
    dataToSend = fs.readFileSync("road.png");
    res.writeHead(200,{"Content-Type":"img/gif"});
  }
  if(req.url == "/runnerStanding.gif"){
    dataToSend = fs.readFileSync("runnerStanding.gif");
    res.writeHead(200,{"Content-Type":"img/gif"});
  }
  if(req.url == "/runnerRunning.gif"){
    dataToSend = fs.readFileSync("runnerRunning.gif");
    res.writeHead(200,{"Content-Type":"img/gif"});
  }
  if(req.url == "/cactus1.png"){
    dataToSend = fs.readFileSync("cactus1.png");
    res.writeHead(200,{"Content-Type":"img/gif"});
  }
  if(req.url == "/favicon.ico"){
    dataToSend = fs.readFileSync("cactusmove.gif");
    res.writeHead(200,{"Content-Type":"img/gif"});
  }
  res.write(dataToSend);
  res.end();
};

const server = http.createServer(requestHandler);
server.listen(1111);
