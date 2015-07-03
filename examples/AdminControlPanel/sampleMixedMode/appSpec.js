
Ext.Loader.setConfig({
    enabled: true,
    paths: {
         'App'  : 'app' 
        ,'Glu'  : '../../BDDlib/glu'  
    }

	// Developing only! So that the debugger doesnt lose breakpoints in Ext files
	// Comment out as soon as you have finished, otherwise code changes to your app may not be included!
	,disableCaching: false  // ie false = enable caching
});

Ext.application({
    name: 'App',

    extend: 'App.applicationGlu',

                  // MUST be false otherwise Ext will try to start the UI via the ViewPort
                  // which we dont want since we are only testing the Glu viewModels
    autoCreateViewport: false,  

    launch: function() {

                    // See applicationGlu.js
                    // This creates the GluJS components in the window scope,
                    // ready to use below.
        this.callParent();

                            // Add the glu-test component
        Ext.create('Glu.glu-test');

                            // Add the backend mock data definition.
                            // No backend used here yet 
        //Ext.create('App.glu.backend.backend');          


        // =============== TEST SPEC =========================

          Given('The PanelA gluPanel on launch', function() {
            var gNS, main;

            beforeEach(function(){
              jasmine.addMatchers(glutestCustomMatchers);
            });

                      // Initialise some variables
            main = null;

                      // Set the namespace
            gNS = "App.glu";

                      // Initialise the app
            Meaning(function() {

                      // The viewport
              main = glu.model({
                ns: gNS,
                mtype: 'PanelA'
              });
                      // Must call this here to kick GluJS off
              main.init(); 
            });
                      // Start testing it!
            ShouldHave('created the PanelA view model', function() {
              expect(main).toBeCreated();
            });  

          }); // Given('The PanelA gluPanel on launch'



    } // launch

});

