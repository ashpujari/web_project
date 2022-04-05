var mongoose = require('mongoose'), plant = mongoose.model('plant');

module.exports = {
    getall: function(req, res){
        console.log('print all plants');
        plant.find({}, function(err, results){
            if(err) throw err;
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
            res.redirect("/plants");
        });

        
    }

    


}