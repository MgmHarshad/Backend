const express = require('express');
require('dotenv').config()
const app = express();
const port = 5012;

app.get('/', (req,res)=>{
    res.send("server is ready");
});

app.get('/About', (req,res)=>{
    res.send("<h1>This is about page</h1>");
})

app.get('/login', (req, res) => {
    res.send("<h1>Login Page</h1>");
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:port');
});