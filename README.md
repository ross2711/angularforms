# Angularforms

## Reactive and Template-Driven Forms
What Are Angular Reactive Forms?
Reactive forms are also known as model-driven forms. This means that the HTML content changes depending on the code in the component.

## What Are Angular Template-Driven Forms?
Template-driven forms are driven by derivatives in the template. This means that you will see derivatives such as ngModel in the template as opposed to the code. 

## Differences Between Template-Driven and Reactive Forms
Template-driven forms use the FormsModule, while reactive forms use the ReactiveFormsModule.
Template-driven forms are asynchronous, while reactive forms are synchronous.
In template-driven forms, most of the interaction occurs in the template, while in reactive-driven forms, most of the interaction occurs in the component.

## Advantages and Disadvantages of Template-Driven Forms
Although template forms are easier to create, they become a challenge when you want to do unit testing, because testing requires the presence of a DOM.

## Advantages and Disadvantages of Reactive Forms
It's easier to write unit tests in reactive forms since all the form code and functionality is contained in the component. However, reactive forms require more coding implementation in the component.


===================================================================================================================================


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
