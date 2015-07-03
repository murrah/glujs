
/**
 *	UsersCmp View
 */
Ext.define('App.gluwrap.views.vUsersCmp', {
constructor: function() {

	glu.defView('App.glu.UsersCmp', {

		xtype  : 'tabpanel',
	  
		items  : [
			{ xtype   : '@{vmUsers}' },
			{ xtype   : '@{vmUsersActivity}' }
		]

	});

}
})	