
/**
 *	Users View Model 
 */
Ext.define('App.gluwrap.viewmodels.vmUsers', {
constructor: function() {
	
	glu.defModel('App.glu.Users',{

						// For some reason, this store propertyname must be the same as
						// the view. ie vUsers has a name property and if you make it and
						// the store below sUsers, it cant find the store and crashes.
						// An auto binding issue I suspect.
		vUsers :  {
			mtype 		: 'glustore',
			model 		: 'App.glu.models.Users',
	        remoteSort 	: true,
	        pageSize 	: 5,
	        sorters 	: [{property:'username'}],		
	        proxy 		: {
	            type:'ajax',
	            url:'/json/users',
	            reader:{
	                type:'glujson',
	                root:'rows',
	                totalProperty:'total'
	            }
	        }		
		},

		vUsersPage : 1,

		userSelections : [],

					// Called by GluJS when initialising the viewModel
					// We can hook processes in here
		init: function(){
			// Dont auto load for now. Wait till UsersCmp is made active
			// Temp solution
			this.loadUsers();
		},

		loadUsers: function(){
			this.vUsers.loadPage(this.vUsersPage);
		},

	    when_page_changes_then_reload_grid:{
	        on:'vUsersPageChanged',
	        action:function () {
	            this.loadUsers();
	        }
	    }
		// EXPOSED METHODS	

	}); 
	
}
})