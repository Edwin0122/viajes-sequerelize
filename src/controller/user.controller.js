const express = require('express');
const router = express.Router();
const User = require('../models/user.models');
const TpDocument = require('../models/tp_document.model')


    router.get('/',(req,res)=>{
        User.findAll({
            //Inclide sirve para mostrar los datos de la clave foranea
            include: {
                model: TpDocument,
                attributes: ['acronym', 'description']
            }
            //tambien se puede hacer un atribute para mostrar solo algunos datos. atributes: ['first_name']
        }).then(users=>{
            res.json(users);
        });
    });


    router.get('/:id',(req,res)=>{
        User.findByPk(req.params.id,{
            include: {
                model: TpDocument,
                attributes: ['acronym', 'description']
            }
        }).then(users=>{
            res.json(users);
        });
    });



    router.post('/create',(req,res)=>{
        User.create({
            document_number: req.body.document_number,
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            surname: req.body.surname,
            second_surname: req.body.second_surname,
            user_status: req.body.user_status,
            tpDocumentIdTpDocument: req.body.tpDocumentIdTpDocument
        }).then(users=>{
            res.json(users);
        });
    });


    router.patch('/update/:id',(req,res)=>{
        User.update({
            document_number: req.body.document_number,
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            surname: req.body.surname,
            second_surname: req.body.second_surname,
            user_status: req.body.user_status,
            tpDocumentIdTpDocument: req.body.tpDocumentIdTpDocument
        },{
            where: {
                id: req.params.id
            }
        }).then(result=>{
            res.json(result);
        });
    });


    router.delete('/delete/:id', (req,res)=>{
        User.destroy({
            where:{
                id: req.params.id
            }
        }).then(result=>{
            res.json(result);
        })
    })


module.exports = router;