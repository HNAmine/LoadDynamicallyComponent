"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item1_1 = require("./item1");
var TowerComponent = (function () {
    function TowerComponent(componentResolver, vc) {
        this.componentResolver = componentResolver;
        this.vc = vc;
    }
    TowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.componentResolver.resolveComponent(item1_1.Item1Component).then(function (factory) {
            // console.log(this.vs);
            var res = _this.vc.createComponent(factory);
            //res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    };
    TowerComponent.prototype.ngAfterViewInit = function () {
        console.log(this.vc);
    };
    __decorate([
        core_1.ViewChild('vertex'), 
        __metadata('design:type', core_1.ElementRef)
    ], TowerComponent.prototype, "element", void 0);
    TowerComponent = __decorate([
        core_1.Component({
            selector: 'tower',
            template: '<h1>tower</h1> <br> <h2 #vertex></h2>',
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.ViewContainerRef])
    ], TowerComponent);
    return TowerComponent;
}());
exports.TowerComponent = TowerComponent;
//# sourceMappingURL=tower.js.map