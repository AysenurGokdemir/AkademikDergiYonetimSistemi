var express=require('express');
var router=express.Router();
var controller=require('../Controllers/UserController')
router.get('/login',controller.loginController);
router.post('/login',controller.loginPost);
router.get('/register',controller.registerController);
router.post('/register',controller.registerPost);
router.get('/registerList',controller.registerList);
router.get('/recordDelete/:kullaniciAdi',controller.recordDelete);
//app.js dosyasındaki routerı kullanabilmek için routerı export etmeliyiz
module.exports=router; //bu olaydan sonra artık app.js deki ctrl.User bizim yonlendirircimiz oldu