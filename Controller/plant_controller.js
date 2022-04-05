var mongoose = require('mongoose'), plant = mongoose.model('plant');

module.exports = {
    getall: function(req, res){
        console.log('print all plants');
        plant.find({}, function(err, results){
            if(err) throw err;
        });
    },

    GetById: function(req, res){
        onsole.log('List by plant Id');
        const {pid} = req.query;
        plant.find({'plant_id' : {pid}}, function(err, results){
            if(err){
                throw err;
            }
        });
    },

    GetByName: function(req, res){
        console.log('List by plant name');
        const {name} = req.query;
        plant.find({'plant_name' : {name}}, function(err, results){
            if(err){
                throw err;
            }
        });
    },

    Create: function(res, req){
        console.log("Adding the plant ");
        var plantInfo={
            "plant_id" : req.body.plant_id,
            "description" : req.body.description,
            "environment" : req.body.environment,
            "water" : req.body.water,
            "light" : req.body.light,
            "plant_size" : req.body.plant_size,
            "price" : req.body.price,
            "plant_type" : req.body.plant_type,
            "edible" : req.body.edible,
            "fruit_bearing" : req.body.fruit_bearing,
            "quantity" : req.body.quantity
        }

        plant.create(plantInfo, function(err, result){
            if(err){
                throw err;
            }
            res.redirect("/");
        });  
    }
}