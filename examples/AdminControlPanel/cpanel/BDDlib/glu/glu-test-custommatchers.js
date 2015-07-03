
/*
	My library of Glu Test Jasmine custom matchers
	
	Include like this:

	Given('My app on launch', function() {
	    beforeEach(function(){
	      jasmine.addMatchers(glutestCustomMatchers);
	    });

			...

	    Meaning(function() {
			...
	    });
    });

 */

var glutestCustomMatchers = {

							// Makes sure a Glu View Model is BOTH defined and created / instantiated
         toBeCreated: function() {
          return {
            compare: function(vm){
              var result = {
                    pass : false,
                    message : 'No matcher fail message defined.'
                  },
                  ok  = false,
                  msg = '';

              if (vm===undefined) {
                            // if the normal (ie no .not qualifier) fails, display this message
                  msg = 'Expected ViewModel to be defined but it was undefined, so was not created.'; 
              } else {
                            // if the .not fails, display this message
                  msg = 'Expected ViewModel NOT to be defined but it was defined.'; 
                            // OK. Is defined. Now make sure it is created
                  //if (vm._private && vm._private.isInstantiated) {
                  if (vm._ob && vm._ob.vm) {
                            // Test passes at this point
                    ok = true; 
                            // if the .not fails, display this message
                    msg = 'Expected ViewModel NOT to be created but it was created.';                    
                  } else {
                            // The test fail message (no .not)
                    msg = 'Expected ViewModel to be created. It was defined, but not created.'
                  }
              }

              result.pass = ok;
              result.message = msg;

              /*              
                            // FYI
                            // For success Jasmine displays the message passed in the ShouldHave container.
                            // For FAILURES Jasmine displays either of these two messages:
             if(result.pass) {
                                  // if there was a .not, and it fails, display this message
                result.message =  "Expected something NOT to be true, but it WAS true."; 
              } else {
                                  // if the normal test (ie no .not qualifier) fails, display this message
                result.message =  "Expected something to be true."; 
              }
              */
                                                         
              return result;
            }
          }
        }
}