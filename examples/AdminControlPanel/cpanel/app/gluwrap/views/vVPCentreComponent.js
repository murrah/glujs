/*
	ViewPanel Main component View in the centre panel
	This is a panel with a card layout 
*/
Ext.define('App.gluwrap.views.vVPCentreComponent', {
constructor: function() {

	glu.defView('App.glu.VPCentreComponent',{
		layout 		: 'card',
		activeItem	: '@{selectedCmp}',
		items 		: '@{cmpList}'
	}); 

}
})