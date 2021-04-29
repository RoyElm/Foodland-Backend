(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zi9":
/*!**********************************************************!*\
  !*** ./src/app/layout-area/page404/page404.component.ts ***!
  \**********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Page404Component {
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 1, vars: 0, template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-image: url('HTML-Funny-404-Pages.gif');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpREFBd0U7SUFDeEUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEIiLCJmaWxlIjoicGFnZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvSFRNTC1GdW5ueS00MDQtUGFnZXMuZ2lmXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\royea\Desktop\Shopping Online\Frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "3fOF":
/*!**********************************************************!*\
  !*** ./src/app/auth-area/auth-log/auth-log.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLogComponent", function() { return AuthLogComponent; });
/* harmony import */ var src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/paths.environment */ "V9dn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-services/notification.service */ "RYsQ");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AuthLogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Hello Guest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Please login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AuthLogComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthLogComponent_ng_container_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Hello ", ctx_r2.user.firstName, " ", ctx_r2.user.lastName, " ");
} }
class AuthLogComponent {
    constructor(notificationService, authService, router) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
    }
    //handling logout user;
    logout() {
        this.authService.logout();
        this.notificationService.success("You have been Logout!");
        this.router.navigateByUrl(src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_0__["paths"].homeUrl);
    }
}
AuthLogComponent.ɵfac = function AuthLogComponent_Factory(t) { return new (t || AuthLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthLogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthLogComponent, selectors: [["app-auth-log"]], inputs: { user: "user" }, decls: 8, vars: 3, consts: [["mat-tab-link", "", "routerLinkActive", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], [1, "accountCircle"], ["menu", "matMenu"], [4, "ngIf"], ["mat-menu-item", "", 3, "click"]], template: function AuthLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AuthLogComponent_ng_container_6_Template, 5, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AuthLogComponent_ng_container_7_Template, 11, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], styles: ["h5[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    color: black;  \r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bolder;\r\n}\r\n.accountCircle[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJhdXRoLWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbmEge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiBibGFjazsgIFxyXG59XHJcbm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmFjY291bnRDaXJjbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ "6M75":
/*!****************************************************************!*\
  !*** ./src/app/shared-area/search-bar/search-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function SearchBarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchBarComponent {
    constructor() {
        //handling output for "Father" Element;
        this.productToSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //handling search output the string;
    searchProduct() {
        this.productToSearch.emit(this.productNameValue);
    }
    //clearing the search input and output empty string;
    clear() {
        this.productNameValue = '';
        this.productToSearch.emit(this.productNameValue);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], outputs: { productToSearch: "productToSearch" }, decls: 8, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange", "keyup"], ["productToSearchInfo", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Search Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_5_listener($event) { return ctx.productNameValue = $event; })("keyup", function SearchBarComponent_Template_input_keyup_5_listener() { return ctx.searchProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchBarComponent_button_7_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productNameValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n    width: 180px;\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "8chj":
/*!****************************************************!*\
  !*** ./src/app/services/auth-guard/login.guard.ts ***!
  \****************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/paths.environment */ "V9dn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-services/notification.service */ "RYsQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginGuard {
    constructor(notificationService, router) {
        this.notificationService = notificationService;
        this.router = router;
    }
    canActivate() {
        const user = _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user;
        if (user && user.role === "0")
            return true;
        if (!user)
            this.notificationService.error("You are not logged in!");
        else
            this.notificationService.error("You don't authorized to access that page!!");
        this.router.navigateByUrl(src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__["paths"].homeUrl);
        return false;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_global_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "A3N1":
/*!*********************************************************!*\
  !*** ./src/app/models/auth-models/credentials.model.ts ***!
  \*********************************************************/
/*! exports provided: CredentialsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsModel", function() { return CredentialsModel; });
class CredentialsModel {
}


/***/ }),

/***/ "AtrT":
/*!****************************************!*\
  !*** ./src/app/helpers/cities-data.ts ***!
  \****************************************/
/*! exports provided: Cities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cities", function() { return Cities; });
const Cities = [
    { name: 'Acre' },
    { name: 'Afula' },
    { name: 'Arad' },
    { name: 'Arraba' },
    { name: 'Ashdod' },
    { name: 'Baqa al - Gharbiyye' },
    { name: 'Ashkelon' },
    { name: 'Bat Yam' },
    { name: 'Beer sheba' },
    { name: 'Beit Shean' },
    { name: 'Beit Shemesh' },
    { name: 'Bnei Brak' },
    { name: 'Dimona' },
    { name: 'Eilat' },
    { name: `El'ad` },
    { name: `Giv'at Shmuel` },
    { name: 'Givatayim' },
    { name: 'Hadera' },
    { name: 'Haifa' },
    { name: 'Herzliya' },
    { name: 'Hod HaSharon' },
    { name: 'Holon' },
    { name: 'Jerusalem' },
    { name: 'Kafr Qasim' },
    { name: 'Karmiel' },
    { name: 'Kfar Saba' },
    { name: 'Kfar Yona' },
    { name: 'Kiryat Ata' },
    { name: 'Kiryat Bialik' },
    { name: 'Kiryat Gat' },
    { name: 'Kiryat Malakhi' },
    { name: 'Kiryat Motzkin' },
    { name: 'Kiryat Ono' },
    { name: 'Kiryat Shmona' },
    { name: 'Kiryat Yam' },
    { name: 'Lod' },
    { name: `Ma'alot-Tarshiha` },
    { name: 'Migdal HaEmek' },
    { name: `Modi'in-Maccabim-Re'ut` },
    { name: 'Nahariya' },
    { name: 'Nazareth' },
    { name: 'Nesher' },
    { name: 'Ness Ziona' },
    { name: 'Netanya' },
    { name: 'Netivot' },
    { name: 'Nof HaGalil' },
    { name: 'Ofakim' },
    { name: 'Or Akiva' },
    { name: 'Or Yehuda' },
    { name: 'Petah Tikva' },
    { name: 'Qalansawe' },
    { name: `Ra'anana` },
    { name: 'Rahat' },
    { name: 'Ramat Gan' },
    { name: 'Ramat HaSharon' },
    { name: 'Ramla' },
    { name: 'Rehovot' },
    { name: 'Rishon LeZion' },
    { name: 'Rosh HaAyin' },
    { name: 'Safed' },
    { name: 'Sakhnin' },
    { name: 'Sderot' },
    { name: `Shefa - 'Amr` },
    { name: 'Tamra' },
    { name: 'Tayibe' },
    { name: 'Tel Aviv - Yafo' },
    { name: 'Tiberias' },
    { name: 'Tira' },
    { name: 'Tirat Carmel' },
    { name: 'Umm al - Fahm' },
    { name: 'Yavne' },
    { name: 'Yehud - Monosson' },
    { name: 'Yokneam Illit' },
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    registerUrl: "http://localhost:3001/api/auth/register/",
    loginUrl: "http://localhost:3001/api/auth/login/",
    confirmEmailOrIdUrl: "http://localhost:3001/api/auth/confirm/",
    productsUrl: "http://localhost:3001/api/products/",
    adminPanelUrl: "http://localhost:3001/api/admin/",
    orderUrl: "http://localhost:3001/api/order/",
    categoriesUrl: "http://localhost:3001/api/categories/",
    shoppingCartUrl: "http://localhost:3001/api/shopping-cart/",
    cartItemsUrl: "http://localhost:3001/api/cart-items/",
    socketIoUrl: "http://localhost:3001/",
};


/***/ }),

/***/ "CPsh":
/*!************************************************************!*\
  !*** ./src/app/services/global-services/errors.service.ts ***!
  \************************************************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorsService {
    getError(err) {
        var _a;
        if (typeof err === "string")
            return err;
        if (typeof err.error === "string")
            return err.error;
        if (Array.isArray(err.error)) {
            let allErrors = "";
            for (const item of err.error) {
                allErrors += item + "<br>";
            }
            return allErrors;
        }
        if ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data)
            return err.response.data;
        if (typeof err.message === "string") {
            if (err.message.startsWith("Network Error")) {
                return "The server is down or your network \n please try again.";
            }
            return err.message;
        }
        return "Some error occurred, please try again later.";
    }
}
ErrorsService.ɵfac = function ErrorsService_Factory(t) { return new (t || ErrorsService)(); };
ErrorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorsService, factory: ErrorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "CjlW":
/*!*****************************************!*\
  !*** ./src/app/redux/products-state.ts ***!
  \*****************************************/
