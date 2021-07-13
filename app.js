// requiring some helpful modules
const axios   = require('axios')
const express = require('express')
var exphbs  = require('express-handlebars');


const app = express()


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// I guess we don't need body-parser anymore
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// setting up public folder
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'js'],
  index: false,
  maxAge: '1d', // i guess it is cache time limit
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))


const main_route = require("./routes/main")
app.use("/", main_route)
app.listen(3000)