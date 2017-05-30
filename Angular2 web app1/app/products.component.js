"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_1 = require("./products");
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.gridData = products_1.products;
    }
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <kendo-grid [data]=\"gridData\" [height]=\"410\">\n            <kendo-grid-column field=\"ProductID\" title=\"ID\" width=\"40\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"ProductName\" title=\"Name\" width=\"250\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"Category.CategoryName\" title=\"Category\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"UnitPrice\" title=\"Price\" width=\"80\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"UnitsInStock\" title=\"In stock\" width=\"80\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"Discontinued\" title=\"Discontinued\" width=\"120\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled/>\n                </ng-template>\n            </kendo-grid-column>\n        </kendo-grid>\n    "
    })
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map