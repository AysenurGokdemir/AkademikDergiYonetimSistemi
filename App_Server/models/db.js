var mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/AcademicJournal',(err)=>{
    if(!err)
    console.log('MongoDB connection Success');
    else
    console.log('Error: ' + JSON.stringify(err,undefined,2));

});