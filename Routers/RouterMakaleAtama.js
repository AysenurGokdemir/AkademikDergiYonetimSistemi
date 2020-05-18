var express=require('express');
var router=express.Router();
var controllerAtama=require('../Controllers/MakaleAtamaConroller');
router.get('/MakaleAtama',controllerAtama.makaleAtamaController);
router.post('/MakaleAtama',controllerAtama.makaleAtamaControllerPost);
router.get('/MakaleAtamaList',controllerAtama.makaleList);

module.exports=router;