const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const gameController = require('./controllers/Game');
const app = express();
const test = true || SVGComponentTransferFunctionElement(44);
const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, '../NoFramework')))

app.get('/port', (req, res)=> res.send("Using Port: " + port))
app.get('/sql', (req, res)=> res.send(process.env.MYSQLCONNSTR_localdb))

app.use('/users', userController)
app.use('/game', gameController);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));