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
glu.defView('gluTests.testOne.main', {

			// ExtJS config for an Ext.container.Viewport
	title : 'Glu Test One',
	layout: 'border',

			// Standard ExtJS docked item toolbar,
            // but see the GluJS binding below
	dockedItems: [{
        xtype : 'toolbar',
        dock  : 'top',
        items : [
        				// This allows us to dynamically change the button text 
                        // and have a bound click handler.
                        // Both are processed by the associated viewModel (vmMain.js)
        	{
        		text    : '@{btnLoginText}',          // Binds to vmMain.btnLoginText$()
        		handler : '@{handleLoginButtonClick}' // Binds to vmMain.handleLoginButtonClick()	
        	}        
        ]
    }],	

	items : [
		{
			xtype    : 'panel',
			region   : 'center',
			//disabled : true,
			html     : '@{html}'  // Binds to the html property on the vmMain viewModel 
		},
		{
			xtype    : 'panel',
			region   : 'west',
			width    : 200,
			//disabled : true,
			html     : 'Some component could go here'
		}		
	]
})