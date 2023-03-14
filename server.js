
const express=require('express');
const cors = require('cors');
const app=express();
const port=8383;
app.use(cors());
app.use(express.static('public'))

app.listen(port,()=>console.log('Server has started on port:$(port)'));
