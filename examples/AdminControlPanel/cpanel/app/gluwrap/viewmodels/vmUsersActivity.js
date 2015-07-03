	
/**
 *	UsersActivity View Model 
 */
Ext.define('App.gluwrap.viewmodels.vmUsersActivity', {
constructor: function() {
	
	glu.defModel('App.glu.UsersActivity',{
		
		// PROPERTIES
		//myProp : '',
		
		
		vUsersActivity :  {
			mtype : 'glustore',
			model : 'App.glu.models.UsersActivity',
	        remoteSort : true,
	        pageSize:5,
	        sorters:[{property:'username'}],		
	        proxy:{
	            type:'ajax',
	            url:'/json/users',
	            reader:{
	                type:'glujson',
	                root:'rows',
	                totalProperty:'total'
	            }
	        }		
		}
		

		// EXPOSED METHODS	

	}); 
	
}
})