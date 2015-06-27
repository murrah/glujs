// Generated by CoffeeScript 1.9.2

/*
The Glu Test Spec for Hello World in CoffeeScript.

Glu Test uses Jasmine which cannot take CoffeeScript as input, it needs JavaScript. 

spec.js is the equivalent of this spec.coffee.

If you DO want to write your specs in CoffeeScript you will need to convert to JS using coffee (http://coffeescript.org/) then use the JS version as input to Jasmine.

eg from a command prompt in this folder:
>coffee -c spec.coffee

Can also use coffee watch to automatically convert.
 */

(function() {
  Given('the hello world app is launched', function() {
    var vm;
    vm = null;
    Meaning(function() {
      vm = glu.model({
        ns: 'helloworld',
        mtype: 'main'
      });
      vm.init();
      return vm;
    });
    ShouldHave('set arriving to true', function() {
      return (expect(vm.arriving)).toBe(true);
    });
    ShouldHave('set message to a welcome', function() {
      return (expect(vm.msg1)).toBe('Hello World!');
    });
    return When('the user changes his/her status', function() {
      Meaning(function() {
        return vm.set('arriving', false);
      });
      return ShouldHave('set message to a farewell', function() {
        return (expect(vm.msg1)).toBe('Goodbye World!');
      });
    });
  });

}).call(this);
