
underTest = require('../app');

describe("Index controller", function() {
  describe("when use gets index.html", function() {
    it("it returns Hello World", function() {
         var res = { send: function(str){}};
         var req = {};
         underTest.indexController(req,res);
    });
  });
})
