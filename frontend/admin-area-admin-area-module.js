(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-area-admin-area-module"],{

/***/ "02Ja":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-area/admin-product-list/admin-product-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductListComponent", function() { return AdminProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/market-services/categories.service */ "vSYu");
/* harmony import */ var _services_market_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/market-services/products.service */ "Nqw5");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_area_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-area/search-bar/search-bar.component */ "6M75");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_product_card_admin_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-product-card/admin-product-card.component */ "31Jb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");











function AdminProductListComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const c_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.changeCategory(c_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", c_r4.categoryName, " ");
} }
function AdminProductListComponent_ng_container_7_app_admin_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-admin-product-card", 7);
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", p_r8);
} }
function AdminProductListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminProductListComponent_ng_container_7_app_admin_product_card_1_Template, 1, 1, "app-admin-product-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.productsSwitched);
} }
function AdminProductListComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AdminProductListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nothing with that name in store");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
class AdminProductListComponent {
    constructor(categoriesService, productsService, authService) {
        this.categoriesService = categoriesService;
        this.productsService = productsService;
        this.authService = authService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //getting all categories/products using services ;
                this.categories = yield this.categoriesService.getAllCategoriesAsync();
                this.products = yield this.productsService.getAllProducts();
                //making another variable with the same values
                //as products for future changes without effect the products;
                this.productsSwitched = [...this.products];
                //subscribe for any further changes in store.
                this.unSubscribeFromStore = src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.products = yield this.productsService.getAllProducts();
                    this.productsSwitched = [...this.products];
                }));
            }
            catch (error) {
                if (error.status === 403) {
                    this.authService.logout();
                }
            }
        });
    }
    //handling category change
    changeCategory(_id) {
        this.productsSwitched = this.products.filter(p => p.categoryId === _id);
    }
    //handling category change
    allCategory() {
        this.productsSwitched = [...this.products];
    }
    //handling search for specify product
    searchProduct(productName) {
        this.productsSwitched = this.products.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()));
    }
    //destroy the subscribe after exit the component for using less memory;
    ngOnDestroy() {
        if (this.unSubscribeFromStore)
            this.unSubscribeFromStore();
    }
}
AdminProductListComponent.ɵfac = function AdminProductListComponent_Factory(t) { return new (t || AdminProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_market_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
AdminProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminProductListComponent, selectors: [["app-admin-product-list"]], decls: 10, vars: 4, consts: [["mat-tab-nav-bar", ""], [3, "productToSearch"], [1, "toolbar-flex"], ["mat-tab-link", "", "active", "", 3, "click"], ["mat-tab-link", "", "active", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "nothing-in-store"]], template: function AdminProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-search-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("productToSearch", function AdminProductListComponent_Template_app_search_bar_productToSearch_1_listener($event) { return ctx.searchProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProductListComponent_Template_a_click_3_listener() { return ctx.allCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AdminProductListComponent_a_5_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminProductListComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AdminProductListComponent_ng_container_8_Template, 4, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AdminProductListComponent_ng_container_9_Template, 5, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productsSwitched == null ? null : ctx.productsSwitched.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.products == null ? null : ctx.products.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.productsSwitched == null ? null : ctx.productsSwitched.length));
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _shared_area_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _admin_product_card_admin_product_card_component__WEBPACK_IMPORTED_MODULE_9__["AdminProductCardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    background: white;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    height: 90%;\r\n}\r\n\r\n.toolbar-flex[_ngcontent-%COMP%] {\r\n    flex: 0.5;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    height: auto;\r\n}\r\n\r\n.nothing-in-store[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    height: 60%;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%]::before {    \r\n    content: \"\";\r\n    background-image: url('empty-store.jfif');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 20px;\r\n    opacity: 0.65;\r\n}\r\n\r\np[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: xx-large;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5Q0FBZ0U7SUFDaEUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJhZG1pbi1wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuZGl2e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4udG9vbGJhci1mbGV4IHtcclxuICAgIGZsZXg6IDAuNTtcclxufVxyXG5uYXYgYXtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ubm90aGluZy1pbi1zdG9yZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnA6OmJlZm9yZSB7ICAgIFxyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZW1wdHktc3RvcmUuamZpZlwiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxufVxyXG5wID4gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "31Jb":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-area/admin-product-card/admin-product-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductCardComponent", function() { return AdminProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var src_app_redux_admin_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/redux/admin-state */ "wG8U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









class AdminProductCardComponent {
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsUrl + "productImages/" + this.product.imageName;
        });
    }
    //function to activate admin-edit-form
    //and downloading the specify product to redux.
    editProduct() {
        src_app_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(src_app_redux_admin_state__WEBPACK_IMPORTED_MODULE_3__["adminUpdatedProductAction"])(this.product));
    }
}
AdminProductCardComponent.ɵfac = function AdminProductCardComponent_Factory(t) { return new (t || AdminProductCardComponent)(); };
AdminProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminProductCardComponent, selectors: [["app-admin-product-card"]], inputs: { product: "product" }, decls: 12, vars: 6, consts: [["mat-card-image", "", 3, "src", "alt"], ["mat-mini-fab", "", "color", "warn", 3, "click"]], template: function AdminProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminProductCardComponent_Template_button_click_3_listener() { return ctx.editProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 4, ctx.product.price));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    display: inline-block;\r\n    margin: 5px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 270px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXByb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQiIsImZpbGUiOiJhZG1pbi1wcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "5ZIH":
/*!***********************************************************************!*\
  !*** ./src/app/admin-area/admin-add-form/admin-add-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminAddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddFormComponent", function() { return AdminAddFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/market-services/categories.service */ "vSYu");
