// Get express module
var express  = require("express");
var app = express();
var mongoose=require('mongoose');
const crypto=require('crypto');
var ejsLayouts=require("express-ejs-layouts");
var bodyParser=require('body-parser');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
var db=require('./App_Server/models/db');
// Get path module 
var path = require("path");
app.use('./App_Server/public',express.static(path.join(__dirname,'public')));//kullaniciya acik bir alan birakiyoruz.kendii makinemizdeki public klasoru kullanıcıya haritalıyoruz bu haritalamak demek
// Write ejs engine and ejs files
app.set("view engine","ejs");
app.set("Views",path.join(__dirname,"./Views"));
// enable css files for public folder
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(ejsLayouts);
/*var loginController=function(req,res){
    res.sendFile(path.join(__dirname,"/Views/login.html"));
}
var registerController=function(req,res){
    res.sendFile(path.join(__dirname,"/Views/register.html"));
}
*/
var ctrlUser=require("./Routers/RouterUser");//route
app.use('/',ctrlUser); // '/'yanına ne yazarsam yazayım ctrlUser beni oraya goturecek

var ctrlMakaleAtama=require("./Routers/RouterMakaleAtama");
app.use('/atama',ctrlMakaleAtama);

var ctrlYoneticiEkle=require("./Routers/RouterYoneticiler");
app.use('/yonetici',ctrlYoneticiEkle);
/*const mongoURI='mongodb://localhost:27017/AcademicJournal';
const conn=mongoose.createConnection(mongoURI);
let gfs;
conn.once('open',()=>{
    gfs=Grid(conn.db,mongoose.mongo);
    gfs.collection('uploads');
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"/Views/index.ejs"));
  });
  app.post('/upload',upload.single('file'),(req,res)=>{
//res.json({file:req.file})
res.redirect('/');
  })*/
/*app.get('/',ctrlUser.loginController);
app.get('/register',ctrlUser.registerController);*/

/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"/Views/login.html"));
    
});
app.get('/register',function(req,res){
    res.sendFile(path.join(__dirname,"/Views/register.html"));
})*/
// Get body-parser module before router 
var bodyParser = require("body-parser");
// activate bodyParser urlEncod and json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var User=require('./App_Server/models/userModel');

app.listen(3000,()=> console.log('Server started at port : 3000'));