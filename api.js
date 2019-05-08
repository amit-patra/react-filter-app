"use strict";
const app = require("express")();
const bodyParser = require('body-parser');
const fs =  require('fs');
const port = 9090;
var cors = require('cors')
app.use(cors())
app.get('/peoplelist', (req,res)=>{
    fs.readFile('./data/people.json', function(err, data) {
        res.send(data);
      });
})

app.listen(port, (err,result)=>{
        if(err) throw err;
        else{
            console.log("port is running at "+ port);
        }
})