const express = require('express');
const router = express.Router();
const Country = require('../models/country.model');


router.get('/',(req,res)=>{
    Country.findAll().then(countries=>{
        res.json(countries);
    });
});


router.get('/:id',(req,res)=>{
    Country.findByPk(req.params.id).then(countries=>{
        res.json(countries);
    });
});


router.post('/create',(req,res)=>{
    Country.create({
        description: req.body.description,
    }).then(countries=>{
        res.json(countries);
    });
});


router.patch('/update/:id',(req,res)=>{
    Country.update({
        description: req.body.description,
    },{
        where: {
            country_id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
});


router.delete('/delete/:id', (req,res)=>{
    Country.destroy({
        where:{
            country_id: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
})


module.exports = router;
