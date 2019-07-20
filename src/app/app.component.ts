// package from Angular core
import { Component } from '@angular/core';

// decorator with meta data for components

@Component({
  // selector: will be used in HTML page, loaded; with generator CLI adds it for us; ng g c mycomponent
  selector: 'app-root',
  // template to check and develop
  templateUrl: './app.component.html',
  // component style
  styleUrls: ['./app.component.css'],
})
// {{title}} dynamic content in template, in single element like div
// check app.component.html for template
export class AppComponent {
}
/*  // exemple de Typescript; attributs; à ajouter dans AppComponent pour tester liste données
  name: string = 'mon Projet';
  title: string = 'angular-crash-todolist';
  content: string = ' à compléter';
  author: string = 'auteur';

  // methods:
  constructor() {
    console.log(1);
    this.content = 'Ceci est un site test';
    this.changeName('Jaime Sastre');
  }

  changeName(name: string): void {
    this.author = name;
  }*/