/*! exports provided: ProductsState, ProductsActionType, downloadedProductAction, addedProductAction, updatedProductAction, productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsState", function() { return ProductsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsActionType", function() { return ProductsActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadedProductAction", function() { return downloadedProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addedProductAction", function() { return addedProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedProductAction", function() { return updatedProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return productsReducer; });
class ProductsState {
    constructor() {
        this.products = [];
        const products = JSON.parse(sessionStorage.getItem("products"));
        if (products) {
            this.products = products;
        }
    }
}
var ProductsActionType;
(function (ProductsActionType) {
    ProductsActionType["ProductsDownloaded"] = "ProductsDownloaded";
    ProductsActionType["ProductAdded"] = "ProductAdded";
    ProductsActionType["ProductUpdated"] = "ProductUpdated";
    ProductsActionType["ProductDeleted"] = "ProductDeleted";
})(ProductsActionType || (ProductsActionType = {}));
function downloadedProductAction(products) {
    return { type: ProductsActionType.ProductsDownloaded, payload: products };
}
function addedProductAction(product) {
    return { type: ProductsActionType.ProductAdded, payload: product };
}
function updatedProductAction(product) {
    return { type: ProductsActionType.ProductUpdated, payload: product };
}
function productsReducer(currentState = new ProductsState(), action) {
    const newState = Object.assign({}, currentState); // Duplicate currentState into a newState.
    switch (action.type) {
        case ProductsActionType.ProductsDownloaded:
            newState.products = action.payload; // payload = all products
            break;
        case ProductsActionType.ProductAdded:
            newState.products.push(action.payload); // payload = the added product
            break;
        case ProductsActionType.ProductUpdated:
            const indexToUpdate = newState.products.findIndex(p => p._id == action.payload._id);
            newState.products[indexToUpdate] = action.payload; // payload = the updated product
            break;
        case ProductsActionType.ProductDeleted:
            const indexToDelete = newState.products.findIndex(p => p._id == action.payload); // payload = the deleted product's id
            newState.products.splice(indexToDelete, 1);
            break;
    }
    sessionStorage.setItem("products", JSON.stringify(newState.products));
    return newState; // Return the newState.
}


/***/ }),

/***/ "D9nx":
/*!***************************************************************!*\
  !*** ./src/app/services/global-services/socket-io.service.ts ***!
  \***************************************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _redux_products_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/products-state */ "CjlW");
/* harmony import */ var src_app_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/cart-items-state */ "ZWFy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.service */ "RYsQ");







