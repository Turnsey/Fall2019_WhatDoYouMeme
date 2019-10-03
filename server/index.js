const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello New Paltz!'));

app.use( function(req, res, next){
    //logging
    console.log( {params: req.params, body: req.body, url: req.url, query: req.query, headers: req.headers});
    next();
})

app.use('/static', express.static(path.join(__dirname, '../NoFramework')))

app.get('/heb', function(req, res){
            res.send('Shalom World!')
    } 
)

app.use('/users', userController);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));