/**
 * Root viewmodel for the App
 */

glu.defModel('gluTests.testOne.main', {

						// Set the initial center panel html property
						// See the binding in vMain items 
						// ie html : '@{html}'
						// So when this property is set the panel html automatically updates.
						// Note: we *could* localise this, of course. I was just keeping it simple at this point.
	html : 'Here is the starting html',

						// Set the initial value for our custom property that tracks
						// the login state
	isLoggedIn : false,
	
						// This formula function is bound to the 
						// button text property in vMain.
						// ie text : '@{btnLoginText}'
						// So, when this.isLoggedIn property changes, the 
						// relevant key is passed to the localizer (see locale_en.js) and the
						// local string value is returned from btnLoginText$()
						// which sets the button text accordingly.
	btnLoginText$: function() {
		var key = (this.isLoggedIn) ? 'btnLogout' : 'btnLogin';
		return this.localize(key);
	}, 

    loggedIn:function(){

    					// Set the isLoggedIn property.
    					// That in turn will cause the viewPort Login button text to change
    					// because of the btnLoginText$() formula function above
    	this.set('isLoggedIn', true);

                        // Set the center panel's html. 
                        // In "real life" you might add your Ext components at this
                        // point so the app can do something useful.
        this.set('html','You are now logged in ...');
    },

						/* FYI:
						// This property sets up a persistant object for the
						// loginform.
						// mtype means model type so we are defining vmLoginForm property to
						// be the loginform viewModel.
						// Note we are defining the view model, not the view itself.
						// BUT, we dont want to persist the loginform, we want it destroyed
						// when it is closed.
						// So, we use another technique as follows.
	vmLoginForm : {
		mtype : 'loginform'
	},
						*/
						

						// Open the loginform viewModel instance (vmLoginForm) 
						// as NOT persistent in a window.
						// ie that instance will be destroyed when the window is closed.
						// That means any values entered into the login form will also be destroyed,
						// which they wouldnt have been had we used the persistent pattern above.
						// This is bound to the click handler for the login button on 
						// the viewPort toolbar. See vMain.js
	vmLoginForm : null,

						// The click handler for the Login/Logout button. See vMain.js
	handleLoginButtonClick:function(btn){
		if (this.isLoggedIn) {
			this.doLogout();
		} else {
			this.doLogin();			
		}
	},
						// This creates and opens the login form view
						// which is a window. See vLoginForm.js
	doLogin:function(){
		this.vmLoginForm = this.open({mtype : 'loginform'});
	},

	doLogout: function(){
		this.set('isLoggedIn', false);
		this.set('html','You just logged out!');
	}

})