class SocketIoService {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    connect() {
        // Connect to socket.io:
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["io"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].socketIoUrl);
        // Listen to socket.io events: 
        this.socket.on("msg-from-server-product-added", (addedProduct) => {
            _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_products_state__WEBPACK_IMPORTED_MODULE_3__["addedProductAction"])(addedProduct));
            this.notificationService.success("New Product in store! " + addedProduct.name);
        });
        this.socket.on("msg-from-server-product-updated", (updatedProduct) => {
            _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_products_state__WEBPACK_IMPORTED_MODULE_3__["updatedProductAction"])(updatedProduct));
        });
        this.socket.on("msg-from-server-cart-item-updated", (cartItem) => {
            _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(src_app_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_4__["updatedCartItemAction"])(cartItem));
        });
    }
    disconnect() {
        this.socket.disconnect();
    }
}
SocketIoService.ɵfac = function SocketIoService_Factory(t) { return new (t || SocketIoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"])); };
SocketIoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SocketIoService, factory: SocketIoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DS2C":
/*!*************************************************************!*\
  !*** ./src/app/services/global-services/jwt.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JwtInterceptor {
    intercept(request, next) {
        // If user exists (logged in):
        if (_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user) {
            // Clone the request object: 
            request = request.clone({
                // Add the token (if exist) to any request:
                setHeaders: {
                    Authorization: "Bearer " + _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user.token
                }
            });
        }
        // Call next for continuing the request: 
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ "J2D+":
/*!**********************************************************!*\
  !*** ./src/app/home-area/about-us/about-us.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutUsComponent {
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 5, vars: 0, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " We have the best workers, the cleanest, and the lower prices in country! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Our products have been chosen exactly for you and exactly for your family ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    height: 100%;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]::before {    \r\n    content: \"\";\r\n    background-image: url('baby-supermarket.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 20px;\r\n    opacity: 0.65;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkNBQW9FO0lBQ3BFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6ImFib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmRpdjo6YmVmb3JlIHsgICAgXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWJ5LXN1cGVybWFya2V0LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxufVxyXG5cclxuZGl2ID4gaDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "L534":
/*!**********************************************************************!*\
  !*** ./src/app/home-area/market-details/market-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: MarketDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketDetailsComponent", function() { return MarketDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MarketDetailsComponent_div_7_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" You have open cart from ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r3.shoppingCart.cartCreationDate), " ");
} }
function MarketDetailsComponent_div_7_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Your last purchase was on ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r4.shoppingCart.cartCreationDate), " ");
} }
function MarketDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MarketDetailsComponent_div_7_p_3_Template, 3, 3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MarketDetailsComponent_div_7_p_4_Template, 3, 3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Hello ", ctx_r0.user.firstName, " ", ctx_r0.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.shoppingCart.open && ctx_r0.shoppingCart.userId === ctx_r0.user._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.shoppingCart.open && ctx_r0.shoppingCart.userId === ctx_r0.user._id);
} }
function MarketDetailsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "You have admin control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Welcome ", ctx_r1.user.firstName, " ", ctx_r1.user.lastName, "");
} }
function MarketDetailsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Please Start Your First Shopping Enjoy!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Welcome ", ctx_r2.user.firstName, " ", ctx_r2.user.lastName, "");
} }
class MarketDetailsComponent {
    constructor(httpClient, notificationService) {
        this.httpClient = httpClient;
        this.notificationService = notificationService;
        this.countProducts = 0;
        this.countOrders = 0;
        this.shoppingCart = src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().shoppingCartState.shoppingCart;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //getting from server how many products and orders have;
                this.countProducts = yield this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].productsUrl + "totalProduct").toPromise();
                this.countOrders = yield this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].orderUrl + "totalOrders").toPromise();
                //handling shopping cart change in store;
                this.unsubscribeStore = src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(() => {
                    this.shoppingCart = src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().shoppingCartState.shoppingCart;
                });
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    //cancel the subscribe to avoid any memory leak; 
    ngOnDestroy() {
        if (this.unsubscribeStore)
            this.unsubscribeStore();
    }
}
MarketDetailsComponent.ɵfac = function MarketDetailsComponent_Factory(t) { return new (t || MarketDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
MarketDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MarketDetailsComponent, selectors: [["app-market-details"]], inputs: { user: "user" }, decls: 10, vars: 5, consts: [[1, "market-details"], ["src", "../../../assets/images/store-products.jpg"], ["class", "box", 4, "ngIf"], [1, "box"], [4, "ngIf"]], template: function MarketDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MarketDetailsComponent_div_7_Template, 5, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MarketDetailsComponent_div_8_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MarketDetailsComponent_div_9_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Available Products in our store ", ctx.countProducts, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Number of orders submitted in our store ", ctx.countOrders, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user && ctx.shoppingCart && (ctx.user == null ? null : ctx.user.role) === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.role) === "Admin-Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.shoppingCart && (ctx.user == null ? null : ctx.user.role) === "0");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".market-details[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    height: 100%;\r\n    color: black;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.market-details[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border: 1px solid black;\r\n    background-color: rgb(107, 106, 106);\r\n    width: 80%;\r\n    padding: 10px;\r\n    margin:10px;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 10px;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: yellow;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: x-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibWFya2V0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrZXQtZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJrZXQtZGV0YWlscyA+IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA3LCAxMDYsIDEwNik7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweDtcclxufVxyXG4uYm94ICoge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG4uYm94IGg0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "RYsQ":
/*!******************************************************************!*\
  !*** ./src/app/services/global-services/notification.service.ts ***!
  \******************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var notyf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notyf */ "ttB+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.service */ "CPsh");



class NotificationService {
    constructor(myErrorsService) {
        this.myErrorsService = myErrorsService;
        this.myNotyf = new notyf__WEBPACK_IMPORTED_MODULE_0__["Notyf"]({ duration: 4000, ripple: true, position: { x: "left", y: "bottom" } });
    }
    success(message) {
        this.myNotyf.success(message);
    }
    error(err) {
        this.myNotyf.error(this.myErrorsService.getError(err));
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_errors_service__WEBPACK_IMPORTED_MODULE_2__["ErrorsService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RfnD":
/*!**************************************************************!*\
  !*** ./src/app/shared-area/cart-card/cart-card.component.ts ***!
  \**************************************************************/
/*! exports provided: CartCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCardComponent", function() { return CartCardComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_cart_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/market-services/cart-items.service */ "cOBF");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class CartCardComponent {
    constructor(cartItemsService) {
        this.cartItemsService = cartItemsService;
    }
    ngOnInit() {
        //getting product images from server;
        this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].productsUrl + "productImages/" + this.cartItem.product.imageName;
    }
    //handling plus quantity change from user;
    plus() {
        this.cartItem.quantity++;
        this.cartItem.totalPrice = this.cartItem.quantity * this.cartItem.product.price;
        this.cartItemsService.updateCartItemAsync(this.cartItem);
    }
    //handling minus quantity change from user;
    minus() {
        this.cartItem.quantity--;
        this.cartItem.totalPrice = this.cartItem.quantity * this.cartItem.product.price;
        this.cartItemsService.updateCartItemAsync(this.cartItem);
    }
    //handling delete specific cart item;
    deleteCartItem() {
        this.cartItemsService.deleteCartItemAsync(this.cartItem._id);
    }
}
CartCardComponent.ɵfac = function CartCardComponent_Factory(t) { return new (t || CartCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_market_services_cart_items_service__WEBPACK_IMPORTED_MODULE_2__["CartItemsService"])); };
CartCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartCardComponent, selectors: [["app-cart-card"]], inputs: { cartItem: "cartItem", enableChanges: "enableChanges" }, decls: 25, vars: 15, consts: [["mat-card-image", "", 3, "src", "alt"], [3, "ngStyle"], ["mat-icon-button", "", "color", "warn", 3, "hidden", "disabled", "click"], ["matInput", "", "disabled", "", "type", "number", "min", "1", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "accent", 3, "hidden", "click"], ["mat-icon-button", "", 3, "hidden", "click"]], template: function CartCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartCardComponent_Template_button_click_12_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartCardComponent_Template_input_ngModelChange_18_listener($event) { return ctx.cartItem.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartCardComponent_Template_button_click_19_listener() { return ctx.plus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartCardComponent_Template_a_click_22_listener() { return ctx.deleteCartItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "delete_forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.cartItem.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.cartItem.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cartItem.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 11, ctx.cartItem.product.price), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.cartItem.totalPrice), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.enableChanges)("disabled", ctx.cartItem.quantity <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cartItem.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.enableChanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.enableChanges);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    padding: 0;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    float: left;\r\n}\r\n.mat-card-image[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    margin: 10px;\r\n}\r\nmat-card-title[_ngcontent-%COMP%]{\r\n    word-wrap: break-word;\r\n    width: 100px;\r\n    font-size: medium;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 1px;\r\n    right: 1px;\r\n}\r\nbutton[hidden][_ngcontent-%COMP%], a[hidden][_ngcontent-%COMP%]{\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiY2FydC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxubWF0LWNhcmQtdGl0bGV7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5hIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcmlnaHQ6IDFweDtcclxufVxyXG5cclxuYnV0dG9uW2hpZGRlbl0sYVtoaWRkZW5de1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "TLMc":
/*!***********************************************************!*\
  !*** ./src/app/models/cart-models/shopping-cart.model.ts ***!
  \***********************************************************/
/*! exports provided: ShoppingCartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartModel", function() { return ShoppingCartModel; });
class ShoppingCartModel {
    constructor() {
        this.cartCreationDate = new Date().toString();
        this.open = true;
    }
}


/***/ }),

/***/ "Ujoz":
/*!**********************************************************************************!*\
  !*** ./src/app/auth-area/address-details-form/address-details-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddressDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailsFormComponent", function() { return AddressDetailsFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_helpers_cities_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/cities-data */ "AtrT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function AddressDetailsFormComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", city_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", city_r1.name, " ");
} }
class AddressDetailsFormComponent {
    constructor(_formBuilder, ctrlContainer) {
        this._formBuilder = _formBuilder;
        this.ctrlContainer = ctrlContainer;
        this.cities = src_app_helpers_cities_data__WEBPACK_IMPORTED_MODULE_1__["Cities"];
    }
    ngOnInit() {
        //using form builder service to specify the form elements
        this.subForm = this._formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        //adding control to the "father" form group
        //element to access it from "father" component;
        this.secondFormGroup = this.ctrlContainer.form;
        this.secondFormGroup.addControl("addressForm", this.subForm);
    }
    //handling error messages;
    errorMessage(input) {
        const inputControl = this.subForm.get(input);
        if (inputControl.hasError('required'))
            return `${input} is required`;
        if (inputControl.hasError('minlength'))
            return 'Min length is 2';
        if (inputControl.hasError('pattern'))
            return 'You used double spaces or started with space';
        return '';
    }
}
AddressDetailsFormComponent.ɵfac = function AddressDetailsFormComponent_Factory(t) { return new (t || AddressDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"])); };
AddressDetailsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddressDetailsFormComponent, selectors: [["app-address-details-form"]], decls: 27, vars: 6, consts: [[3, "formGroup"], ["appearance", "outline"], ["formControlName", "city", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "address", "pattern", "^([a-zA-Z0-9\\u0590-\\u05fe]+[_@./#&+-]?\\s?)+$", "minlength", "2", "required", ""], ["matInput", "", "type", "text", "formControlName", "firstName", "pattern", "^([a-zA-Z0-9\\u0590-\\u05fe]+[_@./#&+-]?\\s?)+$", "minlength", "2", "required", ""], ["matInput", "", "formControlName", "lastName", "pattern", "^([a-zA-Z0-9\\u0590-\\u05fe]+[_@./#&+-]?\\s?)+$", "minlength", "2", "required", ""], [3, "value"]], template: function AddressDetailsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddressDetailsFormComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("city"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("address"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("firstName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("lastName"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n    margin-top: 0.75em;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MtZGV0YWlscy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJhZGRyZXNzLWRldGFpbHMtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLGlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "UzwW":
/*!**********************************************************!*\
  !*** ./src/app/auth-area/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/paths.environment */ "V9dn");
/* harmony import */ var _helpers_cities_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/cities-data */ "AtrT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-details-form/user-details-form.component */ "wlp7");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _address_details_form_address_details_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../address-details-form/address-details-form.component */ "Ujoz");












function RegisterComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Fill out your user details");
} }
function RegisterComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Fill out your address");
} }
class RegisterComponent {
    constructor(_formBuilder, authService, router, cd, notificationService) {
        this._formBuilder = _formBuilder;
        this.authService = authService;
        this.router = router;
        this.cd = cd;
        this.notificationService = notificationService;
        this.cities = _helpers_cities_data__WEBPACK_IMPORTED_MODULE_2__["Cities"];
        this.paths = src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__["paths"];
        //handling register;
        this.register = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                delete this.firstFormGroup.value["userForm"]['confirmPassword'];
                const newUser = Object.assign(Object.assign({}, this.firstFormGroup.value["userForm"]), this.secondFormGroup.value["addressForm"]);
                newUser.email = newUser.email.toLowerCase();
                const registeredUser = yield this.authService.registerAsync(newUser);
                this.notificationService.success(`Welcome! ${registeredUser.firstName}`);
                this.router.navigateByUrl(src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__["paths"].homeUrl);
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    ngAfterViewChecked() {
        this.cd.detectChanges();
    }
    ngOnInit() {
        //specify that we have 2 form groups that will specify in "children" components;
        this.firstFormGroup = this._formBuilder.group({});
        this.secondFormGroup = this._formBuilder.group({});
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 25, vars: 8, consts: [[3, "linear"], ["stepper", "matHorizontalStepper"], [3, "stepControl"], ["matStepLabel", ""], [3, "formGroup"], [1, "buttonGroup"], ["mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["mat-button", "", 3, "routerLink"], [3, "formGroup", "submit"], ["mat-raised-button", "", "color", "warn", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-horizontal-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RegisterComponent_ng_template_6_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-user-details-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Already have user?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, RegisterComponent_ng_template_15_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_16_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-address-details-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Already have user?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", ctx.paths.homeUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.secondFormGroup.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", ctx.paths.homeUrl);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsFormComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperNext"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _address_details_form_address_details_form_component__WEBPACK_IMPORTED_MODULE_11__["AddressDetailsFormComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperPrevious"]], styles: ["div[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\nmat-horizontal-stepper[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #3f51b5;\r\n    margin-left: 10px;\r\n}\r\n\r\n.buttonGroup[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n    margin-top: 10px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    mat-horizontal-stepper[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5idXR0b24saW5wdXQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5kaXYgPiBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uYnV0dG9uR3JvdXAgPiBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "V9dn":
/*!***********************************************!*\
  !*** ./src/environments/paths.environment.ts ***!
  \***********************************************/
/*! exports provided: paths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paths", function() { return paths; });
const paths = {
    homeUrl: "/",
    registerUrl: "/auth/register",
    marketUrl: "/market",
    adminMarketUrl: "/admin-market",
    orderUrl: "/order",
};


/***/ }),

/***/ "Vmn7":
/*!*******************************************************************!*\
  !*** ./src/app/services/market-services/shopping-cart.service.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _redux_shopping_cart_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/shopping-cart-state */ "ze1M");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ShoppingCartService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getShoppingCartAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const storeShoppingCart = _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().shoppingCartState.shoppingCart;
            const userId = _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().authState.user._id;
            if (!storeShoppingCart || userId !== storeShoppingCart.userId) {
                const shoppingCart = yield this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].shoppingCartUrl + userId).toPromise();
                _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_shopping_cart_state__WEBPACK_IMPORTED_MODULE_2__["downloadedShoppingCartAction"])(shoppingCart));
            }
            return _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().shoppingCartState.shoppingCart;
        });
    }
    createShoppingCart(shoppingCart) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const createdShoppingCart = yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].shoppingCartUrl, shoppingCart).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_shopping_cart_state__WEBPACK_IMPORTED_MODULE_2__["createdShoppingCartAction"])(createdShoppingCart));
            return createdShoppingCart;
        });
    }
}
ShoppingCartService.ɵfac = function ShoppingCartService_Factory(t) { return new (t || ShoppingCartService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ShoppingCartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ShoppingCartService, factory: ShoppingCartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _layout_area_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-area/layout/layout.component */ "jf3O");
/* harmony import */ var _layout_area_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-area/header/header.component */ "ZL8y");
/* harmony import */ var _layout_area_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-area/contact-us/contact-us.component */ "wLpx");
/* harmony import */ var _home_area_market_details_market_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-area/market-details/market-details.component */ "L534");
/* harmony import */ var _home_area_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-area/home/home.component */ "lNP/");
/* harmony import */ var _auth_area_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-area/login/login.component */ "lj2Z");
/* harmony import */ var _auth_area_auth_log_auth_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-area/auth-log/auth-log.component */ "3fOF");
/* harmony import */ var _home_area_resume_shop_resume_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-area/resume-shop/resume-shop.component */ "wZLn");
/* harmony import */ var _auth_area_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-area/register/register.component */ "UzwW");
/* harmony import */ var _auth_area_user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-area/user-details-form/user-details-form.component */ "wlp7");
/* harmony import */ var _auth_area_address_details_form_address_details_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-area/address-details-form/address-details-form.component */ "Ujoz");
/* harmony import */ var _home_area_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-area/about-us/about-us.component */ "J2D+");
/* harmony import */ var _layout_area_page404_page404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout-area/page404/page404.component */ "+zi9");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared-area/shared-area.module */ "v2Hk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_layout_area_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_26__["SharedAreaModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_layout_area_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"],
        _layout_area_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"],
        _layout_area_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"],
        _home_area_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _auth_area_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _auth_area_auth_log_auth_log_component__WEBPACK_IMPORTED_MODULE_6__["AuthLogComponent"],
        _home_area_resume_shop_resume_shop_component__WEBPACK_IMPORTED_MODULE_7__["ResumeShopComponent"],
        _auth_area_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _auth_area_user_details_form_user_details_form_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsFormComponent"],
        _auth_area_address_details_form_address_details_form_component__WEBPACK_IMPORTED_MODULE_10__["AddressDetailsFormComponent"],
        _home_area_market_details_market_details_component__WEBPACK_IMPORTED_MODULE_3__["MarketDetailsComponent"],
        _layout_area_page404_page404_component__WEBPACK_IMPORTED_MODULE_12__["Page404Component"],
        _home_area_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _shared_area_shared_area_module__WEBPACK_IMPORTED_MODULE_26__["SharedAreaModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"]] }); })();


