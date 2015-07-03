/**
 * The model for Users Activity.
 */

 			// Define the model config
Ext.define('App.gluwrap.models.mUsersActivity', {
constructor: function() {
 
	glu.namespace('App.glu.models').usersActivityFieldsCfg = {
		fields:[
	        {
	            name:'id',
	            type:'int'
	        },	
			{
				name: 'username',
				type: 'string'
			},
			{
				name: 'status',
				type: 'string'			
			}

		]
	};
				// Create a row model config, passing in the model config from above
	var rowModel = glu.deepApply(
			{
			    formulas:{
			       // yearsMatter: function(){
			       //     return this.status=='active';
			       // }
			    }
			},
			App.glu.models.usersActivityFieldsCfg
		);

				// Now define the actual Model 
	glu.defRowModel('App.glu.models.UsersActivity',rowModel);

}
});