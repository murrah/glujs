Ext.define('App.applicationGlu', {

    extend: 'Ext.app.Application',

    requires: [
                // These need to be required so they exist for GluJS
                // to modify on initialisation
         'Ext.selection.CheckboxModel'
        ,'Ext.selection.RowModel'
        ,'Ext.grid.Panel'

                // ExtJS wrapper files containing GluJS components

                    // GluJS Library files
        ,'Glu.glu-extjs-4'
        ,'Glu.glu'

                    // Your GluJS app files
        ,'App.gluwrap.locale.locale_en'
        
        ,'App.gluwrap.models.mUsers'
        ,'App.gluwrap.models.mUsersActivity'

        ,'App.gluwrap.viewmodels.vmMain'
        ,'App.gluwrap.viewmodels.vmVPMainMenu'
        ,'App.gluwrap.viewmodels.vmVPCentreComponent'
        ,'App.gluwrap.viewmodels.vmDashboardCmp'
        ,'App.gluwrap.viewmodels.vmUsersCmp'
        ,'App.gluwrap.viewmodels.vmUsers'
        ,'App.gluwrap.viewmodels.vmUsersActivity'
        ,'App.gluwrap.viewmodels.vmInvoicesCmp'

        ,'App.gluwrap.views.vMain'
        ,'App.gluwrap.views.vVPMainMenu'
        ,'App.gluwrap.views.vVPCentreComponent'
        ,'App.gluwrap.views.vDashboardCmp'
        ,'App.gluwrap.views.vUsersCmp'
        ,'App.gluwrap.views.vUsers'
        ,'App.gluwrap.views.vUsersActivity'
        ,'App.gluwrap.views.vInvoicesCmp'  

                    // Comment out when not testing to exclude from build.
                    // And you can use these directives to disable for production if you like
                    // Leave these here at the end of the array
        /* //<debug> */
        ,'Glu.glu-test'  // We need these for making mock data for the app
        ,'App.gluwrap.backend.backend'
        /* //</debug> */ 

    ],

    launch: function() {

                            // Ext.create all the Glu library components so their constructor functions
                            // execute which will load the glu components to your Glu namespace in Window.
        Ext.create('Glu.glu-extjs-4');
        Ext.create('Glu.glu');

                            // Same for the glu-test file.
                            // Comment out when not testing.
                            // And you can disable for production if you like.
                            // Normally you WOULD disable for production but here
                            // you are testing that you can build via Sencha Cmd and run
                            // that production build. 
        /* //<debug> */
                            // Remember that glu-test is required in order to generate 
                            // mock data for both the app AND the spec runner
        Ext.create('Glu.glu-test');
        /* //</debug> */ 


                            // This does an Ext.create() for each of your Glu app files.
                            // ie every ExtJS Ext.define() class found in the App.gluwrap 
                            // namespace. See below
        this.createAppGluClasses('gluwrap');


        /* //<debug> */
                            // Start the Glu mock backend to supply test data
        App.glu.backend.createMockBackend(true);

        /* //</debug> */ 


    },

    /**
     * Iterate the passed nsKey namesapce and for each class, 
     * create it using Ext.create()
     *  
     * That will run that class' constructor which will cause the Glu component
     * (viewmodel, view, model, locale, etc) to be created and added to your 
     * glu scope in the window.
     * 
     */
    createAppGluClasses: function(nsKey){
        var iterate = function(obj) {
            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    var prop = obj[property];
                    if (typeof prop == "object") {
                        iterate(prop);
                    } else {
                        if (prop.$className && prop.create) prop.create();
                    }
                }
            }
        }
                // Assumes the ns of "App". Change this for your own apps.
        if (App[nsKey]) {
            iterate(App[nsKey]);               
        } else {
            throw "The namespace App." + nsKey + " doesnt exist";
        }
    }

});
