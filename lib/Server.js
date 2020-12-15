let express = require('express');
let http = require('http');
class Server {
   constructor(){
       this.app = express();
   }
   async start(){
       let listeningApp = http.createServer(this.app);
       listeningApp.listen(8000,()=>{
           console.log('服务已经在8000端口上启动了!');
       });
   }
}
module.exports = Server;