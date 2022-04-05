var mongoose = require('mongoose'); 

var plantSchema = new mongoose.Schema ({
    plant_id:{type: string}, 
    description:{type: string},
    care_level:{type: string},
    environment:{type: string},
    water:{type: string},
    light:{type: string},
    plant_size:{type: string},
    price:{type: Number}, 
    plant_type:{type: string},
    edible:{type: string},
    fruit_bearing:{type: string},
    quantity:{type: number}
});

mongoose.model('plant', plantSchema);


