/*
	The view that is the Login Form Window 
 */

glu.defView('gluTests.testOne.loginform', {
					
					// ExtJS config
	xtype 		: 'form',
	defaultType : 'autofield',
	bodyPadding : 10,

					// GluJS config that says: 
					// "If this component is called via an open() method apply this config"
					// See vmMain.doLogin()
	asWindow : {
					// The window title property.
					// The ~~title~~ tells Glu to look up the key named 'title' in
					// the locale file (locale/locale_en.js in this case) 
					// and subsitute the value for that key.
		title : '~~title~~',
		width : 300,
		height: 160
	},

					// Standard ExtJS field configs.
					// The field labels are retrieved from the locale file automatically 
					// (locale/locale_en.js in this case) by using the field name property 
					// as the key.
	items : [
		{
			xtype 		: 'textfield',
			allowBlank  : false,
			msgTarget   : 'side',
			name  		: 'username'
		},
		{ 
            xtype 		: 'textfield', 
            name 		: 'password',
            allowBlank  : false,
            msgTarget   : 'side',
            inputType   : 'password'
        }
	]
					// Standard ExtJS docked item toolbar
	,dockedItems: [{
        xtype : 'toolbar',
        dock  : 'bottom',
        ui    : 'footer',
        layout: {
            pack : 'center'
        },
        
					// GluJS specific shortcut:
					// These item names are keys that are significant to GluJS.
					// They bind to matching handlers that you supply in your viewModel.
					// See: vmLoginForm.btnLogin() and vmLoginForm.btnCancel()
					// The actual button labels come from your locale file (locale_en.js).
					// Also see vmLoginForm.btnLoginIsEnabled$() formula property.
        items : ['btnLogin','btnCancel']
    }]

})