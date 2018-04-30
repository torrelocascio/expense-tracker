var express = require('express');
var router = express.Router();
var Customer = require('../models/customer')

router.get('/', function(req,res,next){
        Customer.find()
                .exec(function(err, customers){
                        if (err){
                           return res.status(500).json({
                                title: 'An Error Occured',
                                error: err  
                        })
                 }
                res.status(201).json({
                        customer: 'Success',
                        obj: customers
                        })
                 })
})

router.post('/', function (req, res, next) {    
        var customer = new Customer({
                name: req.body.name
        })
        customer.save(function(err, result) {
                if (err){
                        return res.status(500).json({
                                title: 'An Error Occured',
                                error: err
                        })
                }
                res.status(201).json({
                        customer: 'Saved Customer',
                        obj: result
                })
        })
});

router.patch('/:id', function(req,res,next){
        Customer.findById(req.params.id, function(err,message){
                if(err){
                        return res.status(500).json({
                                title: 'An Error Occurred',
                                error: err
                        })
                }
                if (!message){
                        return res.status(500).json({
                                title: 'No Customer Found!',
                                error: {customer:'Customer Not Found'}
                        })
                }
                customer.name = req.body.name
                customer.save(function(err, result){
                        if (err){
                                return res.status(200).json({
                                        title: 'An Error Occured',
                                        error: err
                                })
                        }
                        res.status(201).json({
                                customer: 'Updated Customer',
                                obj: result
                        })  
                })
        })
})

module.exports = router;
