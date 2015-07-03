/*
	The Main Menu in the West Panel of the Viewport
 */
Ext.define('App.gluwrap.views.vVPMainMenu', {
constructor: function() {

	glu.defView('App.glu.VPMainMenu', {

		xtype  : 'menu',
		//title  : 'Menu',
		width  : 200,

		floating : false, // Important so the menu buttons are displayed from the start in-situ

	        
						// GluJS specific shortcut:
						// These item names are keys that are significant to GluJS.
						// They bind to matching handlers that you supply in your viewModel.
						// See: vmVPMainMenu.btnUsers() and vmVPMainMenu.btnInvoices()
						// The actual button labels come from your locale file (locale_en.js).
		items : ['btnDashboard','btnUsers','btnInvoices']
			
			/*
				Could do this to get an icon it it?
			[{
				text : 'Users',
				name : 'btnUsers',
				iconCls : 'aui-users'
			},
			{
				text : 'Invoices'
			}]*/

	})

}
})