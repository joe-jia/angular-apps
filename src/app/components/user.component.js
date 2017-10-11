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
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'John Smith';
        this.email = 'socialmediawebster@gmail.com';
        this.address = {
            street: 'Bufalino',
            city: 'Brisbane',
            state: 'QLD'
        };
        this.show = false;
        this.items = ['apple', 'android', 'windows'];
        this.toggle = 'show';
    }
    UserComponent.prototype.toggleItems = function () {
        if (this.show == true) {
            this.toggle = 'show';
            this.show = false;
        }
        else {
            this.toggle = 'hide';
            this.show = true;
        }
    };
    UserComponent.prototype.addItem = function (item) {
        this.items.push(item);
    };
    UserComponent.prototype.deleteItem = function (i) {
        this.items.splice(i, 1);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n  \t<h1>Hello {{name}}</h1>\n  \t<p><b>Email:</b> {{email}}</p>\n  \t<p><b>Address:</b> {{address.street}}, {{address.city}}, {{address.state}}</p>\n  \t<div *ngIf=\"show\">\n  \t\t<ul>\n  \t\t\t<li *ngFor=\"let item of items; let i = index\">{{item}}\n  \t\t\t\t<button (click)=\"deleteItem()\">delete</button>\n  \t\t\t</li>\n  \t\t</ul>\n  \t</div>\n  \t<button (click)=\"toggleItems()\">{{toggle}} items</button>\n\n  \t<form (submit)=\"addItem(item.value)\">\n  \t\t<label>Add new item</label>\n  \t\t<input type=\"text\" #item />\n  \t</form>\n  \t",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map