var mongoose = require('../connections/mongoose');
var Schema   = mongoose.Schema;

var imagesSchema = new Schema({
    content      :{type:String},
    name         :{type:String},
    user_creator :{
    	id : {type:String},
    	name: {type:String},
    	last_name : {type:String},
    	url_image : {type:String}
    },
    url_image    :{type:String},
    status       :{type:Boolean,required:true,default:true},
    create_date  :{type:Date,required:true},
    answer       :{type:Array},
    group        :{type:String}
});

var Images = mongoose.model('images', imagesSchema);

module.exports = Images;

