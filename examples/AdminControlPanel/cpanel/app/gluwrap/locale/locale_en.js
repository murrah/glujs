/**
 * The locale string definitions for English
 * 
 * @type {Object}
 */
Ext.define('App.gluwrap.locale.locale_en', {
constructor: function() {

	glu.namespace('App.glu').locale = {
						// These are the "global" names
						
						// The definitions for the main view (the Ext viewport)
		main : {

		},

		VPMainMenu : {
			btnDashboard: 'Dashboard',
			btnUsers    : 'Users',
			btnInvoices : 'Invoices'
		}

						// The property name 'loginform' refers to the glu view and/or viewmodel
						// that these strings relate to.
	/*	loginform : {
			title    : 'Please login',  // The window title
			username : 'User Name',     // The form field names
			password : 'Password',
			btnLogin : 'Login',         // Button labels
			btnCancel: 'Cancel',

										// Validation messages
			valid_username : 'User name must be at least 6 characters long',
			valid_password : 'Password must be at least 6 characters long and be all lower case'
		}*/

	}

}
});