require('dotenv').config();

const express = require('express');
const api = require ('./backend/routes');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        'success': true
    });
});

app.use('/api', api)


const PORT = process.env.PORT;
app.listen(PORT)