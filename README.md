# **The SPA application that realizes the MVC pattern.**

This application is an attempt to implement the MVC pattern. Also it is my personal page. It consists of a model, a viewer and a controller.
They interact with each other using custom events. Each of them can emit and listen the events.

## The Model.

The model contains the structure of the application. The application consists of a header, navigation bar, main body, footer. The model can get to the viewer the object with the app's structure. The model supports two languages english (by default) and russian. It has methods to change the language, the context of the main part.

See the code realizing the model in the file ./src/ts/app/model.ts.

## The Viewer.

The viewer gets the object of the structure from the model and builds from it the HTML element to place it on the page. 

See the code realizing the viewer in the file ./src/ts/app/viewer.ts.

## The controller.

The controller can collect the listeners and add them as to the whole page so to a single element. All of events emitted from user's actions handles the controller.

See the code realizing the controller in the file ./src/ts/app/controller.ts.

## Build the application.

To build the application enter in the console *npm run build*.

Also you can visit the page with this application *[GitHub](https://armonlis.github.io/examples/cv)*.
