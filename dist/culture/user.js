(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user"],{

/***/ "7OIw":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-posts-page/user-posts-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserPostsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsPageComponent", function() { return UserPostsPageComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services */ "ZF+8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/post/post.component */ "ih9o");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






function UserPostsPageComponent_div_0_app_post_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post", 5);
} if (rf & 2) {
    const post_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", post_r4)("categories", ctx_r3.categories);
} }
function UserPostsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserPostsPageComponent_div_0_app_post_2_Template, 1, 2, "app-post", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.userPosts);
} }
function UserPostsPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 6);
} }
class UserPostsPageComponent {
    constructor(authService, categoriesService, postsService) {
        this.authService = authService;
        this.categoriesService = categoriesService;
        this.postsService = postsService;
        this.currentUserId = this.authService.user.id;
        this.posts = [];
        this.records = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
        this.loading = false;
        this.userPosts = [];
    }
    ngOnInit() {
        this.subscription
            .add(this.getPosts())
            .add(this.getCategories());
    }
    getPosts() {
        // tslint:disable-next-line: deprecation
        return this.postsService.getPosts().subscribe((record) => {
            this.records.push(record);
            this.posts = this.records[0].records;
            this.userPosts = this.posts.filter((item) => item.user_id.toString() === this.currentUserId.toString());
            this.loading = true;
        });
    }
    getCategories() {
        // tslint:disable-next-line: deprecation
        return this.categoriesService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
UserPostsPageComponent.ɵfac = function UserPostsPageComponent_Factory(t) { return new (t || UserPostsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["PostsService"])); };
UserPostsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserPostsPageComponent, selectors: [["app-user-posts-page"]], decls: 3, vars: 2, consts: [["class", "wrapper", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "wrapper"], [1, "flex-container"], [3, "post", "categories", 4, "ngFor", "ngForOf"], [3, "post", "categories"], [1, "center-margin"]], template: function UserPostsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserPostsPageComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserPostsPageComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_post_post_component__WEBPACK_IMPORTED_MODULE_4__["PostComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.left-margin[_ngcontent-%COMP%] {\n  margin-left: .5rem;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.center-margin[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcG9zdHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InVzZXItcG9zdHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ubGVmdC1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci1tYXJnaW4ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "M0ag");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "TjOM");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components */ "I3Ax");
/* harmony import */ var _user_posts_page_user_posts_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-posts-page/user-posts-page.component */ "7OIw");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "Yu5h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["userRouting"]),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_shared_components__WEBPACK_IMPORTED_MODULE_3__["UserLayoutComponent"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
        _user_posts_page_user_posts_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPostsPageComponent"],
        _shared_components__WEBPACK_IMPORTED_MODULE_3__["EventFormComponent"],
        _user_posts_page_user_posts_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPostsPageComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "I3Ax":
/*!*************************************************!*\
  !*** ./src/app/user/shared/components/index.ts ***!
  \*************************************************/
/*! exports provided: UserLayoutComponent, EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-layout/user-layout.component */ "tE59");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLayoutComponent", function() { return _user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_0__["UserLayoutComponent"]; });

/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-form/event-form.component */ "rOeG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_1__["EventFormComponent"]; });





/***/ }),

/***/ "OHu5":
/*!*******************************!*\
  !*** ./src/app/user/index.ts ***!
  \*******************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.module */ "7UCR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return _user_module__WEBPACK_IMPORTED_MODULE_0__["UserModule"]; });




/***/ }),

