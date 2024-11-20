//  FS READ FILE
const http= require("http");
const fs=require("fs");
const port =3301;
const server= http.createServer((req,res)=>{

fs.readFile("./fs.txt",(err,data)=>{
    if(err){
        res.write("oops...");
        res.end();
    }
    else{
        res.write(data);
        res.end();
    }
})

})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

// // most of the time we do asynchronous operations.

// //  FS READ FILE in synchronous


const http= require("http");
const fs=require("fs");
const port6 =3301;
const server6= http.createServer((req,res)=>{

const file=fs.readFileSync("./fs.txt","utf-8");
console.log(file);
// res.write(file);
res.end();


})
server6.listen(port6,()=>{
    console.log(`server is running in synchronous mode on port ${port}`);
})





// FS WRITE FILE


const http= require("http");
const fs=require("fs");
const port5 =3301;
const server5= http.createServer((req,res)=>{
 var ans = "server is up..!";
fs.writeFile("./fs.txt",ans,"utf-8",(err,data)=>{
    if(err){
        res.write("oops...");
        res.end();
    }
    else{
        res.write("data added");
        res.end();
    }
})

})
server5.listen(port5,()=>{
    console.log(`server is running on port ${port}`);
})

// FS appendfile


const http= require("http");
const fs=require("fs");
const port4 =3301;
const server4= http.createServer((req,res)=>{
 var ans = "server is ON..!";
fs.appendFile("./fs.txt",ans,(err,data)=>{
    if(err){
        res.write("oops...");
        res.end();
    }
    else{
        res.write("data concatinated");
        res.end();
    }
})

})
server4.listen(port4,()=>{
    console.log(`server is running on port ${port}`);
})





// file system --> renaming  a file

const http=require ("http");
const fs = require ("fs");
 const port3 = 3301;
 const server3 = http.createServer((req, res) => {
    fs.rename("filesystem.txt","./fs.txt",(err,data)=>{
        if(err){
            res.write("oops...");
            res.end();
        }
        else{
            res.write("file name has changed");
            res.end();
        }
    })
 })
 server3.listen(port3,()=>{
    console.log(`server is UP with port no : ${port}`);
 })


// file system --> APPEND--> ADDING DATA TO THE EXISTING DATA FILE

const http=require ("http");
const fs = require ("fs");
 const port2 = 3301;
 const server2 = http.createServer((req, res) => {
    let doc= " book ";
    // fs.appendFile("./fs.txt",doc,(err,data)=>{
                        // -------OR-----
        fs.writeFile("./fs.txt",doc,{flag:"a"},(err,data)=>{
        if(err){
            res.write("oops...! file doesn't exist");
            res.end();
        }
        else{
            res.write("new data added to the existing data");
            res.end();
        }
    })
 })
 server2.listen(port2,()=>{
    console.log(`server is UP with port no : ${port}`);
 })




// file system --> APPEND--> ADDING elements TO THE array or object  in a file.

const http=require ("http");
const fs = require ("fs");
 const portno = 3301;
 const server1 = http.createServer((req, res) => {
    let doc= " book ";
    fs.readFile("./arrayappend.js","utf-8",(err,data)=>{
        if(err){
            res.write("data not added");
            res.end();
        }
        else{
            let existingData=JSON.parse(data);
            // console.log(existingdata,"sai");
            console.log(existingData);
            
            existingData.push(doc);
            console.log(existingData );
            
            fs.writeFile("./arrayappend.js",JSON.stringify(updatedData),(err,data)=>{
                res.writeHead(200,{"content-type":"application/json"})
                res.write(data);
                res.end();
            })
        }
    })
 })
 server1.listen(portno,()=>{
    console.log(`server is UP with port : ${port}`);
 })