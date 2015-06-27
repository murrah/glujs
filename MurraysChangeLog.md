##Change Log Notes
I thought it was clearer if I summarised the changes I made to the original repo, as well as what remains broken.
Since I am a GluJS noob, I couldnt have done this without the help of [Ryan Smith](https://github.com/smithrp/glujs)

1. I reorganised the folder structure so that GluJS, ExtJS and Jasmine libraries are shared between the examples
1. I preloaded Jasmine 2.3.4 (You will need to copy your ExtJS 4.x library to /lib/extjs-4.x folder so that the bootstrap.js and ext*.js files and folders etc are in that folder)
1. I preloaded a working version of GluJS minified files courtesy of [Ryan Smith](https://github.com/smithrp/glujs)
1. I didnt try building the GluJS library so I dont know if the build as described in the README will work. I just used Ryan's files. See /lib/glujs
1. I also dont know whether the instructions for *Testing* your changes to GluJS itself, or using *jsduck* are correct
1. I fixed what I could to get the examples working:
    1. Helloworld and ToDoMVC apps and specs work out of the box
    1. Assets app works but the spec is broken
    1. Assets-touch is not complete. It wont work at all and I didnt touch it
1. I added an example of my own that I used to learn GluJS. It is called testone. It's a bit more complex than the helloworld example but not as complex as the others. I am sure it can be improved!
1. I didn't change anything in the following folders: /docs, /spec, /src, /views nor anything else in this repo root apart from the README.md file

Murray

June 27th, 2015
