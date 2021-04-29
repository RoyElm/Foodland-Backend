(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-area-market-area-module"],{

/***/ "/no6":
/*!***************************************************!*\
  !*** ./src/app/market-area/market-area.module.ts ***!
  \***************************************************/
/*! exports provided: MarketAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketAreaModule", function() { return MarketAreaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared-area/shared-area.module */ "v2Hk");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-card/product-card.component */ "4Pna");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-list/products-list.component */ "wXiq");
/* harmony import */ var _market_market_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./market/market.component */ "dDMu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const routes = [
    { path: "", component: _market_market_component__WEBPACK_IMPORTED_MODULE_13__["MarketComponent"] }
];
class MarketAreaModule {
}
MarketAreaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: MarketAreaModule });
MarketAreaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function MarketAreaModule_Factory(t) { return new (t || MarketAreaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_10__["SharedAreaModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](MarketAreaModule, { declarations: [_market_market_component__WEBPACK_IMPORTED_MODULE_13__["MarketComponent"],
        _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"],
        _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_10__["SharedAreaModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] }); })();


/***/ }),

/***/ "4Pna":
/*!********************************************************************!*\
  !*** ./src/app/market-area/product-card/product-card.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/paths.environment */ "V9dn");
/* harmony import */ var _models_cart_models_cart_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/cart-models/cart-item.model */ "rZ9o");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_cart_items_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/market-services/cart-items.service */ "cOBF");
/* harmony import */ var _services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/global-services/notification.service */ "RYsQ");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");

















class ProductCardComponent {
    constructor(cartItemsService, notificationService, authService, router) {
        this.cartItemsService = cartItemsService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.quantity = 1;
        this.cartItem = new _models_cart_models_cart_item_model__WEBPACK_IMPORTED_MODULE_2__["CartItemModel"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //getting from server product image;
            this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].productsUrl + "productImages/" + this.product.imageName;
        });
    }
    plus() {
        //plus quantity by 1, will be use in the future to add/update in shopping cart;
        this.quantity++;
    }
    minus() {
        //minus quantity by 1, will be use in the future to add/update in shopping cart;
        this.quantity--;
    }
    //function that handle add to cart click event;
    addToCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const oldCartItem = src_app_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].getState().cartItemState.cartItems.find(c => c.productId === this.product._id);
                //if user have in cart that product updating old cart item
                if (oldCartItem) {
                    const updatedOldCartItem = this.updateOldCartItem(oldCartItem);
                    this.cartItem = yield this.cartItemsService.updateCartItemAsync(updatedOldCartItem);
                    this.notificationService.success(this.cartItem.product.name + " has been updated");
                }
                else {
                    //if not creating cart item and adding it to shopping cart;
                    const createdCartItem = this.createCartItem();
                    this.cartItem = yield this.cartItemsService.addCartItemAsync(createdCartItem);
                    this.notificationService.success(this.cartItem.product.name + " has been added");
                }
            }
            catch (error) {
                this.notificationService.error(error);
                if (error.status === 403) {
                    this.authService.logout();
                    this.router.navigateByUrl(_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__["paths"].homeUrl);
                }
            }
        });
    }
    //function that handle updating old cart item;
    updateOldCartItem(oldCartItem) {
        oldCartItem.quantity += this.quantity;
        oldCartItem.totalPrice = this.product.price * oldCartItem.quantity;
        return oldCartItem;
    }
    //function that handle creating cart item;
    createCartItem() {
        let cartItem = new _models_cart_models_cart_item_model__WEBPACK_IMPORTED_MODULE_2__["CartItemModel"]();
        cartItem.productId = this.product._id;
        cartItem.quantity = this.quantity;
        cartItem.totalPrice = this.product.price * this.quantity;
        cartItem.shoppingCartId = src_app_redux_store__WEBPACK_IMPORTED_MODULE_4__["default"].getState().shoppingCartState.shoppingCart._id;
        cartItem.product = this.product;
        return cartItem;
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_market_services_cart_items_service__WEBPACK_IMPORTED_MODULE_6__["CartItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, decls: 22, vars: 8, consts: [["mat-card-image", "", 3, "src", "alt"], ["mat-mini-fab", "", "color", "warn", 3, "disabled", "click"], ["matInput", "", "disabled", "", "type", "number", "min", "1", 3, "ngModel", "ngModelChange"], ["mat-mini-fab", "", "color", "accent", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_9_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductCardComponent_Template_input_ngModelChange_15_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_16_listener() { return ctx.plus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_20_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 6, ctx.product.price));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.quantity <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.quantity);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["CurrencyPipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    display: inline-block;\r\n    margin: 5px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "dDMu":
/*!********************************************************!*\
  !*** ./src/app/market-area/market/market.component.ts ***!
  \********************************************************/
/*! exports provided: MarketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketComponent", function() { return MarketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/paths.environment */ "V9dn");
/* harmony import */ var src_app_models_cart_models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/cart-models/shopping-cart.model */ "TLMc");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/market-services/shopping-cart.service */ "Vmn7");
/* harmony import */ var src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/global-services/notification.service */ "RYsQ");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../products-list/products-list.component */ "wXiq");
/* harmony import */ var _shared_area_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared-area/cart-list/cart-list.component */ "laEZ");















