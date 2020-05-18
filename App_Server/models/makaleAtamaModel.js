var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var makaleUploadSchema=new Schema({
kullaniciNo:String,
atanan:String,
alani:String,
altAlani:String,
adSoyad:String,
baslik:String,
not:String,
makaleFolder:String

});
var makaleAtama=mongoose.model('MakaleAtama',makaleUploadSchema);
module.exports=makaleAtama;
