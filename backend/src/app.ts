const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config()

import bodyParser from 'body-parser';

const app = express(); 
app.use(express.json());
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));


export default app;