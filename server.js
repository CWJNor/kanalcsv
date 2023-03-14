 Access-Control-Allow-Origin: *
const express=require('express');
const app=express();
const port=8383;

app.use(express.static('public'))

app.listen(port,()=>console.log('Server has started on port:$(port)'));
