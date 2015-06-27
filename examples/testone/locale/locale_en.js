/**
 * The locale string definitions for English
 * 
 * @type {Object}
 */
glu.namespace('gluTests.testOne').locale = {
					// These are the "global" names
					
					// The definitions for the main view (the Ext viewport)
	main : {
		btnLogin  : 'Login',
		btnLogout : 'Logout'
	},

					// The property name 'loginform' refers to the glu view and/or viewmodel
					// that these strings relate to.
	loginform : {
		title    : 'Please login',  // The window title
		username : 'User Name',     // The form field names
		password : 'Password',
		btnLogin : 'Login',         // Button labels
		btnCancel: 'Cancel',

									// Validation messages
		valid_username : 'User name must be at least 6 characters long',
		valid_password : 'Password must be at least 6 characters long and be all lower case'
	}

}