const express = require('express')

const app = express()

const port = process.env.PORT || 8000;

app.get('/',(req,res) => {
   res.send('welcome ')
})

app.listen(port,() => {
   console.log(`your server is runing at port ${port}`);
})
