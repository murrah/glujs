/*
	ViewPanel Main component in the centre panel
	This implements a card layout via a Glu activatorlist 
*/
Ext.define('App.gluwrap.viewmodels.vmVPCentreComponent', {
constructor: function() {
	
	glu.defModel('App.glu.VPCentreComponent',{

		cmpList : {
			mtype         : 'activatorlist',
			focusProperty : 'selectedCmp',
			items : [
				{ mtype : 'DashboardCmp' },
				{ mtype : 'UsersCmp' },
				{ mtype : 'InvoicesCmp' }
			]
		},

		selectedCmp : 0,

		mainMenuButtonChange: function(newValue, oldValue, obj){
						// Use the key passed from the main menu item (newValue) to 
						// lookup the matching component (using it's viewmodelName for now).
						// Return the matching component and set it to the selectedCmp property
						// which will fire the relevant change event and make the matching
						// viewModel (and it's associated view) the active one.
						
			var cmp = this.cmpList.find(function(vm){
				return (vm.viewmodelName === newValue+"Cmp")
			});

			if (cmp){
				this.set('selectedCmp',cmp);
			} else {
				throw 'No matching view model for menu item key='+newValue
			}
		}
	}); 
	
}
})	