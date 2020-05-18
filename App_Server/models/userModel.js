var mongoose=require('mongoose');

var Schema=mongoose.Schema;
//bu benim shema'm shema benim mongodb ye kaydedicegim verinin tipini belirtiyoruz
var userShema=new Schema({
    ad:String,
    soyad:String,
    kullaniciAdi:String,
    mail:String,
    date:String,
    tel:String,
    durum:String,
    aktarim:String,
    gsm:String,
    kullaniciNo:String
});
//burası da shemamı aktardıgım model sınıfım
var User=mongoose.model('UserRegister',userShema);
module.exports=User; //model sınıfımı kullarak kayıt yapıcam bunu kullanabilmek içinde model sınıfımı export ettim