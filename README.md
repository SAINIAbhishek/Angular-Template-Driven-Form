# Angular 2's Template-Driven Form

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

##Application link

http://abhisheksaini.eu/projects/template_driven_form

In template driven form, angular infers the form object from the DOM. Here, we simply setup the template in HTML and angular will automatically infer the structure of this form.

##ngModel

We place this on input to tell the angular that it is a control of the form. To be recognized as a control in the form we give angular one more piece of information i.e. the name of this control and that is define by placing the noraml HTML attribute "name = name_of_control" on the input

##(ngSubmit)

Angular gives a directive that is placed on the form element as a whole. It is called (ngSubmit), and it holds only one event we cam listen to. This event is made available by this directive and will be fired whenever this form is submitted.

## #localRefForm="ngForm"

It tells angular to give us the access of the form you created automatically. This is how we get the access of the JavaScript object created by the angular automatically.

## @ViewChild

It is a decorator. It allows us to access the local refence element in the typescript code. 

##In-built validators

https://angular.io/api/forms/Validators

##F`or the template-driven approach, we need the directives. We can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive 

##We can inspect the properties of the associated FormControl (like validity state), we can also export the directive into a local template variable using ngModel as the key (ex: #myVar="ngModel").

## [ngModel]="value"

Property binding or One-way binding. Can be bound to default value. With the help of this we can also prepopulate the input field with default value. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
