const express = require('express');
const router = express.Router();
const TpDocument = require('../models/tp_document.model');


router.get('/',(req,res)=>{
    TpDocument.findAll().then(tpdocuments=>{
        res.json(tpdocuments);
    });
});


router.get('/:id',(req,res)=>{
    TpDocument.findByPk(req.params.id).then(tpdocuments=>{
        res.json(tpdocuments);
    });
});


router.post('/create',(req,res)=>{
    TpDocument.create({
        description: req.body.description,
        acronym: req.body.acronym
    }).then(tpdocuments=>{
        res.json(tpdocuments);
    });
});


router.patch('/update/:id',(req,res)=>{
    TpDocument.update({
        description: req.body.description,
        acronym: req.body.acronym
    },{
        where: {
            id_tp_document: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
});


router.delete('/delete/:id', (req,res)=>{
    TpDocument.destroy({
        where:{
            id_tp_document: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
})


module.exports = router;
