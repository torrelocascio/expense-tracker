var express = require('express');
var router = express.Router();
var Project = require('../models/project')

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

router.post('/', function (req, res, next) {    
        var project = new Project({
                name: req.body.name
        })
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
});

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
