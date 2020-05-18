var User=require('../App_Server/models/userModel');

var path = require("path");

module.exports.loginController=function(req,res){
    res.render('login');
    //res.sendFile(path.join(__dirname,"../Views/UyeIslemleri.html"));
};
module.exports.loginPost=function(req,res){

    res.render('login');
        //username:req.body.username
   
    //res.sendFile(path.join(__dirname,"../Views/UyeIslemleri.html"));
};
module.exports.registerController=function(req,res){
    res.render('register');
    //res.sendFile(path.join(__dirname,"../Views/register.ejs"));
};
module.exports.registerPost=function(req,res){
    var date =new Date("2017-01-26");
    
    var register=new User({
        
        ad:req.body.name,
        soyad:req.body.surname,
        kullaniciAdi:req.body.username,
        mail:req.body.mail,
        date:date,
        tel:req.body.tel,
        gsm:req.body.gsm,
        durum:"Aktif",
        aktarim:"Onaylandi"
    });
    register.save((err)=>{
        if(err){
            console.log('kayıt yapılamadı'+err)
        }
    });
    console.log(register);
    res.render('register');
}
module.exports.registerList=function(req,res){
    User.find(function(err,results){  //User model sınıfımın aktarışdıgı collectiondaki butun kayıtları getirir
       
        res.render('UyeIslemleri',{User:results});
    });
}
module.exports.recordDelete=function(req,res){
    User.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
        if(err){
            console.log('silme isleminde hata var!')
        }
        res.redirect('/registerList');
    
    });
        
   // console.log(req.params.kullaniciAdi);
    
    //res.redirect('/UyeIslemleri');
}
//controllerın gorevi isteklere karşılık vermek
//router'ın gorevi istekleri yonlendirmek
//kullanıcı istekleri req objesinin içinden erişebiliriz
//butun yonlendirmelerden önce req ın parse edilmesini istiyoruz buna dikkat