/* harmony import */ var _services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _services_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin-services/admin.service */ "d7Yy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function AdminAddFormComponent_form_0_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", c_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r5.categoryName);
} }
function AdminAddFormComponent_form_0_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage("newImage"), " ");
} }
function AdminAddFormComponent_form_0_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.preview, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function AdminAddFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function AdminAddFormComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.addProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AdminAddFormComponent_form_0_mat_option_7_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Product Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminAddFormComponent_form_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27); return _r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Choose Image File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminAddFormComponent_form_0_Template_input_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.handleImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AdminAddFormComponent_form_0_mat_error_28_Template, 2, 1, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AdminAddFormComponent_form_0_ng_container_31_Template, 4, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.ProductForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage("categoryId"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage("name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage("price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formSubmitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.preview);
} }
class AdminAddFormComponent {
    constructor(_formBuilder, categoriesService, notificationService, adminService) {
        this._formBuilder = _formBuilder;
        this.categoriesService = categoriesService;
        this.notificationService = notificationService;
        this.adminService = adminService;
        this.formSubmitted = false;
        //Reset form after submit
        this.resetForm = () => {
            this.formSubmitted = false;
            this.preview = '';
            this.ProductForm.reset();
            this.myForm.resetForm();
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //getting categories using service.
                this.categories = yield this.categoriesService.getAllCategoriesAsync();
                //validation for form
                this.ProductForm = this._formBuilder.group({
                    name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0.4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1000)]],
                    categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    newImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                });
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    //function to handle image change and show it at preview
    handleImage(image) {
        if (image.target.files[0]) {
            const file = event.target.files[0];
            this.ProductForm.patchValue({ newImage: file });
            this.ProductForm.get('newImage').updateValueAndValidity();
            const reader = new FileReader();
            reader.onload = () => {
                this.preview = reader.result.toString();
            };
            reader.readAsDataURL(file);
        }
    }
    //function to handle add product;
    addProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.formSubmitted = true;
                if (this.ProductForm.valid) {
                    yield this.adminService.addProductAsync(this.ProductForm.value);
                    this.resetForm();
                }
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    //error message handles;
    errorMessage(input) {
        const inputControl = this.ProductForm.get(input);
        if (inputControl.hasError('required'))
            return `${input} is required`;
        if (inputControl.hasError('pattern'))
            return `Example for pattern Ice Milk Or Ice-Milk`;
        if (inputControl.hasError('minlength'))
            return 'Minimum length is 2';
        if (inputControl.hasError('maxlength'))
            return 'Maximum length is 25';
        if (inputControl.hasError('min'))
            return 'Minimum Price is 0.4';
        if (inputControl.hasError('max'))
            return 'Maximum Price is 1000';
        return '';
    }
}
AdminAddFormComponent.ɵfac = function AdminAddFormComponent_Factory(t) { return new (t || AdminAddFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"])); };
AdminAddFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminAddFormComponent, selectors: [["app-admin-add-form"]], viewQuery: function AdminAddFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.myForm = _t.first);
    } }, decls: 1, vars: 1, consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["appearance", "fill"], ["formControlName", "categoryId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "name", "pattern", "^([a-zA-Z0-9\\u0590-\\u05fe]+[_@./#&+-]?\\s?)+$", "minlength", "2", "maxlength", "25", "required", ""], ["matInput", "", "formControlName", "price", "type", "number", "step", "0.01", "min", "0.4", "max", "1000", "required", ""], ["mat-raised-button", "", "type", "button", 3, "click"], ["type", "file", "name", "newImage", "accept", "image/*", "required", "", 1, "ng-hide", 3, "change"], ["newImageInput", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary"], [3, "value"], [3, "src"]], template: function AdminAddFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AdminAddFormComponent_form_0_Template, 34, 7, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ProductForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    -webkit-text-decoration: solid 1px black underline;\r\n            text-decoration: solid 1px black underline;\r\n}\r\n\r\n.ng-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWFkZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrREFBMEM7WUFBMUMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYWRtaW4tYWRkLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHNvbGlkIDFweCBibGFjayB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5uZy1oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbmZvcm0gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "6h8v":
/*!*******************************************************************!*\
  !*** ./src/app/admin-area/admin-market/admin-market.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminMarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMarketComponent", function() { return AdminMarketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _admin_side_control_admin_side_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-side-control/admin-side-control.component */ "EJZT");
/* harmony import */ var _admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-product-list/admin-product-list.component */ "02Ja");




class AdminMarketComponent {
}
AdminMarketComponent.ɵfac = function AdminMarketComponent_Factory(t) { return new (t || AdminMarketComponent)(); };
AdminMarketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMarketComponent, selectors: [["app-admin-market"]], decls: 5, vars: 0, consts: [["opened", "", "mode", "side"], ["drawer", ""]], template: function AdminMarketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-admin-side-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-admin-product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _admin_side_control_admin_side_control_component__WEBPACK_IMPORTED_MODULE_2__["AdminSideControlComponent"], _admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_3__["AdminProductListComponent"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background: inherit;\r\n}\r\n\r\nmat-drawer[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1hcmtldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJhZG1pbi1tYXJrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "EJZT":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-area/admin-side-control/admin-side-control.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminSideControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideControlComponent", function() { return AdminSideControlComponent; });
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_add_form_admin_add_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-add-form/admin-add-form.component */ "5ZIH");
/* harmony import */ var _admin_edit_form_admin_edit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-edit-form/admin-edit-form.component */ "io24");






function AdminSideControlComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-admin-add-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AdminSideControlComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-admin-edit-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", ctx_r1.productToEdit);
} }
class AdminSideControlComponent {
    constructor() {
        this.productToEdit = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().adminProductState.product;
    }
    ngOnInit() {
        //subscribe to store for any further changes in products
        this.unSubscribeFromStore = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(() => {
            this.productToEdit = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().adminProductState.product;
        });
    }
    //destroy the subscribe after exit the component for using less memory
    ngOnDestroy() {
        if (this.unSubscribeFromStore)
            this.unSubscribeFromStore();
    }
}
AdminSideControlComponent.ɵfac = function AdminSideControlComponent_Factory(t) { return new (t || AdminSideControlComponent)(); };
AdminSideControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminSideControlComponent, selectors: [["app-admin-side-control"]], decls: 9, vars: 2, consts: [[1, "cart-list-container"], [1, "cart-card-container"], [4, "ngIf"], [3, "product"]], template: function AdminSideControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Admin Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminSideControlComponent_ng_container_7_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminSideControlComponent_ng_container_8_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.productToEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productToEdit);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _admin_add_form_admin_add_form_component__WEBPACK_IMPORTED_MODULE_4__["AdminAddFormComponent"], _admin_edit_form_admin_edit_form_component__WEBPACK_IMPORTED_MODULE_5__["AdminEditFormComponent"]], styles: [".cart-list-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: repeat(6,1fr);\r\n    grid-template-rows: 15% 85% ;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    grid-column: span 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    grid-column: span 6;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    background-color: rgb(233, 35, 0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXNpZGUtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoiYWRtaW4tc2lkZS1jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDg1JSA7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiA2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDY7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAzNSwgMCk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "MrDq":
/*!*************************************************!*\
  !*** ./src/app/admin-area/admin-area.module.ts ***!
  \*************************************************/
/*! exports provided: AdminAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaModule", function() { return AdminAreaModule; });
/* harmony import */ var _admin_side_control_admin_side_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-side-control/admin-side-control.component */ "EJZT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_market_admin_market_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-market/admin-market.component */ "6h8v");
/* harmony import */ var _admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-product-list/admin-product-list.component */ "02Ja");
/* harmony import */ var _admin_product_card_admin_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-product-card/admin-product-card.component */ "31Jb");
/* harmony import */ var _admin_edit_form_admin_edit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-edit-form/admin-edit-form.component */ "io24");
/* harmony import */ var _admin_add_form_admin_add_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-add-form/admin-add-form.component */ "5ZIH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared-area/shared-area.module */ "v2Hk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















