import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} {{who}}</h1>`,
})
export class AppComponent  { name = 'Angular'; who = "nauzet3" }
