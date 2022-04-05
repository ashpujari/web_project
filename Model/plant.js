var mongoose = require('mongoose'); 

var plantSchema = new mongoose.Schema({
    plant_id:{type: String}, 
    plant_name:{type: String},
    description:{type: String},
    care_level:{type: String},
    environment:{type: String},
    water:{type: String},
    light:{type: String},
    plant_size:{type: String},
    price:{type: Number}, 
    plant_type:{type: String},
    edible:{type: String},
    fruit_bearing:{type: String},
    quantity:{type: Number}
});

mongoose.model('plant', plantSchema);


