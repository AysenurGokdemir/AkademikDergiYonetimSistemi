var makaleAtama=require('../App_Server/models/makaleAtamaModel');
var path=require("path");
module.exports.makaleAtamaController=function(req,res){
    res.render('MakaleAtama');
};
module.exports.makaleAtamaControllerPost=function(req,res){
    var makaleUpload=new makaleAtama({
        atanan:req.body.atanan,
        alani:req.body.alani,
        altAlani:req.body.altalani,
        adSoyad:req.body.adsoyad,
        baslik:req.body.baslik,
        not:req.body.not,
        makaleFolder:"Dosya"
    });
    makaleUpload.save((err)=>{
        if(err){
            console.log('kayıt Yapılamadı'+err);
        }
    });
    console.log(makaleUpload);
    res.render('MakaleAtama');
}
module.exports.makaleList=function(req,res){
    makaleAtama.find(function(err,results){
        res.render('MakaleRaporlari',{makaleAtama:results});
    });
   
}