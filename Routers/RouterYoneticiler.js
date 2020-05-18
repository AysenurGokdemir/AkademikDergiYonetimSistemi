var express=require('express');
var router=express.Router();
var controllerYoneticiler=require('../Controllers/YoneticilerController');
router.get('/Yoneticiler',controllerYoneticiler.yoneticilerController);
router.post('/Yoneticiler',controllerYoneticiler.yoneticilerPost);
module.exports=router;