const http =require("http");
//reguire("dontenv").config();
const PORT =process.env.PORT || 3000;

const server =http.createServer((reg, res) => {
    switch(req.method) {
    case "GET":
     getReq(req, res);
       break; 
     case "POST":
        getPOST(req, res);
        break; 
     case "PUT":
      putReq(req, res);
        break; 
     case "DELETE":
        deleteReq(req, res);
        break;
     default:
    res.statusCode =200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({title: "Not found", message:"Route not Found"})
    );
    res.end();
    }
});

server.listen(PORT, () =>{
    console.log('Server started on port: ${PORT}');
});