const routes = [
    { path: "", component: _admin_market_admin_market_component__WEBPACK_IMPORTED_MODULE_2__["AdminMarketComponent"] }
];
class AdminAreaModule {
}
AdminAreaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AdminAreaModule });
AdminAreaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AdminAreaModule_Factory(t) { return new (t || AdminAreaModule)(); }, imports: [[
            _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_16__["SharedAreaModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AdminAreaModule, { declarations: [_admin_market_admin_market_component__WEBPACK_IMPORTED_MODULE_2__["AdminMarketComponent"],
        _admin_product_list_admin_product_list_component__WEBPACK_IMPORTED_MODULE_3__["AdminProductListComponent"],
        _admin_product_card_admin_product_card_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductCardComponent"],
        _admin_side_control_admin_side_control_component__WEBPACK_IMPORTED_MODULE_0__["AdminSideControlComponent"],
        _admin_edit_form_admin_edit_form_component__WEBPACK_IMPORTED_MODULE_5__["AdminEditFormComponent"],
        _admin_add_form_admin_add_form_component__WEBPACK_IMPORTED_MODULE_6__["AdminAddFormComponent"]], imports: [_shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_16__["SharedAreaModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "d7Yy":
/*!**********************************************************!*\
  !*** ./src/app/services/admin-services/admin.service.ts ***!
  \**********************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _redux_admin_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/admin-state */ "wG8U");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addProductAsync(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const myFormData = new FormData();
            myFormData.append("name", product.name);
            myFormData.append("price", product.price.toString());
            myFormData.append("categoryId", product.categoryId.toString());
            myFormData.append("newImage", product.newImage);
            yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].adminPanelUrl + "add-product", myFormData).toPromise();
        });
    }
    updateProductAsync(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const myFormData = new FormData();
            myFormData.append("name", product.name);
            myFormData.append("price", product.price.toString());
            myFormData.append("categoryId", product.categoryId.toString());
            myFormData.append("imageName", product.imageName);
            product.newImage && myFormData.append("newImage", product.newImage);
            const updatedProduct = yield this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].adminPanelUrl + "update-product/" + product._id, myFormData).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_admin_state__WEBPACK_IMPORTED_MODULE_2__["adminPanelProductAddAction"])());
            return updatedProduct;
        });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "io24":
/*!*************************************************************************!*\
  !*** ./src/app/admin-area/admin-edit-form/admin-edit-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditFormComponent", function() { return AdminEditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var src_app_redux_admin_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/redux/admin-state */ "wG8U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/market-services/categories.service */ "vSYu");
