Ext.define('App.Application', {
    name: 'App',
                // Strictly speaking you could bypass this App.Application class altogether
                // since it doesnt do anything; and in app.js extend App.applicationGlu instead. 
                // However, when you have a situation where you are using gluPanels in an otherwise
                // "normal" ExtJS MVC type app, and this class would contain all your 
                // ExtJS views, models, stores and controllers, this pattern of 
                // app.js extending App.Application which extends App.applicationGlu is the way
                // you "smuggle" GluJS in with the minimal change to your existing architecture.
                // So, for consistency of pattern, I just used that here too.

                // Just change the inheritance here
    //extend: 'Ext.app.Application',
    extend: 'App.applicationGlu',
                 
    requires: [

    ],

    views: [
        // TODO: add views here
    ],

    controllers: [
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ]   
});
