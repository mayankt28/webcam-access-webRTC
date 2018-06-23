var express = require('express');
var multer  = require('multer');
var cors = require('cors');
var upload = multer({ dest: 'uploads/' });
 
var app = express();
app.use(cors());
app.post('/video', upload.single('video'), function (req, res, next) {
    console.log("A file received of size -> " + req.file.size);
    res.send("ok");
  });

app.listen(8080,function(){
  console.log("server started")
});  