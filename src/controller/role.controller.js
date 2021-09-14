const express = require('express');
const router = express.Router();
const Role = require('../models/role.model');


router.get('/',(req,res)=>{
    Role.findAll().then(roles=>{
        res.json(roles);
    });
});


router.get('/:id',(req,res)=>{
    Role.findByPk(req.params.id).then(roles=>{
        res.json(roles);
    });
});


router.post('/create',(req,res)=>{
    Role.create({
        description: req.body.description,
        role_status: req.body.role_status,
    }).then(roles=>{
        res.json(roles);
    });
});


router.patch('/update/:id',(req,res)=>{
    Role.update({
        description: req.body.description,
        role_status: req.body.role_status,
    },{
        where: {
            id_role: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
});


router.delete('/delete/:id', (req,res)=>{
    Role.destroy({
        where:{
            id_role: req.params.id
        }
    }).then(result=>{
        res.json(result);
    })
})


module.exports = router;
