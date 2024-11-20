// function sai(){
//     return "Saiyajin";
// }

// function chamma(){
//     return "Chamcha";
// }
// module.exports={sai,chamma};

// var otp =require("./practice2.js")

// import { otp } from './practice2' ;
// console.log(otp(6));

var http = require("http");
const url = require("url");
var server = http.createServer((req, res) => {
  console.log(req.url);
  // res.writeHead;
  // res.write("hello world");
  // console.log(req.url, "welcome")
  res.end("ended");
});
port = 3000;
server.listen(port, () => {
  console.log("server is running on port " + port);
});
