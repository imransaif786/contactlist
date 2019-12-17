const express = require('express');
const router = express.Router();
const Contact = require('../Models/contact');


//Retriving Contact
router.get('/contacts' , (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//Add Contact 
router.post('/contacts' , (req, res, next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        Phone: req.body.phone
    });
    newContact.save((err, contacts)=>{
        if(err){
            res.json({msg:'Failed to add contact'});
        }
        else{
            res.json({msg:'Contact Added succesfully'});;
        }
    });
});
//delete Contact 
router.delete('/contacts:id' , (req, res, next)=>{
    Contact.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;