const express = require('express');

const path = require('path');

const crypto = require('crypto');

const bodyparser = require('body-parser');

const multer =  require('multer');

const Grid = require('grids-stream');

const GridFsStorage = require('multer-gridfs-storage');

const methodOverride = require('method-override');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine','ejs')

app.get('/',(req,res) => {
   res.send('welcome ')
})

const port = process.env.PORT || 8000;

app.listen(port,() => {
   console.log(`your server is runing at port ${port}`);
})
