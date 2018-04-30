var express = require('express');
var router = express.Router();
var Expense = require('../models/expense')

router.get('/', function(req,res,next){
        Expense.find()
                .exec(function(err, expenses){
                        if (err){
                           return res.status(500).json({
                                title: 'An Error Occured',
                                error: err  
                        })
                 }
                res.status(201).json({
                        expense: 'Success',
                        obj: expenses
                        })
                 })
})

router.post('/', function (req, res, next) {    
        var expense = new Expense({
                name: req.body.name
        })
        expense.save(function(err, result) {
                if (err){
                        return res.status(500).json({
                                title: 'An Error Occured',
                                error: err
                        })
                }
                res.status(201).json({
                        expense: 'Saved Expense',
                        obj: result
                })
        })
});

router.patch('/:id', function(req,res,next){
        Expense.findById(req.params.id, function(err,expense){
                if(err){
                        return res.status(500).json({
                                title: 'An Error Occurred',
                                error: err
                        })
                }
                if (!expense){
                        return res.status(500).json({
                                title: 'No Expense Found!',
                                error: {expense:'Expense Not Found'}
                        })
                }
                expense.name = req.body.name
                expense.save(function(err, result){
                        if (err){
                                return res.status(200).json({
                                        title: 'An Error Occured',
                                        error: err
                                })
                        }
                        res.status(201).json({
                                expense: 'Updated Expense',
                                obj: result
                        })  
                })
        })
})

router.delete('/:id', function(req, res, next){
        Expense.findById(req.params.id, function(err,expense){
                if(err){
                        return res.status(500).json({
                                title: 'An Error Occurred',
                                error: err
                        })
                }
                if (!expense){
                        return res.status(500).json({
                                title: 'No Expense Found!',
                                error: {expense:'Expense Not Found'}
                        })
                }
                expense.remove(function(err, result){
                        if (err){
                                return res.status(200).json({
                                        title: 'An Error Occured',
                                        error: err
                                })
                        }
                        res.status(200).json({
                                expense: 'Expense Deleted',
                                obj: result
                        })  
                })
        })
})

module.exports = router;
