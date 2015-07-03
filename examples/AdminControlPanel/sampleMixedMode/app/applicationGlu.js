Ext.define('App.applicationGlu', {

    extend: 'Ext.app.Application',

    requires: [

                // GluJS Library files
         'Glu.glu-extjs-4'
        ,'Glu.glu'

                // GluJS App files
        //,'App.gluwrap.locale.locale_en' // There isnt one yet
        ,'App.gluwrap.viewmodels.vmPanelA'
        ,'App.gluwrap.views.vPanelA'

    ],


    launch: function() {
                            // Create the Glu wrapper components so their constructor functions
                            // execute which will load the glu components to your Glu namespace in Window.
        Ext.create('Glu.glu-extjs-4');
        Ext.create('Glu.glu');

                            // This does an Ext.create() for each of your Glu app files.
                            // ie every ExtJS Ext.define() class found in the App.gluwrap 
                            // namespace. See below
        this.createAppGluClasses('gluwrap');

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

        // Adjust 'App' to your namespace
        if (App[nsKey]) {
            iterate(App[nsKey]);               
        } else {
            throw "The namespace App." + nsKey + " doesnt exist";
        }
    }

});
