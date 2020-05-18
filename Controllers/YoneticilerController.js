var Yoneticiler=require('../App_Server/models/yoneticilerModel');
var path=require('path');
module.exports.yoneticilerController=function(req,res){
    res.render('Yoneticiler');

};
module.exports.yoneticilerPost=function(req,res){
   
    var yoneticiRegister=new Yoneticiler({
        kullaniciAdi:req.body.Kadi,
        adSoyad:req.body.ad
    });
    yoneticiRegister.save((err)=>{
        if(err){
            console.log('kayit yapılamadi!'+err);
        }
    });
    console.log(yoneticiRegister);
    res.render('Yoneticiler');
};