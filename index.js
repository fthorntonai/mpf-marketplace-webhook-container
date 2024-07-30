const express = require('express');
const app = express();

const port = 3000;

app.listen(port,() =>{
    console.log(`Marketplace webhook app listening https://localhost:${port}`)
})

app.get('/start',function(req,res){
    res.json({"Marketplace":"Start"});
    res.send('Hello, Marketplace');
});
app.use(express.urlencoded({
    extended:true
}));

app.post('/partner',function(req,res){
    var body = req.body;
    console.log(req.body.partner);
    res.send(req.body.partner);
});