var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hii hj");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});

