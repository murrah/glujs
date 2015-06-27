glu.defModel('helloworld.main', {
    arriving:true,

    // FIXED original example: 
    // In the original example this property was called 'message'.
    // 
    // However, we cant use 'message', 'confirm' or 'prompt' as property names now
    // since they are now reserved GluJS methods.
    // Thanks to Ryan Smith for working that out.
    // 
    // Changed the example and the spec to use 'msg1' intead of 'message'
    
    msg1$:function () {
        return this.localize(this.arriving ? 'greeting' : 'farewell')
    }
});

glu.defView('helloworld.main', {
    title:'@{msg1}',
    tbar:[
        {
            text:'Toggle',
            enableToggle:true,
            pressed:'@{arriving}'
        }
    ]
});

glu.ns('helloworld').locale = {
    greeting:'Hello World!',
    farewell:'Goodbye World!'
}

