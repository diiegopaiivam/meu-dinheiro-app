const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3333;
//const routes = require('./routes');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());
//app.use(routes);



app.listen(port, function(){
    console.log(`api está sendo executada na porta ${port}`);
});

