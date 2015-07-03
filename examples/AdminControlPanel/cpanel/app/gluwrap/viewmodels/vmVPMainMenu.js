/*
	ViewPanel Main Menu viewModel
*/
Ext.define('App.gluwrap.viewmodels.vmVPMainMenu', {
constructor: function() {
	
	glu.defModel('App.glu.VPMainMenu',{
					
					// Initialise to Welcome
		selectedItem : 'Dashboard'
		
		// COMMANDS
		// These commands are bound by convention from the view menu items array.
		// See vVPMainMenu items collection.
		// evt is the Ext event object and the evt.target.textContent has the localised button string.
		// We *could* use that to pass to the card component except that it wont work if we use another language!
		// So, pass hard coded names using the target component name for now.
		,btnDashboard: function(evt){
			this.set('selectedItem','Dashboard');
		}

		,btnUsers: function(evt){
			this.set('selectedItem','Users');
		}

		,btnInvoices: function(evt){
			this.set('selectedItem','Invoices')
		}

		// REACTORS
		,onSelectedItemChange : {
			on : ['selectedItemChanged'],
			action : function(newValue, oldValue, obj) {

					// The selected item property has changed.
					// Tell the view model for the VPCentreComponent to change 
					// to the matching card
					
								// We *could* do the following but that breaks encapsuation
								// this.parentVM.vmVPCentreComponent.set('selectedCard',newValue);
								// Better to call the "exposed" method:
				this.parentVM.vmVPCentreComponent.mainMenuButtonChange(newValue, oldValue, obj);
								// Is it possible for the vmVPCentreComponent to "listen" for the 
								// selectedItemChange on THIS viewModel??
								// Is that even a good idea? I think so.
				// Just thinking about setting a property on parentVM and letting it control
				// the process rather than what you are doing above. Not sure.
				// this.parentVM.set('selectedMenuItem',newValue);
			}
		}
	}); 
	
}
})