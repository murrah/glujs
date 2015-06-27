
/*
 Jasmine test spec for the Test One example.

 In a real app you might not bother with some of these tests.
 They are here just as examples.

 */
/*
    }, Given = function(text, fn) {
        describe("Given " + text, fn)
    }, When = function(text, fn) {
        describe("When " + text, fn)
    }, Meaning = function(fn) {
        beforeEach(fn)
    }, Shouldve = function(text, fn) {
        it("Should have " + text, fn)
    }, Should = function(text, fn) {
        it("Should " + text, fn)
    }, ShouldHave = Shouldve,
 */
  Given('The Test One application on launch', function() {

              // Initialise some variables
    var gNS, loginform, main;
    main = null;
    loginform = null;

              // Set the namespace
    gNS = "gluTests.testOne";

              // Initialise the app
    Meaning(function() {

              // The viewport
      main = glu.model({
        ns: gNS,
        mtype: 'main'
      });
              // Must call this here to kick GluJS off
      main.init(); 
      
              // The login window form
      loginform = glu.model({
        ns: gNS,
        mtype: 'loginform'
      });

    });
              // Start testing it!
    ShouldHave('created the main view model', function() {
      expect(main).not.toBeNull();
    });  
  
    ShouldHave('created the loginform view model', function() {
      expect(loginform).not.toBeNull();
    });

    ShouldHave('set isLoggedIn to false', function() {
      expect(main.isLoggedIn).toBe(false);
    });

    ShouldHave('disabled the viewport Center and West panels', function(){
      pending('Set the disabled config on the views')
    });

    When('the user clicks the Login button (on the viewport toolbar)', function() {
      Meaning(function() {
        main.doLogin();
      });

      ShouldHave('created and opened the login dialog window instance', function() {
        expect(main.vmLoginForm).not.toBeNull();
      });

      When('the user closes the login dialog window via the Cancel button', function() {
        Meaning(function() {
          main.vmLoginForm.btnCancel();
        });

        ShouldHave('destroyed the login dialog window instance', function() {
          expect(main.vmLoginForm).toBeNull();
        });
      });

      When('the user enters a username of "abc"', function() {
        Meaning(function() {
          main.vmLoginForm.set('username', 'abc');
        });
        ShouldHave('set username invalid tip to "User name must be at least 6 characters long"', function() {
          expect(main.vmLoginForm.usernameIsValid$()).toBe('User name must be at least 6 characters long');
        });
      });

      When('the user enters a username of "abcdefg"', function() {
        Meaning(function() {
          main.vmLoginForm.set('username', 'abcdefg');
        });
        ShouldHave('set to username field to valid', function() {
          expect(main.vmLoginForm.usernameIsValid$()).toBe(true);
        });
      });

      When('the user enters a password of "QWERTY"', function() {
        Meaning(function() {
          main.vmLoginForm.set('password', 'QWERTY');
        });
        ShouldHave('set invalid tip to "Password must be at least 6 characters long and be all lower case"', function() {
          expect(main.vmLoginForm.passwordIsValid$()).toBe('Password must be at least 6 characters long and be all lower case');
        });
      });

      When('the user enters a password of "qwe"', function() {
        Meaning(function() {
          main.vmLoginForm.set('password', 'qwe');
        });
        ShouldHave('set invalid tip to "Password must be at least 6 characters long and be all lower case"', function() {
          expect(main.vmLoginForm.passwordIsValid$()).toBe('Password must be at least 6 characters long and be all lower case');
        });
      });

      When('the user enters a password of "qwerty"', function() {
        Meaning(function() {
          main.vmLoginForm.set('password', 'qwerty');
        });
        ShouldHave('set to valid', function() {
          expect(main.vmLoginForm.passwordIsValid$()).toBe(true);
        });
      });

      When('the Login Form is NOT VALID', function() {
        Meaning(function() {
          main.vmLoginForm.set('password', 'qwe');
        });
        ShouldHave('disabled the Login button', function() {
          expect(main.vmLoginForm.btnLoginIsEnabled$()).toBe(false);
        });
      });

      When('the Login Form IS VALID', function() {
        Meaning(function() {
          main.vmLoginForm.set('username', 'abcdef');
          main.vmLoginForm.set('password', 'qwerty');
        });
        ShouldHave('enabled the Login button', function() {
          expect(main.vmLoginForm.btnLoginIsEnabled$()).toBe(true);
        });

        When('the user clicks the Login button', function() {
          Meaning(function(){
            main.vmLoginForm.btnLogin();
          });
          ShouldHave('set isLoggedIn to true', function() {
            expect(main.isLoggedIn).toBe(true);
          }); 
          ShouldHave('set the main Login button text to "Logout"', function(){
            expect(main.btnLoginText$()).toEqual('Logout')
          });
          ShouldHave('destroyed the login dialog window instance', function() {
            expect(main.vmLoginForm).toBeNull();
          });
          ShouldHave('enabled the viewport Center and West panels', function(){
            pending()
          });          
          ShouldHave('set the HTML in the main window to "You are now logged in ..."', function(){
            expect(main.get('html')).toEqual('You are now logged in ...')
          });
          ShouldHave('added some useful components to the viewport', function() {
            pending()
          });    

          When('the user clicks the "Logout" button',function(){
            Meaning(function(){
              main.doLogout();
            });
            ShouldHave('set isLoggedIn to false', function(){
              expect(main.isLoggedIn).toBe(false)
            });
            ShouldHave('set the main Login button to "Login"', function(){
              expect(main.btnLoginText$()).toEqual('Login')
            });
            ShouldHave('set the HTML to "You just logged out!"',function(){
              expect(main.get('html')).toEqual('You just logged out!')
            });
            ShouldHave('removed the components from the viewport', function() {
              pending()
            });             
            ShouldHave('disabled the viewport Center and West panels', function(){
              pending()
            });            
          });

        }); // When('the user clicks the Login button'

      }); // When('the Login Form IS VALID'

    }); // When('the user clicks the login button'

  }); // Given('The Test One application on launch'

