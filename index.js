const express = require("express");
const app = express();

app.get('/', (req, res)=>res.send('Hello Wolrd'));


app.get('/home', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) =>{
    res.send('About');
})

app.get('/books/:bookid', (req, res) => {
    res.send(req.params);
})

app.get('*', (req, resp) =>{
    res.send('404! This is an invalid url');
});

app.listen(3000, () => console.log('Example App is listening on port 3000!'));