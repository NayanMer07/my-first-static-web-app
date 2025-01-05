import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div><br/><div>Hello {{Name}} are you ready to build {{WebType}}</div>`,
})
export class AppComponent {
  value = 'World';
  Name = "Rajesh";
  WebType ="Static Web App and Api";


}