/***/ }),

/***/ "ZL8y":
/*!********************************************************!*\
  !*** ./src/app/layout-area/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/paths.environment */ "V9dn");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-us/contact-us.component */ "wLpx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_area_auth_log_auth_log_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth-area/auth-log/auth-log.component */ "3fOF");









const _c0 = function () { return { exact: true }; };
function HeaderComponent_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 7, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 7, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r3.paths.marketUrl)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("active", _r4.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r3.paths.orderUrl)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("active", _r5.isActive);
} }
function HeaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_ng_container_4_ng_container_4_Template, 7, 8, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.paths.homeUrl)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0))("active", _r2.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.user);
} }
function HeaderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 7, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Admin Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r1.paths.homeUrl)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("active", _r6.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r1.paths.adminMarketUrl)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("active", _r7.isActive);
} }
class HeaderComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.paths = src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_1__["paths"];
        this.user = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user;
    }
    ngOnInit() {
        //subscribe for user change in store.
        this.unsubscribeStore = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(() => {
            this.user = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user;
        });
    }
    //open contactUsComponent with dialog;
    openDialog() {
        this.dialog.open(_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"], {
            width: '250px'
        });
    }
    //cancel the subscribe to avoid any memory leak; 
    ngOnDestroy() {
        if (this.unsubscribeStore)
            this.unsubscribeStore();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 3, consts: [["mat-tab-nav-bar", ""], ["mat-tab-link", "", "disabled", "", 1, "headerTag"], [1, "example-spacer"], [4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", ""], [3, "user"], ["mat-tab-link", "", 3, "click"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "routerLinkActiveOptions", "active"], ["home", "routerLinkActive"], ["mat-align-tabs", "center", 4, "ngIf"], ["mat-align-tabs", "center"], ["products", "routerLinkActive"], ["order", "routerLinkActive"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Food Land");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_ng_container_4_Template, 5, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HeaderComponent_ng_container_5_Template, 7, 8, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-auth-log", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.user || (ctx.user == null ? null : ctx.user.role) === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.role) === "Admin-Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("user", ctx.user);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _auth_area_auth_log_auth_log_component__WEBPACK_IMPORTED_MODULE_8__["AuthLogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%]{\r\n    background-color: rgb(56, 56, 56);\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n.headerTag[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n    color: white;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxufVxyXG5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5oZWFkZXJUYWcge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZWFy":
/*!*******************************************!*\
  !*** ./src/app/redux/cart-items-state.ts ***!
  \*******************************************/
/*! exports provided: CartItemsState, CartItemsActionType, downloadedCartItemsAction, addedCartItemAction, updatedCartItemAction, deletedCartItemAction, resetCartItemsAction, cartItemsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsState", function() { return CartItemsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsActionType", function() { return CartItemsActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadedCartItemsAction", function() { return downloadedCartItemsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addedCartItemAction", function() { return addedCartItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedCartItemAction", function() { return updatedCartItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletedCartItemAction", function() { return deletedCartItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCartItemsAction", function() { return resetCartItemsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItemsReducer", function() { return cartItemsReducer; });
class CartItemsState {
    constructor() {
        this.cartItems = [];
    }
}
var CartItemsActionType;
(function (CartItemsActionType) {
    CartItemsActionType["CartItemsDownloaded"] = "CartItemsDownloaded";
    CartItemsActionType["CartItemAdded"] = "CartItemAdded";
    CartItemsActionType["CartItemUpdated"] = "CartItemUpdated";
    CartItemsActionType["CartItemDeleted"] = "CartItemDeleted";
    CartItemsActionType["resetCartItems"] = "resetCartItems";
})(CartItemsActionType || (CartItemsActionType = {}));
function downloadedCartItemsAction(cartItems) {
    return { type: CartItemsActionType.CartItemsDownloaded, payload: cartItems };
}
function addedCartItemAction(cartItems) {
    return { type: CartItemsActionType.CartItemAdded, payload: cartItems };
}
function updatedCartItemAction(cartItems) {
    return { type: CartItemsActionType.CartItemUpdated, payload: cartItems };
}
function deletedCartItemAction(_id) {
    return { type: CartItemsActionType.CartItemDeleted, payload: _id };
}
function resetCartItemsAction() {
    return { type: CartItemsActionType.resetCartItems };
}
// Products Reducer: 
function cartItemsReducer(currentState = new CartItemsState(), action) {
    const newState = Object.assign({}, currentState);
    switch (action.type) {
        case CartItemsActionType.CartItemsDownloaded:
            newState.cartItems = action.payload;
            break;
        case CartItemsActionType.CartItemAdded:
            newState.cartItems.push(action.payload);
            break;
        case CartItemsActionType.CartItemUpdated:
            const indexToUpdate = newState.cartItems.findIndex(p => p._id == action.payload._id);
            newState.cartItems[indexToUpdate] = action.payload;
            break;
        case CartItemsActionType.CartItemDeleted:
            const indexToDelete = newState.cartItems.findIndex(p => p._id == action.payload);
            newState.cartItems.splice(indexToDelete, 1);
            break;
        case CartItemsActionType.resetCartItems:
            newState.cartItems = [];
            break;
    }
    return newState;
}


/***/ }),

/***/ "aZb7":
/*!*************************************!*\
  !*** ./src/app/redux/auth-state.ts ***!
  \*************************************/
/*! exports provided: AuthState, AuthActionType, userRegisteredAction, userLoggedInAction, userLoggedOutAction, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthState", function() { return AuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionType", function() { return AuthActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegisteredAction", function() { return userRegisteredAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLoggedInAction", function() { return userLoggedInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLoggedOutAction", function() { return userLoggedOutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
// Auth App State:
class AuthState {
    // On page refresh - load saved user back to state: 
    constructor() {
        this.user = null;
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (user) {
            this.user = user;
        }
    }
}
// User Action Type:
var AuthActionType;
(function (AuthActionType) {
    AuthActionType["UserRegistered"] = "UserRegistered";
    AuthActionType["UserLoggedIn"] = "UserLoggedIn";
    AuthActionType["UserLoggedOut"] = "UserLoggedOut";
})(AuthActionType || (AuthActionType = {}));
// User Action Creators: 
function userRegisteredAction(user) {
    return { type: AuthActionType.UserRegistered, payload: user };
}
function userLoggedInAction(user) {
    return { type: AuthActionType.UserLoggedIn, payload: user };
}
function userLoggedOutAction() {
    return { type: AuthActionType.UserLoggedOut };
}
// User Reducer: 
function authReducer(currentState = new AuthState(), action) {
    const newState = Object.assign({}, currentState);
    switch (action.type) {
        case AuthActionType.UserRegistered:
        case AuthActionType.UserLoggedIn:
            newState.user = action.payload;
            sessionStorage.setItem("user", JSON.stringify(newState.user));
            break;
        case AuthActionType.UserLoggedOut:
            newState.user = null;
            sessionStorage.clear();
            break;
    }
    return newState;
}


/***/ }),

