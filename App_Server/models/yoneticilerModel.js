var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var yoneticiShema=new Schema({
    id:String,
    kullaniciAdi:String,
    adSoyad:String
});
var Yoneticiler=mongoose.model('Yoneticiler',yoneticiShema);
module.exports=Yoneticiler;
