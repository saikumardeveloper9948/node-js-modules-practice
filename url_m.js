const http =require("http");
const url=require("url"); // import url module and used to generate response based on parameters/endpoints/path/route in url
const port =3300;


const server = http.createServer((req,res)=>{
    //console.log(req.url); // displays the url of the request
    // let y= req.url;
    // let z=y.split("/")
    // console.log(y);
    const parsedurl =url.parse(req.url,true)
    // console.log(parsedurl);
    console.log(parsedurl.pathname, parsedurl.query);

    // let sai=parsedurl.query.name
    
    if(parsedurl.pathname=="/home"){
        res.writeHead(200,{ "content-type":"application/json"})
        res.write("hi welcome to home page "+parsedurl.query.name )
        res.end()
    }
    else if(parsedurl.pathname=="/login"){
        res.writeHead(200, {"content-type":"application.json"});
        res.write("welcome to login page Mr "+ parsedurl.query.name);
        res.end();
    }
    else{
        res.writeHead(404, {"content-type":"application/json"});
        res.write("page not found Mr "+ JSON.stringify(parsedurl.query.name) );
        res.end();
    }

})
server.listen(port,()=>{
    console.log("server is running");
    
})