/**
 *Shape Model
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var shapeSchema = Schema({
	name : String
});

/**
 * Virtuals
 */


/**
 * Validations
 */


/**
 * Pre-remove hook
 */


/**
 * Methods
 */
shapeSchema.methods = {
		
};


/**
 * Statics
 */
shapeSchema.statics = {
		list : function(options, fn){
			this.find();
		}
};

exports.Shape = mongoose.model('Shape', shapeSchema);