/***/ "TjOM":
/*!*********************************************************!*\
  !*** ./src/app/user/login-page/login-page.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services */ "UCRe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function LoginPageComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getControlError("email"), " ");
} }
function LoginPageComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getControlError("password"), " ");
} }
function LoginPageComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r4, " ");
} }
class LoginPageComponent {
    constructor(fb, authService, router, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.hide = true;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
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
        return (this.loginForm.get(fieldName).invalid
            && (this.loginForm.get(fieldName).dirty
                || this.loginForm.get(fieldName).touched));
    }
    getControlError(controlName) {
        const control = this.loginForm.get(controlName);
        if (control.errors.required) {
            return 'Поле не може бути порожнім';
        }
        if (control.errors.email) {
            return 'Введіть правильну ел. адресу';
        }
        return null;
    }
    submit() {
        if (this.loginForm.invalid) {
            return;
        }
        const userLoginParams = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        };
        this.authService.login(userLoginParams).subscribe(() => {
            this.loginForm.reset();
            this.router.navigate(['/user', 'posts']);
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 29, vars: 11, consts: [[1, "wrapper"], [1, "card"], [1, "align-center"], [1, "flex-form", 3, "formGroup"], ["form", ""], ["appearance", "legacy"], ["matInput", "", "formControlName", "email", "required", "", "email", ""], ["matSuffix", ""], ["class", "validation", 4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "flex-button"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["class", "validation mat-form-field padding-left", 4, "ngIf"], [1, "validation"], [1, "validation", "mat-form-field", "padding-left"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0412\u0445\u0456\u0434 \u0432 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0439 \u043A\u0430\u0431\u0456\u043D\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "alternate_email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginPageComponent_mat_error_13_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_18_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginPageComponent_mat_error_21_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card-actions", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u0421\u043A\u0438\u043D\u0443\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_25_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0423\u0432\u0456\u0439\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginPageComponent_mat_error_27_Template, 2, 1, "mat-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 9, ctx.authService.error$));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 480px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-width: 400px;\n}\n\n.flex-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: #F00;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.padding-left[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmZsZXgtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uZmxleC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnZhbGlkYXRpb24ge1xuICBjb2xvcjogI0YwMDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "VgpZ":
/*!*********************************************!*\
  !*** ./src/app/user/shared/guards/index.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "rFCu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "Yu5h":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: userRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRouting", function() { return userRouting; });
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ "TjOM");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components */ "I3Ax");
/* harmony import */ var _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/user-layout/user-layout.component */ "tE59");
/* harmony import */ var _shared_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards */ "VgpZ");
/* harmony import */ var _user_posts_page_user_posts_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-posts-page/user-posts-page.component */ "7OIw");





const userRouting = [
    {
        path: '', component: _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_2__["UserLayoutComponent"], children: [
            { path: '', redirectTo: '/user/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageComponent"] },
            { path: 'posts', component: _user_posts_page_user_posts_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPostsPageComponent"], canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            { path: 'event', component: _shared_components__WEBPACK_IMPORTED_MODULE_1__["EventFormComponent"], canActivate: [_shared_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
        ],
    },
];


/***/ }),

/***/ "rFCu":
/*!**************************************************!*\
  !*** ./src/app/user/shared/guards/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "UCRe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.authService.logout();
            this.router.navigate(['/user', 'login'], {
                queryParams: {
                    loginAgain: true,
                },
            });
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rOeG":
/*!***************************************************************************!*\
  !*** ./src/app/user/shared/components/event-form/event-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "UCRe");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function EventFormComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getControlError("title"), " ");
} }
function EventFormComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getControlError("body"), " ");
} }
function EventFormComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r7.name, " ");
} }
function EventFormComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.getControlError("category_id"), " ");
} }
function EventFormComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getControlError("starts_at"), " ");
} }
function EventFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041F\u043E\u0442\u0440\u0435\u0431\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventFormComponent_div_35_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.removeRequirement(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const requirement_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", requirement_r8.get("description"));
} }
class EventFormComponent {
    constructor(router, fb, eventService) {
        this.router = router;
        this.fb = fb;
        this.eventService = eventService;
        this.image = '';
        this.categories = [
            { id: 1, name: 'Виставка' },
            { id: 2, name: 'Концерт' },
            { id: 3, name: 'Вистава' },
            { id: 4, name: 'Навчання' },
            { id: 5, name: 'Зустріч' },
            { id: 6, name: 'Свято' },
            { id: 7, name: 'Інше' },
        ];
    }
    ngOnInit() {
        this.eventForm = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            starts_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            requests_attributes: this.fb.array([]),
            image: this.fb.group({
                data: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
            }),
        });
    }
    requests_attributes() {
        return this.eventForm.get('requests_attributes');
    }
    newRequirement() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    addRequirement() {
        this.requests_attributes().push(this.newRequirement());
    }
    removeRequirement(i) {
        this.requests_attributes().removeAt(i);
    }
    isControlInvalid(fieldName) {
        return (this.eventForm.get(fieldName).invalid
            && (this.eventForm.get(fieldName).dirty
                || this.eventForm.get(fieldName).touched));
    }
    getControlError(controlName) {
        const control = this.eventForm.get(controlName);
        if (control.errors.required) {
            return 'Поле не може бути порожнім';
        }
        return null;
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.eventForm
                .get('image')
                .get('data')
                .patchValue(reader.result);
        };
    }
    submit() {
        if (this.eventForm.invalid) {
            return;
        }
        const jsonData = this.eventForm.value;
        if (!this.eventForm.get('image').get('data').value) {
            delete jsonData.image;
        }
        this.eventService.postData(jsonData).subscribe((response) => {
            this.router.navigate(['/posts', response.id]);
        });
    }
}
EventFormComponent.ɵfac = function EventFormComponent_Factory(t) { return new (t || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["EventService"])); };
EventFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EventFormComponent, selectors: [["app-event-form"]], decls: 42, vars: 8, consts: [[1, "wrapper"], [1, "card"], [1, "align-center"], [1, "flex-form", 3, "formGroup"], ["form", ""], ["appearance", "legacy", 1, "width-field"], ["matInput", "", "formControlName", "title", "required", ""], ["class", "validation", 4, "ngIf"], ["matInput", "", "formControlName", "body", "required", ""], ["appearance", "legacy"], ["formControlName", "category_id", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "starts_at", "type", "datetime-local", "required", ""], ["matInput", "", "formControlName", "location"], ["formArrayName", "requests_attributes"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "file", 1, "mat-form-field", 3, "change"], [1, "flex-button"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [1, "validation"], [3, "value"], [3, "formGroupName"], ["matInput", "", 3, "formControl"]], template: function EventFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043F\u043E\u0434\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430 \u043F\u043E\u0434\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EventFormComponent_mat_error_11_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u041E\u043F\u0438\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EventFormComponent_mat_error_16_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EventFormComponent_mat_option_21_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, EventFormComponent_mat_error_22_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0414\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EventFormComponent_mat_error_27_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u041C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventFormComponent_Template_button_click_33_listener() { return ctx.addRequirement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u0442\u0440\u0435\u0431\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, EventFormComponent_div_35_Template, 7, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EventFormComponent_Template_input_change_36_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-card-actions", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventFormComponent_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " \u0421\u043A\u0438\u043D\u0443\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventFormComponent_Template_button_click_40_listener() { return ctx.submit(); })("click", function EventFormComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " \u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.eventForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("body"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("category_id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isControlInvalid("starts_at"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.requests_attributes().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.eventForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArrayName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  max-width: 480px;\n  padding: 1rem;\n  margin: 0 auto;\n}\n\n.flex-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.flex-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.button-center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.width-field[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: #F00;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImV2ZW50LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mbGV4LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmZsZXgtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24tY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi53aWR0aC1maWVsZCB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi52YWxpZGF0aW9uIHtcbiAgY29sb3I6ICNGMDA7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "tE59":
/*!*****************************************************************************!*\
  !*** ./src/app/user/shared/components/user-layout/user-layout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLayoutComponent", function() { return UserLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "UCRe");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserLayoutComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.firstName, " ", ctx_r1.lastName, "");
} }
function UserLayoutComponent_mat_list_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r5.isActive);
} }
function UserLayoutComponent_mat_list_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLayoutComponent_mat_list_16_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserLayoutComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserLayoutComponent {
    constructor(router, authService) {
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
    logout() {
        this.authService.logout();
        this.router.navigate(['/user', 'login']);
    }
}
UserLayoutComponent.ɵfac = function UserLayoutComponent_Factory(t) { return new (t || UserLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
UserLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLayoutComponent, selectors: [["app-user-layout"]], decls: 20, vars: 5, consts: [["color", "primary"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/poster"], ["mat-menu-item", "", "routerLink", "/about"], ["href", "/", 1, "header-title"], [1, "spacer"], [4, "ngIf"], ["class", "button-container", 4, "ngIf"], [1, "wrapper"], ["mat-icon-button", "", "routerLink", "/user/posts", "routerLinkActive", "", 1, "navigation-link", 3, "disabled"], ["rla", "routerLinkActive"], ["mat-icon-button", "", "aria-label", "exit-to-app", 1, "navigation-link", 3, "click"], [1, "button-container"], ["mat-fab", "", "color", "primary", "routerLink", "event", "aria-label", "add new event", "routerLinkActive", "hide"]], template: function UserLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0410\u0444\u0456\u0448\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E \u043D\u0430\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0427\u0456\u0432\u0435\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserLayoutComponent_span_14_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserLayoutComponent_mat_list_15_Template, 6, 1, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserLayoutComponent_mat_list_16_Template, 5, 0, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserLayoutComponent_div_17_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hiding);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.navigation-link[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  right: 5%;\n  bottom: 10%;\n  left: auto;\n  position: fixed;\n  z-index: 1;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: whitesmoke\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCO0FBQ0YiLCJmaWxlIjoidXNlci1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ubmF2aWdhdGlvbi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICByaWdodDogNSU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlc21va2Vcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=user.js.map