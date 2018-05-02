var express = require('express');
var router = express.Router();
var Expense = require('../models/expense')
var Project = require('../models/project')

router.get('/', function(req,res,next){
        Expense.find().populate({path: 'project', populate: {path: 'customer'}})
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

router.post('/:id', function (req, res, next) {    
        Project.findById(req.params.id,function(err,project){
                if(err){
                        return res.status(500).json({
                                title: 'An Error Occurred',
                                error: err
                        })
                }
                if (!project){
                        return res.status(500).json({
                                title: 'No Project Found!',
                                error: {project:'Project Not Found'}
                        })
                }

        //Create new project with Customer Attached
        var expense = new Expense({
                name: req.body.name,
                amount: req.body.amount,
                date: req.body.date,
                project: project
        })

        

        //Save Project
        expense.save(function(err, result) {
                if (err){
                        return res.status(500).json({
                                title: 'An Error Occured',
                                error: err
                        })
                }
                expense.populate({path: 'project', populate: {path: 'customer'}}, function(err,doc){
                res.json({
                        expense: 'Saved Expense',
                        obj: doc
                    
                })
        })
        })  

        project.expenses.push(expense._id)
        project.save()
        //Push The new project ID To the Customer's Projects Array
   
       
       //Save Customer
//        customer.save(function(err,result){
//         if (err){
//                 return res.status(500).json({
//                         title: 'An Error Occured',
//                         error: err
//                 })
//         }
//         res.status(201).json({
//                 project: 'Saved Customer',
//                 obj: result 
//        })
//         })  
        
});
})

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
