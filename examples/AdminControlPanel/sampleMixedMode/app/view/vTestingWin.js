/**
 * Generic window for testing stuff within the context of the app
 * 
 */
Ext.define('App.view.vTestingWin', {
    extend: 'Ext.window.Window',
    alias : 'widget.vTestingWin',

    title: 'Testing',
    height: 500,
    width: 700,
    layout: 'fit',
    closeAction : 'destroy',
    border  : false, 
    
    initComponent : function(){

        this.items = {  
                            // This item will become a Glu 'root' viewmodel
                            // and render the html from 'App.gluwrap.views.vPanelA' 
                            // via the App.glu.PanelA view
            xtype : 'glupanel',
            viewmodelConfig : {
                mtype : 'App.glu.PanelA' 
            }
        };

        this.callParent(arguments);

    }
});