/***/ "cOBF":
/*!****************************************************************!*\
  !*** ./src/app/services/market-services/cart-items.service.ts ***!
  \****************************************************************/
/*! exports provided: CartItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemsService", function() { return CartItemsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _redux_cart_items_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/cart-items-state */ "ZWFy");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class CartItemsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCartItemsAsync(shoppingCartId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cartItems = _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().cartItemState.cartItems;
            if (!cartItems.length || cartItems[0].shoppingCartId !== shoppingCartId) {
                const cartItems = yield this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cartItemsUrl + shoppingCartId).toPromise();
                _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_2__["downloadedCartItemsAction"])(cartItems));
            }
            return _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().cartItemState.cartItems;
        });
    }
    addCartItemAsync(cartItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addedCartItem = yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cartItemsUrl, cartItem).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_2__["addedCartItemAction"])(addedCartItem));
            return addedCartItem;
        });
    }
    deleteCartItemAsync(_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cartItemsUrl + _id).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_2__["deletedCartItemAction"])(_id));
        });
    }
    deleteAllCartItemsAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const shoppingCartId = _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().shoppingCartState.shoppingCart._id;
            yield this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cartItemsUrl + "all/" + shoppingCartId).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_2__["resetCartItemsAction"])());
        });
    }
    updateCartItemAsync(cartItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updatedCartItem = yield this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cartItemsUrl + cartItem._id, cartItem).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_2__["updatedCartItemAction"])(updatedCartItem));
            return updatedCartItem;
        });
    }
    getTotalPrice() {
        let totalPrice = 0;
        _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().cartItemState.cartItems.map(c => totalPrice += c.totalPrice);
        return totalPrice;
    }
    getTotalQuantity() {
        let quantity = 0;
        _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().cartItemState.cartItems.map(c => quantity += c.quantity);
        return quantity;
    }
}
CartItemsService.ɵfac = function CartItemsService_Factory(t) { return new (t || CartItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CartItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CartItemsService, factory: CartItemsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jIN5":
/*!****************************************************!*\
  !*** ./src/app/services/auth-guard/admin.guard.ts ***!
  \****************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _environments_paths_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/paths.environment */ "V9dn");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global-services/notification.service */ "RYsQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AdminGuard {
    constructor(notificationService, router) {
        this.notificationService = notificationService;
        this.router = router;
    }
    canActivate() {
        const user = _redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().authState.user;
        if (user && user.role === "Admin-Role")
            return true;
        if (!user)
            this.notificationService.error("You are not logged in!");
        else
            this.notificationService.error("You don't authorized to access that page!!");
        this.router.navigateByUrl(_environments_paths_environment__WEBPACK_IMPORTED_MODULE_0__["paths"].homeUrl);
        return false;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_global_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jf3O":
/*!********************************************************!*\
  !*** ./src/app/layout-area/layout/layout.component.ts ***!
  \********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/global-services/socket-io.service */ "D9nx");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "ZL8y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LayoutComponent {
    constructor(socketIoService) {
        this.socketIoService = socketIoService;
    }
    ngOnInit() {
        var _a;
        //check if user is login after refresh to connect socket-io;
        if ((_a = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user) === null || _a === void 0 ? void 0 : _a._id) {
            this.socketIoService.connect();
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_global_services_socket_io_service__WEBPACK_IMPORTED_MODULE_2__["SocketIoService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["div[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: repeat(6,1fr);\r\n    grid-template-rows: 5% 95% 0%;\r\n}\r\n\r\nheader[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\r\n    grid-column: span 6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNSUgOTUlIDAlO1xyXG59XHJcblxyXG5oZWFkZXIsbWFpbiB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiA2O1xyXG59Il19 */"] });


/***/ }),

/***/ "lNP/":
/*!**************************************************!*\
  !*** ./src/app/home-area/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-us/about-us.component */ "J2D+");
/* harmony import */ var _market_details_market_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../market-details/market-details.component */ "L534");
/* harmony import */ var _auth_area_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth-area/login/login.component */ "lj2Z");
/* harmony import */ var _resume_shop_resume_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resume-shop/resume-shop.component */ "wZLn");







function HomeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function HomeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-resume-shop", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx_r1.user);
} }
class HomeComponent {
    constructor() {
        this.user = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user;
    }
    ngOnInit() {
        //subscribe to handle user change.
        this.unsubscribeStore = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(() => {
            this.user = src_app_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().authState.user;
        });
    }
    //cancel the subscribe to avoid any memory leak; 
    ngOnDestroy() {
        if (this.unsubscribeStore)
            this.unsubscribeStore();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 3, consts: [[1, "main-grid"], [4, "ngIf"], [3, "user"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-about-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-market-details", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("user", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"], _market_details_market_details_component__WEBPACK_IMPORTED_MODULE_4__["MarketDetailsComponent"], _auth_area_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _resume_shop_resume_shop_component__WEBPACK_IMPORTED_MODULE_6__["ResumeShopComponent"]], styles: ["div[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\ndiv[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    height: 70%;\r\n    margin: 80px;\r\n    vertical-align: top;\r\n}\r\n@media screen and (max-width: 800px) {\r\n    div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n        margin-top: 10px;\r\n        width: 300px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmRpdiA+ICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIG1hcmdpbjogODBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBkaXYgPiAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "laEZ":
/*!**************************************************************!*\
  !*** ./src/app/shared-area/cart-list/cart-list.component.ts ***!
  \**************************************************************/
/*! exports provided: CartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListComponent", function() { return CartListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/paths.environment */ "V9dn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_market_services_cart_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/market-services/cart-items.service */ "cOBF");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "6M75");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cart-card/cart-card.component */ "RfnD");











function CartListComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartListComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.deleteCart = !ctx_r4.deleteCart; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r0.enableChanges);
} }
function CartListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 12);
} }
function CartListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Dear customer, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Do you want to delete all products in the cart? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartListComponent_div_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.deleteCartAsync(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Delete Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartListComponent_div_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.deleteCart = !ctx_r8.deleteCart; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Back to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CartListComponent_ng_container_13_app_cart_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cart-card", 17);
} if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cartItem", c_r10)("enableChanges", ctx_r9.enableChanges);
} }
function CartListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CartListComponent_ng_container_13_app_cart_card_1_Template, 1, 2, "app-cart-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.cartItems);
} }
class CartListComponent {
    constructor(cartItemsService) {
        this.cartItemsService = cartItemsService;
        this.paths = src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__["paths"];
        this.totalPrice = 0;
        this.totalQuantity = 0;
        this.deleteCart = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //checking if shoppingCartId Exist to get shopping cart items;
            if (this.shoppingCartId) {
                this.cartItems = yield this.cartItemsService.getAllCartItemsAsync(this.shoppingCartId);
                this.totalPrice = this.cartItemsService.getTotalPrice();
                this.totalQuantity = this.cartItemsService.getTotalQuantity();
            }
            //subscribing for any store changes;
            this.unSubscribeFromStore = src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(() => {
                this.cartItems = src_app_redux_store__WEBPACK_IMPORTED_MODULE_1__["default"].getState().cartItemState.cartItems;
                this.totalPrice = this.cartItemsService.getTotalPrice();
                this.totalQuantity = this.cartItemsService.getTotalQuantity();
            });
        });
    }
    //handling search products in cart list (will active only in order component);
    searchProduct(name) {
        this.cartItems.map(p => {
            if (name.length && p.product.name.toLowerCase().includes(name.toLowerCase())) {
                p.background = { background: 'yellow' };
            }
            else {
                p.background = { background: 'white' };
            }
        });
    }
    //handling delete all cart items from shopping cart;
    deleteCartAsync() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cartItemsService.deleteAllCartItemsAsync();
            this.deleteCart = false;
        });
    }
    //cancel the subscribe to avoid any memory leak; 
    ngOnDestroy() {
        this.cartItems.map(p => { p.background = { background: 'white' }; });
        if (this.unSubscribeFromStore)
            this.unSubscribeFromStore();
    }
}
CartListComponent.ɵfac = function CartListComponent_Factory(t) { return new (t || CartListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_market_services_cart_items_service__WEBPACK_IMPORTED_MODULE_4__["CartItemsService"])); };
CartListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartListComponent, selectors: [["app-cart-list"]], inputs: { shoppingCartId: "shoppingCartId", enableChanges: "enableChanges" }, decls: 29, vars: 13, consts: [[1, "cart-list-container"], [1, "example-spacer"], ["mat-icon-button", "", "color", "warn", "class", "delete-cart-button", 3, "hidden", "click", 4, "ngIf"], [1, "cart-card-container"], ["mat-tab-nav-bar", "", 1, "navbarCart", 3, "hidden"], [3, "productToSearch"], ["class", "emptyProducts", 4, "ngIf"], ["class", "delete-cart-container", 4, "ngIf"], [4, "ngIf"], [1, "footerCart"], ["mat-button", "", 3, "hidden", "routerLink"], ["mat-icon-button", "", "color", "warn", 1, "delete-cart-button", 3, "hidden", "click"], [1, "emptyProducts"], [1, "delete-cart-container"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "cartItem", "enableChanges", 4, "ngFor", "ngForOf"], [3, "cartItem", "enableChanges"]], template: function CartListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Shopping Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "shopping_basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CartListComponent_button_7_Template, 3, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "app-search-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("productToSearch", function CartListComponent_Template_app_search_bar_productToSearch_10_listener($event) { return ctx.searchProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CartListComponent_div_11_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CartListComponent_div_12_Template, 9, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CartListComponent_ng_container_13_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "shopping_basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Order ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "shopping_cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cartItems == null ? null : ctx.cartItems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.enableChanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.deleteCart && !(ctx.cartItems == null ? null : ctx.cartItems.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.deleteCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.deleteCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 9, ctx.totalQuantity), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 11, ctx.totalPrice), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.enableChanges)("routerLink", ctx.paths.orderUrl);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_10__["CartCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".cart-list-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: repeat(6,1fr);\r\n    grid-template-rows: 10% 80% 10%;\r\n}\r\n\r\nheader[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\r\n    grid-column: span 6;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    grid-column: span 6;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    background-color: #3c6382;\r\n    display: flex;\r\n}\r\n\r\n.emptyProducts[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-image: url('empty-shopping-cart.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #eb2f06;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]    > a[hidden][_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n}\r\n\r\nnav[hidden][_ngcontent-%COMP%], button[hidden][_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: left;\r\n}\r\n\r\n.delete-cart-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.delete-cart-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: xx-large;\r\n}\r\n\r\n.delete-cart-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.delete-cart-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixnREFBdUU7SUFDdkUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImNhcnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtbGlzdC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA4MCUgMTAlO1xyXG59XHJcblxyXG5oZWFkZXIsZm9vdGVyIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M2MzgyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZW1wdHlQcm9kdWN0cyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2VtcHR5LXNob3BwaW5nLWNhcnQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuXHJcbmZvb3RlciA+IGF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViMmYwNjtcclxufVxyXG5cclxuZm9vdGVyID4gYVtoaWRkZW5de1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuZm9vdGVyID4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuXHJcbmZvb3RlciBoMiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5uYXZbaGlkZGVuXSxidXR0b25baGlkZGVuXXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxufVxyXG4uZGVsZXRlLWNhcnQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtY2FydC1idXR0b24gbWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuLmRlbGV0ZS1jYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uZGVsZXRlLWNhcnQtY29udGFpbmVyICp7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lj2Z":
/*!****************************************************!*\
  !*** ./src/app/auth-area/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _models_auth_models_credentials_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/auth-models/credentials.model */ "A3N1");
/* harmony import */ var _environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/paths.environment */ "V9dn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/global-services/auth.service */ "yCR3");
/* harmony import */ var _services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












class LoginComponent {
    constructor(authService, notificationService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.router = router;
        this.paths = _environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__["paths"];
        this.credentials = new _models_auth_models_credentials_model__WEBPACK_IMPORTED_MODULE_1__["CredentialsModel"]();
        this.PasswordHide = true;
    }
    //handling login user;
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.credentials.email = this.credentials.email.toLowerCase();
                const loggedInUser = yield this.authService.loginAsync(this.credentials);
                this.notificationService.success("Hello " + loggedInUser.firstName + "<br>you are now logged in");
                if (loggedInUser.role === "Admin-Role")
                    this.router.navigateByUrl(_environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__["paths"].adminMarketUrl);
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 7, consts: [["ngNativeValidate", "", 3, "submit"], ["formInfo", "ngForm"], ["appearance", "outline"], ["matInput", "", "placeholder", "email", "type", "email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "onKeyDown", "if(event.keyCode === 32)\n            return false", "name", "password", "required", "", 3, "ngModel", "type", "ngModelChange"], ["mat-icon-button", "", "type", "button", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary"], ["routerLinkActive", "active", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "https");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.PasswordHide = !ctx.PasswordHide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.credentials.password)("type", ctx.PasswordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "hide password")("aria-pressed", ctx.PasswordHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.PasswordHide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("routerLink", ctx.paths.registerUrl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: ["div[_ngcontent-%COMP%]{\r\n    position: relative; \r\n    height: 100%;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: black;\r\n\r\n}\r\ndiv[_ngcontent-%COMP%]::before {    \r\n    content: \"\";\r\n    background-image: url('login.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 20px;\r\n    opacity: 0.95;\r\n}\r\ndiv[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    position: relative;\r\n\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: xxx-large;\r\n    -webkit-text-decoration: underline 1px solid white;\r\n            text-decoration: underline 1px solid white;\r\n}\r\na[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\r\n    margin-left: 1rem;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    color: white;\r\n}\r\nmat-label[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQ0FBeUQ7SUFDekQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtEQUEwQztZQUExQywwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuZGl2OjpiZWZvcmUgeyAgICBcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxufSBcclxuZGl2ID4gKiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5hID4gYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5tYXQtbGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ "v2Hk":
/*!***************************************************!*\
  !*** ./src/app/shared-area/shared-area.module.ts ***!
  \***************************************************/
/*! exports provided: SharedAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedAreaModule", function() { return SharedAreaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "6M75");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-list/cart-list.component */ "laEZ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart-card/cart-card.component */ "RfnD");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class SharedAreaModule {
}
SharedAreaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedAreaModule });
SharedAreaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function SharedAreaModule_Factory(t) { return new (t || SharedAreaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedAreaModule, { declarations: [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"],
        _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_7__["CartListComponent"],
        _cart_card_cart_card_component__WEBPACK_IMPORTED_MODULE_11__["CartCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"],
        _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_7__["CartListComponent"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]] }); })();


