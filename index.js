const express = require('express');
const bodyParser = require('body-parser');
//creat express app
const app = express();
//setup the server port
const port = process.env.port || 5000;

// parse request data content type application/x-www-form-rulencoder
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// import empolyee routes
const employeeRoutes = require('./src/routes/employee.route');

// create employee routes
app.use('/api/v1/employee',employeeRoutes);

// define root route
app.get('/',(req, res)=>{
    res.send('hello world');
});



// listen for the port 
app.listen(port,()=>{
    console.log(`Express server is running at port ${port}`);
});





