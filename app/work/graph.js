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
var edge_1 = require('./edge');
var vertex_1 = require('./vertex');
var edge_service_1 = require('./edge-service');
var Graph = (function () {
    function Graph(componentResolver, edgeService) {
        this.componentResolver = componentResolver;
        this.edgeService = edgeService;
    }
    Graph.prototype.ngOnInit = function () {
        var _this = this;
        this.edgeService.getCoordinates().subscribe(function (coordinates) {
            _this.componentResolver.resolveComponent(edge_1.Edge).then(function (factory) {
                var res = coordinates.first.viewContainer.createComponent(factory);
                res.instance.setCoordinates(coordinates.first, coordinates.second);
            });
        });
    };
    Graph = __decorate([
        core_1.Component({
            selector: 'graph',
            directives: [vertex_1.Vertex],
            templateUrl: 'app/work/graph.html',
            providers: [edge_service_1.EdgeService]
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver, edge_service_1.EdgeService])
    ], Graph);
    return Graph;
}());
exports.Graph = Graph;
//# sourceMappingURL=graph.js.map