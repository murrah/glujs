/**
 * Root viewmodel for the App
 */
Ext.define('App.gluwrap.viewmodels.vmMain', {
constructor: function() {

	glu.defModel('App.glu.Main', {

		vmVPMainMenu : { 
			mtype : 'VPMainMenu'
		},
		
		vmVPCentreComponent :  {
			mtype : 'VPCentreComponent'
		}

		//,selectedMenuItem : 'Dashboard'

	})
	
}
})