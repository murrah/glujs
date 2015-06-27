/*
    The viewModel for the Login Form Window
 */

glu.defModel('gluTests.testOne.loginform', {

						// See models/mUser.js
	modelType : 'mUser',


// FIELD VALIDATIONS
						// The appending of 'IsValid$' to the field name binds
						// the validation function and allows for message localisation.
						
						// Also, this.get('username') here returns the value of the username field
    					// (a string in this case), rather than a field object (as would be the case in ExtJS).
						
						// *Obviously in real life* you wouldnt validate authentication data like this! 
                        // It is just to demo GluJs form field validation binding.
    usernameIsValid$:function () {

    					// Another Glu shortcut. If you pass back a string instead of 
    					// false it treats the validation as failed (false) 
    					// and Glu uses the string for the validation message.
        return this.get('username').length >= 6 ? true : this.localize('valid_username');
    },

    passwordIsValid$:function () {
                        // Similarly dodgy validation just for the exercise
    	var fld = this.get('password'),
    		valid = (fld.length >= 6 && fld.toLowerCase() === fld);

        return valid ? true : this.localize('valid_password');
    },


// BUTTONS
// These properties are automatically bound by GluJS by matching the item key string
// in the toolbar items array (vLoginForm.dockedItems.items) to these function name prefixes.
// ie 'btnLogin' is the first item in the toolbar items array.

    					// This binds the button's enabled state to the validation
    					// in this formula function
    btnLoginIsEnabled$:function(){
        return this.isDirty && this.isValid;
    },

    					// Same for btnCancel
    btnCancelIsEnabled$:function(){
        // We dont really need this formuala function at all
        // since we always return true,
        // but just for clarity of the demo ...
        return true;
    },

// COMMANDS
    					// This is a "command" property.
    					// ie the action to take when the btnLogin button is clicked
    btnLogin:function(){

    					// The shortcut to the root viewModel (which we called 'main').
    					// Note: error in GluJS Guide: this property is called rootVM,
    					// not 'root' as the guide says in "Materializing a view"
        this.rootVM.loggedIn();

                        // We close this viewModel which in turn closes the view
                        // FYI: See the GluJS Guide for more about this process, 
                        // as well as doClose() and closeIsEnabled() 
        this.doCloseVM();
    },

    					// The command property for the btnCancel button.
    btnCancel: function(){
        this.doCloseVM();
    },

    doCloseVM: function(){
    					// Remove the ref to this viewModel from the main viewModel
    	this.parentVM.vmLoginForm = null;
    					// Close this viewModel
    	this.close();

    }
})