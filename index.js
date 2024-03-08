import express  from "express";

// create express app
const app = express();

// define routes
app.get('/', (req, res) => {
    console.log(req.headers);
    console.log(req.query, req.headers);
    res.send("Over and in!!");
});

app.get('/ping', (req, res) => {
    console.log(req.headers);
    console.log(req.query, req.headers);
    res.send("ping pong!!");

});

app.get('/file', (req, res) => {
    console.log(process.cwd());
    res.sendFile(process.cwd()+'/index.html');

   })
// listen for incoming request
app.listen(4000, () => {
    console.log('Express app is running')

   
});
