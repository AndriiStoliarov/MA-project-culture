(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrii/Desktop/GitHub/MA-project-culture/src/main.ts */"zUnb");


/***/ }),

/***/ "0h24":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registration-page/registration-page.component */ "pXAN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_user_shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/shared/services */ "UCRe");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function MainLayoutComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.firstName, " ", ctx_r1.lastName, "");
} }
function MainLayoutComponent_mat_list_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_mat_list_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_mat_list_16_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_mat_list_17_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_mat_list_17_mat_list_item_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_mat_list_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainLayoutComponent_mat_list_17_mat_list_item_5_Template, 4, 0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.hiding);
} }
class MainLayoutComponent {
    constructor(dialog, router, authService) {
        this.dialog = dialog;
        this.router = router;
        this.authService = authService;
        this.hiding = false;
        this.firstName = '';
        this.lastName = '';
        // tslint:disable-next-line: deprecation
        this.router.events.subscribe(() => {
            var _a, _b;
            this.hiding = this.authService.isAuthenticated();
            this.firstName = (_a = this.authService.user) === null || _a === void 0 ? void 0 : _a.first_name;
            this.lastName = (_b = this.authService.user) === null || _b === void 0 ? void 0 : _b.last_name;
        });
    }
    ngOnInit() { }
    openDialog() {
        this.dialog.open(_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_0__["RegistrationPageComponent"]);
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/user', 'login']);
    }
    isNavigate() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/user', 'event']);
        }
        else {
            this.openDialog();
        }
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_user_shared_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 24, vars: 5, consts: [["color", "primary"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/poster"], ["mat-menu-item", "", "routerLink", "/about"], ["href", "/", 1, "header-title"], [1, "spacer"], [4, "ngIf"], [1, "button-container"], ["mat-fab", "", "color", "primary", "aria-label", "add new event", 3, "click"], [1, "wrapper"], ["mat-icon-button", "", "routerLink", "/user/posts", 1, "navigation-link"], ["mat-icon-button", "", "aria-label", "exit-to-app", 1, "navigation-link", 3, "click"], ["mat-icon-button", "", "aria-label", "exit-to-app", "routerLink", "/user/login", 1, "navigation-link"], ["mat-icon-button", "", "aria-label", "person-add", 3, "click"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0410\u0444\u0456\u0448\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0427\u0456\u0432\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MainLayoutComponent_span_14_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MainLayoutComponent_mat_list_15_Template, 5, 0, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainLayoutComponent_mat_list_16_Template, 5, 0, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainLayoutComponent_mat_list_17_Template, 6, 1, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_19_listener() { return ctx.isNavigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiding);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiding);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiding);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hiding);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.navigation-link[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: whitesmoke\n}\n\n.button-container[_ngcontent-%COMP%] {\n  right: 5%;\n  bottom: 10%;\n  left: auto;\n  position: fixed;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0FBQ1oiLCJmaWxlIjoibWFpbi1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5uYXZpZ2F0aW9uLWxpbms6aG92ZXIge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlc21va2Vcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICByaWdodDogNSU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ "19c+":
/*!************************************************************!*\
  !*** ./src/app/shared/components/posts/posts.component.ts ***!
  \************************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post/post.component */ "ih9o");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _pipes_search_title_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/search-title.pipe */ "JEEt");