/***/ }),

/***/ "vBqF":
/*!********************************!*\
  !*** ./src/app/redux/store.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _admin_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-state */ "wG8U");
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-state */ "aZb7");
/* harmony import */ var _cart_items_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-items-state */ "ZWFy");
/* harmony import */ var _products_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-state */ "CjlW");
/* harmony import */ var _shopping_cart_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart-state */ "ze1M");






const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    productsState: _products_state__WEBPACK_IMPORTED_MODULE_4__["productsReducer"],
    shoppingCartState: _shopping_cart_state__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartReducer"],
    cartItemState: _cart_items_state__WEBPACK_IMPORTED_MODULE_3__["cartItemsReducer"],
    adminProductState: _admin_state__WEBPACK_IMPORTED_MODULE_1__["adminPanelReducer"],
    authState: _auth_state__WEBPACK_IMPORTED_MODULE_2__["authReducer"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _services_global_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/global-services/jwt.interceptor */ "DS2C");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_area_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-area/home/home.component */ "lNP/");
/* harmony import */ var _auth_area_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-area/register/register.component */ "UzwW");
/* harmony import */ var _services_auth_guard_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard/login.guard */ "8chj");
/* harmony import */ var _layout_area_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-area/page404/page404.component */ "+zi9");
/* harmony import */ var _services_auth_guard_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard/admin.guard */ "jIN5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: "", component: _home_area_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: "full" },
    { path: "auth/register", component: _auth_area_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], pathMatch: "full" },
    { path: "market", canActivate: [_services_auth_guard_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]], loadChildren: () => Promise.all(/*! import() | market-area-market-area-module */[__webpack_require__.e("common"), __webpack_require__.e("market-area-market-area-module")]).then(__webpack_require__.bind(null, /*! ./market-area/market-area.module */ "/no6")).then(m => m.MarketAreaModule), pathMatch: "full" },
    { path: "order", canActivate: [_services_auth_guard_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | order-area-order-area-module */ "order-area-order-area-module").then(__webpack_require__.bind(null, /*! ./order-area/order-area.module */ "CQ3D")).then(m => m.OrderAreaModule) },
    { path: "admin-market", canActivate: [_services_auth_guard_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]], loadChildren: () => Promise.all(/*! import() | admin-area-admin-area-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-area-admin-area-module")]).then(__webpack_require__.bind(null, /*! ./admin-area/admin-area.module */ "MrDq")).then(m => m.AdminAreaModule), pathMatch: "full" },
    { path: "**", component: _layout_area_page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"], pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _services_global_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"],
            multi: true
        }], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "wG8U":
/*!**************************************!*\
  !*** ./src/app/redux/admin-state.ts ***!
  \**************************************/
/*! exports provided: AdminPanelState, AdminPanelActionType, adminPanelProductAddAction, adminUpdatedProductAction, adminPanelReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelState", function() { return AdminPanelState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelActionType", function() { return AdminPanelActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminPanelProductAddAction", function() { return adminPanelProductAddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminUpdatedProductAction", function() { return adminUpdatedProductAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminPanelReducer", function() { return adminPanelReducer; });
class AdminPanelState {
    constructor() {
        this.product = null;
    }
}
var AdminPanelActionType;
(function (AdminPanelActionType) {
    AdminPanelActionType["AdminAddProduct"] = "AdminAddProduct";
    AdminPanelActionType["AdminProductUpdated"] = "AdminProductUpdated";
})(AdminPanelActionType || (AdminPanelActionType = {}));
function adminPanelProductAddAction() {
    return { type: AdminPanelActionType.AdminAddProduct };
}
function adminUpdatedProductAction(product) {
    return { type: AdminPanelActionType.AdminProductUpdated, payload: product };
}
function adminPanelReducer(currentState = new AdminPanelState(), action) {
    const newState = Object.assign({}, currentState); // Duplicate currentState into a newState.
    switch (action.type) {
        case AdminPanelActionType.AdminAddProduct:
            newState.product = null; // payload = the added product
            break;
        case AdminPanelActionType.AdminProductUpdated:
            newState.product = action.payload; // payload = the updated product
            break;
    }
    return newState; // Return the newState.
}


/***/ }),

/***/ "wLpx":
/*!****************************************************************!*\
  !*** ./src/app/layout-area/contact-us/contact-us.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class ContactUsComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    //closing the dialog
    onNoClick() {
        this.dialogRef.close();
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 10, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Email: Roye456@gmail.com, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Phone: 054-6633054 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactUsComponent_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], encapsulation: 2 });


/***/ }),

/***/ "wZLn":
/*!****************************************************************!*\
  !*** ./src/app/home-area/resume-shop/resume-shop.component.ts ***!
  \****************************************************************/
