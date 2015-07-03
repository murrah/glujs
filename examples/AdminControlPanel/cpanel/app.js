

Ext.Loader.setConfig({
    enabled: true,
    paths: {
         'App' : 'app' 
        
        // DONT FORGET TO SET THE Classpath in .sencha/app/sencha.cfg: app.classpath
        // eg add ,${app.dir}/BDDlib
        ,'Glu' : 'BDDlib/glu'  
    }
	,disableCaching: false  // ie false = enable caching
});

Ext.application({
    name: 'App',

    extend: 'App.Application',

                    // MUST be true in this case since the default Sencha app is wired to
                    // do this and we havent created our own Ext viewport.
                    // We are re-using the supplied one so we must auto create it this way.
    autoCreateViewport: true, 

    launch: function() {

                    // See applicationGlu.js
                    // This creates the GluJS components in the window scope,
                    // ready to use.
        this.callParent();
        
					// Create the GluJS root which creates the Ext.container.Viewport object which 
					// is modified to contain GluJS properties and objects.
		glu.viewport('App.glu.Main');
          	
    }
});
