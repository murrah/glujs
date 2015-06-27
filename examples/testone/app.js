/**
 * Glu Test One app
 *
 * This is the entry point that creates the Ext viewport by passing the root viewModel
 * called 'testOne.main'
 *
 * See viewmodels/vmMain.js
 * 
 */

Ext.onReady (
	function(){
					// Pass the glu viewModel called 'gluTests.testOne.main'
					// to make a new Ext.container.Viewport.
					
					// FYI: vp is the Ext.container.Viewport object which 
					// is modified to contain GluJS properties and objects.
					// You dont really need to set the vp variable. Just for info.
		var vp = glu.viewport('gluTests.testOne.main');

					// main is the glu viewmodel we defined in vmMain.js
					// NOTE that in GluJS the classname does NOT need to be the same as the 
					// js filename since we are not using the class loader.
		var main = glu.model({
            ns      : 'gluTests.testOne',
            mtype   : 'main'  // Uses the GluJS 'mtype' property
        });
	}
);
