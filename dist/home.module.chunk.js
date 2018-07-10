webpackJsonp(["home.module"],{

/***/ "./node_modules/angular2-minmax-validators/angular2-minmax-validators.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("./node_modules/@angular/core/esm5/core.js"), __webpack_require__("./node_modules/@angular/common/esm5/common.js"), __webpack_require__("./node_modules/@angular/forms/esm5/forms.js")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
	(factory((global['angular2-minmax-validators'] = {}),global.core,global.common,global.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MIN_VALUE_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return MinValueValidator; }),
    multi: true
};
var MinValueValidator = /** @class */ (function () {
    function MinValueValidator(mn) {
        if (mn !== undefined && mn !== null) { // isPresent
            // isPresent
            var /** @type {?} */ attrValue = parseInt(mn, 10);
            if (!isNaN(attrValue)) {
                this.min = mn;
                this._createValidator();
            }
        }
    }
    /**
     * @param {?} mn
     * @return {?}
     */
    MinValueValidator.min = /**
     * @param {?} mn
     * @return {?}
     */
    function (mn) {
        /**
         * @param {?} control
         * @return {?}
         */
        function foo(control) {
            var /** @type {?} */ v = +control.value;
            return (v < mn ? { 'min': { 'minValue': mn, 'actualValue': v } } : null);
        }
        return foo;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MinValueValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ minChange = changes['min'];
        if (minChange) {
            this._createValidator();
        }
    };
    /**
     * @return {?}
     */
    MinValueValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = MinValueValidator.min(parseInt(this.min, 10));
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinValueValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator(c);
    };
    MinValueValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[min],[min][ngModel]',
                    providers: [MIN_VALUE_VALIDATOR],
                    host: { '[attr.min]': 'min ? min : 0' }
                },] },
    ];
    /** @nocollapse */
    MinValueValidator.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Attribute, args: ['min',] },] },
    ]; };
    MinValueValidator.propDecorators = {
        "min": [{ type: core.Input },],
    };
    return MinValueValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MAX_VALUE_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return MaxValueValidator; }),
    multi: true
};
var MaxValueValidator = /** @class */ (function () {
    function MaxValueValidator(mx) {
        if (mx !== undefined && mx !== null) { // isPresent
            // isPresent
            var /** @type {?} */ attrValue = parseInt(mx, 10);
            if (!isNaN(attrValue)) {
                this.max = mx;
                this._createValidator();
            }
        }
    }
    /**
     * @param {?} mx
     * @return {?}
     */
    MaxValueValidator.max = /**
     * @param {?} mx
     * @return {?}
     */
    function (mx) {
        /**
         * @param {?} control
         * @return {?}
         */
        function foo(control) {
            var /** @type {?} */ v = +control.value;
            return (v > mx ? { 'max': { 'maxValue': mx, 'actualValue': v } } : null);
        }
        return foo;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxValueValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ maxChange = changes['max'];
        if (maxChange) {
            this._createValidator();
        }
    };
    /**
     * @return {?}
     */
    MaxValueValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = MaxValueValidator.max(parseInt(this.max, 10));
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxValueValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator(c);
    };
    MaxValueValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[max],[max][ngModel]',
                    providers: [MAX_VALUE_VALIDATOR],
                    host: { '[attr.max]': 'max ? max : 0' }
                },] },
    ];
    /** @nocollapse */
    MaxValueValidator.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Attribute, args: ['max',] },] },
    ]; };
    MaxValueValidator.propDecorators = {
        "max": [{ type: core.Input },],
    };
    return MaxValueValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MINMAX_DIRECTIVES = [
    MinValueValidator,
    MaxValueValidator
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NUMBERS_ONLY_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return NumbersOnlyValidator; }),
    multi: true
};
var NumbersOnlyValidator = /** @class */ (function () {
    function NumbersOnlyValidator(el, renderer, defaultValue) {
        this.el = el;
        this._createValidator();
    }
    /**
     * @param {?} numbers
     * @return {?}
     */
    NumbersOnlyValidator.numbersOnly = /**
     * @param {?} numbers
     * @return {?}
     */
    function (numbers) {
        /**
         * @param {?} control
         * @return {?}
         */
        function foo(control) {
            this.inputValue = this.sanitizeNumbers(control.value);
            return null;
        }
        return foo;
    };
    // @HostListener("keypress", ["$event"])
    /**
     * @param {?} e
     * @return {?}
     */
    NumbersOnlyValidator.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
            e.stopPropagation();
        }
        return e.charCode >= 48 && e.charCode <= 57;
    };
    // @HostListener("paste", ["$event"])
    /**
     * @param {?} e
     * @return {?}
     */
    NumbersOnlyValidator.prototype.onPaste = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        var /** @type {?} */ pasteItem = e.clipboardData.getData('Text');
        this.inputValue = this.sanitizeNumbers(pasteItem);
        return;
    };
    /**
     * @param {?} text
     * @return {?}
     */
    NumbersOnlyValidator.prototype.sanitizeNumbers = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (text !== null && text !== undefined) {
            return text.replace(new RegExp(/\D/g), '');
        }
        return;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NumbersOnlyValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ numbersOnlyChange = changes['numbersOnly'];
        if (numbersOnlyChange) {
            this._createValidator();
        }
    };
    /**
     * @return {?}
     */
    NumbersOnlyValidator.prototype._createValidator = /**
     * @return {?}
     */
    function () {
        this._validator = NumbersOnlyValidator.numbersOnly(this.inputValue);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NumbersOnlyValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumbersOnlyValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._createValidator();
    };
    NumbersOnlyValidator.decorators = [
        { type: core.Directive, args: [{
                    selector: '[numbersOnly],[numbersOnly][ngModel]',
                    providers: [NUMBERS_ONLY_VALIDATOR],
                    host: {
                        '[attr.numbersOnly]': 'numbersOnly ? numbersOnly : true',
                        '(keypress)': 'onKeyDown($event)',
                        '(paste)': 'onPaste($event)',
                        '[value]': 'inputValue || null'
                    }
                },] },
    ];
    /** @nocollapse */
    NumbersOnlyValidator.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: core.Renderer2, },
        { type: undefined, decorators: [{ type: core.Attribute, args: ['value',] },] },
    ]; };
    NumbersOnlyValidator.propDecorators = {
        "inputValue": [{ type: core.Input },],
    };
    return NumbersOnlyValidator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UTILITY_DIRECTIVES = [
    NumbersOnlyValidator
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MinMaxModule = /** @class */ (function () {
    function MinMaxModule() {
    }
    /**
     * @return {?}
     */
    MinMaxModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MinMaxModule,
            providers: []
        };
    };
    MinMaxModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        MINMAX_DIRECTIVES,
                        UTILITY_DIRECTIVES
                    ],
                    exports: [
                        MINMAX_DIRECTIVES,
                        UTILITY_DIRECTIVES
                    ]
                },] },
    ];
    return MinMaxModule;
}());