function PostsComponent_div_0_app_post_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post", 10);
} if (rf & 2) {
    const post_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", post_r4);
} }
function PostsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u043F\u043E\u0448\u0443\u043A \u0437\u0430 \u043D\u0430\u0437\u0432\u043E\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PostsComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.searchStr = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PostsComponent_div_0_app_post_8_Template, 1, 1, "app-post", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "searchTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-paginator", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function PostsComponent_div_0_Template_mat_paginator_page_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.handlePageEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 7, ctx_r0.paginationPosts, ctx_r0.searchStr));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r0.length)("pageSize", ctx_r0.pageSize)("pageSizeOptions", ctx_r0.pageSizeOptions)("showFirstLastButtons", ctx_r0.showFirstLastButtons)("pageIndex", ctx_r0.pageIndex);
} }
function PostsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 11);
} }
class PostsComponent {
    constructor(authService, postsService) {
        this.authService = authService;
        this.postsService = postsService;
        this.length = 0;
        this.pageSize = 6;
        this.pageIndex = 0;
        this.pageSizeOptions = [3, 6, 12, 48];
        this.showFirstLastButtons = true;
        this.posts = [];
        this.loading = false;
        this.searchStr = '';
        this.paginationPosts = [];
        this.records = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    ngOnInit() {
        this.subscription
            .add(this.getPosts());
    }
    getPosts() {
        return this.postsService.getPosts().subscribe((record) => {
            this.records.push(record);
            this.posts = this.records[0].records;
            this.paginationPosts = this.posts.slice(0, this.pageSize);
            this.length = this.posts.length;
            this.loading = true;
        });
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        if (endIndex > this.posts.length) {
            endIndex = this.posts.length;
        }
        this.paginationPosts = this.posts.slice(startIndex, endIndex);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    handleCreateEvent() {
        this.authService.isAuthenticated();
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 3, vars: 2, consts: [["class", "wrapper", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "wrapper"], ["appearance", "legacy", 1, "left-margin"], ["for", "serchCaption"], ["matInput", "", "id", "serchCaption", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], [1, "flex-container"], [3, "post", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "showFirstLastButtons", "pageIndex", "page"], [3, "post"], [1, "center-margin"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PostsComponent_div_0_Template, 11, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostsComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"]], pipes: [_pipes_search_title_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchTitlePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.left-margin[_ngcontent-%COMP%] {\n  margin-left: .5rem;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.center-margin[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXItbWFyZ2luIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ "1ua0":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! exports provided: MainLayoutComponent, PostComponent, RegistrationPageComponent, PostsComponent, NeedFormComponent, NeedComponent, RegistrationMessageComponent, ProposalComponent, ProposalMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "0h24");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__["MainLayoutComponent"]; });

/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/post.component */ "ih9o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return _post_post_component__WEBPACK_IMPORTED_MODULE_1__["PostComponent"]; });

/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "pXAN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationPageComponent"]; });

/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "19c+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]; });

/* harmony import */ var _need_form_need_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./need-form/need-form.component */ "cC5r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeedFormComponent", function() { return _need_form_need_form_component__WEBPACK_IMPORTED_MODULE_4__["NeedFormComponent"]; });

/* harmony import */ var _need_need_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./need/need.component */ "EdAM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeedComponent", function() { return _need_need_component__WEBPACK_IMPORTED_MODULE_5__["NeedComponent"]; });

/* harmony import */ var _registration_message_registration_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-message/registration-message.component */ "WsaD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationMessageComponent", function() { return _registration_message_registration_message_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationMessageComponent"]; });

/* harmony import */ var _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proposal/proposal.component */ "NIYF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_7__["ProposalComponent"]; });

/* harmony import */ var _proposal_message_proposal_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proposal-message/proposal-message.component */ "uqcZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposalMessageComponent", function() { return _proposal_message_proposal_message_component__WEBPACK_IMPORTED_MODULE_8__["ProposalMessageComponent"]; });












/***/ }),

/***/ "2JWz":
/*!*************************************************!*\
  !*** ./src/app/shared/services/need.service.ts ***!
  \*************************************************/
/*! exports provided: NeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedService", function() { return NeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class NeedService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://52.57.253.240:3000/api/proposals';
    }
    postData(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.ROOT_URL, body);
    }
}
NeedService.ɵfac = function NeedService_Factory(t) { return new (t || NeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NeedService, factory: NeedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7rOj":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: SearchTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_title_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-title.pipe */ "JEEt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchTitlePipe", function() { return _search_title_pipe__WEBPACK_IMPORTED_MODULE_0__["SearchTitlePipe"]; });




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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CQVl":
/*!**************************************************!*\
  !*** ./src/app/post-page/post-page.component.ts ***!
  \**************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services */ "ZF+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _shared_components_need_need_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/need/need.component */ "EdAM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








function PostPageComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r5.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostPageComponent_div_1_app_need_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-need", 12);
} if (rf & 2) {
    const requirement_r9 = ctx.$implicit;
    const post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("requirement", requirement_r9)("postUserId", post_r5.user_id);
} }
function PostPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPageComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.isNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041D\u0430\u0437\u0430\u0434 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostPageComponent_div_1_div_10_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PostPageComponent_div_1_app_need_20_Template, 1, 2, "app-need", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r5.image_url)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, post_r5.starts_at, "MMMM dd, yyyy, hh:mm."));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r5.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", post_r5.requests);
} }
function PostPageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 13);
} }
function PostPageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
class PostPageComponent {
    constructor(route, postsService, location) {
        this.route = route;
        this.postsService = postsService;
        this.location = location;
    }
    ngOnInit() {
        const postId = +this.route.snapshot.params.id;
        this.post$ = this.postsService.post$;
        this.postsService.getById(postId).subscribe();
    }
    isNavigate() {
        this.location.back();
    }
}
PostPageComponent.ɵfac = function PostPageComponent_Factory(t) { return new (t || PostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
PostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostPageComponent, selectors: [["app-post-page"]], decls: 7, vars: 4, consts: [[1, "wrapper"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["placeholder", ""], [1, "bottom-margin"], [1, "flex-card-header"], ["mat-stroked-button", "", "routerLink", "/home", "color", "primary", 3, "click"], [1, "flex-container"], [1, "width-card", "bottom-margin"], [1, "left-margin", "width-card", "bottom-margin"], [3, "requirement", "postUserId", 4, "ngFor", "ngForOf"], ["mat-card-image", "", "alt", "Photo of a event", 3, "src"], [3, "requirement", "postUserId"], [1, "center-margin"], ["mat-card-image", "", "src", "assets/images/post-placeholder.jpg", "alt", "Photo of a event"]], template: function PostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostPageComponent_div_1_Template, 21, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostPageComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostPageComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.post$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _shared_components_need_need_component__WEBPACK_IMPORTED_MODULE_6__["NeedComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n.flex-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.bottom-margin[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.center-margin[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.width-card[_ngcontent-%COMP%] {\n  max-width: 584px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJwb3N0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmxleC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uZmxleC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2VudGVyLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ud2lkdGgtY2FyZCB7XG4gIG1heC13aWR0aDogNTg0cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "EdAM":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/need/need.component.ts ***!
  \**********************************************************/
/*! exports provided: NeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedComponent", function() { return NeedComponent; });
/* harmony import */ var _need_form_need_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../need-form/need-form.component */ "cC5r");
/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration-page/registration-page.component */ "pXAN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/user/shared/services */ "UCRe");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../proposal/proposal.component */ "NIYF");










function NeedComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NeedComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.isNavigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0417\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NeedComponent_ng_container_5_ng_container_1_app_proposal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-proposal", 6);
} if (rf & 2) {
    const userProposal_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("userProposal", userProposal_r6);
} }
function NeedComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NeedComponent_ng_container_5_ng_container_1_app_proposal_1_Template, 1, 1, "app-proposal", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.requirement.proposals);
} }
function NeedComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NeedComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isAuthenticated);
} }
class NeedComponent {
    constructor(authService, dialog, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.route = route;
        this.postId = null;
        this.isAuthenticated = false;
        this.isUser = false;
    }
    ngOnInit() {
        this.postId = +this.route.snapshot.params.id;
        this.isAuthenticated = this.authService.isAuthenticated();
        this.isUser = this.postUserId === this.authService.isUserId();
    }
    openDialog() {
        this.dialog.open(_need_form_need_form_component__WEBPACK_IMPORTED_MODULE_0__["NeedFormComponent"], {
            data: {
                description: this.requirement.description,
                id: this.requirement.id,
                postId: this.postId,
            },
        });
    }
    isNavigate() {
        if (this.isAuthenticated) {
            this.openDialog();
        }
        else {
            this.dialog.open(_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationPageComponent"]);
        }
    }
}
NeedComponent.ɵfac = function NeedComponent_Factory(t) { return new (t || NeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_user_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
NeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NeedComponent, selectors: [["app-need"]], inputs: { requirement: "requirement", postUserId: "postUserId" }, decls: 6, vars: 3, consts: [[1, "margin-card"], [1, "flex-card"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"], [3, "userProposal", 4, "ngFor", "ngForOf"], [3, "userProposal"]], template: function NeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NeedComponent_button_4_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NeedComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.requirement.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUser);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_9__["ProposalComponent"]], styles: [".flex-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.margin-card[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5lZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXJnaW4tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/posts/posts.component */ "19c+");


class HomePageComponent {
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 1, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-posts");
    } }, directives: [_shared_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "HioS":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AboutPageComponent {
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 8, vars: 0, consts: [[1, "wrapper"], [1, "card"], [1, "flex-card"], ["mat-stroked-button", "", "routerLink", "/", "color", "primary"], [1, "align-card-content", "line-height-content"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-actions", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0437\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ducimus mollitia praesentium adipisci esse ad ipsa voluptatem repellendus assumenda qui, perspiciatis, quod quidem possimus. Magni commodi impedit nobis eos voluptatum! Nobis reprehenderit odit assumenda porro, voluptates quae ipsa quidem nam? In sit tenetur, corporis veniam obcaecati assumenda fugiat impedit modi perspiciatis consequatur, autem molestias ullam asperiores iure aperiam accusantium repellendus. Adipisci, et! Non suscipit nobis excepturi dignissimos, ut necessitatibus ullam quidem vel quos at vero illum libero! Voluptatem iusto ipsam inventore totam odit tempore eius reiciendis optio eveniet, delectus eos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n.flex-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.align-card-content[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.line-height-content[_ngcontent-%COMP%] {\n  line-height: 2.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFib3V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZmxleC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFsaWduLWNhcmQtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5saW5lLWhlaWdodC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(http) {
        this.http = http;
        this.HOST = 'http://52.57.253.240:3000';
        this.AUTH_URL = '/api/auth';
        this.USER_URL = '/api/me';
        this.LOCAL_STORAGE_TOKEN_KEY = 'token';
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.authToken = this.tokenFromLocalStorage;
    }
    get tokenFromLocalStorage() {
        return localStorage.getItem(this.LOCAL_STORAGE_TOKEN_KEY);
    }
    login(params) {
        return this.http.post(`${this.HOST}${this.AUTH_URL}`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((response) => {
            this.setToken(response);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError.bind(this))));
    }
    logout() {
        localStorage.clear();
        this.user = null;
        this.response = null;
        this.authToken = null;
    }
    isAuthenticated() {
        return !!this.authToken;
    }
    getUserByToken() {
        return this.http.get(`${this.HOST}${this.USER_URL}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((response) => {
            this.user = response.user;
        }));
    }
    handleError(error) {
        const message = error.error.error;
        switch (message) {
            case 'Invalid email or password.':
                this.error$.next('Невірна адреса електронної пошти або пароль.');
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
    }
    setToken(response) {
        if (response) {
            localStorage.setItem(this.LOCAL_STORAGE_TOKEN_KEY, response.token);
        }
        else {
            localStorage.clear();
        }
        this.response = response;
        this.user = response === null || response === void 0 ? void 0 : response.user;
        this.authToken = response === null || response === void 0 ? void 0 : response.token;
    }
    isUserId() {
        if (this.user) {
            return this.user.id;
        }
        else {
            return 0;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "J9H/":
/*!******************************************************!*\
  !*** ./src/app/poster-page/poster-page.component.ts ***!
  \******************************************************/
/*! exports provided: PosterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterPageComponent", function() { return PosterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/posts/posts.component */ "19c+");


class PosterPageComponent {
}
PosterPageComponent.ɵfac = function PosterPageComponent_Factory(t) { return new (t || PosterPageComponent)(); };
PosterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PosterPageComponent, selectors: [["app-poster-page"]], decls: 1, vars: 0, template: function PosterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-posts");
    } }, directives: [_shared_components_posts_posts_component__WEBPACK_IMPORTED_MODULE_1__["PostsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "JEEt":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/search-title.pipe.ts ***!
  \***************************************************/
/*! exports provided: SearchTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTitlePipe", function() { return SearchTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchTitlePipe {
    transform(posts, search = '') {
        if (!search.trim()) {
            return posts;
        }
        return posts.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
SearchTitlePipe.ɵfac = function SearchTitlePipe_Factory(t) { return new (t || SearchTitlePipe)(); };
SearchTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchTitle", type: SearchTitlePipe, pure: true });


/***/ }),

/***/ "M0ag":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "PCNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "MaTg":
/*!*******************************************************!*\
  !*** ./src/app/user/shared/services/event.service.ts ***!
  \*******************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class EventService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://52.57.253.240:3000/api/events';
    }
    postData(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.ROOT_URL, body);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NIYF":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/proposal/proposal.component.ts ***!
  \******************************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




function ProposalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0433\u0440\u043D.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.userProposal.description, " ", ctx_r0.userProposal.price_cents, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "tel:+3", ctx_r0.userProposal.phone_number, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProposalComponent {
}
ProposalComponent.ɵfac = function ProposalComponent_Factory(t) { return new (t || ProposalComponent)(); };
ProposalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalComponent, selectors: [["app-proposal"]], inputs: { userProposal: "userProposal" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "flex-container", "bottom-margin"], [1, "flex-button"], ["mat-button", "", "color", "primary", 3, "href"], ["mat-flat-button", "", "color", "primary", 1, "bottom-margin"], ["mat-button", "", "color", "warn"]], template: function ProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProposalComponent_div_0_Template, 13, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userProposal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.bottom-margin[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3Bvc2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJwcm9wb3NhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLmZsZXgtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "P7zF":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/registration.service.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class RegistrationService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://52.57.253.240:3000/api/users';
    }
    createUser(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        const body = JSON.stringify(data);
        return this.http.post(this.ROOT_URL, body, httpOptions);
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components */ "1ua0");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes */ "7rOj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















const matModules = [
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ...matModules,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_17__["NeedFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["NeedComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
        _pipes__WEBPACK_IMPORTED_MODULE_18__["SearchTitlePipe"],
        _components__WEBPACK_IMPORTED_MODULE_17__["NeedComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["ProposalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _components__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
        _pipes__WEBPACK_IMPORTED_MODULE_18__["SearchTitlePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _components__WEBPACK_IMPORTED_MODULE_17__["NeedComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["NeedFormComponent"],
        _components__WEBPACK_IMPORTED_MODULE_17__["ProposalComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'angular-culture-cheevent';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "U5Sr":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CategoriesService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://52.57.253.240:3000/api/categories';
    }
    getCategories() {
        return this.http.get(this.ROOT_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((response) => response));
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UCRe":
/*!***********************************************!*\
  !*** ./src/app/user/shared/services/index.ts ***!
  \***********************************************/
/*! exports provided: EventService, AuthService, ProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.service */ "MaTg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });

/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "IYfF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _proposal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proposal.service */ "Wvug");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProposalService", function() { return _proposal_service__WEBPACK_IMPORTED_MODULE_2__["ProposalService"]; });






/***/ }),

/***/ "WsaD":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/registration-message/registration-message.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegistrationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationMessageComponent", function() { return RegistrationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RegistrationMessageComponent {
}
RegistrationMessageComponent.ɵfac = function RegistrationMessageComponent_Factory(t) { return new (t || RegistrationMessageComponent)(); };
RegistrationMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationMessageComponent, selectors: [["app-registration-message"]], decls: 2, vars: 0, consts: [[1, "message-color"]], template: function RegistrationMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0438 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043B\u0438\u0441\u044F.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".message-color[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicmVnaXN0cmF0aW9uLW1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ "Wvug":
/*!**********************************************************!*\
  !*** ./src/app/user/shared/services/proposal.service.ts ***!
  \**********************************************************/
/*! exports provided: ProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalService", function() { return ProposalService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProposalService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://52.57.253.240:3000/api/proposals';
    }
    getProposalById(id) {
        return this.http.get(`http://52.57.253.240:3000/api/proposals/${id}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((proposal) => proposal));
    }
}
ProposalService.ɵfac = function ProposalService_Factory(t) { return new (t || ProposalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProposalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProposalService, factory: ProposalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XNvU":
/*!**************************************************!*\
  !*** ./src/app/shared/services/posts.service.ts ***!
  \**************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PostsService {
    constructor(http) {
        this.http = http;
        this.post$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.ROOT_URL = 'http://52.57.253.240:3000/api/events';
    }
    getPosts() {
        return this.http.get(this.ROOT_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response));
    }
    getById(id) {
        return this.http.get(`http://52.57.253.240:3000/api/events/${id}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((post) => post), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((post) => this.post$.next(post)));
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-page/post-page.component */ "CQVl");
/* harmony import */ var _poster_page_poster_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poster-page/poster-page.component */ "J9H/");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "M0ag");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components */ "1ua0");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        ..._shared_services__WEBPACK_IMPORTED_MODULE_10__["mainServices"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_components__WEBPACK_IMPORTED_MODULE_9__["MainLayoutComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _poster_page_poster_page_component__WEBPACK_IMPORTED_MODULE_7__["PosterPageComponent"],
        _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"],
        _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_6__["PostPageComponent"],
        _shared_components__WEBPACK_IMPORTED_MODULE_9__["RegistrationPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();


/***/ }),

/***/ "ZF+8":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: mainServices, AuthService, AuthInterceptor, CategoriesService, NeedService, PostsService, RegistrationService, UserResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainServices", function() { return mainServices; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.interceptor */ "yZLc");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "IYfF");
/* harmony import */ var _user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.resolver */ "aLbc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"]; });

/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.service */ "U5Sr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return _categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]; });

/* harmony import */ var _need_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./need.service */ "2JWz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NeedService", function() { return _need_service__WEBPACK_IMPORTED_MODULE_5__["NeedService"]; });

/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.service */ "XNvU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return _posts_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"]; });

