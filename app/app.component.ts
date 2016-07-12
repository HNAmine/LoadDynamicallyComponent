import { Component } from '@angular/core';

import {Graph} from "./work/graph"
import {TowerComponent} from "./replay/tower"

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1> <tower></tower>',
  directives: [Graph,TowerComponent]
})
export class AppComponent { }