exports.MinMaxModule = MinMaxModule;
exports.MINMAX_DIRECTIVES = MINMAX_DIRECTIVES;
exports.UTILITY_DIRECTIVES = UTILITY_DIRECTIVES;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n    <div class=\"d-flex justify-content-between align-items-center my-3\">\n        <h3 class=\"home-title\">Customers</h3>\n        <button class=\"btn btn-primary pulsate\" type=\"button\" (click)=\"addCustomer.show()\">Add Customer</button>\n    </div>\n    <app-filter-bar></app-filter-bar>\n    <div class=\"content my-3\" [@flyInOutList]=\"customers.length\" *ngIf=\"(customers$ | async); let customers else loadingPeople\">\n        <div *ngIf=\"customers.length === 0\">\n            <h3>No results found</h3>\n        </div>\n        <div class=\"card-columns\">\n            <app-card-item [item]=\"customer\" *ngFor=\"let customer of customers\" (onEdit)=\"gotoDetails(customer)\" (onDelete)=\"showDeleteModal(customer)\"></app-card-item>\n            <div class=\"display-4\" *ngIf=\"customers.count === 0\">No results for people</div>\n        </div>\n        <div class=\"row align-items-center\">\n            <div class=\"col\">\n                <span class=\"font-weight-bold\">\n                    {{ itemsCount }}\n                </span>\n                of {{ totalCount}} Total\n            </div>\n            <div class=\"col\">\n\n                <nav aria-label=\"Page navigation example\">\n                    <ul class=\"pagination justify-content-end\">\n                        <li class=\"page-item\" [class.disabled]=\"!previous\">\n                            <a class=\"page-link previous\" href=\"javascript:;\" tabindex=\"-1\" (click)=\"loadPage(previous)\">\n                                <div>\n                                    <i class=\"fa fa-arrow-left\"></i>\n                                    <span class=\"\">Previous</span>\n                                </div>\n                            </a>\n                        </li>\n                        <li class=\"page-item\" [class.disabled]=\"!next\">\n                            <a class=\"page-link next\" href=\"javascript:;\" (click)=\"loadPage(next)\">\n                                <div>\n                                    <span class=\"\">Next</span>\n                                    <i class=\"fa fa-arrow-right\"></i>\n                                </div>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <ng-template #loadingPeople>\n        <div class=\"lead my-5\">\n            <div class=\"loader\">Loading\n                <span class=\"loader-dot\">.</span>\n                <span class=\"loader-dot\">.</span>\n                <span class=\"loader-dot\">.</span>\n            </div>\n        </div>\n    </ng-template>\n</div>\n<app-add #addCustomer (onSubmitted)=\"loadPage(currentPage)\"></app-add>\n<app-delete #deleteCustomer (onDeleted)=\"loadPage(currentPage)\"></app-delete>"