/* harmony import */ var _services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _services_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/admin-services/admin.service */ "d7Yy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function AdminEditFormComponent_form_0_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", c_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](c_r4.categoryName);
} }
function AdminEditFormComponent_form_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r3.preview, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function AdminEditFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AdminEditFormComponent_form_0_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.updateProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Update Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminEditFormComponent_form_0_mat_option_7_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Product Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminEditFormComponent_form_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27); return _r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Choose Image File");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminEditFormComponent_form_0_Template_input_change_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.handleImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AdminEditFormComponent_form_0_ng_container_30_Template, 4, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminEditFormComponent_form_0_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.backToAddProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Back To Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.ProductForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage("categoryId"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage("name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage("price"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.preview);
} }
class AdminEditFormComponent {
    constructor(_formBuilder, categoriesService, notificationService, adminService) {
        this._formBuilder = _formBuilder;
        this.categoriesService = categoriesService;
        this.notificationService = notificationService;
        this.adminService = adminService;
        this.formSubmitted = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //getting categories using service.
                this.categories = yield this.categoriesService.getAllCategoriesAsync();
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    ngOnChanges() {
        //validation for form and create a form builder.
        this.ProductForm = this._formBuilder.group({
            _id: [this.product._id],
            name: [this.product.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: [this.product.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0.4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(1000)]],
            categoryId: [this.product.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            newImage: [''],
            imageName: [this.product.imageName]
        });
        this.preview = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsUrl + "productImages/" + this.product.imageName;
    }
    //function to handle image change and show it at preview
    handleImage(image) {
        if (image.target.files[0]) {
            const file = event.target.files[0];
            this.ProductForm.patchValue({ newImage: file });
            this.ProductForm.get('newImage').updateValueAndValidity();
            const reader = new FileReader();
            reader.onload = () => {
                this.preview = reader.result.toString();
            };
            reader.readAsDataURL(file);
        }
    }
    //function to update the product;
    updateProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.formSubmitted = true;
                if (this.ProductForm.valid) {
                    const updatedProduct = yield this.adminService.updateProductAsync(this.ProductForm.value);
                    this.notificationService.success(`${updatedProduct.name} updated successfully`);
                }
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    //function to clean the redux for show the add-product-form;
    backToAddProduct() {
        src_app_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(src_app_redux_admin_state__WEBPACK_IMPORTED_MODULE_3__["adminPanelProductAddAction"])());
    }
    //error message handler;
    errorMessage(input) {
        const inputControl = this.ProductForm.get(input);
        if (inputControl.hasError('required'))
            return `${input} is required`;
        if (inputControl.hasError('minlength'))
            return 'Minimum length is 2';
        if (inputControl.hasError('pattern'))
            return `Example for pattern Ice Milk Or Ice-Milk`;
        if (inputControl.hasError('maxlength'))
            return 'Maximum length is 25';
        if (inputControl.hasError('min'))
            return 'Minimum Price is 0.4';
        if (inputControl.hasError('max'))
            return 'Maximum Price is 1000';
        return '';
    }
}
AdminEditFormComponent.ɵfac = function AdminEditFormComponent_Factory(t) { return new (t || AdminEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"])); };
AdminEditFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminEditFormComponent, selectors: [["app-admin-edit-form"]], inputs: { product: "product" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["appearance", "fill"], ["formControlName", "categoryId", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "name", "pattern", "^([a-zA-Z0-9\\u0590-\\u05fe]+[_@./#&+-]?\\s?)+$", "minlength", "2", "maxlength", "25", "required", ""], ["matInput", "", "formControlName", "price", "type", "number", "step", "0.01", "min", "0.4", "max", "1000", "required", ""], ["mat-raised-button", "", "type", "button", 3, "click"], ["type", "file", "name", "newImage", "accept", "image/*", 1, "ng-hide", 3, "change"], ["newImageInput", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary"], ["mat-raised-button", "", "type", "button", 1, "backToAddProduct", 3, "click"], [3, "value"], [3, "src"]], template: function AdminEditFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminEditFormComponent_form_0_Template, 35, 6, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ProductForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    -webkit-text-decoration: solid 1px black underline;\r\n            text-decoration: solid 1px black underline;\r\n}\r\n\r\n.ng-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]    > .backToAddProduct[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n    color: white;\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWVkaXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0RBQTBDO1lBQTFDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6ImFkbWluLWVkaXQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogc29saWQgMXB4IGJsYWNrIHVuZGVybGluZTtcclxufVxyXG5cclxuLm5nLWhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuZm9ybSBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5mb3JtID4gLmJhY2tUb0FkZFByb2R1Y3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=admin-area-admin-area-module.js.map