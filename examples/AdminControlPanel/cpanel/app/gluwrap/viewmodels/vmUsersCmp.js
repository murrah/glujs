	
/**
 *	UsersCmp View Model 
 */
Ext.define('App.gluwrap.viewmodels.vmUsersCmp', {
constructor: function() {
	
	glu.defModel('App.glu.UsersCmp',{
		
		vmUsers : {
			mtype : 'Users'
		},

		vmUsersActivity : {
			mtype : 'UsersActivity'
		}

		/*,isFocused$ : function(){
	        console.log('USERS focussed')
	    }*/

		// REACTORS
		/*,onFocus : {
			on : ['selected'],
			action : function(newValue, oldValue, obj) {
				console.log('FOCUS')
			}
		}  */  
		// PROPERTIES
		//myProp : '',
		
		/*vmMySubVM :  {
			mtype : 'MySubVM'
		}*/

		// EXPOSED METHODS	
		,loadUsers: function(){
			this.vmUsers.loadUsers();
		}
	}); 
	
}
})