/***/ }),

/***/ "./src/app/main/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "#home .card-columns {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(16rem, 1fr))[auto-fill];\n      grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); }\n\n#home .pagination .page-item {\n  background-color: rgba(247, 247, 247, 0.64);\n  padding: 6px;\n  border-radius: 48px; }\n\n#home .pagination .page-item.disabled a {\n    background-color: #fafafa9a;\n    color: #8a8a8a; }\n\n#home .pagination .page-item a {\n    background-color: #ffffff;\n    color: #444444;\n    border: 1px solid #eeeeee;\n    position: relative;\n    display: block;\n    width: 48px;\n    height: 48px;\n    line-height: 1.5;\n    border-radius: 48px;\n    text-align: center;\n    -webkit-transition: width 0.2s ease-in-out, margin 0.1s ease-in-out;\n    transition: width 0.2s ease-in-out, margin 0.1s ease-in-out;\n    padding: 12px;\n    white-space: nowrap;\n    overflow: hidden; }\n\n#home .pagination .page-item a i {\n      margin-right: 15px; }\n\n#home .pagination .page-item a.previous > div {\n      margin-left: 8px; }\n\n#home .pagination .page-item a.next i {\n      margin-right: 0px;\n      margin-left: 15px; }\n\n#home .pagination .page-item a.next > div {\n      margin-left: -48px; }\n\n#home .pagination .page-item:hover a {\n    width: 140px; }\n\n#home .pagination .page-item:hover a.next > div {\n      margin-left: 0px; }\n\n#home .pagination .page-item:hover a.previous > div {\n      margin-right: 0px; }\n"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_animations__ = __webpack_require__("./src/app/config/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_delete_delete_component__ = __webpack_require__("./src/app/main/home/modals/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, customerService) {
        var _this = this;
        this.router = router;
        this.customerService = customerService;
        this.itemsCount = 0;
        this.currentPage = 0;
        this.totalCount = 0;
        this.previous = null;
        this.next = null;
        this.gotoDetails = function (customer) {
            _this.router.navigate(['/details', customer._id], {
                queryParams: {
                    edit: true
                }
            });
        };
        this.loadPage = function (page) {
            if (page === void 0) { page = 0; }
            _this.customers$ = _this.customerService.getCustomers(page)
                .do(function (response) {
                return _this.setupPagination(response.data.length, response.index, response.next, response.previous, response.count);
            })
                .map(function (response) { return response.data; });
        };
        this.setupPagination = function (noOfItems, currentIndex, nextIndex, previousIndex, totalCount) {
            _this.currentPage = currentIndex;
            _this.totalCount = totalCount;
            _this.next = nextIndex;
            _this.previous = previousIndex;
            if (nextIndex === null) {
                _this.itemsCount = totalCount;
                return;
            }
            _this.itemsCount = noOfItems * (nextIndex - 1);
        };
        this.showDeleteModal = function (customer) {
            _this.deleteModal.showDeleteModal(customer._id);
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPage();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deleteCustomer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__modals_delete_delete_component__["a" /* DeleteComponent */])
    ], HomeComponent.prototype, "deleteModal", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/home/home.component.html"),
            styles: [__webpack_require__("./src/app/main/home/home.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__config_animations__["a" /* FLY_IN_OUT_LIST */])()
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["a" /* CustomerService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing__ = __webpack_require__("./src/app/main/home/home.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_minmax_validators__ = __webpack_require__("./node_modules/angular2-minmax-validators/angular2-minmax-validators.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_minmax_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_minmax_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__ = __webpack_require__("./src/app/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__widgets_widgets_module__ = __webpack_require__("./src/app/widgets/widgets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utility_utility_module__ = __webpack_require__("./src/app/utility/utility.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_delete_delete_component__ = __webpack_require__("./src/app/main/home/modals/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modals_add_add_component__ = __webpack_require__("./src/app/main/home/modals/add/add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__home_routing__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7__widgets_widgets_module__["a" /* WidgetsModule */],
                __WEBPACK_IMPORTED_MODULE_8__utility_utility_module__["a" /* UtilityModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_minmax_validators__["MinMaxModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_9__modals_delete_delete_component__["a" /* DeleteComponent */], __WEBPACK_IMPORTED_MODULE_10__modals_add_add_component__["a" /* AddComponent */]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/main/home/home.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/main/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/home/modals/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<app-modal backdrop=\"static\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Add Customer</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form #addForm=\"ngForm\" class=\"mt-0\" (ngSubmit)=\"submitForm(model)\">\n    <div class=\"modal-body\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"firstname\">Firstname</label>\n          <input type=\"text\" class=\"form-control\" [class.is-invalid]=\"firstname.errors && firstname.touched\" #firstname=\"ngModel\" [(ngModel)]=\"model.name.first\"\n            id=\"firstname\" name=\"firstname\" placeholder=\"Firstname\" required/>\n          <div *ngIf=\"firstname.errors && firstname.touched\" class=\"invalid-feedback\">\n            Please provide a valid firstname.\n          </div>\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"lastname\">Surname</label>\n          <input type=\"text\" class=\"form-control\" [class.is-invalid]=\"lastname.errors && lastname.touched\" #lastname=\"ngModel\" [(ngModel)]=\"model.name.last\"\n            id=\"lastname\" name=\"lastname\" placeholder=\"Surname\" required/>\n          <div *ngIf=\"lastname.errors && lastname.touched\" class=\"invalid-feedback\">\n            Please provide a valid lastname.\n          </div>\n        </div>\n      </div>\n      <fieldset class=\"form-group\">\n        <legend class=\"col-form-label\" [class.is-invalid]=\"gender.errors && gender.touched\">Gender</legend>\n        <div class=\"d-inline\">\n          <div class=\"form-check form-check-inline\">\n            <input type=\"radio\" class=\"form-check-input\" #gender=\"ngModel\" [(ngModel)]=\"model.gender\" id=\"female\" name=\"gender\" value=\"f\"\n              required/>\n            <label class=\"form-check-label\" for=\"female\">\n              Female\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input type=\"radio\" class=\"form-check-input\" #gender=\"ngModel\" [(ngModel)]=\"model.gender\" id=\"male\" name=\"gender\" value=\"m\"\n              required/>\n            <label class=\"form-check-label\" for=\"male\">\n              Male\n            </label>\n          </div>\n        </div>\n        <div *ngIf=\"gender.errors && gender.touched\">\n          Gender is required.\n        </div>\n      </fieldset>\n      <div class=\"form-row justify-content-between\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"date-of-birth\">Date of Birth</label>\n          <input type=\"text\" class=\"form-control\" [class.is-invalid]=\"birthday.errors && birthday.touched\" #birthday=\"ngModel\" [(ngModel)]=\"model.birthday\"\n            id=\"date-of-birth\" name=\"birthday\" autocomplete=\"off\" appDatePicker required/>\n          <div *ngIf=\"birthday.errors && birthday.touched\" class=\"invalid-feedback\">\n            Please provide a valid birthday.\n          </div>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"lifetime-value\">Lifetime Value</label>\n          <input type=\"number\" class=\"form-control\" [class.is-invalid]=\"lifetime.errors && lifetime.touched\" #lifetime=\"ngModel\" [(ngModel)]=\"model.customerLifetimeValue\"\n            id=\"lifetime-value\" name=\"lifetime\" />\n          <div *ngIf=\"lifetime.errors && lifetime.touched\" class=\"invalid-feedback\">\n            Please provide a valid lifetime.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check pl-0\">\n          <input class=\"form-check-input is-valid d-none\" type=\"checkbox\" value=\"yes\" id=\"valid-check\" checked required>\n          <label class=\"form-check-label text-success\" for=\"valid-check\">\n            Terms and Conditions\n          </label>\n          <div class=\"valid-feedback text-muted\">\n            By clicking the submit button, you agree to the following\n            <a href=\"javascript:;\">Terms and Conditions</a>, that all the information provided here are valid.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      <button type=\"button\" class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addForm.form.valid\" [loading]=\"formLoading\">Save changes</button>\n    </div>\n  </form>\n</app-modal>"

/***/ }),

