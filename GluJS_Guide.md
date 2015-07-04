
[Source](http://conarrative.github.io/glujs-guide/ "Permalink to Guide to GluJS by CoNarrative")

# Guide to GluJS by CoNarrative

## Table of Contents

## GluJS

GluJS is a lightweight specification-driven reactive UI framework for building rich enterprise web and mobile applications using HTML5 widget libraries like Sencha ExtJS.

### Reactive applications

The bar of user experience has been raised. You can no longer deliver a web application with static forms and postbacks that refresh the entire page. Users of enterprise applications expect a rich desktop-like experience that responds to their input and to the back-end and guides them along the proper path. Anything less is frustrating. These are "reactive" applications because they are instantly changing on every input, and any part of the application may trigger a change in any other part. Here are some of the common patterns you might find in a reactive application:

* Action buttons that enable and disable immediately based on the state of your application and what is selected. For instance, a save button that becomes enabled as soon as a form is "dirty", and then is disabled when not.
* Areas of a form that enable or expand immediately based on a checkbox being activated or a configuration across multiple fields detected. For instance, a parent configuration checkbox that controls access to dependent options, or a scheduler that changes your choices based on what sort of recurrence you've set.
* A detail panel that slides in an out based on whether anything is selected
* Tabs that are automatically selected based on the result of actions. For instance, certain actions may cause a panel to slide out with the relevant tab pre-selected.
* An options box that controls validation thresholds for other screens of the app. When changed, any affected screen calculations need to be updated.
* Calculated fields based on the values of other fields that need to be immediately updated when any of the source fields change.
* A detail panel that dynamically changes what it displays based on the type and number of rows selected. For instance, it may show a customized truck panel for a truck asset versus a computer asset, or an aggregate chart if multiple items are selected.

If you have any of these sorts of requirements, then you have a reactive application.

### Why GluJS?

Developing rich, reactive business-oriented web UIs turns out to be much more difficult than it first appears. For most enterprises, the smartest thing to do is to find a library that offers a rich UI component set - like Sencha ExtJS - to handle the complexities of laying out UI across browsers.

That's an excellent approach, but it doesn't necessarily get the job done. Tools like Sencha ExtJS offer steep learning curves even for experienced developers. Organizing large applications with rich reactive behavior can quickly lead to a tangle of code unless you are already an expert. Even with teams experienced in the tool, there isn't always an obvious way to organize the code so that it is concise and manageable and side-effect free.

Most problematic of all, there is no obvious out-of-the-box pain-free way to make the code testable as you go. The richer the application, the more you end up plugging holes.

GluJS is for anyone who is trying to build a rich web HTML UI using a declarative widget toolset like Sencha ExtJS. It dramatically simplifies the architecture and reduces code to a minimum while getting out of the way to let ExtJS shine. Non-experts can now be productive, while experts can drop all of the boiler-plate code and concentrate on the application itself.

Best of all, it is "test-driven" from the ground up so that all of your UI code -- from user interactions to AJAX calls -- can be simulated in a fast and developer-friendly test harness.

### Challenges when building a reactive application

Developing rich web and mobile HTML-based applications in Javascript can be new territory for many enterprise development teams. While there are great libraries like Sencha ExtJS to make a "desktop-like" experience, even ExtJS experts face significant challenges turning the initial "it looks great!" ExtJS wireframes into an actual large working application:

#### Difficult to test

It's not easy to figure out where and how to build unit tests that cover rich UI interactions. That often means tests are done last using Selenium-style tools if they are done at all. Lack of automated test coverage means extra cycles figuring out what the stakeholders really want, and permit additional new features and bug fixes to break previously working code.

#### Adding rich reactive behavior gets complicated fast

Laying out a set of components is one thing. But modern applications need to do more than look good. They have to react in real-time to everything the user is doing and everything the back-end is feeding them. Finding the right way to add that behavior in is where things quickly get messy. The basic MVC pattern, while better organization than nothing, still doesn't directly address how to compose complex reactive application behavior. Combined with a lack of test automation that clearly spells out what's supposed to happen at each step, that makes for a buggy application with unintended side-effects.

#### Server development can hold back client development (and vice versa).

Client development teams are often separate from server teams. Stakeholders want to be able to try out their designs and iterate on them. But if you have to coordinate with a server team, set up a test server and set up a test database just to get going on the UI, things can slow to a crawl. The gap between communicating ideas and executing on them not only kills velocity but also lets mistakes and misunderstanding go uncorrected until they are painful to fix.

#### Enterprise requirements like localization and user privileges are hard to enforce

Enterprise applications come with a number of global requirements, with localization being a key one. You shouldn't have to always reinvent a localization strategy or access rights strategy, but you do if it's not baked-in to the framework. That usually means repetitive hand-coding everywhere. Leaving these key enterprise concerns manual results in gaps in coverage that can be difficult to track down after the fact.

#### Bloated disorganized code that's different for every developer

Rich widget libraries are great, but using them in a clean way is challenging. Often the same composition patterns (like master-detail, mixed-type tabs, action enabling/disabling, panel expanding on a trigger, etc.) reappear within any given application. Yet UI component APIs remain focused at a lower level. There are many conflicting ways to develop these rich behaviors, sometimes none of which are clearly superior to the others. That means not only repetitive code that can easily turn into a spaghetti mess, it also means a _different_ mess per developer.

#### Development is painfully slow

All of this adds up to a painfully slow development cycle in which getting to a high-quality finish for a large application takes much longer than expected, if at all.

### The GluJS solution

GluJS directly addresses the needs of enterprise developers:

#### Test-first out-of-the box

GluJS provides a test specification methodology (backed by Jasmine) that captures and turn complex UI behavior provided by stakeholders into actionable code and automated tests. To make sure that the tests correspond to user stories in the real world, GluJS provides a test library that provides full transparent AJAX mocking and dummy data.

#### Fast UI cycles even if the server-side is incomplete

Client developers no longer have to wait to get back to the stakeholders. A rich, simple Ajax back-end simulator lets you jump immediately into producing tested UI code. It also lets developers return the client application back to stakeholders for feedback and review -- perhaps before the actual server is even started. Pointing back to an actual server is later a single configuration switch.

#### Tight, organized DRY code

GluJS lets you write minimalistic UI-oriented code. Out-of-the box UI patterns like enabling/disabling action buttons based on UI state combined with conventions that automatically wire components together greatly reduces repetitive code, letting the application underneath emerge.

#### Enterprise-ready localization and access rights

Localization is not an optional add-on to GluJS, but built-in to the core. As long as you provide the translations in a local file, everything is localized automatically. Plus, GluJS's support for dynamic global control customizations makes it simple to manage global access control patterns like enable/disabling/hiding controls based on user privileges.

#### Strong reusable design patterns for distributed teams

Though a great start, the MVC pattern is little more than a pattern for wiring up handlers. The patterns built into GluJS directly address higher-level real-world UI interactions. Since the patterns are so strong, there's a known best way to approach most problems. That helps keep the design of the application unified even with very different developers. And of course that makes for a less-costly, more supportable application.

#### Get the most out of best-of-breed HTML 5 graphic libraries

Libraries like Sencha ExtJS provide a rich, clean look and feel, utilities, and Ajax connectivity. GluJS provides the "glue" that brings these pieces together for testable, fast enterprise development.

#### Drops in place into existing projects

We realize that as an enterprise developer you are often fitting your application into a larger portal or shell. GluJS has multiple entry points that let you drop your application into a larger one, or write the entire app in GluJS.

## The Basic SVVM Pattern

GluJS is a refined variant of the MVVM (Model-View-View Model) pattern that we call SVVM. That's short for Specification-View-View Model.

The switch to SVVM underscores two points. First it underscores one of the main points of GluJS: making it dead simple to drop right into test-first development based on user stories or specifications. In fact, we recommend (and make it simple) to always start with a specification.

The second is that the architecture is simpler than it looks. Essentially, there are

* specs - descriptions of what the app is supposed to do that are also fully functional tests
* view models - descriptions of screen states and rules that include data
* views - declarative JSON that describes the component tree (similar to MXML or XAML from Flex and WPF/Silverlight)

That's really it. By simplifying the architecture, we make it a very direct path to true test-first development.

### What is a specification?

Let's start with an example. Imagine a "Hello World" application. Except since we're building reactive applications, imagine it has some minimum behavior as follows:

* There's a "message" label that contains either "Hello World!" or "Goodbye World!"
* It starts out with "Hello World"
* There's a toggle button that tracks whether you are coming or going.
* When you click it, it flips over to "Goodbye World!"

To formalize this a little, we'll put this in the shape of a user story. We are going to use the "Given, When, Should Have" format. In other words, almost any user story can be reduced to a few basic parts:

* _Given_ \- the initial state you're going to be describing
* _When_ \- the change you are going to introduce (usually a user interaction, scheduled event, or feedback from the back-end)
* _Should have_ \- the "then" of what happens. In other words, it "should have" done one or more things in response, like change parts of the screen or talked to the back-end.

With that in mind, the Hello World "story" specification might look like this:

    Given the Hello World application on launch
      Should have set the message to 'Hello World!'
      When the user toggles their 'is user leaving' status
        Should have set the message to 'Goodbye World!'

Indenting just means the next "step" in the story. Why not leave it flat instead of indenting? Because indenting lets us combine _multiple related stories_ into a single clear, readable spot. Consider if there was another option such as "change goodbye greeting" that you could change before flipping the toggle. Instead of writing an entirely new story, you could just append it to the existing one:

    Given the Hello World application on launch
      Should have set the message to 'Hello World!'
      When the user toggles their 'is user leaving' status
        Should have set the message to 'Goodbye World!'
      When the user sets the goodbye message to 'Ciao!'
        Should have left the current message alone
        When the user toggles their 'is user leaving' status
          Should have set the message to 'Ciao!'

In other words, we've just added a new "branch" to the set of stories--a different path the user could take at that point. We added the branch at the beginning, but it is especially powerful when you realize you can add it at any point. That lets you combine all of the "setup steps" for two stories that start out at the same spot (for instance deep in a set of screens and interactions) but only diverge in the last steps. More on that later.

We recommend capturing your user stories as much as possible in this format. The compelling reason is that if the stakeholder, business manager, PM, etc. can spell it out at this level, you can eliminate a world of development pain. Why? Because this level of specification can be directly translated into actionable tests to guide the developer to get it right the first time.

#### The specification in code

Here is that same (first) example given in CoffeeScript:

    Given 'the Hello World application on launch', -&gt;
      vm = null
      Meaning -&gt; vm = glu.model 'helloworld.main'
      ShouldHave 'set the message to "Hello World!"', -&gt; expect(vm.message).toBe 'Hello World!'
      When 'the user toggles their status', -&gt;
        Meaning -&gt; vm.set 'isLeaving', true
        ShouldHave 'set the message to "Goodbye World!"', -&gt; expect(vm.message).toBe 'Goodbye World!'

We use CoffeeScript (for the specifications only) because it makes them so short and expressive that they match up very closely with the plain English specification provided by the analyst. Here's the same thing in javascript if you prefer that:

    Given ('the Hello World application on launch', function() {
        var vm;
        Meaning (function(){
            vm = glu.model ('helloworld.main');
        });
        ShouldHave ('set the message to "Hello World!"', function() {
            expect(vm.message).toBe ('Hello World!);
            When ('the user toggles their status', function() {
                Meaning (function(){
                    vm.set('isLeaving',true);
                });
                ShouldHave ('set the message to "Goodbye World!"', function(){
                    expect(vm.message).toBe ('Goodbye World!');
                });
            });

        });
    });

Either way works. Don't worry about what's going on in the details - we'll return to that in a moment. Just note how similar the developer specification is to the plain English specification. The "miscommunication" gap has been reduced to a minimum and the developer can start coding exactly "to spec".

### The view model

You've seen an overview of a specification. What exactly does the developer code to make this come to life? The first thing the developer needs to do is model the application behavior.

A view model is a "state machine" that tracks anything "interesting" going on in your application. What we mean by interesting is simply any screen behavior that includes one of the following:

* app-specific logic that is not encapsulated in a control and you'd have to write some sort of handler for (especially when one control influences another). In short, if you would ordinarily go about it by adding a handler to a control or calling a method on a control, you should put that in the view model.
* the state of any forms / data made visible in a screen
* validations (really another form of app-specific logic)
* calculations (the same again)
* Ajax calls to a "back-end"

It does _not_ include "uninteresting" things that are part of standard out-of-the-box control behavior. For instance, whether a combo-box is expanded or not is usually based entirely on existing standard conventions and handled internally by the control.

The moment that behavior has additional app-specific logic, it becomes part of the view model. For instance, if the expanded/collapsed state of the combo box is supposed to be auto-expanded whenever a value of 'Other' is input into another combo-box, then that logic needs to be put into the view model as it is not provided "out of the box".

Here's an example of a simple view model that fulfills the behavior in the spec above:

    glu.defModel('helloworld.main',{
        arriving : true,
        message$: function() {
            return this.arriving ? "Hello World!" : "Goodbye World!"
        }
    });

The view model has a single property and a single formula. A property is simply what you'd expect - a value that you change by calling `.set('arriving')` on the view model. It raises event notifications whenever it changes value.

A formula is a special sort of property that is not changed by calling `.set`, but instead re-calculates whenever referenced values change, much like a spreadsheet cell that points to other cells. In the case above, the value of `message` will be changed if and only if the value of 'arriving' changes. A property is marked as a formula simply by appending a `$` to it and then providing a function that returns a value. The GluJS framework will analyze the function and "wire it up" accordingly.

This view model above will start with an `arriving` of true and a `message` of 'Hello World'. If you change the value of arriving by calling `.set('arriving', false)`, `message` will change to 'Goodbye World!'.

In fact, this is the exact behavior we described in our specification. If we run the specification in the Jasmine spec runner, it will return all green, meaning tests passed.

The view model is _entirely independent_ of any view. You can validate your "interesting behavior" before you even can see it in operation. The view, because it has no logic, simply attaches and follows the view model like the "skin" of a 3d model over the skeleton.

We will cover the details later, but this gives you a good idea of what a basic view model contains.

### The view and binding

The view model can be run without any view. It is the actual application that you are designing, abstracted from its representation. Of course, it is of little value without the visual "skin" to make what is going on available to the user. This we call the "view".

One of the main goals of GluJS is helping the underlying simplicity of the application emerge. Here is an example of an ExtJS view for the Hello World application:

    glu.defView('helloworld.main',{
        title: '@{message}',
        tbar : [{
            text : '~~arrivalStatus~~',
            pressed : '@{arriving}'
        }]
    });

Views are often matched up one-to-one with view models. Simply define it with the same name, and it will automatically be used wherever that view model needs to materialize.

ExtJS users can note that you do not need to worry about defining a class that extends a base component, which also usually requires implementing an `initComponent` method to add sub-objects and containers (like `items` or `toolbars`). GluJS enables you to logically break up your application but still retain the simplicity of declarative JSON.

To make the view "come alive", we need to connect it with the view model. This is done using _binding_.

To understand the purpose of the binding syntax, it is important to take a small step back. ExtJS (among others) provide a rich declarative JSON configuration block for each control. Values provided in the configuration block will only be used on initial render. You must also normally add listeners and invoke setters to add application-specific behavior. In short, there are normally three things you do with any view control:

* To configure for first-time rendering, provide an initial configuration property in the view itself (e.g. the `pressed` property)
* To listen for changes from user input, find a reference to the view object and add event handlers (e.g. on the `toggle` event).
* To change the view object in response to application behavior, find a reference to the view component and call appropriate methods (e.g. `setTitle`).

Confusingly, there is not necessarily any naming consistency (`pressed` versus `toggle()`). Finding references means doing things like creating component queries and declaring `ref` blocks.

GluJS radically simplifies this: Just use the configuration properties and throw out everything else. Then through binding, you get the references and other behavior "for free".

To bind a control to a view model property or command is simply to provide a string in the following form:

    controlConfig : '@{viewmodelProperty}'

That will tell the GluJS to do three things at once:

* configure the initial control property with the value from the view model property.

    * So for `pressed:'@{arriving}'` it will set it initially to `true` (the initial value in the view model)
* add a matching event handler to the control that will change the view model property (or invoke a command) based on user input.

    * In this case, it will add an event handler for the `toggle` event that will automatically set the `arriving` property to match.
* add a listener to the view model so when its property changes, the view follows suit.

    * If you call `.set('arriving', true)` on the view model, the button will toggle to match.

To sum up, what the binding pattern provides is an extremely simple way to deal with interactivity : view models (controllers) never have to deal with view controls, just with view models. Since view models are just properties, formulas, and commands (functions) that _you define for your application_, what it takes to spell out your application's custom behavior is clear and minimalistic. An entire layer of complex development overhead (finding and maintaining references to view controls, observing them, and manipulating) is done away with.

In addition to the simplicity of binding, GluJS also provides a very straightforward way to "compose" your views dynamically that include "config transformations", localization, one-to-many tab patterns, dynamic areas of the screen, pop-up messages and dialogs, layouts, and more. Furthermore, there is a strong "name convention" piece to GluJS we have not yet introduced that makes your bindings even simpler and more consistent. These will be covered in a later more detailed section.

### Example flow between view model and view

The binding built within GluJS is very simple to use, but lets you quickly compose sophisticated interaction patterns. In the running 'Hello World' example, the flow between view and view model can be summarized as follows:

1. The button starts out toggled (because `arriving` starts out `true`), and the `title` of the panel starts out as 'Hello World!' (because `message` is a formula calculated off of `arriving`).
2. When the button is clicked, `arriving` changes to `false` (because the `pressed` property of the button is bound to the `arriving` view model property).
3. That in turn triggers `message` to recalculate automatically to the value 'Goodbye World!'
4. The title updates to 'Goodbye World!' (since the `title` component property is bound to `message`)

It's a simple but very powerful pattern. If you are familiar with ExtJS (and even if you are not) it will be useful to walk through the For ExtJS users: How does this compare? section below to see how it compares against "straight-ahead" and "MVC" approaches on even a simple reactive application.

### Basic entry points

We have defined the application, but not yet instantiated it anywhere. To do that, GluJS supports two basic entry points. First is the `Viewport` entry-point when you are using GluJS globally within your ExtJS application:

    Ext.onReady(function(){glu.viewport('helloworld.main')};);

That will locate the `main` view model (defined earlier), find the matching view, and then within ExtJS take over the full page to display the application.

Often within an enterprise you don't have control over the full application and are instead just one module in a bigger framework. To accommodate that within ExtJS, we provide the `glupanel`. Anywhere you can drop a normal ExtJS `panel`, you can drop a `glupanel` and supply what GluJS needs to get started:

    //within a ExtJS component definition:
    items : [{
        xtype : 'glupanel',
        viewmodelConfig : {
            mtype : 'helloworld.main'
        }
    }

The property `viewmodelConfig` lets you pass in a configuration block in case the parent application needs to hand in initialization parameters into your view model (that's why the alternate object with `mtype` property is used here). You can have as many `glupanel`s as you need in your application and each will be a 'glu root' independent of the others.

It's really that simple. For more information on how that compared with what we are used to doing in ExtJS, continue on to the next section.

## For ExtJS users: How does this compare?

The View Model pattern is really just a logical evolution of existing patterns you may have already seen. We'll use ExtJS code as a basis but this applies to any component library.

You may be familiar with the "standard" "inline component" pattern in simple ExtJS examples. Let's start with the "hello world" example using that approach:

**Inline component approach (NOT GluJS!)**

    //old-school Ext JS straight-ahead style
    Ext.onReady(function (){
        //Starts with view definition
        new Ext.Viewport({
            layout : 'fit',
            items : [{
                title : 'Hello World!',
                tbar: [{
                    text : 'Coming/Going',
                    //'controller' code that responds to the user toggling the button
                    toggleHandler : function(button, state){
                        var msg = this.state ? 'Goodbye World!' : 'Hello World!';
                        button.ownerCt.setTitle(msg); //have to find some way to reference the other control
                    }
                }]
            }]
        });
    });

The problem with this approach is that there is no separation of concerns. The application is one intermixed "blob" of view and behavior. It looks fine for a very small application. But following this style on a full enterprise application leads to a dense tangle of nested spaghetti code. Every component pokes values into every other component (just as the toggleHandler is pushing into the parent panel's title) and the system behavior becomes incredibly hard to track and maintain over time.

Just as importantly, there's no clean way to test the custom behavior you've added without a great deal extra infrastructure work (like installing and writing Selenium tests in a lab, or attempting to run everything in a Node server with a non-rendered DOM, etc.)

The next logical improvement is to separate the view (the actual control definition) from the controller (the logical behavior). That at least will lay down some logical file organization and make behavioral code easier to centralize and manage. This approach is exemplified by the MVC pattern offered in Ext JS 4.x.

**MVC approach (NOT GluJS!)**

    Ext.define('Helloworld.controller.Main', {
        extend: 'Ext.app.Controller',
        refs: [
            {
                ref: 'mainPanel',
                selector: 'main'
            }
        ],
        init: function() {
            //Component Query to "wire up" toggle handler
            this.control({
                'main &gt; toolbar &gt; button#exitToggle': {
                    toggle : this.onButtonChange
                },
                'main': {
                    beforerender : this.onBeforePanelRendered
                }
            });
        },
        onButtonChange: function(button, state) {
            var msg = state ? 'Goodbye World!' : 'Hello World!';
            this.getMainPanel().setTitle(msg); //now getting a reference through the component query defined in refs
        },
        onBeforePanelRendered: function(panel) {
            panel.setTitle('Hello World!'); //letting the controller manage initial state
        }
    });
    //VIEW FILE
    Ext.define('Helloworld.view.Main', {
        extend: 'Ext.panel.Panel',
        alias: 'widget.main',
        title : '-',
        initComponent: function() {
            this.tbar = {
                items : [{
                    itemId : 'exitToggle',
                    text : 'Coming/Going',
                    enableToggle: true
                }]
            };
            this.callParent();
        }
    });
    //APPLICATION BOOTSTRAP FILE
    Ext.application({
        name: 'Helloworld',
        controllers: ['Main'],
        launch: function() {
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [{xtype: 'main'}]
            });
        }
    });

This is definitely some organizational improvement. Following a MVC pattern at least puts the code into separate code files, and now the application will have some basic 'lines' instead of being a complete 'blob'. But it does this _at the expense of much more code_ (even just considering the view and controller).

In effect, all we've done is externalized how component event handlers and references back to other components are "wired". Now that we have split view and behavior apart, we have _even more work_ than before in bringing them together again. A more accurate name for the pattern would be MVCRCQ - a model, view, controller, references, and component queries, because without `refs` and component queries for each and every bit of behavior, the MVC pattern doesn't work.

Because the view and controller still need to be manually "wired up", there has been little gain at an architectural level:

* The app is still "brittle": the references and component queries mean your controllers have to be deeply aware of your view tree.
* There is still no incremental way to concentrate just the critical behavior without simultaneously having to get every last view component also correct.
* There is even more code to write
* And there is still no obvious "entry point" to begin testing.

### The GluJS way

The best of both worlds would be if behavior could both be cleanly separated into a controller, yet somehow reconnect to the matching view automatically without costly wiring. All the interesting state could be put into the controller and within the controller we would never have to deal with the view at all. This approach would offer these benefits:

* You can eliminate all of the "hand-wiring" and dramatically shrink/simplify/stabilize code.
* The controller and view are entirely stand-alone and separate, greatly reducing the "brittleness" of too many interconnecting parts.
* You can start defining, building, and testing custom application behavior immediately.

A controller that does this - models important application state and doesn't reference the view - is simply called a "view model."

This of course is the exact approach we take in GluJS:

    //View model
    glu.defModel('helloworld.main',{
        arriving : true,
        message$: function() {
            return this.arriving ? "Hello World!" : "Goodbye World!"
        }
    });
    //View
    glu.defView('helloworld.main',{
        title: '@{message}',
        tbar : [{
            text : '~~arrivalStatus~~',
            pressed : '@{arriving}'
        }]
    });
    //ExtJS application bootstrap
    Ext.onReady(function(){glu.viewport('helloworld.main');});

The behavior is cleanly separated, we do it without introducing any bloat, and best of all, it is entirely testable.

## View model: Parts

Below is a more in-depth walk-through of how a view model comes together.

The view model is the "common sense" representation of application state and behavior. A 'root' view model represents the application as a whole (or the module if you are a sub-app within a 'portal'), while other view models represent various screens (tabs, etc.) or areas of a screen.

The view model is composed of several distinct parts that represent your application state and behavior:

* _Properties_ \- Hold states that various parts of the screen can be in. Usually correspond to things that the user can set (like the contents of a text field, or the currently active tab, or which rows of a grid are selected).
* _Formulas_ \- Calculated properties that respond to changes in properties or other formulas. By their nature, they are read-only so they typically represent the app 'responding' to user interaction. Glu will analyze the formula and keep it updated when input properties change.
* _Sub-models_ \- Contains various sub-screens and lists of sub-screens (glu is for full applications so view models are always in a hierarchy with a single root). There is also a special 'parentVM' property to find any view model's container.
* _Commands_ \- Actions that the user can take that aren't represented by simple properties. For instance, a save button or hitting the 'close window' indicator.
* _Reactors_ \- Rules that are triggered on property / formula changes so you don't have to put all of your side-effects into the property setter. For instance, refreshing the grid when any of several filters change. A formula is really a special type of reactor where the action is setting a single property; if it's more complicated, use a reactor.

**Example**

    glu.model({
       //PROPERTIES
       classroomName : 'Science',
       status : 'OK',

       //FORMULAS
       classroomNameIsValid$ : function() { return this.classroomName !== '';}
       statusIsEnabled$ : function(){ return this.classroomNameIsValid;}

       //SUBMODELS
       students : {
           mtype : 'list'
           items : [{
               mtype : 'student',
               firstName : 'Mike'
           }]
       }

       //COMMANDS
       clear : function() {
           this.set('firstName','');
           this.set('status','OK');
       }

       //REACTORS
       when_status_is_not_ok_then_fetch_problem_detail : {
           on : ['statusChanged'],
           action : function() {
               if (this.status!=='OK'){
                   //fetch problem detail
               }
           }
       }
    });

**A note on `this` and scope**

Javascript has a different notion of `this` than more traditional Object-Oriented languages. Since functions are first-class and can be passed around and called from another function and are not tied intrinsically to an object instance, the meaning of `this` is determined by the calling context and so can be ambiguous. This often leads to many subtle and not-so-subtle bugs.

One way around this is to set a `me` variable to the appropriate scope and use it instead so that it is enclosed within the function. That means the value of `me` will be fixed. That is certainly an option within GluJS. However, this still means you need to track on a context-by-context basis what the value of `me` is.

GluJS cuts through this ambiguity by _always_ making the scope of `this` the containing view model. If you use GluJS as intended, you will never have to provide a `scope` value on any callback and `this` will always have a clear, unambiguous meaning.

### Properties

Properties are declared simply by adding a property to the config object. The initial value will be whatever is provided.

Properties are accessed through the `get` and `set` methods. You can also read properties by simply reading the backing property directly:

As long as the property is bound or a reactive formulas, the value will always be current with UI state so a getter is not strictly necessary. It is a matter of preference whether you access the property directly or call

to keep the `get` behavior encapsulated within the view model.

To change `get`/`set` behavior (not usually recommended), you can manually add `get`/`set` overrides by using the convention:

    getFoo : function(){ return...}
    setFoo : function(value) {
      this.setRaw('foo',value);
    }

Calls to `get()` and `set()` will honor these overrides.

In the future, we may provide either automatic getter/setters (`getFoo()` / `setFoo('value')`) and/or Knockout-style getters/setters (`foo()`/`foo('value')`) if there is demand; we have experimented with both and haven't seen a lot of extra value with either though.

#### Serialization (data)

In addition to declaring properties inline (as shown), you can also provide either a `fields` array or a `modelType` (referencing an object with a fields array like an ExtJS model).

Example of a fields array:

    defModel ('assets.main',{
        fields : [{name:'id', type:'int'},{name:'description',type:'string'}],
        idIsVisible$: function() { return this.root.options.showIds;}
    });

The provided fields are added as normal properties to the view model and indeed can overlap with them (you can declare them both in the fields and in the main body normally). The only thing that is different is that they are specially marked by GluJS for serialization.

This lets you do a few special things. First, you can load data into them (deserialize) in one step using a `.loadData` method.

        openDetailInspector: function(){
            var detailInspector = this.model({mtype:'asset'});
            detailInspector.loadData(this.assetWithFocus); //copies in current values of the focused asset
            this.open(detailInspector());
        }

Secondly, you can serialize them into an object using the `.asObject` method. This will produce an object with only the marked fields, suitable for transfer "over the wire".

In addition, a few more options are surfaced. First, dirty tracking is automatically enabled. Whenever you call `.loadData` (or `.commit` or `revert`), the current values are marked as 'original'. If any of the fields are changed, a global `isDirty` property becomes true. This is a true dirty comparison; if one of the field values is set back manually to the original, the view model is no longer "dirty".

The `commit` function lets you set the current values as the new "original" values, so the data model will no longer be dirty. This is usually done after a save of some sort. The `revert` restores all of the values to the original state (and so the view model is no longer dirty). Note that you can bind a button directly to the `revert` function if you'd like as it is built-in.

With this pattern, your data does not have to be arbitrarily separated into a pure 'model' with no behavior. After all, if you are building a UI you are going to be displaying that data on the screen, and you're going to need all the rich reactive behavior GluJS provides. The view model concept unifies model with controller and makes your architecture a whole lot simpler - and you can still separate out your "data definitions" (models) for re-use by leveraging `modelType` as needed.

### Formula Properties

Formula properties (or just formulas for short) are read-only properties that respond to changes in other properties. To declare a formula, put a `$` at the end of the name (this won't become part of its name but is just a flag) and then supply a function that returns a value:

    saveIsEnabled$: function(){return this.isValid &amp;&amp; this.isDirty;}

GluJS will scan the function and find property change events to listen for and so will automatically keep up to date with a minimum of recalculation. In the example above, if (and only if) the `isValid` or `isDirty` properties change, it will update the value of `saveIsEnabled`.

Formulas can also be chained: in the example above both `isValid` and `isDirty` are actually other formulas!

Formulas are key to managing the reactive nature of your UI application because formulas are themselves 'reactive'. Like formula cells in a spreadsheet, they are always up to date no matter what approach or order the user takes to manipulating the UI. Extremely complex patterns and corner cases can resolve themselves "automatically" when you let formulas manage application flow, so use them whenever you can.

#### IsValid

There is one bit of magic-by-convention with formulas. If you name a formula such that it ends with `IsValid`, it will automatically contribute to a global `isValid` property on the view model. When all such formulas return true, then the global `isValid` will also be true.

A common usage of this is to disable a 'save' button until the `isValid` (and usually `isDirty`) returns true. For example:

    save : function(){
       //...
    },
    saveIsEnabled$ : function(){
        return this.isDirty &amp;&amp; this.isValid;
    }

Here's a trick about isValid functions: you can supply a bit of text instead of `false` and it will count as `false`. This let's you return an error message to a `valid` component binding in a single pass:

    nameIsValid$ : function(){
        return this.name.substring(0,1)==='Z' ? true : 'The name must start with Z';
    }

### Commands

Whenever the user needs to take an action that isn't necessarily as simple as updating a property - especially when it involves an Ajax call - then that is a command.

Typical commands are 'save', 'refresh', etc. They are declared simply by providing a function:

    save : function(){
       //...
    }

Very often, behavior that could be a command can really be expressed as properties. For instance, the 'collapse' button on a panel could be a 'collapse' command. But it also could be more simply modeled by a property:

Now you can get both collapse and expand in a single property and a single binding - and you have some state you can use for other behavior (like in a formula).

Whenever possible, see if what you're trying to do can be reduced to a property and go with that.

#### Guard functions

Glu has some strong naming conventions around commands (as well as other properties). These are called _guard functions_. They are simply formulas that _guard_ other properties or commands from being accessed and other than the naming convention, are nothing special. The list includes the following (assuming _foo_ is the name of a property or command):

* `fooIsEnabled` \- whether it is enabled/disabled
* `fooIsVisible` \- whether it is visible/invisible
* `fooIsExpanded` \- whether it is expanded/collapsed

Following the naming pattern not only keeps your code consistent across time and developers, but also enables convention-based binding, a feature that reduces code clutter even further (see the section on Binding by convention).

### Reactors

The reactor pattern is simply a shortcut to managing "event observers". It's a powerful way to reduce code clutter and break out different UI behavior as "rules". For certain reactive patterns, it lets you "plug in" new behavior in one spot without modifying (and possibly breaking) existing behavior.

Let's say you have an application with a complex grid that needs to be refreshed when any number of text filters, switches and dials on the screen are adjusted. We're going to keep it abstract for now and just call these properties A thorough E.

A common way to do this would be to separate out the 'refresh' into a function and then have each of the setters for these trigger the refresh:

**Example (NOT RECOMMENDED)**

        propertyA: '',
        propertyB: '',
        propertyC: '',
        propertyD: '',
        propertyE: '',
        setPropertyA: function(){
            this.refreshStudents();
        },
        setPropertyB: function(){
            this.refreshStudents();
        },
        setPropertyC: function(){
            this.refreshStudents();
        },
        setPropertyD: function(){
            this.refreshStudents();
        },
        setPropertyE: function(){
            this.refreshStudents();
        },
        setPropertyF: function(){
            this.refreshStudents();
        },

In other words, you add the behavior on the triggering end of things. But if there are multiple triggers, this creates redundancies. With GluJS, you could simply state the following instead:

**Example (RECOMMENDED)**

        propertyA: '',
        propertyB: '',
        propertyC: '',
        propertyD: '',
        propertyE: '',
        when_a_grid_related_property_changes_then_refresh_grid : {
           on : ['propertyAChanged','propertyBChanged','propertyCChanged','propertyDChanged','propertyEChanged'],
           action : function(){
               this.refreshStudents();
           }
        }

Later when you realize that you'd like to load only on an explicit refresh or just need to temporarily suppress the behavior for debugging, you can just comment it out and "switch off" the behavior in one place.

If you need to add new behavior to some or all of the property events, you can do that as a separate "rule". The ordering is deterministic; GluJS will process in the order you include them in your view model declaration.

While this is an entirely optional pattern, it is a natural and powerful fit for building modular reactive UIs.

## View model: Putting the pieces together

In the previous section we talked about the various parts that go into a view model. Here we go over how to define, create, and compose them to form an application.

### Defining and creating a view model

A view model can be defined and instantiated on the fly from within a view model:

    var model = this.model ({
       status: 'OK'
    });
    //or for a dialog
    this.open ({
       status: 'OK'
    });

or it can be defined first (with namespace) and then referenced later through the 'mtype' property (as long as you are in the same namespace):

    glu.defModel('example.main', {
       status : 'OK'
    });
    var vm = this.model ({
       mtype : 'main'
    });

A view model can also be defined 'inline' within a containing view model using an 'mtype' property of 'viewmodel':

    glu.defModel('example.main', {
       detail : {
           mtype : 'viewmodel',
           myProp : 'A'
       }
    });

or simply by reference

    glu.defModel('example.subscreen', {
       myProp : 'A'
    });
    glu.defModel('example.main', {
       detail : {
           mtype : 'subscreen'
       }
    });

Referenced view models are fully parameterizable, so you can initialize any of the values with overrides:

    glu.defModel('example.main', {
       status : 'OK'
    });
    //...later...
    var vm = this.model({
       mtype : 'main',
       status : 'BAD'
    );

A 'root' view model can be instantiated by one of several entry points, but most typically by leveraging the glu `viewport` factory within the ExtJS entry-point:

    Ext.onReady(function(){glu.viewport('example.main');});

or

    Ext.onReady(function(){
        glu.viewport({
           mtype :'example.main',
           //optional parameters...
        });
    });

or it can be included as a sub-panel of an already existing application panel:

    //...
    items : [{
       xtype: 'glupanel',
       viewmodelConfig : {
           mtype : 'main',
           //optional parameters...
       }
    }],
    //...

or (usually just for testing) you can start one with a fully qualified namespace

    var vm = glu.model('example.main');

### Sub-models / child view models

GluJS is a framework for quickly developing real applications with complex navigation and screens. Very often you'll want to split your view models in parts. The initial example above has a list of 'student' view models. This list could correspond on the screen to a set of items in a mobile list or a set of tabs. This is just one of the built-in UI composition patterns within GluJS.

Sub-models are indicated by using the `mtype` property within a nested object.

Note that you _do not_ have to divide your view model up just because your screen has logical areas. It can often remain relatively flat if the interactions are simple enough. For instance, you may have a form with multiple tabs representing different parts of a large data object. You can keep it as one large flat data object, and just break it up at the view level.

Other times, you will have an obvious sub-model. The most common of these is a master-detail page in which there is a grid or list and another area with a form that lets you view and/or edit the detail.

That might look like the following:

    glu.defModel ('assets.main',{
        assetsList : {
            mtype : 'list'
        },
        detail : {
            mtype : 'asset'
        }
    });
    glu.defModel ('assets.asset',{
        id : 0,
        name : '',
        //...etc...
    });

### Lists and stores

You might have noticed above that `mtype` for assetsList is 'list'. The GluJS list object fills in a gap left by frameworks like ExtJS. Many times you do not need a full `store` with support for proxies, flattening of json objects through a reader, and the other facilities provided by a store. You just need a simple observable list that can notify components when an item is added or removed. That's exactly what the 'list' provides.

While a list can contain any value, the most powerful use for a `list` class is when the list contains view models of its own. That naturally can be bound to a set of tabs, cards, or even panels laid-out horizontally or vertically on the screen ('repeaters'). For instance, if you want to dynamically add tabs (we'll call them _screens_ below) based on different selections of the user, then the view model might look like the following:

    glu.defModel ('assets.main',{
        screenList : {
            mtype : 'list'
        },
        openScreen : function (screenName) {
            this.screenList.add(this.model(screenName));
        },
        openScreenIsEnabled$ : function(){
            return this.screenList.length &lt; 8;
        }
    });

If a `tabpanel`'s `items` collection is bound to the screenList, it will automatically construct the matching tab for that type of view model. Conversely, when the view model is removed from the list, so is the tab from the `tabpanel`. As a bonus illustration, the example also includes a cap on how many screens can be active; if there are already 8 or more screens open, openScreen will be disabled until enough are closed.

### The view model graph

When you create child view models, those are automatically parented as follows:

* `this.parentVM` \- the child is given a reference to the parent view model. If the child is part of a `list`, the parentVM is the parent of the list, not the list itself. Note that this can change if the view model is 're-parented'.
* `this.parentList` \- the parent list of a child in the list. This too can change based on what list the child is added to.
* `this.root` \- the root view model. The root of the entire view model tree. This is immutable and is simply the "initial entry point". In other words, it constitutes the "application" as far as glu is concerned. That does not preclude you from having multiple application roots within a single page (such as different modules in a larger non-glu application).

Reactors and formulas are automatically attached/detached based on the current configuration of the tree. For instance, if you create a view model with a formula that references `this.parentVM`, when detached (e.g. removed from a list), that view model will stop receiving notifications until reattached at the same point or elsewhere.

The idea of a tree of collaborating view models is a key organizing pattern to larger applications. It lets you break down the application into component parts, while letting them naturally reference one another without having to worry about explicit observer patterns. You can even think of it as giving you a natural fine-grained message bus - put properties or events you are interested in globally at the root level, and more local properties/events lower down the chain.

### View model mixins

Often different view models will share similar structures within an application, or two view models will be closely related but only with a slight twist between them. In those cases, you'll want to use _mixins_.

Whenever you define a view model, you can provide an array of other view models under a `mixins` property as follows:

    //the base mixin
    glu.defModel('assets.asset', {
      name : '',
      //..other shared commands, functions, and properties...
    });
    glu.defModel('assets.activeAsset',{
      mixins : ['asset'],
      //...unique properties, commands, functions
    });
    glu.defModel('assets.archivedAsset',{
      mixins : ['asset'],
      //...unique properties, commands, functions
    });

One of the design goals of GluJS was to avoid the complexity of inheritance patterns within Javascript and instead favor object composition. There is no support for chaining method calls to a parent 'class'. Whenever you run into situations where you might be tempted to use inheritance, there's usually another way to break down the problem. A common technique is a 'virtual method' such as having the mixin call another, absent function provided by the target view models:

    //the base mixin
    glu.defModel('assets.asset', {
        save : function(){
            this.saveInternal();   //'virtual' method
        }
    });
    glu.defModel('assets.activeAsset',{
      mixins : ['asset'],
      saveInternal : function(){
      }
    });
    glu.defModel('assets.archivedAsset',{
      mixins : ['asset'],
      saveInternal : function(){
      }
    });

This approach avoids class definition trees and keeps things simple.

### Convenience methods

There are a number of convenience methods that are commonly used within a view model. Use them instead of the matching ones on the 'glu' object because they

* pass in the local namespace
* set the scope of any callback to the view model (so 'this' always refers to the view model)
* automatically create parent/child associations where appropriate
* are automatically mocked as needed by the simulation/testing framework just on that view model without breaking core 'glu' for other view models.

The methods are as follows (please refer to the API docs for details):

* `ajax` \- makes a call that is scoped to the view model and has a few convenience hooks
* `model` \- makes a child model that is appropriately parented to the current view model
* `localize` \- returns the value for the provided localization key and provides the localizer with the current context. See the Localization section.
* `confirm` \- asks for a confirmation from the user
* `message` \- returns a message to the user
* `open` \- opens a user pop-up screen that is itself a view model

### Dialogs

There are three ways to open up a dialog to the user.

First, if it is simply a message box, then use the built in `this.message` on the view model. It is (for now) simply an alias on to the ExtJS MessageBox functionality that scopes the callback to the view model.

        //...in view model definition
        launch : function() {
            this.message (this.localize('launching', this.instanceSelections))
        }

Second, if it is a confirmation, use the `this.confirm`, which has the same syntax as within ExtJS.

        removeAssets:function () {
            this.confirm({
                title:this.localize('removeAssetsTitle'),
                msg:this.localize('removeAssetsMessage'),
                buttons:Ext.Msg.YESNOCANCEL,
                icon:Ext.Msg.QUESTION,
                fn:function (btn) {
                    if (btn !== 'yes') return;
                    this.removeAssetsActual();
                }
            });
        },
        removeAssetsActual:function () {
            this.ajax({
                url:'/json/assets/action/remove',
                params:{ids:this.selectedIds()},
                success: this.refreshAssetList
            });
        },

The naming pattern we use for a confirmation of a command is to call the first step the actual command ('removeAssets') and then the second step after being confirmed simply 'removeAssetsActual'.

We are in fact looking into formalizing that as an automatic GluJS pattern - feed back is welcome.

Finally, opening up a full pop-up window in which you have complete control - such as a wizard, a modal edit window, or a configuration screen - is done through then `open` function:

    glu.defModel('assets.main', {
        options : {mtype:'options'},
        openOptions : function() {
           this.open(this.options);
        }
    });
    glu.defModel('assets.options', {
        warnings : true,
        offMaintenanceWarning : false,
        missingWarning : false,
        offMaintenanceWarningIsEnabled$ : function(){
            return this.warnings;
        },
        missingWarningIsEnabled$ : function(){
            return this.warnings;
        }
    });

When using `open`, you can either provide a view model instance request ( such as `{mtype:'options'}` ) in which case the view model will last until closed, _or_, you can provide an already existing instance so that it persists. In the example above, we're doing the latter so that the 'options' view model persists.

To close an opened view model, simply call its `close` method. There is also a private `doClose` method available to the view model which does the actual work. That lets you easily override the close method without inheritance. However, for the common pattern of vetoing a close under certain circumstances, we recommend simply proactively guarding the availability of the close command. Assuming that you want to veto closing of an options screen until all values are set, the best way is the simplest:

    glu.defModel('assets.options', {
        closeIsEnabled : function(){
            return this.isValid; //only allow closing once all options are initially configured
        }
    });

Binding adapters within GluJS will control the accessibility of any 'close' buttons to match the state of `closeIsEnabled`.

## Specifications in full

We can now return to the specification framework.

As we showed earlier, the specification approach gives the developer and stakeholders a standard way of defining the behavior of a UI that can be directly converted to actionable tests used to both drive development and report results.

In order to run them as tests, we use [Jasmine][1]. A default Jasmine runner is included in the basic project template under the 'spec' folder.

Jasmine itself includes excellent libraries for defining tests. However, it can be a little intimidating figuring out exactly how to structure things - what do you do with the nested describe blocks for instance? GluJS adds a very thin layer of alias functions over Jasmine to strongly guide you down the optimal path for reactive UI testing.

Specifically, GluJS strongly encourages story-based specifications as follows:

### Given

`Given` is used to setup an initial state and should only be used once at the beginning of each spec document. It accepts two arguments: first, a string description of the initial state, and second a nested function that will contain further definitions.

Example (in CoffeeScript):

        Given 'the Hello World application on launch', -&gt;
          vm = null

Any 'globals' for this specification should be defined immediately within the nested function so that they are available everywhere. Typically this includes the root vm you are testing, and often a simulated back-end.

### When

`When` blocks are the workhorse of the specification structure and have the same structure as a `Given` block. If a `Given` block starts the overall story, each `When` block advances the story a step or provides an alternate direction. You can tell the difference between the two uses of `When` based on whether you're nesting the function (meaning visually it will also show up indented) or adding it at the same level.

When you nest it within another When statement, we call that adding a _step_ to the story. If we want to spell out this story:

1. Given the Hello World application on launch
2. When the user toggles their status
3. When the user toggles their status (back)

we would do it like so (in CoffeeScript):

    Given 'the Hello World application on launch', -&gt;
      When 'the user toggles their status', -&gt;
        When 'the user toggles their status (back)', -&gt;

Since the `-&gt;` in CoffeeScript is just shorthand for a function declaration, the equivalent code in javascript is:

    Given ('the Hello World application on launch', function(){
        When ('the user toggles their status', function(){
            When ('the user toggles their status(back)', function(){
            });
        });
    });

The extra syntax in Javascript for defining nested functions is the one and only reason we tend to use CoffeeScript for our specifications - it keeps them compact and readable and easier to see in plain English.

Sometimes you want to "spec out" additional paths at a certain point in the walk-through. We call these _branches_. Let's say we have two similar stories:

1. Given the Hello World application on launch
2. When the user toggles their status
3. When the user toggles their status (back)

and the second one:

1. Given the Hello World application on launch
2. When the user toggles their status
3. When the user executes the "Do" command

We instantly notice that the first 2 steps are the same, and only the last step is different. Once you add a full set of descriptive user stories, you're going to find that every specification story overlaps with at least one other, leading to a tremendous amount of duplication and also making it difficult to see what is going on.

While we could keep these two stories separate, GluJS with Jasmine gives us the ability to add the second story as a _branch_ of the first. We do this in code by simply adding another block _after_ the first as follows:

    Given 'the Hello World application on launch', -&gt;
      When 'the user toggles their status', -&gt;
        When 'the user toggles their status (back)', -&gt;
          #stuff that deals with toggling the status back after the first toggle
        When 'the user executes the "Do" command', -&gt;
          #stuff that deals with executing the "Do" command after the first toggle

Another way of looking at specifications is that they represent the "user acceptance testing" that you would give to a manual tester after the application was built. Whatever you would have to spell out to a manual tester should be the steps and branches you put into a `When` block.

Notice that 'Given' and 'When' blocks are simply structure and do _absolutely nothing_ on their own. To actually implement the original state or to make changes, we use the `Meaning` block.

### Meaning

`Meaning` is the block that actually advances the simulated state of the application. The goal is to let the view model "do its thing" entirely ignorant of whether it is running in test harness or as a live application. That means it has to deal with everything that could happen within the client. These break down into four basic categories:

* _Simulation setup_ \- Before anything can run, the simulation must be placed into a defined test harness.
* _The user takes an action_ \- The user of the application at this point clicks, drags, or otherwise interacts with the application, such as:

    * Clicks on a button (to execute a command)
    * Selects a row or item from a grid/list
    * Updates text in a text field or area
    * Changes the focus of a list of things
* _An asynchronous timed background process executes_ \- The application might have a periodic refresh, or a one-time delayed action that was triggered by an earlier user command.
* _An asynchronous Ajax call returns a response_ \- The application receives a response from the server. This could be a success, a failure, or even a timeout.

GluJS combined with Jasmine provides complete simulation coverage for all four categories of action:

#### Simulation setup

Usually you are going to define and set up your root view model using `glu.model` since that function gives you root view model without creating a view:

        Given 'the Hello World application on launch', -&gt;
          vm = null
          Meaning -&gt; vm = glu.model 'helloworld.main'

Most of the time, you are also going to be setting up a simulated "back end" so that you can track and respond to Ajax calls. The application will make its calls as usual, only glu will now intercept and process the Ajax calls locally without a server having to be involved. Of course you'd need a reasonable way to quickly declare Ajax "routes" (url matching patterns) and serve up data. This is exactly what GluJS provides and is described under the 'data' and 'ajax' section below.

Lastly, you may want to advance the application to a beginning state by initializing the view model and answering the Ajax calls it makes on initialization. For instance, if the Hello World app needs to get a roster of other people who are also logged in, you might want to advance to that point:

        Given 'the Hello World application on launch', -&gt;
          vm = null, backend
          Meaning -&gt;
            vm = glu.model 'helloworld.main'
            backend = helloworld.createMockBackend() //a function we define ourselves elsewhere
            vm.init() //internally makes a call to the 'roster' url
            backend.respondTo 'roster'

#### User actions

User actions are the simplest because they emerge naturally out of what you've defined on the view model. We earlier introduced the concept of "interesting" interactions. Another way of looking at that is to ask if it is something you would want to introduce as a step in a manual test. If so, it is "interesting" and belongs in the view model as a public command or property.

Here's a concrete example using the helloworld example:

    Given 'the Hello World application on launch', -&gt;
      #...Given block stuff...
        When 'the user toggles their status', -&gt;
          Meaning -&gt; vm.set 'isLeaving', true

Since we know that all bindings are "simple" (have no logic) we know that toggling the button is simply going to set isLeaving alternately to false and true. Rather than try and locate the button on the DOM or within the ExtJS component tree, we simply do the same thing and set the property.

If it is a user command, we just invoke the function (just as the button would).

    Given 'the Hello World application on launch', -&gt;
      #...Given block stuff...
        When 'the user executes the "do it" command', -&gt;
          Meaning -&gt; vm.doIt()

If it is a text or value field of some sort, we just set the value:

    Given 'the Hello World application on launch', -&gt;
      #...Given block stuff...
        When 'the user changes the personalized welcome to "foo"', -&gt;
          Meaning -&gt; vm.set 'welcomeMessage', 'foo'

If it is selecting a row in a grid, we just find the one we want from the store and set it:

    Given 'the Hello World application on launch', -&gt;
      #...Given block stuff...
        When 'the user selects a person in the roster', -&gt;
          Meaning -&gt;
            vm.set 'personSelection', vm.personList.getAt(0) //set selection to first item in list

If it is responding to a dialog there's a special method off of the confirm method called `respondWith`:

        When 'the user confirms the delete action', -&gt;
          Meaning -&gt; vm.confirm.respondWith('yes')

Note that we should never set a formula or invoke anything directly that isn't bound to a control - the point of GluJS story-based testing is that you emulate what the _user does_ or what the _app does in response or on a timer_, so that the tests are as non-brittle, full-coverage, and as easy-to-follow as possible. Let the application handle its own internals.

##### Including the view in testing (sidebar)

We have also experimented with "view-inclusive" testing, but that makes things more difficult.

We know that we don't want to render the DOM during normal cycles(too slow and difficult to control), but that still leaves us two options. First, we could just let GluJS bind the ExtJS object tree but not render it. That's simple (CoffeeScript):

        var vm = glu.model ('helloworld.main')
        var view = glu.view vm

The `glu.view` function delivers a fully bound view without adding it to any container that would trigger DOM rendering.

That would allow us to validate the bindings (in addition to the behavior) by driving changes indirectly through the controls instead of through the view model. Of course, the challenge becomes then locating the view components without making the tests "brittle" (breaking tests because of shifting around a view is hugely draining). While testing, there is in fact basic support for quickly finding view components based on their bindings to the view model. We provide a "control lookup" for every bound property or command on the view model so that you can find what is bound to it without doing component or DOM queries (this is only available in test mode).

Unfortunately, many ExtJS controls assume that they are rendered before you can begin poking around with them. "Headless" adapters for ExtJS that would correct that behavior are possible (we've built some) but too much effort at the moment for little return. Since bad bindings typically throw errors in any case, and since you can validate your bindings with existing support, there is not much to be gained by driving the tests through the controls themselves.

The second remaining option is simulating the DOM within a javascript engine like Node.js. While entirely possible, that becomes a more complicated process all around and defeats the GluJS simplicity of a single developer being able to immediately produce and run testable code without additional installs or environment setups.

Since the views are behavior-less within GluJS and everything "interesting" (custom) goes into the view model, testing the view models is a simple and sufficient way to provide excellent coverage.

If you're still interested in "headless ExtJS controls" and perhaps a quick "binding validation check", let us know since we're considering addressing those points in the future.

#### Background jobs

Jasmine already has excellent support for manually controlling the clock to handle background tasks. Here's an example of advancing the clock in the hello world application:

      Given 'the Hello World application on launch', -&gt;
        vm = null, backend
        Meaning -&gt;
          vm = glu.model 'helloworld.main'
          vm.init() #starts a timer such that if you don't talk to someone within 2 minutes it ask you what is wrong
          jasmine.Clock.useMock() #tell jasmine to simulate the clock
          #...validate that message should be still Hello World!
        When 'it is over 2 minutes later'-&gt;
          jasmine.Clock.tick 2*60*1000 + 1000 #advance the clock 2 minutes 1 second
          #...validate message should now be What is wrong?

#### Ajax responses

GluJS lets you simulate Ajax responses using the GluJS AJAX simulator. You define the routes during setup and turn on the framework for _capture_. As the calls are made, instead of being delivered to the browser for an actual AJAX call, they are stored up in each captured route by name.

You will typically have a different route for each type of service call and name them accordingly. That way you can manage the responses separately and logically.

For example, let's say that the 'add to group' operation triggers a single 'add to group' service which when finished triggers a grid refresh. Simulating that might look like the following:

      #...Given setup here...
      When 'the user executes the "add to group" command', -&gt;
      Meaning -&gt; vm.addToGroup()
        When 'the back-end returns the 'add group' response successfully', -&gt;
          #technically don't need a status as that defaults to 200
          Meaning -&gt; backend.respondTo 'addGroup', {status:200, responseText : "{}"}
          When 'the back-end returns the people roster', -&gt;
            #Leaving off the response object lets a centrally defined fake service handle it, and so can keep state within a story
            Meaning -&gt; backend.respondTo 'persons'

Remember, we don't trigger the calls themselves -- the view model does that as it goes about its normal business. We just provide the simulated response from the backend in order to drive the story forward.

### ShouldHave

At this point, we are successfully _simulating_ the application (which is nice) but not specifying what _should happen_, meaning we are also not _testing_ it. That's where the `ShouldHave` blocks come in.

An example:

    Given 'the Hello World application on launch', -&gt;
      vm = null
        Meaning -&gt; vm = glu.model 'helloworld.main'
        ShouldHave 'set the message to "Hello World!"', -&gt; expect(vm.message).toBe 'Hello World!'
        When 'the user toggles their status', -&gt;
        Meaning -&gt; vm.set 'isLeaving', true
           ShouldHave 'set the message to "Goodbye World!"', -&gt; expect(vm.message).toBe 'Goodbye World!'

`ShouldHave` blocks assert expectations about the result of the store step - what _should have_ happened or what the UI now _should have_. It is an alias on the Jasmine `expect` function, though we prefer to use `ShouldHave` as it keeps writing all of our expectation sentences consistently. The ShouldHave function receives two arguments - the expectation in plain English, and then a function that contains one or more _expectations_, also known as _assertions_.

For the expectations, we simply use the excellent out-of-the-box Jasmine matchers. However, there are a number of GluJS helper functions:

#### getRequestsFor

One of the most commonly used helper functions when simulating Ajax is `backend.getRequestsFor()`. This lets you read and set expectations on interactions with the back-end.

For example, let's flesh out the example given above with the actual expectations. We're not only going to respond to the calls, we're going to assert that they were made in the first place:

      #...Given setup here...
      When 'the user executes the "add to group" command', -&gt;
      Meaning -&gt; vm.addToGroup()
        ShouldHave 'made a call to the 'add group' backend service', -&gt; expect(backend.getResponsesFor('addGroup').length).toBe(1)
        When 'the back-end returns the 'add group' response successfully', -&gt;
          Meaning -&gt; backend.respondTo 'addGroup'
          ShouldHave 'made a call to the 'persons' backend service', -&gt; expect(backend.getResponsesFor('persons').length).toBe(1)
          When 'the back-end returns the people roster', -&gt;
            Meaning -&gt; backend.respondTo 'persons'

Technically you don't have to do this - the later `respondTo(route)` call will throw an exception if there was no valid request. This pattern simply spells it out in greater clarity.

## Simulation framework

In this section, we go deeper into the setup and use of the GluJS simulation framework.

### Ajax simulator

Use of the Ajax simulator involves a few simple steps:

* Set up a backend with routes
* Turn on capturing of Ajax calls
* Returning response objects as needed

#### Routes

To set up routes on the back-end is a simple matter of using the `glu.test.createBackend` function:

    glu.ns('assets').createMockBackend = function(liveMode) {
        var assets, backend;
        assets = glu.test.createTable(assets.models.asset, 11);
        backend = glu.test.createBackend({
            defaultRoot: '/json/',
            fallbackToAjax: liveMode,
            autoRespond: liveMode,
            routes:  {
                'removeAssets' : {
                    url: 'assets/action/remove',
                    handle: function(req) {
                        return assets.remove(req.params.ids);
                    }
                },
                'requestVerification' : {
                    url: 'assets/action/requestVerification',
                    handle: function(req) {
                        return assets.update(req.params.ids, {
                          status: 'verifying'
                        });
                    }
                },
                'assetSave' : {
                    url: 'assets/:id/action/save',
                    handle: function(req) {
                        return assets.replace(req.params.id, req.jsonData);
                    }
                 },
                'assets' : {
                    url: 'assets',
                    handle: function(req) {
                        return assets.list(req.params);
                    }
                },
                'asset' : {
                    url: 'assets/:id',
                    handle: function(req) {
                        return assets.get(req.params.id);
                    }
                }
            }
        });
        backend.capture();
    }

The `routes` property is the most important. It consists of one or more named 'back-end service' definitions (or _routes_) that mimic a back-end web interface.

The URL for each route is a simple pattern containing url (REST) parameters to capture. These captured parameters show up in the `params` collection, as well as any key-value pairs from the query-string (make sure there is no overlap).

After the call to `.capture`, whenever a call is made to the view provider's (e.g. ExtJS) Ajax library it will first attempt a match against one of the provided routes. If there is a match, it will store the request in the route's request queue.

If there isn't a match, it will do one of two things based on the `fallbackToAjax` setting. While testing, ordinarily you want that to be `false` so that any uncaptured routes throw an error - you shouldn't be testing against routes that you aren't emulating. The only time to use `fallbackToAjax` is when you are embedding the application into a larger application as a 'live demo'.

The call to an Ajax request is asynchronous (as expected) and so nothing else happens at this time other than adding it to the queue or throwing a "route not found" exception.

#### Response objects

You control when the simulate Ajax call returns by the `respondTo` method. You can provide a custom one-time response when you call the function; this is especially useful when simulating errors.

For example (in CoffeeScript):

      #...Given setup here...
      When 'the user executes the "add to group" command', -&gt;
      Meaning -&gt; vm.addToGroup()
        When 'the back-end add group service call fails unexpectedly', -&gt;
          Meaning -&gt; backend.respondTo 'addGroup', {status:500, responseText : "Internal Server Error"}

In addition to supplying the HTTP `status` code (default 200) and `responseText`, you can also return HTTP headers in a `headers` object as needed:

          Meaning -&gt; backend.respondTo 'addGroup', {
              responseText : '{id:1}',
              headers : {
                'CONTENT-TYPE' : 'application/json' #the default actually
            }

As a convenience, you can also return a `responseObj` instead of a `responseText`. This will (as you might guess), simply serialize the provided object into the responseText:

          Meaning -&gt; backend.respondTo 'addGroup', {
              responseObj : {id:1}
            }

And because more often than not you will be returning a successful response instead of a failure, there's a final shortcut in which you simply provide the responseObj itself (equivalent to the previous example):

          Meaning -&gt; backend.respondTo 'addGroup', {id:1}

Race conditions can be more easily caught because now you can spell out the exact order of the Ajax return calls. If you are having trouble isolating a race condition, simply have the Ajax calls return in various orders until you have isolated it. Now that can become a permanent test case to not only help you fix and test, but also prevent a regression in the future.

#### Live demo / user training mode

The Ajax simulator is _not just for testing_. It also lets you quickly stand up your client application for interactive demonstration and testing purposes. Simply set `autoRespond` to true in the back end and instead of queuing requests up, they will automatically respond asynchronously from the in-memory backend. If the application is a module in a larger application that may already be hitting a live backend, you can still use the simulation framework: just set `fallbackToAjax` to true and routes that you are not capturing will hit the actual server as usual.

The ability to 'live demo' a client UI iteration is one of the more powerful features of GluJS and can play a key part in a fast, Agile development workflow. It also can be a very useful way to conduct user training when constructing a fully separate training back-end is too costly to manage.

### Data simulator

Faking out the back-end services so that they actually, pretty-much _work_ is extremely valuable for two reasons:

1. It lets you make your stories correspond to actual cases which involve the back-end, instead of being artificially chopped up to avoid that
2. It provides a way to quickly iterate and converge on a client UI without waiting for a back-end service to be written (often by another team)
3. By enabling a 'live demo' mode, it lets stakeholders quickly communicate likes and dislikes on the developing interface very early in the design until after everything is set in stone
4. Since stakeholders often are "touch and see" oriented instead of dealing with abstract development arcana, this process can actually be used to flesh out service contracts and patterns in advance of their implementation.

Since back-ends revolve around persistent data in databases, GluJS will not only have to be able emulate AJAX, but also provide a simple way to fake persistent storage. And so it does.

In the example under the routes, there is a line in which we set up an in-memory database:

        assets = glu.test.createTable(assets.models.asset, 11);

That will set up a database table based on the `fields` definition in the asset model (which can be a GluJS view model or an ExtJS Model construct0). The second argument (11) tells it to populate with 11 faked rows using the GluJS fake data helpers. Alternately, you can provide an array of objects and those will be read into the database upon initialization.

The returned table object supports the usual set of CRUD operations:

* `create` \- create a new row
* `list` \- return a paged, sorted, filtered list
* `get` \- return a single item by key
* `update` \- update the fields of a single item
* `replace` \- complete replace the row of a single item (equivalent to a remove and a create with the same key)
* `remove` \- remove an item from the list based on the provided key

All of these accept standard params (such as `start`, `limit`, etc.) and return a "standard response" (list returns a paged response for instance), so if you want to simply let them handle the received parameters and return a standard result for your REST calls, you can do that:

                'assets' : {
                    url: 'assets',
                    handle: function(req) {
                        return assets.list(req.params);
                    }
                },

The example above will respond to sorting, paging, and filtering requests as generated by the ExtJS store and will return an object that looks like the following:

        {
            "total":11,
            "rows":[{id:1,name:'Katie'},{id:2,name:'Mike'},...etc....]
        }

The database is one-table at a time for now. Anything more complex (involving joins, etc.) you can implement manually as needed.

#### Fake data

You can lean on the fake data API which will provide fake data based on an analysis of the names of the fields, their data types, and their constraints. Often you won't be using it directly but simply relying on the GluJS data layer to create it for you when you make a sample table. See the API for more details.

Building out the ease and sophistication of the ajax and data frameworks is one of our top priorities on the GluJS roadmap and we are greatly interested in your feedback.

## View: the basics

The view is the final piece of the puzzle of creating rich, reactive applications.

For the most part, the point of GluJS is that it lets the underlying view provider - for now ExtJS - really shine. GluJS takes care of the high-friction parts - the specification and management of the behavior and enterprise glue - so that your ExtJS can be as straightforward and as uncomplicated as possible. That's good, because even straightforward ExtJS view definitions can take time to master.

The remainder of this section will assume that you are using ExtJS as your view provider within GluJS (since that is all we initially support).

### Defining a view

To define a view, use `glu.defineView` to name a glu after a view model:

    glu.defineView('helloworld.main',{
        title : 'My first view'
    }); //meaning there must be a view model called 'main', unless this is a layout

A view defaults to an ExtJS `xtype` of 'panel'. If you want to use a different `xtype`, there is no need to extend a base class. Just use the `xtype` you'd like:

    glu.defineView('helloworld.personSet',{
        xtype : 'grid',
        title : 'My grid view'
    });

You can nest ExtJS components within your view as much as you want. The _binding context_ of the view will remain the matching view model no matter how deep you go. So you can have a rich view with many nested components bound to a flat view model if that suits your application.

Views can also be using a _factory_ pattern when using _layouts_ (discussed below).

#### Includes (quick xtype)

Sometimes you want to separate a large view up into smaller parts for easier management, even if the view as a whole is simply bound to a single view model.

The typical ExtJS way is to define a new component class and register its alias so that it is available as an `xtype`.

A shortcut within GluJS is simply to define a view as normal and then reference it as a "local xtype" without declaring a global widget. Each application/application module within GluJS has its own distinct namespace, so rather than register globally GluJS takes care of the "local lookup" for you (and keeps widgets from stomping on one another without spelling out a long namespace).

An example of including one view in another:

    glu.defineView('helloworld.main',{
        title : 'My top level view',
        layout:'hbox',
        items : [{html:'a panel declared inline'}, { xtype : 'aboutCompany'}]
    });
    glu.defineView('helloworld.aboutCompany',{
        title : 'Imagine a bunch of widgets about us'
    });

This just "inlines" the declarative JSON into the parent view - simple.

### Materializing a view

As we saw earlier, views are "materialized' automatically by GluJS. You define them, but you don't manipulate them in any way. Instead, they are created and inserted for you.

You begin by using one of two glu components : `glu.viewport` and `glupanel`. The former creates an ExtJS `Viewport` for you, while the latter is an `xtype` usable anywhere within an ExtJS application.

In either case, by using on of them you will be specifying the _root view model_ (available as `this.root` from all child view models). Both will materialize the matching root view in the appropriate spot; the first as the `Viewport` of the entire web window, the second wherever you place the panel in a non-glu application.

From there, other views are brought in as appropriate, either as a nested view or as a container-bound view.

#### Nested views

Earlier we discussed nested view models and gave the classic example of a master/detail screen relationship. Let's revisit that view model:

    glu.defModel ('assets.main',{
        assetsList : {
            mtype : 'list'
        },
        detail : {
            mtype : 'asset'
        }
    });
    glu.defModel ('assets.asset',{
        id : 0,
        name : '',
        //...etc...
    });

When it comes to the visuals, we know exactly what to do for both - define a view for each of them with the same name, that is one called 'assets.main' and one called 'assets.asset'. But how do we mark the position of the asset view that corresponds to the 'detail' defined in 'main'? In other words, we have to find out a way to insert the corresponding detail view into 'main'.

In this case, we don't want to include a static view, but want a place to mark: _here's the spot to put the corresponding view for whatever view model I'm currently referencing within the detail property_

We can't simply say "put an asset view here" because what if we had two areas of the screen with a detail and had to disambiguate?

Example of two details:

    glu.defModel ('assets.main',{
        assetsList : {
            mtype : 'list'
        },
        detail : {
            mtype : 'asset'
        },
        compareDetail : {
            mtype : 'asset'
        }
    });
    glu.defModel ('assets.asset',{
        id : 0,
        name : '',
        //...etc...
    });

The solution is simple: bind the ExtJS `xtype` of the sub-item:

    glu.defView ('assets.main',{
        layout : 'border',
        items : [{
            //GRID or "MASTER"
            xtype : 'grid',
            region : 'center',
            //a bunch of grid definition here...
        },{
            region : 'right',
            //VIEW CORRESPONDING TO DETAIL GOES HERE!
            xtype : '@{detail}'
        }]
    });
    glu.defView ('assets.asset',{
        xtype : 'form',
        items: [{
            fieldLabel : 'name',
            value : '@{name}'
        },{
            //...etc...
        }]
    });

Now GluJS knows to nest the corresponding view within the proper location _and_ bind it to the nested view model referenced by 'detail'.

Note that you can pass in parent arguments (like 'region') which will override anything set in the defined view. This lets you re-use views across different contexts - the included assets example re-uses an assets view both as inline detail and a pop-up inspector/editor.

GluJS does not yet support "mutable nested views". That is, it currently expects that detail will always remain of `mtype` 'asset'. Since a true mutable view is such a common pattern, that is one of the immediate items on our roadmap. For now, you'll have to put a card view with each of the different possible `mtypes` you might select between and then switch out the card based on the `mtype`. Straightforward actually, but we're always looking to simplify.

There's another common way to materialize a view and that's through container binding - but that is such a powerful feature it is broken out into its own section below.

#### Layouts and View Factories

View organization is not always as simple as views and sub-views. In large applications, certain UI patterns emerge. For instance, you may have a standard screen across all your modules that consists of two-side-by side grids and some buttons for common actions. Every module might need to follow this basic layout pattern, but each with its own unique slight twist.

Cutting and pasting the 90% of code that each screen would share in such a scenario is one (ugly) option. Of course you would end up with a very difficult-to-support, inconsistent application.

A logical alternative would be through the ExtJS inheritance model. That would eliminate cut-and-paste code, but introduce difficult-to-follow complexity. You don't want a class tree of widgets to manage; you just want different screens to look the same.

A much simpler approach is one provided by GluJS and modeled after the standard web templating of a _layout_.

A layout is simply an 'abstract' view factory (it is never instantiated directly) that is referenced by actual views. The layout view is what is actually rendered: but it declares "points of interest" that can be supplied by the actual view. The function you provide as the factory accepts the actual view and can now use the properties it provides to populate these points of interest in the layout.

It sounds more complicated than it is because in fact it is dead simple. In the above example, suppose that we have a right grid, a left grid, and a set of action buttons that can be supplied by any particular view. Let's assume that the rest of the screen is supposed to be "locked down" across all conforming application.

It would look something like the following:

    asset.views.sidebysidelayoutFactory = function(actualView){
        return {
            title : actualView.title + ' Module',
            layout : 'hbox',
            tbar : [{
                text:'~~new~~'
            },{
                text:'~~close~~'
            },{
                text:'~~actions~~',
                menu: actualView.customActions
            }],
            items : [actualView.leftGrid, actualView.rightGrid]
        };
    };
    glu.defView('asset.assets', {
        parentLayout : 'sidebyside',
        leftGrid : {
            xtype : 'grid',
            store : '@{activeStore}'
        },
        rightGrid : {
            xtype : 'grid',
            store : '@{archiveStore}
        },
        title : 'Assets',
        customActions : [{
            text : '~~archive~~',
            handler : '@{archive}'
        }]
    });

That is, the 'sidebyside' layout everyone is sharing assumes that your view will provide a `title`, `leftGrid`, `rightGrid` and a set of `customActions` button definitions. As long as those are provided, the layout factory (referenced in `parentLayout` which triggers using the layout) will render the actual view. Now additional views can do the same thing and will all share a common look and feel.

#### Dialogs

There is no need to define a view for the view model commands `confirm` and `message`. But when you use the `open` command, that assumes a view model with its own defined view.

Floating windows have a few different configuration options and tend to have fixed heights and widths instead of participating in a layout. Since of the cornerstones of GluJS are views that are reusable in a variety of contexts, we need a way to spell out those special options when the view is in "pop-up" mode.

That is provided by the `asWindow` property in any view:

    glu.defView('examples.assets.asset', {
        title:'~~title~~',
        collapsed: '@{!expanded}',
        xtype:'tabpanel',
        items:[
            {xtype:'assetSummary'},
            {xtype:'assetSchedule'}
        ],
        tbar : ['save','revert'],
        //settings when in window mode
        asWindow : {
            defaults : {
                header : false,
                border : false
            },
            title : '~~inspectorTitle~~',
            width : 300,
            height : 200
        }
    });

The `asWindow` block is ignored until the view is triggered through an `open` command in the view model. At that point, the properties within the `asWindow` block are merged into the view itself, replacing any overlapping properties.

### Localization

GluJS is an enterprise framework that assumes every application should be localized. Since every application should be localized and all text displayed to the user needs to be localized, it's important to bake that in as an easy-to-use facility.

To make sure text is localized, simply supply a _localization key_ instead of the actual text. You may have noticed this pattern throughout the examples - you simply wrap the key in a pair of double-tildes (`~~`). The view above declares three localization keys - `screens` and `favorites`. To supply these, simply provide a localization object for that user:

**English locale object for preceding example code**

    assets.locale = {
        screens : 'Screens',
        favorites : 'Favorites'
    }

We recommend that this object be supplied in an appropriately named 'locale' file. However, supplying the appropriate file for the user's locale is outside of the scope of gluJS as a client side library (since sometimes you want to base that on information provided by the server instead of by the client's browser) though it is a fairly simple item to implement.

When you need to localize something within the view model, use the `this.localize` view model method (see the API docs).

The default localizer has a simple but elegant scheme for managing your locale keys. You can keep them all at the root level (`assets.locale`) if you'd like. Or when some seem to correspond more with a particular screen, you can organize them by the names of your view model. For instance, if you have a child view model, you can do the following:

    glu.defView ('assets.main',{
        title : '~~title~~',
        layout : 'border',
        tbar : [{ text : '~~name~~'}],
        items : [{
            xtype : 'grid',
            region : 'center',
            //a bunch of grid definition here...
        },{
            region : 'right',
            xtype : '@{detail}'
        }]
    });
    glu.defView ('assets.asset',{
        title : '~~title~~',
        xtype : 'form',
        items: [{
            fieldLabel : '~~name~~',
            value : '@{name}'
        },{
            //...etc...
        }]
    });
    glu.assets.locale={
        name : 'Name',
        main : {
            title : 'Assets Application'
        },
        asset : {
            title : 'Asset Detail',
            name : 'Asset Name' //overrides the one in the root
        }
    };

This organization by view model effectively and naturally 'namespaces' your localization keys to avoid conflicts without them becoming long and unwieldy.

#### Substitutions (parameterized localization)

Simple text is not always enough - sometimes you need to localize a phrase with arbitrary value substitutions in the middle. You can't simply concatenate in your view model because different languages will order things differently. For that, gluJS supports `string format`-like functionality.

When localizing from a view model, along with the key you can pass in values that the key will use in rendering the text. If you want to make sure you can pass in the first name on the message, just do this:

    //View model
    glu.defModel('helloworld.main',{
        arriving : true,
        firstName : 'Mike',
        message$: function() {
            return glu.localize (this.arriving ? 'greeting' : 'farewell', {name:this.firstName});
        }
    });
    //View
    glu.defView('helloworld.main',{
        title: '@{message}',
        tbar : [{
            text : '~~arrivalStatus~~',
            pressed : '@{arriving}'
        }]
    });
    //Locale
    glu.helloworld.locale = {
        greeting : 'Hello {name}',  //parameterized with a name
        farewell : 'Goodbye {name}'
    };

You can use named parameters (shown above) or positional parameters like `{0}`,`{1}`, etc. Through the "magic" of glu formula support, the message will now be recalculated whenever either `arriving` _or_ `firstName` changes.

There is currently no support within the view for parameterizing the locale key. However, there is a "backdoor" that lets you access view model properties from within your locale key:

    glu.assets.locale = {
        removeAssetsMessage:'This will archive {assetSelections.length} asset(s). Would you like to continue?'
    }

Will work even if you don't provide the key, assuming `assetSelections` is an array property on the view model. Keep in mind that this is probably not the best way to organize things because it forces your locale keys to be somewhat "view model-aware" but is provided as an option for corner-cases.

#### Custom localizer

If you already have a localization scheme in place at a higher level of your application, or prefer a different organization, you can replace the default localizer with one of your own by providing a function to `glu.setLocalizer(function(config){})`. The provided function will be supplied a `config.key`, a `config.ns`, a `config.viewmodel` and a `config.params` for each localization call and you can then locate your localized text as needed.

## View: Binding

Of course, views need to be _bound_ to a view model in order to have any behavior. This is done through the _binding syntax_.

### Binding syntax

The binding syntax supports a number of straightforward operators. Keep in mind we want the binding to be concise so that the behavior can be kept in the view model where it belongs. To that end the operators are very simple and concentrate only on _what to bind_ (how to locate and process the property) and _how to bind_ (also known as "binding directives"). Let's start with the first kind:

* `!` Inverts a boolean value. Example: `collapsed:'{@!expanded}'`
* `.` Allows you to naturally traverse into child objects. Example: `text:'{@activeItem.displayText}'`
* `..`: Find the property at this level or any level above. Example: `save:'{@..save}'` will bind to the save command/function at this view model level and if it cannot find it, walk up the `parentVM` chain until it does find it.

Now for the binding directives (these all come immediately after the `@` sign and before the `{` to indicate that they are about _how_ and not _what_ to bind.

* `1` One-time binding - do not listen or update. Example: `value:'@1{displayText}'` will provide an initial value to the control but the control will never affect `displayText` and changes to `displayText` will never affect the `value`.
* `&gt;` One-way binding - update the view when the control changes, but not vice versa, making the control binding "read-only". Example: `value:'@&gt;{displayText}'` will initially set the value to `displayText` and will track changes to that in the view model, but will never itself update the view model.
* `?` Optional binding - do not raise an error if the matching view model property is not found. This is usally only used when working with view adapters (extending GluJS) as ordinarily you want to know when you have a "bad binding'. Example: `value:'@?{displayText}'` will let the application continue smoothely even if there is no `displayText` on the view model.

### Binding properties

Binding properties we've already seen many examples of:

    //View model
    glu.defModel('helloworld.main',{
        arriving : true,
        message$: function() {
            return this.arriving ? "Hello World!" : "Goodbye World!"
        }
    });
    //View
    glu.defView('helloworld.main',{
        title: '@{message}',
        tbar : [{
            text : '~~arrivalStatus~~',
            pressed : '@{arriving}'
        }]
    });

In the example above, we are binding the `pressed` property of a button to the `arriving` property in the view model, and the `title` property of a panel to the `message` property on the view model.

How do we know which properties are bindable? The simple answer is that any configuration property defined for a control within ExtJS is bindable. At a very minimum, it will be initially configured to the initial value of that property - meaning at a minimum it will be a 'one-time' binding.

Many properties support one-way binding (model to control). If the control has a function of the form `setFoo` where `foo` is the name of the configuration property, then there is guaranteed one-way binding support (at a minimum). For instance, the `title` panel config property is bound to the `message` formula property on the view model. Since `setTitle` is a method on the ExtJS `panel`, it is guaranteed to work.

When their is a mismatch in naming between configuration property and the method on the control, that is no cause to worry. GluJS contains binding _adapters_ for each component that take care of the mismatch and call the appropriate control method for you (if such a method is available - a few configuration properties really can't be easily changed after initialization).

Controls in turn may update one or more properties they are bound to. Controls derived from _field_ for instance always have a way to update their `value` property. Whenever this is the case (and you haven't otherwise indicated in a binding directive), GluJS will automatically also bind from control -&gt; view model. That means whenever the value of the control changes, the matching property on the view model will be updated. This is done through that control's GluJS binding adapter, which listens on an appropriate event emitted by the control and updates the matching view model property accordingly.

Control config properties that are available for two-way binding per control are documented in the binding adapter API documentation.

In the example above, we already saw the `title: '@{message}'` binding. Since the title of a panel isn't editable, there is no event to listen on and no logical control -&gt; view model binding. However, the `pressed` state of the button _is_ changeable by the user (because it is a toggle button). The `button` adapter for GluJS knows to listen on the `toggle` event from the button; as the user toggles the button GluJS will update the `message` property accordingly.

#### Inline text formulas

Here and there it will be convenient to have a facility to 'inline' a text-replacement formula within a view. For instance, you may want a one-way binding that calculates the name of a css class:

An example of hello world that changes the styling of the button:

    glu.defModel('helloworld.main',{
        arriving : true,
    });
    //View
    glu.defView('helloworld.main',{
        tbar : [{
            text : '~~arrivalStatus~~',
            pressed : '@{arriving}',
            cls : 'button-arriving-@{arriving}'
        }]
    });

This will make the `cls` change from 'button-arriving-true' to 'button-arriving-false' dynamically (and the GluJS component adapter will set the css class accordingly).

The preferred option is to make the formula explicit in the view model, but this on occasion makes more sense (when there are many of them or when writing a transformer). And of course when the strings are meant to be read, the preferred option is to use the localization facility instead so no text is hard-coded and non-localizable.

### Binding commands

Sometimes when the user manipulates a control, it isn't so much a state that changes, but a one-time request for some action. For instance, when the user clicks a non-toggle button, they aren't changing a state but just signifying "execute the command attached to the button". Likewise in a grid, when the user double-clicks a row no state actually changes - instead it usually means "open this item up for further inspection".

These are called _commands_ within GluJS. As we saw earlier in the view model, a GluJS command is as simple a function on a view model.

ExtJS components raise command-oriented events in two ways. First, through events like `click` and `doubleclick`. Second, through shortcuts like `toggleHandler` and `handler`.

Commands are bound in the same way as properties; by supplying the name of the view model command in the appropriate control config property binding (the event listener or the handler).

Here's an example of both kinds of command bindings:

    //View model
    glu.defModel('assets.main',{
        archiveAsset : function(){
            //invoke an archive operation on the backend
            var ids = this.selectedIds();
            //...etc....
        },
        openAsset : function(model){
            //open an asset detail dialog for viewing/editing
            this.open (this.model({mtype:'asset',id:model.id}));
        }
    });
    //View
    glu.defView('assets.main',{
        xtype : 'grid',
        listeners : {
            itemdblclick : '@{openAsset}'
        },
        tbar : [{
            text : '~~archive~~',
            handler : '@{openAsset}'
        }]
    });

#### Parameterized commands

In the preceding example, `archiveAsset` is a typical "two-step" action in which you select something (which is tracked in the view model) and then invoke an action (by hitting a button for instance). Since the selection is a separate step up-front, by the time the command is invoked the view model already knows the selections and can use them without being passed in. This is one of the nice ways the view model pattern simplifies the architecture.

Yet sometimes you have a command that only makes sense with a parameter. For instance, the `openAsset` command _selects and invokes_ in a single operation; the user can arbitrarily double-click on any row and intend 'open _this one_'. There is no way for the `openAsset` command to rely on a previous state.

In other words, the event/command itself is inherently _parameterized_. In those cases, GluJS has a convenient built-in shortcut. ExtJS events that are inherently parameterized always pass in the data target as the second (or later) parameter. GluJS simply passes in every argument but the first into your command (in the case of `itemdblclick` it passes in the `Ext.data.Model` you just double-clicked). That's why the `openAsset` in the example will get the `model` reference it is requesting in its signature.

Another case for parameterization is when you have multiple buttons logically pointing to the same command, each with slightly different options. Rather than creating a unique command function for each, it makes sense to switch out the options as parameters.

To that end, GluJS will automatically append the `value`, `name`, or `itemId` of the control as part of its command invocation.

Example of value-based command parameters:

    glu.defModel ('assets.main',{
        screenList : {
            mtype : 'list'
        },
        openScreen : function (screenName) {
            this.screenList.add(this.model(screenName));
        }
    });
    glu.defView ('assets.main',{
        tbar : [{
            text : '~~archives~~',
            handler : '@{openScreen}',
            value : 'archiveSet'
        }, {
            text : '~~live~~',
            handler : '@{openScreen}',
            value : 'openSet'
        }]
    });

In the provided example, openScreen be called with either 'archiveSet' or 'openSet' as the screenName based on which button is pressed.

GluJS automatically appends the remaining arguments from the calling event as defined in ExtJS _after_ it passes in the parameter value (if one exists).

We are planning on adding more explicit parameterization to the binding syntax in the future so that we are not leaning on additional properties in the control that may have other meanings. For instance, something like `@handler:{openScreen('archiveSet')}`. As always, feedback is welcome.

### Container binding (templating)

Static views are usually not all there is in a reactive application. In fact, a very common pattern is managing and rendering a list of items with:

* a changing list of (possibly mixed in type) models
* a way to display the list visually by binding to the list and rendering each item through a 'template'
* (usually) a single 'active' or 'focused' item
* (sometimes) the ability to select multiple items (for an operation).

ExtJS has some support for this. The most obvious example is the grid, which renders each item (a record or model) in a list (store) - but you have to use grid columns or your own HTML renderers and not ExtJS controls, and it is assumed that all rows are the same. A less-commonly used option is the `DataView`. It is much the same as a grid, but instead of the template being a set of ExtJS components (as one would expect), it is instead a raw HTML `xtemplate` that you supply and again assumes similar rows. Furthermore, since the appeal of a widget set like ExtJS is that you _are not having to write_ cross-browser HTML, using the `DataView` can be frustrating and counter-intuitive.

ExtJS also supports normal `container` structures like tabs, accordion layouts, menus, etc. which _do_ let you put a variety of items inside them. However, these don't let you bind what they contain to a store. You must manually create and maintain the appropriate child components. This is obviously redundant and repetitive for `grid`s and `dataview`s; it is equally redundant and repetitive here.

GluJS unifies the 'templated list' pattern into a single, simple concept called `container binding` or more specifically `items binding`.

In short, instead of having limited, manual, idiosyncratic support for rendering a 'templated' list, you can now enable _any_ container within ExtJS simply by binding its `items` property to a GluJS list or ExtJS store:

    glu.defModel('assets.main',{
        assetList : {
            mtype : 'list'
        }
    });
    glu.defView('assets.main',{
        layout : 'vbox',
        items : '@{assetList}'
    });
    glu.defView('assets.asset',{
        xtype : 'form',
        items : [{ xtype: 'displayfield'},{xtype:'button}] //etc...
    });

The preceding example will add an asset form panel (laid out vertically within the main view) for each view model within the assets list. If an asset is added, its corresponding view will show up in the correct spot just like a row in a grid. If the asset is removed from the list, it is removed from the view.

This works for tab panels too:

    glu.defView('assets.main',{
        xtype : 'tab',
        items : '@{assetList}'
    });

In short, it works for any ExtJS control that is a `container` and has an `items` property. It also supports common ExtJS shortcuts to single components off of a control. Consider the `tbar` shortcut, which lets you add in an array of button definitions as a short cut to `{xtype : 'toolbar', items : [buttonsArray]}`:

    glu.defView('assets.main',{
        xtype : 'tab',
        tbar : '@{assetList}'
    });

#### Item Templates

The previous example raises an interesting question: isn't it a bit overkill to force each button to be its own GluJS view? What if I just want a "one-off" template against that record/model/view model?

In the parent container, you can indicate that you want to provide a custom template by providing an object or function as the `itemTemplate`. Let's say I have the items in a menu bound to a list (quite common). Perhaps the concept is that the server provides a list of my favorite shortcut screens (and I need this to fit within a menu instead of looking as a combo box). When you pick a favorite, it adds it as a tab. The definitions would look like this (concentrating on the view side of things):

    glu.defModel('assets.main',{
        favoriteList : {
            mtype : 'store'
            //more store setup goes here...assume a 'name' field and an 'id' field.
        },
        addScreen : function (screenId){
            //...add the appropriate screen to the list of favorites kept in a tab view
        }
    });
    glu.defView('assets.main',{
        tbar : [{
            text : '~~screens~~',
            menu : [{
                text : '~~favorites~~',
                menu : '@{favoriteList}' //shortcut definition
                itemTemplate : {
                    text : '@{name}',
                    value : '@{id}',
                    handler : '@{addScreen}'
                }
            }]
        }]
    });

The 'Favorites' menu item will now follow the contents of the favorites list. When an item is selected, it will invoke a parameterized command (`addScreen`) with the appropriate value parameter. If `favoriteList` is modified, the menu contents will update themselves to match.

Item templates (and item binding in general) are a powerful way to extend ExtJS 'inline'; in many situations it completely replaces the need for custom components.

### Binding by convention

We've up until now covered "explicit" binding of control config properties. This already is a powerful pattern for organizing UI and greatly simplifying code. Yet as you use it, you will inevitably notice that binding patterns tend to repeat themselves.

Consider the case of a set of fields in a form with some standard commands in the toolbar:

    glu.defView ('assets.asset', {
        xtype : 'form',
        tbar : [{
            text : '~~save~~',
            handler : '@{save}',
            disabled : '@{!saveIsEnabled}
        },{
            text : '~~revert~~',
            handler : '@{revert}',
            disabled : '@{!revertIsEnabled}
        }],
        items : [{
            fieldLabel : '~~name~~',
            value : '@{name}',
            disabled : '@{!nameIsEnabled}',
            valid : '@{nameIsValid}'
        }, {
            fieldLabel : '~~status~~',
            value : '@{status}',
            hidden : '@{!statusIsVisible}',
            valid : '@{statusIsValid}'
        }, {
            xtype : 'fieldset',
            collapsed : '@{!archiveSectionIsExpanded},
            items : [{
                fieldLabel : '~~lastInventory~~',
                value : '@{lastInventory}'
            },{
                fieldLabel : '~~recoveredLicenses~~',
                value : '@{recoveredLicenses}',
                hidden : '@{recoveredLicensesIsVisible}'
            }]
        }//...etc....
    });

These are very common bindings for rich forms with validation and fields dependent on the values of other fields. Since we're following the naming convention established earlier for [guard functions][2], the names are deterministic based on the property we are binding to.

Here's the magic shortcut: provide a `name` property with the name of the appropriate property or command (the name only, not a binding) and let gluJS apply the bindings for you:

    glu.defView ('assets.asset', {
        xtype : 'form',
        tbar :[{
            name : 'save'
        },{
            name : 'cancel'
        }],
        items : [{
            name : 'name',
        }, {
            name : 'status',
        }, {
            xtype : 'fieldset',
            name : 'archiveSection',
            items : [{
                name:'lastInventory'
            },{
                name: 'recoveredLicenses'
            }]
       }//...etc....
    });

Each ExtJS control adapter has a set of 'conventions' that it will apply based on the nature of the control. Some are standard across all components (like `hidden`). Others are specific to certain components (like `fieldLabel` and `collapsed`). These are all detailed in the API documentation. When GluJS sees a 'name' property, it applies the bindings automatically using the optional flag - so if the matching view model property isn't there it just ignores them. You can always override the convention by explicitly setting the component property to whatever you want.

Convention-based binding is not just a shortcut - it's a way to even further simplify your development workflow to "stay in the zone" of setting up story-based specification tests and then implementing the view model.

Imagine that you want to add a validator to the `lastInventory` property. Add the appropriate steps in your story, and let the test fail so that you know the test is valid. Then supply the formula property according to naming convention:

        //viewmodel...
        lastInventoryIsValid$:function(){
            return this.date &gt; this.minDate ? true : 'Too far back';
        }

Your test now passes. Fire up the application and the view behavior will be already "wired" in because you followed the convention and used convention-based binding. Repeat for the next bit of functionality.

We haven't gotten to GluJS extension points yet, but it's worth mentioning that this pattern enables even more than a simplified workflow. Convention-based bindings are just one example of "cross-cutting" interceptors within GluJS. Since it is straightforward to add your own (see Extending GluJS), it becomes a powerful means to enforce application consistency. You can use that single key not only for localization, but to determine even the type of control to use (within a field) or whether to even include the control based on security permissions. These become 'application' level concerns so that they are enforced automatically instead of being enforced ad-hoc by each developer when they remember - the rule in GluJS application design is that if some feature appears everywhere, then it probably should appear nowhere and be removed to infrastructure.

Name-based bindings come with one final shortcut: if you just provide a string in an `items` array, it assumes you mean a configuration of the form `{ name: 'stringYouProvided'}`. So the previous view can be simplified further.

This shortcut is especially handy when you would like to automate button and control generation:

    glu.defView ('assets.asset', {
        xtype : 'form',
        tbar :['save','cancel'],
        items : ['name','status',{
            xtype : 'fieldset',
            name : 'archiveSection',
            items : ['lastInventory','recoveredLicenses']
       }//...etc....
    });

Plus it's just a whole lot nicer to read and manage.

We recommend that you lean heavily on your application as it not only makes your code much more concise (and so less expensive to maintain), it gives you the ability to logically "build your UI" at run-time based on cross-cutting enterprise concerns - like 100% consistent controls, localization, and security.

## Extending GluJS

GluJS is itself built as a series of simple stacked patterns; the 'convention-based binding' covered in a previous section is a great example since all it does is walk the view configs, look for a 'name' property, and then modify the configuration by adding some standard bindings. You could build the same thing yourself within GluJS fairly easily.

Those bindings in turn reduce to a standard pattern of 'find the event I can attach to for changes from the component' and 'let me invoke the property method on the component'.

All of these operations can be reduced to a simple concept of `view adapters`. View adapters are special javascript singleton objects that tell gluJS how to either

1. normalize binding on a per-control, per-property basis (_component adapters_) or
2. modify the configuration block to enforce some sort of pattern for this component (_transformer adapters_) or
3. do the same across all components (_plugin adapters_)

In fact, a good chunk of GluJS intelligence resides in the adapters - the GluJS core is pretty straightforward. Even though there are three types of adapters, they all share the identical API. The different adapter types refer to _roles_ the adapters play and when they are invoked, not to any essential difference.

### View component adapters

Let's take a look at a fairly simple component adapter:

**Example: gluJS button adapter (stripped of comments)

    glu.regAdapter('button', {
        extend : 'component',
        defaultTypes : {
            menu : 'menu'
        },
        isChildObject : function(propName){
            return propName==='menu';
        },
        menuShortcut : function(value) {
            return {
                xtype:'menu',
                defaultType:'menuitem',
                items:value
            };
        },
        applyConventions: function(config, viewmodel) {
            Ext.applyIf (config, {
                handler : glu.conventions.expression(config.name,{up:true}),
                pressed : glu.conventions.expression(config.name + 'IsPressed', {optional:true}),
                text : glu.conventions.asLocaleKey(config.name)
            });
            glu.provider.adapters.Component.prototype.applyConventions.apply(this, arguments);
        },
        pressedBindings:{
            setComponentProperty:function (newValue, oldValue, options, control) {
                control.toggle(newValue, true);
            },
            eventName:'toggle',
            eventConverter:function (control) {
                return control.pressed;
            }
        }
    });

We're not going to go into all of the details - that's covered in the API docs. More important is to get a feel for how GluJS is structured and how you can extend as needed.

This is a component adapter for the `Ext.button.Button` component. Here are some of the parts you're seeing here:

* `glu.regAdapter('button',` \- we name component
* `extend : 'component'` \- inherits from the `component` adapter. You can chain adapters to match the control hierarchy of the widget set. Inheriting from `component` means we'll get the standard naming conventions and bindings.
* `defaultTypes` through `menuShortcut` \- tells gluJS about ExtJS definition shortcuts so that it can walk the view tree properly
* `applyConventions` \- applies conventions when gluJS detects a `name` property. Notice that the `handler` is a required binding (if you call a button 'save' there better be a 'save' command on the view model) while 'pressed' is an optional binding.
* `pressedBindings` \- provides special helpers when binding to the `pressed` component property, such as how to set the component property in response to view model changes (`setComponentProperty`) which event to respond to `toggle` and how to return the event value `eventConverter`.

Whenever we come across a component property (or component) that we have yet 'gluified', we simply go into the appropriate adapter (or create a new one) and add the bindings. In other words, instead of having 'hacks' spread throughout the code to remember that you have to call 'toggle' to change the 'pressed' state of a button, we set it up one time in the adapter and then can ignore an unnecessary 2/3 of the ExtJS control API (along with the other GluJS benefits).

If you have a custom control of your own, you can just make an adapter as above and register it. Even simpler, make sure you controls have a consistent `foo:value`/`setFoo()` pattern and you will minimize your need for adapters in the first place.

### View transformer adapters

Ever need to create a custom control that was just a collection of controls or some simple tweaks, and ended up having to make a whole complicated ExtJS component class? Ever wanted a plugin that could change everything about the control, even including its xtype? That would be obviously impossible within ExtJS, since plugins are invoked _after_ a specific component is created.

What you would need is the ability to transform the configuration block itself _before_ ExtJS started making components off of it. That's all a transformer is. It lets you stick with the most straightforward part of ExtJS - the configuration properties we use when setting up views - and avoid the internal complexities and limitations of sub-classing a component.

Here's an example of a plugin provided with gluJS that actually determines the xtype of a property by a set of rules _based on the data type of the property_. In other words, if the property is a date / time, you get a date time picker, a boolean becomes a checkbox, a field constrained by another becomes a combo-box, etc.

**Example of an 'autofield' transformer adapter (code collapsed for clarity)**

    glu.regAdapter('autofield', {
        beforeCollect: function (config, viewmodel){
            var key = config.name;
            //lookup key in the data definition
            //...
            //build config based on data type
            //...
            else if (field.type == 'integer' || field.type == 'int' || field.type == 'number') {
                config.xtype = 'numberfield';
            }
            else if (field.type == 'boolean') {
                config.xtype = 'checkbox';
            //...
        }
    }

To use a transformer that will decide the xtype, we simply use it _as_ an xtype. So now when we do this in that earlier example:

    glu.defView ('assets.asset', {
        xtype : 'form',
        tbar :['save','cancel'],
        defaultType: 'autofield',
        items : ['name','status',{
            xtype : 'fieldset',
            name : 'archiveSection',
            defaultType: 'autofield',
            items : ['lastInventory','recoveredLicenses']
       }//...etc....
    });

Each field will _automatically_ get its proper type based on its data value. When designing enterprise applications, this gives you the ability to _standardize the feel of the application_ by enforcing control consistency. Want all of your booleans to be a yes/no radio button instead of a checkbox? No problem, just change the `autofield` adapter and you can enforce the change globally throughout the application. Of course, wherever exceptions are needed, you can fall back to explicit `xtype`s (as shown in the `fieldset` definition above).

Perhaps you know the xtype, but you would like to transform it based on a pattern. For instance, suppose you had a notion of "change tracking" in a field in which you needed to see the original value of the control laid out in a display field next to the current value. Since this is a fundamental change in each field, you might be tempted to make a new type of control per field type ('changeawareradiobutton', 'changeawaretextfield', etc.), or make a special type of container that throws out the controls you add to it and rebuilds the structure. But not only would that be a great deal of custom work, you couldn't quickly change back to contexts in which you _didn't_ need that capability. In short, you don't have many good options.

With the ability to intercept the config _before_ rendering and the ability to specify a `transform` adapter at any point, you can handle these sorts of enterprise scenarios quite simply. Just make an adapter that modifies the config tree (perhaps to a `fieldcontainer` or a `compositefield`) just like the autofield adapter. Since you're just editing the config in code there is no ExtJS or any other magic you need to know.

Then to apply it use the `transforms` property (there's a `defaultTransforms` shortcut similar to `defaultType`):

    glu.defView ('assets.asset', {
        xtype : 'form',
        defaultTransforms : ['changeaware'],
        items : ['name','status']
       }
    });

Now the fields will have the transform applied. You can chain transform adapters - when you use one in the xtype it goes first, followed in order by any provided in the transforms list. Therefore the following will both determine the appropriate `xtype` for each component, it will also then transform that component into a 'change aware' version.

    glu.defView ('assets.asset', {
        xtype : 'form',
        tbar :['save','cancel'],
        defaultType: 'autofield',
        defaultTransforms:['changeaware'],
        items : ['name','status',{
            xtype : 'fieldset',
            name : 'archiveSection',
            defaultType: 'autofield',
            defaultTransforms:['changeaware'],
            items : ['lastInventory','recoveredLicenses']
       }//...etc....
    });

To remove the 'change aware' behavior you would simply remove the `defaultTransforms` property, making it easy to add or remove this behavior at any point in the application without disturbing your work.

### View global adapters

Sometimes you want that adapter to run _everywhere_ without the developer having to deal with. A common example of this would be a permissions-applier adapter that would edit the view tree based on what the user is permitted to do. You don't want the developer to have to worry about; instead you want to inspect all of the view components as they materialize. If you are using `name` consistently, then you have everything you need to enforce a permissions structure based on view model and property or command.

    glu.regAdapter('permissions', {
        beforeCollect: function (config, viewmodel){
         var areaKey = viewmodel.viewmodelname;
         var specificKey = config.name;
         if (!assets.permitted(areaKey,specificKey) {
            config.disabled = true;
         }
         //in this adapter we disable, but we could remove, hide, etc...
        }
    }

     glu.plugin ('permissions');

The `glu.plugin` function lets you take any adapter and run it on every control in the pipeline.

In short: GluJS adapters let you enforce core enterprise concerns in a concise, simple, repeatable manner.

## Conclusion

We hope you enjoyed your tour of GluJS. If you have any questions, corrections, or any other feedback, please contact me at [mike@conarrative.com][3].

_Copyright 2012 CoNarrative. All rights reserved._

[1]: http://pivotal.github.com/jasmine/
[2]: guard-functions
[3]: mailto:mike@conarrative.com
  