/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration.service */ "P7zF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return _registration_service__WEBPACK_IMPORTED_MODULE_7__["RegistrationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserResolverService", function() { return _user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolverService"]; });





const mainServices = [
    _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
    _user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolverService"],
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
];









/***/ }),

/***/ "aLbc":
/*!**************************************************!*\
  !*** ./src/app/shared/services/user.resolver.ts ***!
  \**************************************************/
/*! exports provided: UserResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolverService", function() { return UserResolverService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "IYfF");



class UserResolverService {
    constructor(authService) {
        this.authService = authService;
    }
    resolve(route, state) {
        return this.authService.tokenFromLocalStorage
            ? this.authService.getUserByToken()
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
}
UserResolverService.ɵfac = function UserResolverService_Factory(t) { return new (t || UserResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserResolverService, factory: UserResolverService.ɵfac });


/***/ }),

/***/ "cC5r":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/need-form/need-form.component.ts ***!
  \********************************************************************/
/*! exports provided: NeedFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedFormComponent", function() { return NeedFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _proposal_message_proposal_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proposal-message/proposal-message.component */ "uqcZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function NeedFormComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.getControlError("description"), " ");
} }
function NeedFormComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getControlError("price_cents"), " ");
} }
function NeedFormComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.getControlError("phone_number"), " ");
} }
class NeedFormComponent {
    constructor(fb, dialogRef, data, needService, postsService, matSnackBar) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.needService = needService;
        this.postsService = postsService;
        this.matSnackBar = matSnackBar;
        this.durationInSeconds = 5;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
    }
    ngOnInit() {
        this.needForm = this.fb.group({
            request_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            price_cents: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(/^\d{10}$/),
            ]),
        });
    }
    isControlInvalid(fieldName) {
        return (this.needForm.get(fieldName).invalid
            && (this.needForm.get(fieldName).dirty
                || this.needForm.get(fieldName).touched));
    }
    getControlError(controlName) {
        const control = this.needForm.get(controlName);
        if (control.errors.required) {
            return 'Поле не може бути порожнім';
        }
        if (control.errors.pattern !== /^\d{10}$/) {
            return 'Введіть 10-значний номер';
        }
        return null;
    }
    submit() {
        if (this.needForm.invalid) {
            return;
        }
        this.needForm.controls.request_id.setValue(this.data.id);
        const jsonData = this.needForm.value;
        this.needService.postData(jsonData).subscribe((response) => {
            this.postsService.getById(this.data.postId).subscribe();
            this.dialogRef.close();
            this.matSnackBar.openFromComponent(_proposal_message_proposal_message_component__WEBPACK_IMPORTED_MODULE_2__["ProposalMessageComponent"], {
                duration: this.durationInSeconds * 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        });
    }
}
NeedFormComponent.ɵfac = function NeedFormComponent_Factory(t) { return new (t || NeedFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["NeedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
NeedFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NeedFormComponent, selectors: [["app-need-form"]], decls: 38, vars: 6, consts: [[1, "wrapper"], ["mat-dialog-title", ""], [1, "flex-form", 3, "formGroup"], ["form", ""], ["appearance", "legacy", 1, "width-field"], ["matInput", "", "formControlName", "description", "required", ""], ["matSuffix", ""], ["class", "validation", 4, "ngIf"], ["appearance", "legacy"], ["matInput", "", "type", "number", "formControlName", "price_cents", "required", ""], ["matPrefix", ""], ["class", "validation", "required", "", "pattern", "", 4, "ngIf"], ["matInput", "", "formControlName", "phone_number", "required", "", "pattern", ""], ["mat-dialog-actions", "", 1, "flex-button"], ["mat-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "validation"], ["required", "", "pattern", "", 1, "validation"]], template: function NeedFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u0432\u0430\u0448\u0443 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "mode_edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NeedFormComponent_mat_error_12_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0426\u0456\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u20B4\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "money");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, NeedFormComponent_mat_error_21_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u2116 \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u044C\u043E\u0433\u043E \u0437\u0432'\u0437\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "phone_iphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, NeedFormComponent_mat_error_30_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NeedFormComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return _r0.clo; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " \u0417\u0430\u043A\u0440\u0438\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NeedFormComponent_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " \u0421\u043A\u0438\u043D\u0443\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NeedFormComponent_Template_button_click_36_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " \u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.needForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("price_cents"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("phone_number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.needForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["PatternValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 480px;\n  padding: 1rem;\n}\n\n.flex-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.width-field[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: #F00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lZWQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoibmVlZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5mbGV4LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53aWR0aC1maWVsZCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi52YWxpZGF0aW9uIHtcbiAgY29sb3I6ICNGMDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ih9o":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/post/post.component.ts ***!
  \**********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






function PostComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.post.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PostComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 11);
} }
const _c0 = function (a1) { return ["/posts", a1]; };
class PostComponent {
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post" }, decls: 15, vars: 7, consts: [[1, "card"], ["mat-card-avatar", ""], [1, "title-height"], [4, "ngIf", "ngIfElse"], [1, "flex-button"], ["mat-button", "", "color", "primary"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"], ["placeholder", ""], ["loading", ""], ["mat-card-image", "", "alt", "Photo of a event", 1, "image-height", 3, "src"], ["mat-card-image", "", "src", "../../../../assets/images/post-placeholder.jpg", "alt", "Photo of a event", 1, "image-height"], [1, "center-margin"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PostComponent_ng_template_11_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_ng_template_13_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post.image_url)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.post.category.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.post.id));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], styles: [".card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: .5rem .5rem;\n  max-width: 400px;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.image-height[_ngcontent-%COMP%] {\n  height: 205px;\n  width: 398px;\n}\n\n.title-height[_ngcontent-%COMP%] {\n  height: 67px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IC41cmVtIC41cmVtO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZmxleC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbWFnZS1oZWlnaHQge1xuICBoZWlnaHQ6IDIwNXB4O1xuICB3aWR0aDogMzk4cHg7XG59XG5cbi50aXRsZS1oZWlnaHQge1xuICBoZWlnaHQ6IDY3cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "pXAN":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/registration-page/registration-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _registration_message_registration_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration-message/registration-message.component */ "WsaD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "ZF+8");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function RegistrationPageComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getControlError("first_name"), " ");
} }
function RegistrationPageComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.getControlError("last_name"), " ");
} }
function RegistrationPageComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.getControlError("email"), " ");
} }
function RegistrationPageComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.getControlError("password"), " ");
} }
class RegistrationPageComponent {
    constructor(registrationService, fb, dialogRef, snackBar) {
        this.registrationService = registrationService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.hide = true;
        this.durationInSeconds = 5;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
    }
    ngOnInit() {
        this.registrationForm = this.fb.group({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
        });
    }
    isControlInvalid(fieldName) {
        return (this.registrationForm.get(fieldName).invalid
            && (this.registrationForm.get(fieldName).dirty
                || this.registrationForm.get(fieldName).touched));
    }
    getControlError(controlName) {
        const control = this.registrationForm.get(controlName);
        if (control.errors.required) {
            return 'Поле не може бути порожнім';
        }
        if (control.errors.email) {
            return 'Введіть правильну ел. адресу';
        }
        return null;
    }
    submit() {
        if (this.registrationForm.invalid) {
            return;
        }
        const data = {
            first_name: this.registrationForm.value.first_name,
            last_name: this.registrationForm.value.last_name,
            email: this.registrationForm.value.email,
            password: this.registrationForm.value.password,
        };
        // tslint:disable-next-line: deprecation
        this.registrationService.createUser(data).subscribe(() => {
            this.dialogRef.close();
            this.snackBar.openFromComponent(_registration_message_registration_message_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationMessageComponent"], {
                duration: this.durationInSeconds * 1000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        });
    }
}
RegistrationPageComponent.ɵfac = function RegistrationPageComponent_Factory(t) { return new (t || RegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
RegistrationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegistrationPageComponent, selectors: [["app-registration-page"]], decls: 42, vars: 10, consts: [[1, "wrapper"], ["mat-dialog-title", "", 1, "align-center"], [1, "flex-form", 3, "formGroup"], ["form", ""], ["appearance", "legacy"], ["matInput", "", "formControlName", "first_name", "required", ""], ["matSuffix", ""], ["class", "validation", 4, "ngIf"], ["matInput", "", "formControlName", "last_name", "required", ""], ["matInput", "", "formControlName", "email", "required", "", "email", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-dialog-actions", "", 1, "flex-button"], ["mat-button", "", "color", "primary", "mat-dialog-close", ""], ["mat-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "validation"]], template: function RegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "I\u043C\u2019\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegistrationPageComponent_mat_error_12_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegistrationPageComponent_mat_error_19_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "alternate_email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RegistrationPageComponent_mat_error_26_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_31_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, RegistrationPageComponent_mat_error_34_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " \u0417\u0430\u043A\u0440\u0438\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " \u0421\u043A\u0438\u043D\u0443\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegistrationPageComponent_Template_button_click_40_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " \u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registrationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("first_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("last_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registrationForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 480px;\n  padding: 1rem;\n}\n\n.flex-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: #F00;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uZmxleC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mbGV4LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udmFsaWRhdGlvbiB7XG4gIGNvbG9yOiAjRjAwO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "uqcZ":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/proposal-message/proposal-message.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProposalMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalMessageComponent", function() { return ProposalMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProposalMessageComponent {
}
ProposalMessageComponent.ɵfac = function ProposalMessageComponent_Factory(t) { return new (t || ProposalMessageComponent)(); };
ProposalMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalMessageComponent, selectors: [["app-proposal-message"]], decls: 2, vars: 0, consts: [[1, "message-color"]], template: function ProposalMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0430\u0448\u0430 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".message-color[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3Bvc2FsLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJwcm9wb3NhbC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-page/post-page.component */ "CQVl");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components */ "1ua0");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services */ "ZF+8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        resolve: { user: _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserResolverService"] },
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
            { path: 'posts/:id', component: _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_2__["PostPageComponent"] },
        ],
    },
    {
        path: 'user',
        resolve: { user: _shared_services__WEBPACK_IMPORTED_MODULE_4__["UserResolverService"] },
        loadChildren: () => __webpack_require__.e(/*! import() | user */ "user").then(__webpack_require__.bind(null, /*! ./user */ "OHu5")).then((m) => m.UserModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yZLc":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/auth.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/shared/services */ "UCRe");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        let headers = req.headers.set('Content-Type', 'application/json');
        if (this.authService.tokenFromLocalStorage) {
            headers = headers.set('Authorization', 'Bearer ' + this.authService.tokenFromLocalStorage);
        }
        const cloned = req.clone({ headers });
        return next.handle(cloned);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_shared_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


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
    .catch((err) => console.error(err));


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