/**
 * The model for Users.
 */

 			// Define the model config
 			// We also need this for the backend:
 			// eg users = glu.test.createTable(App.glu.models.usersFieldCfg, 8);

Ext.define('App.gluwrap.models.mUsers', {
constructor: function() {
 			
	glu.namespace('App.glu.models').usersFieldCfg = {
		fields:[
	        {
	            name:'id',
	            type:'int'
	        },	
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'username',
				type: 'string',
				convert : function(v, record) {
					var arr = record.data.name.split(" ");
					v = arr[0] + arr[1].charAt(0);
					return v;
				}
			},
			{
				name: 'email',
				type: 'string',
				convert : function(v, record) {
					var email = record.data.name.replace(" ",".") + "@mydomain.com";
					return email;
				}
			},
			{
				name: 'status',
				type: 'string',
	            oneOf : ['member','emailonly']			
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
			App.glu.models.usersFieldCfg 
		);

				// Now define the actual Model 
	glu.defRowModel('App.glu.models.Users',rowModel);
				// It seems that even though you dont specify formulas above,
				// you cant do this to skip that step:
				//glu.defRowModel('App.glu.models.Users',App.glu.models.usersFieldCfg);

	}
});