function MarketComponent_app_cart_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-list", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("shoppingCartId", ctx_r1.shoppingCart._id)("enableChanges", true);
} }
class MarketComponent {
    constructor(shoppingCartService, notificationService, authService, router) {
        this.shoppingCartService = shoppingCartService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //handling if user have shopping cart and if he doesn't have any shopping cart open;
                this.shoppingCart = yield this.shoppingCartService.getShoppingCartAsync();
                if (!this.shoppingCart || !this.shoppingCart.open) {
                    const newShoppingCart = new src_app_models_cart_models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartModel"]();
                    newShoppingCart.userId = _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().authState.user._id;
                    this.shoppingCart = yield this.shoppingCartService.createShoppingCart(newShoppingCart);
                }
            }
            catch (error) {
                this.notificationService.error(error);
                if (error.status === 403) {
                    this.authService.logout();
                    this.router.navigateByUrl(_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__["paths"].homeUrl);
                }
            }
        });
    }
}
MarketComponent.ɵfac = function MarketComponent_Factory(t) { return new (t || MarketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_market_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
MarketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MarketComponent, selectors: [["app-market"]], decls: 15, vars: 1, consts: [["mat-tab-nav-bar", ""], ["mat-tab-link", "", 3, "click"], ["opened", "", "mode", "side"], ["drawer", ""], [3, "shoppingCartId", "enableChanges", 4, "ngIf"], [3, "shoppingCartId", "enableChanges"]], template: function MarketComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MarketComponent_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u00A0 Cart \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MarketComponent_app_cart_list_13_Template, 1, 2, "app-cart-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-products-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.shoppingCart == null ? null : ctx.shoppingCart.open);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductsListComponent"], _shared_area_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_14__["CartListComponent"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background: inherit;\r\n}\r\n\r\nmat-drawer[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    background: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJtYXJrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXIge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5uYXYge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rZ9o":
/*!*******************************************************!*\
  !*** ./src/app/models/cart-models/cart-item.model.ts ***!
  \*******************************************************/
/*! exports provided: CartItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemModel", function() { return CartItemModel; });
class CartItemModel {
    constructor() {
        this.quantity = 1;
    }
}


/***/ }),

/***/ "wXiq":
/*!**********************************************************************!*\
  !*** ./src/app/market-area/products-list/products-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/market-services/categories.service */ "vSYu");
/* harmony import */ var _services_market_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/market-services/products.service */ "Nqw5");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _shared_area_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-area/search-bar/search-bar.component */ "6M75");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-card/product-card.component */ "4Pna");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");











function ProductsListComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsListComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const c_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.changeCategory(c_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", c_r4.categoryName, " ");
} }
function ProductsListComponent_ng_container_7_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-product-card", 7);
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", p_r8);
} }
function ProductsListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductsListComponent_ng_container_7_app_product_card_1_Template, 1, 1, "app-product-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.productsSwitched);
} }
function ProductsListComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function ProductsListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
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
class ProductsListComponent {
    constructor(categoriesService, productsService, authService) {
        this.categoriesService = categoriesService;
        this.productsService = productsService;
        this.authService = authService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //getting products and categories from services;
                this.categories = yield this.categoriesService.getAllCategoriesAsync();
                this.products = yield this.productsService.getAllProducts();
                //creating new variable to avoid any reference type problems;
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
    //Handle click on any category section except "All".
    changeCategory(_id) {
        this.productsSwitched = [...this.products.filter(p => p.categoryId === _id)];
    }
    //Handle click on "All" category section.
    allCategory() {
        this.productsSwitched = [...this.products];
    }
    //handle search product;
    searchProduct(productName) {
        this.productsSwitched = [...this.products.filter(p => p.name.toLowerCase().includes(productName.toLowerCase()))];
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_market_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_market_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["app-products-list"]], decls: 10, vars: 4, consts: [["mat-tab-nav-bar", ""], [3, "productToSearch"], [1, "toolbar-flex"], ["mat-tab-link", "", "active", "", 3, "click"], ["mat-tab-link", "", "active", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "nothing-in-store"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-search-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("productToSearch", function ProductsListComponent_Template_app_search_bar_productToSearch_1_listener($event) { return ctx.searchProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsListComponent_Template_a_click_3_listener() { return ctx.allCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ProductsListComponent_a_5_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductsListComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductsListComponent_ng_container_8_Template, 4, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProductsListComponent_ng_container_9_Template, 5, 0, "ng-container", 5);
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
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _shared_area_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], styles: ["nav[_ngcontent-%COMP%] {\r\n    background: white;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    height: 85%;\r\n}\r\n\r\n.toolbar-flex[_ngcontent-%COMP%] {\r\n    flex: 0.5;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    height: auto;\r\n}\r\n\r\n.nothing-in-store[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    height: 60%;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%]::before {    \r\n    content: \"\";\r\n    background-image: url('empty-store.jfif');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 20px;\r\n    opacity: 0.65;\r\n}\r\n\r\np[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: xx-large;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUNBQWdFO0lBQ2hFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoicHJvZHVjdHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcbi50b29sYmFyLWZsZXgge1xyXG4gICAgZmxleDogMC41O1xyXG59XHJcbm5hdiBhe1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5ub3RoaW5nLWluLXN0b3JlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxucDo6YmVmb3JlIHsgICAgXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9lbXB0eS1zdG9yZS5qZmlmXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcbnAgPiBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=market-area-market-area-module.js.map