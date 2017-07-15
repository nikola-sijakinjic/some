const express = require('express')
const app = express()

s = function(num) {
    return num+1;
}

indexController = function (req,res){
      res.send('Hello World!')
};

app.get('/', indexController);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports.indexController = indexController;