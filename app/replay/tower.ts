import {Component, ComponentResolver, ViewChild,ViewContainerRef,ElementRef, OnInit} from '@angular/core';
import {Item1Component} from "./item1"

@Component({
  selector: 'tower',
  template: '<h1>tower</h1> <br> <h2 #vertex></h2>',
  // directives: [Item1Component]

})
export class TowerComponent implements OnInit {

  @ViewChild('vertex') element: ElementRef;

  constructor(private componentResolver: ComponentResolver, private vc: ViewContainerRef) { }

  ngOnInit() {
    this.componentResolver.resolveComponent(Item1Component).then(factory => {
      // console.log(this.vs);
      let res = this.vc.createComponent(factory);
      //res.instance.setCoordinates(coordinates.first, coordinates.second);
    });


  }

  ngAfterViewInit(){
    console.log(this.vc);
  }

}
