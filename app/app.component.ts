import { Component } from '@angular/core';

import {Graph} from "./work/graph"

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1><graph></graph>';
  directives: [Graph]
})
export class AppComponent { }
