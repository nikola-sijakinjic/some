const express = require('express')
const app = express()

s = function(num) {
    return num+1;
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
