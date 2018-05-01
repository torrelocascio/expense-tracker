var express = require('express');
var router = express.Router();
var Project = require('../models/project')
var Customer = require('../models/customer')



router.get('/', function(req,res,next){
        Project.find()
                .exec(function(err, projects){
                        if (err){
                           return res.status(500).json({
                                title: 'An Error Occured',
                                error: err  
                        })
                 }
                 
                res.status(201).json({
                        project: 'Success',
                        obj: projects
                        })
                 })
})

//add new project
router.post('/:id', function (req, res, next) {  

        //find Customer
        Customer.findById(req.params.id,function(err,customer){
                if(err){
                        return res.status(500).json({
                                title: 'An Error Occurred',
                                error: err
                        })
                }
                if (!customer){
                        return res.status(500).json({
                                title: 'No Project Found!',
                                error: {project:'Project Not Found'}
                        })
                }
        //Create new project with Customer Attached
        var project = new Project({
                name: req.body.name,
                customer: customer.id
        })

        //Save Project
        project.save(function(err, result) {
                if (err){
                        return res.status(500).json({
                                title: 'An Error Occured',
                                error: err
                        })
                }
                res.status(201).json({
                        project: 'Saved Project',
                        obj: result
                })
        })  
        //Push The new project ID To the Customer's Projects Array
       customer.projects.push(project._id)
       customer.save()
       
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
        Project.findById(req.params.id, function(err,project){
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
                project.name = req.body.name
                project.save(function(err, result){
                        if (err){
                                return res.status(200).json({
                                        title: 'An Error Occured',
                                        error: err
                                })
                        }
                        res.status(201).json({
                                project: 'Updated Project',
                                obj: result
                        })  
                })
        })
})

router.delete('/:id', function(req, res, next){
        Project.findById(req.params.id, function(err,project){
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
                project.remove(function(err, result){
                        if (err){
                                return res.status(200).json({
                                        title: 'An Error Occured',
                                        error: err
                                })
                        }
                        res.status(200).json({
                                project: 'Project Deleted',
                                obj: result
                        })  
                })
        })
})

module.exports = router;
