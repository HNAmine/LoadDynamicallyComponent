"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/bufferCount');
require('rxjs/add/operator/map');
var EdgeService = (function (_super) {
    __extends(EdgeService, _super);
    function EdgeService() {
        _super.apply(this, arguments);
    }
    EdgeService.prototype.getCoordinates = function () {
        return this.asObservable().bufferCount(2).map(function (buffer) {
            return { first: buffer[0], second: buffer[1] };
        });
    };
    return EdgeService;
}(Subject_1.Subject));
exports.EdgeService = EdgeService;
//# sourceMappingURL=edge-service.js.map