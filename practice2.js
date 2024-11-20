// var {sai, chamma}=require("./practice1");
// console.log(sai());
// console.log(chamma());

// function otp(n=4){
//     var nn=""
//     for(i = 0;i < n;i++){
//         var t = Math.floor(Math.random()*10);
//         // console.log(t)
//         nn +=t
//     }
//    return nn;

// }
// // console.log(otp(4))

// module.exports = otp;

// var http = require("http");
// var url = require("url");
// var server = http.createServer((req, res) => {

//   var parsed = url.parse(req.url);

//   console.log(parsed);

//   res.end("welcome");
// });
// const port = 3006;
// server.listen(port, () => {
//   console.log(`server is connected to http://localhost: ${port}`);
// });

//   ex:www.fakestoreapi.com/products/1/?name=sai&age=22&place=hyd

//params:
// endpoint: An endpoint URL is a location on a server that allows an API client to request a resource.
//  i.e., /products
//
// query: in a url query is defined as a key value pair
// i.e., ?name=sai&age=22&place=hyd

const http = require("http");
const url = require("url");
var server = http.createServer((req, res) => {
  var parsed = url.parse(req.url,true);
  console.log(parsed);

  // console.log(parsed.pathname.split("/"))

  var arr = parsed.pathname.split("/");
  console.log(arr);
  var a = arr[2];
  console.log(a);

  // [parsed.pathname.length-1]

  console.log(parsed.pathname);

  // console.log(parsed.pathname.length);

  res.end(JSON.stringify(parsed.query));
});
const port = 3007;
server.listen(port, () => {
  console.log(`server is connected to http://localhost: ${port}`);
});