/*! exports provided: ResumeShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeShopComponent", function() { return ResumeShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_models_cart_models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/cart-models/shopping-cart.model */ "TLMc");
/* harmony import */ var src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/paths.environment */ "V9dn");
/* harmony import */ var src_app_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/redux/store */ "vBqF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _services_market_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/market-services/shopping-cart.service */ "Vmn7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function ResumeShopComponent_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Resume Shopping! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ResumeShopComponent_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResumeShopComponent_a_1_ng_container_2_Template_ng_container_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r4.createShoppingCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Start Shopping! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ResumeShopComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResumeShopComponent_a_1_ng_container_1_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResumeShopComponent_a_1_ng_container_2_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", ctx_r0.paths.marketUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.shoppingCart && ctx_r0.shoppingCart.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.shoppingCart || !ctx_r0.shoppingCart.open);
} }
function ResumeShopComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Admin Market ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx_r1.paths.adminMarketUrl);
} }
class ResumeShopComponent {
    constructor(notificationService, shoppingCartService) {
        this.notificationService = notificationService;
        this.shoppingCartService = shoppingCartService;
        this.paths = src_environments_paths_environment__WEBPACK_IMPORTED_MODULE_2__["paths"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                //getting shopping cart from service.
                this.shoppingCart = yield this.shoppingCartService.getShoppingCartAsync();
            }
            catch (error) {
                this.notificationService.error(error);
            }
        });
    }
    //if user don't have shopping cart, creating new one.
    createShoppingCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.shoppingCart = new src_app_models_cart_models_shopping_cart_model__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartModel"]();
            this.shoppingCart.userId = src_app_redux_store__WEBPACK_IMPORTED_MODULE_3__["default"].getState().authState.user._id;
            this.shoppingCart = yield this.shoppingCartService.createShoppingCart(this.shoppingCart);
        });
    }
}
ResumeShopComponent.ɵfac = function ResumeShopComponent_Factory(t) { return new (t || ResumeShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_market_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartService"])); };
ResumeShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResumeShopComponent, selectors: [["app-resume-shop"]], inputs: { user: "user" }, decls: 3, vars: 2, consts: [["mat-raised-button", "", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", 3, "routerLink"], [4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"]], template: function ResumeShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResumeShopComponent_a_1_Template, 5, 3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResumeShopComponent_a_2_Template, 4, 1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user.role === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user.role === "Admin-Role");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: ["div[_ngcontent-%COMP%] {\r\n    position: relative; \r\n    height: 100%;\r\n    width: 450px;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]::before {    \r\n    content: \"\";\r\n    background-image: url('open-grocery.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    border-radius: 20px;\r\n    opacity: 0.65;\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZS1zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUNBQWdFO0lBQ2hFLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakIiLCJmaWxlIjoicmVzdW1lLXNob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdjo6YmVmb3JlIHsgICAgXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vcGVuLWdyb2NlcnkuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG5cclxufVxyXG5cclxuYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "wlp7":
/*!****************************************************************************!*\
  !*** ./src/app/auth-area/user-details-form/user-details-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsFormComponent", function() { return UserDetailsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global-services/auth.service */ "yCR3");
/* harmony import */ var src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global-services/notification.service */ "RYsQ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










class UserDetailsFormComponent {
    constructor(_formBuilder, ctrlContainer, authService, notificationService) {
        this._formBuilder = _formBuilder;
        this.ctrlContainer = ctrlContainer;
        this.authService = authService;
        this.notificationService = notificationService;
        this.PasswordHide = true;
        this.confirmPasswordHide = true;
        //function to handle not same passwords;
        this.checkPasswords = () => {
            var _a, _b;
            const password = (_a = this.subForm) === null || _a === void 0 ? void 0 : _a.get('password').value;
            const confirmPassword = (_b = this.subForm) === null || _b === void 0 ? void 0 : _b.get('confirmPassword').value;
            return password === confirmPassword ? null : { notSame: true };
        };
        //check if id card already exist in DB
        this.checkIdCard = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const existUser = yield this.authService.checkByUserIdAsync(this.subForm);
                if (existUser)
                    return true;
                this.subForm.get("idCard").setErrors({ duplicate: "Already Exist" });
                return "false";
            }
            catch (error) {
                this.notificationService.error(error);
                return "false";
            }
        });
        //check if email already exist in DB
        this.checkEmail = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const existUser = yield this.authService.checkByEmailAsync(this.subForm);
                if (existUser)
                    return true;
                this.subForm.get("email").setErrors({ duplicate: "Already Exist" });
                return "false";
            }
            catch (error) {
                this.notificationService.error(error);
                return "false";
            }
        });
    }
    ngOnInit() {
        var _a;
        //using form builder service to specify the form elements
        this.subForm = this._formBuilder.group({
            idCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern((_a = this.subForm) === null || _a === void 0 ? void 0 : _a.get('password').value)]]
        }, { asyncValidator: [() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.checkIdCard(); }), () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.checkEmail(); })] });
        //adding control to the "father" form group
        //element to access it from "father" component;
        this.firstFormGroup = this.ctrlContainer.form;
        this.firstFormGroup.addControl("userForm", this.subForm);
    }
    //handling error messages;
    errorMessage(input) {
        const inputControl = this.subForm.get(input);
        if (inputControl.hasError('required'))
            return `${input} is required`;
        if (inputControl.hasError('minlength'))
            return 'Min length is 6';
        if (inputControl.hasError('pattern') && input === 'confirmPassword')
            return 'Passwords are not the same';
        if (inputControl.hasError('pattern') && input === "idCard")
            return "Pattern example 025458617";
        if (inputControl.hasError('pattern'))
            return "required syntax Roy@gmail.com";
        if (inputControl.hasError('duplicate'))
            return 'Already Exist';
        return '';
    }
}
UserDetailsFormComponent.ɵfac = function UserDetailsFormComponent_Factory(t) { return new (t || UserDetailsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
UserDetailsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserDetailsFormComponent, selectors: [["app-user-details-form"]], decls: 32, vars: 14, consts: [[3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "idCard", "maxlength", "9", "pattern", "^\\d{9}$", "required", ""], ["matInput", "", "formControlName", "email", "type", "email", "pattern", "^([\\w]+@([\\w-]+\\.)+[\\w-]{2,4})?$", "required", ""], ["matInput", "", "type", "password", "formControlName", "password", "onKeyDown", "if(event.keyCode === 32)\n        return false", "minlength", "6", "required", "", 3, "type"], ["mat-icon-button", "", "type", "button", "matSuffix", "", 3, "click"], ["matInput", "", "type", "password", "formControlName", "confirmPassword", "onKeyDown", "if(event.keyCode === 32)\n        return false", "minlength", "6", "required", "", 3, "pattern", "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"]], template: function UserDetailsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Id card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserDetailsFormComponent_Template_button_click_18_listener() { return ctx.PasswordHide = !ctx.PasswordHide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Confirm password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserDetailsFormComponent_Template_button_click_27_listener() { return ctx.confirmPasswordHide = !ctx.confirmPasswordHide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("idCard"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("email"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.PasswordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "hide password")("aria-pressed", ctx.PasswordHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.PasswordHide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("password"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pattern", ctx.checkPasswords());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.confirmPasswordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "hide password")("aria-pressed", ctx.confirmPasswordHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.confirmPasswordHide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage("confirmPassword"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n    width: 220px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlscy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJ1c2VyLWRldGFpbHMtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLGlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "yCR3":
/*!**********************************************************!*\
  !*** ./src/app/services/global-services/auth.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ "vBqF");
/* harmony import */ var _redux_auth_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/auth-state */ "aZb7");
/* harmony import */ var src_app_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/cart-items-state */ "ZWFy");
/* harmony import */ var src_app_redux_shopping_cart_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/redux/shopping-cart-state */ "ze1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _socket_io_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socket-io.service */ "D9nx");









class AuthService {
    constructor(httpClient, socketIoService) {
        this.httpClient = httpClient;
        this.socketIoService = socketIoService;
        this.checkByUserIdAsync = (firstFormGroup) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const existUser = yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].confirmEmailOrIdUrl + "idCard", firstFormGroup.value).toPromise();
            if (existUser.length >= 1)
                return false;
            return true;
        });
        this.checkByEmailAsync = (firstFormGroup) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const existUser = yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].confirmEmailOrIdUrl + "email", firstFormGroup.value).toPromise();
            if (existUser.length >= 1)
                return false;
            return true;
        });
    }
    registerAsync(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const registeredUser = yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].registerUrl, user).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_auth_state__WEBPACK_IMPORTED_MODULE_3__["userRegisteredAction"])(registeredUser));
            //Start listen to socket.io
            this.socketIoService.connect();
            return registeredUser;
        });
    }
    loginAsync(credentials) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedInUser = yield this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].loginUrl, credentials).toPromise();
            _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_auth_state__WEBPACK_IMPORTED_MODULE_3__["userLoggedInAction"])(loggedInUser));
            //Start listen to socket.io
            this.socketIoService.connect();
            return loggedInUser;
        });
    }
    logout() {
        _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(src_app_redux_cart_items_state__WEBPACK_IMPORTED_MODULE_4__["resetCartItemsAction"])());
        _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(src_app_redux_shopping_cart_state__WEBPACK_IMPORTED_MODULE_5__["resetShoppingCartAction"])());
        _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_redux_auth_state__WEBPACK_IMPORTED_MODULE_3__["userLoggedOutAction"])());
        this.socketIoService.disconnect();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_socket_io_service__WEBPACK_IMPORTED_MODULE_8__["SocketIoService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ze1M":
/*!**********************************************!*\
  !*** ./src/app/redux/shopping-cart-state.ts ***!
  \**********************************************/
/*! exports provided: ShoppingCartState, ShoppingCartActionType, downloadedShoppingCartAction, createdShoppingCartAction, resetShoppingCartAction, ShoppingCartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartState", function() { return ShoppingCartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartActionType", function() { return ShoppingCartActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadedShoppingCartAction", function() { return downloadedShoppingCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdShoppingCartAction", function() { return createdShoppingCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetShoppingCartAction", function() { return resetShoppingCartAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartReducer", function() { return ShoppingCartReducer; });
class ShoppingCartState {
    constructor() {
        this.shoppingCart = null;
        const shoppingCart = JSON.parse(sessionStorage.getItem("shoppingCart"));
        if (shoppingCart) {
            this.shoppingCart = shoppingCart;
        }
    }
}
var ShoppingCartActionType;
(function (ShoppingCartActionType) {
    ShoppingCartActionType["ShoppingCartDownloaded"] = "ShoppingCartDownloaded";
    ShoppingCartActionType["ShoppingCartCreated"] = "ShoppingCartCreated";
    ShoppingCartActionType["ShoppingCartReset"] = "ShoppingCartReset";
})(ShoppingCartActionType || (ShoppingCartActionType = {}));
function downloadedShoppingCartAction(shoppingCart) {
    return { type: ShoppingCartActionType.ShoppingCartDownloaded, payload: shoppingCart };
}
function createdShoppingCartAction(shoppingCart) {
    return { type: ShoppingCartActionType.ShoppingCartCreated, payload: shoppingCart };
}
function resetShoppingCartAction() {
    return { type: ShoppingCartActionType.ShoppingCartReset };
}
function ShoppingCartReducer(currentState = new ShoppingCartState(), action) {
    const newState = Object.assign({}, currentState);
    switch (action.type) {
        case ShoppingCartActionType.ShoppingCartCreated:
        case ShoppingCartActionType.ShoppingCartDownloaded:
            newState.shoppingCart = action.payload;
            break;
        case ShoppingCartActionType.ShoppingCartReset:
            newState.shoppingCart = null;
            break;
    }
    sessionStorage.setItem("shoppingCart", JSON.stringify(newState.shoppingCart));
    return newState;
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map