/***/ "./src/app/main/home/modals/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/home/modals/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_modal_modal_component__ = __webpack_require__("./src/app/widgets/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_customer__ = __webpack_require__("./src/app/models/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = /** @class */ (function (_super) {
    __extends(AddComponent, _super);
    function AddComponent(elem, customerService) {
        var _this = _super.call(this, elem) || this;
        _this.elem = elem;
        _this.customerService = customerService;
        _this.model = new __WEBPACK_IMPORTED_MODULE_2__models_customer__["a" /* Customer */]();
        _this.formLoading = false;
        _this.backdrop = 'static';
        _this.onSubmitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.submitForm = function (value) {
            _this.formLoading = true;
            _this.customerService.createCustomer(value)
                .subscribe(_this.successCallback, _this.errorCallback);
        };
        _this.successCallback = function (response) {
            _this.formLoading = false;
            if (_this.onSubmitted) {
                _this.onSubmitted.emit(response);
            }
            _this.form.resetForm();
            _this.hide();
        };
        _this.errorCallback = function () {
            _this.formLoading = false;
            console.log('An error occured');
        };
        return _this;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('addForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["NgForm"])
    ], AddComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "backdrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AddComponent.prototype, "onSubmitted", void 0);
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add',
            template: __webpack_require__("./src/app/main/home/modals/add/add.component.html"),
            styles: [__webpack_require__("./src/app/main/home/modals/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */]])
    ], AddComponent);
    return AddComponent;
}(__WEBPACK_IMPORTED_MODULE_1__widgets_modal_modal_component__["a" /* ModalComponent */]));



