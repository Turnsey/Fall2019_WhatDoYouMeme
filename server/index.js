const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello New Paltz!'));

app.get('/heb', function(req, res){
            res.send('Shalom World!')
    } 
)

app.listen(port, () => console.log(`Running on http://localhost:${port}`));