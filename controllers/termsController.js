var express = require('express');
var router = express.Router();
var term = require('../models/term');

router.get('/', function(request, response){
    // set up mustache data:
    var mustacheData = {
      termList:term
    };

      response.render('./terms/index', mustacheData);
    }) 

router.get('/terms',function(request,response){

    var mustacheData={
        termList:term
    };
    response.render('./terms/show' ,mustacheData)
    
    })
    
    router.get('/:id', function(request, response){
      var termsId = request.params.id;  
      var mustacheData = {
        term : term[termsId]  
    }
      response.render('./terms/show', mustacheData);
    })

    router.get('/:name', function(request, response){
        var termsName = request.params.name; 
    
    response.render('./terms/show', terms);
    })
    
module.exports = router;