/***/ }),

/***/ "./src/app/main/home/modals/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<app-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Are you sure you want to delete this customer?</h5>\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <p>This customer will be deleted permanently from our database. You can't undo this action.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteItem(itemId)\" [loading]=\"formLoading\">Yes, Delete.</button>\n  </div>\n</app-modal>"

/***/ }),

/***/ "./src/app/main/home/modals/delete/delete.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/home/modals/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_modal_modal_component__ = __webpack_require__("./src/app/widgets/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__("./src/app/services/customer.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = /** @class */ (function (_super) {
    __extends(DeleteComponent, _super);
    function DeleteComponent(elem, customerService) {
        var _this = _super.call(this, elem) || this;
        _this.elem = elem;
        _this.customerService = customerService;
        _this.formLoading = false;
        _this.onDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.showDeleteModal = function (id) {
            _this.itemId = id;
            _this.show();
        };
        _this.deleteItem = function (id) {
            _this.formLoading = true;
            _this.customerService.deleteCustomer(id)
                .subscribe(_this.successCallback, _this.errorCallback);
        };
        _this.successCallback = function (response) {
            _this.formLoading = false;
            if (_this.onDeleted) {
                _this.onDeleted.emit(response);
            }
            _this.hide();
        };
        _this.errorCallback = function () {
            _this.formLoading = false;
            console.log('An error occured');
        };
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DeleteComponent.prototype, "itemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DeleteComponent.prototype, "onDeleted", void 0);
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__("./src/app/main/home/modals/delete/delete.component.html"),
            styles: [__webpack_require__("./src/app/main/home/modals/delete/delete.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]])
    ], DeleteComponent);
    return DeleteComponent;
}(__WEBPACK_IMPORTED_MODULE_1__widgets_modal_modal_component__["a" /* ModalComponent */]));



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map