
Ext.Loader.setConfig({
    enabled: true,
    paths: {
         'App' : 'app' 
        ,'Glu' : 'BDDlib/glu'  
    }
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

        // =============== TEST SPEC =========================
        //GluJS / Jasmine test spec for the Admin Control Panel.

        Given('The Admin Control Panel on launch', function() {
          var gNS, main, vmVPMainMenu, vmVPCentreComponent;

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
              mtype: 'Main'
            });
                    // Must call this here to kick GluJS off
            main.init(); 
            vmVPMainMenu = main.vmVPMainMenu;
            vmVPCentreComponent = main.vmVPCentreComponent;
          });
                    // Start testing it!
          ShouldHave('created the main view model', function() {
            expect(main).toBeCreated();
          });  

          ShouldHave('created the Viewport main menu #vmVPMainMenu', function(){
            expect(vmVPMainMenu).toBeCreated();  
          });
           
          ShouldHave('not selected any menu items', function(){
            expect(vmVPMainMenu.selectedItem).toEqual('Dashboard'); 
          });

          ShouldHave('created the Viewport centre component #vmVPCentreComponent', function(){
            expect(vmVPCentreComponent).toBeCreated();
          });
                
          ShouldHave('initialised the selectedCmp to 0', function(){
            expect(vmVPCentreComponent.selectedCmp).toEqual(0);
          });

          ShouldHave('created the centre component vm/component list #cmpList', function() {
            expect(vmVPCentreComponent.cmpList).toBeCreated();
          });
          
          ShouldHave('created the #vmDashboardCmp in the vm/component list #cmpList', function() {
            //pending()
            expect(vmVPCentreComponent.cmpList).toBeCreated();
          });
          
        /*
          And so on ...
        */

        }); // Given('The Admin Control Panel on launch'


          	
    }
});
