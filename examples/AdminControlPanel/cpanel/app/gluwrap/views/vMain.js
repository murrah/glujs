/**
 * The view definition for the Ext ViewPort.
 *
 * This uses standard ExtJS config properties to configure the Ext viewport plus
 * some GluJS syntax to automatically bind some of the config properties to the matching glu viewModel.
 *
 * app.js calls this via: glu.viewport('gluTests.testOne.main');
 * which tells GluJS to make a viewport from the config below.
 * 
 */
Ext.define('App.gluwrap.views.vMain', {
constructor: function() {

	glu.defView('App.glu.Main', {

				// ExtJS config for an Ext.container.Viewport
		title : 'Admin Control Panel (cPanel)',
		layout: 'border',

		items : [

			{
				region   : 'center',
				xtype    : '@{vmVPCentreComponent}'		
			}
			
			,{
				region   : 'west',
									// Binds to vmMain using the 'vmVPMainMenu' property on vmMain.
									// I am using the same name for the viewModel as the property name
									// to make it clear which vm is being wired up here.
				xtype    : '@{vmVPMainMenu}'
			}		
		]
	})

}
})