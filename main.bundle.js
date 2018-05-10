webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes_component__ = __webpack_require__("./src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_component__ = __webpack_require__("./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipes_recip_start_recip_start_component__ = __webpack_require__("./src/app/recipes/recip-start/recip-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipes_recipes_detail_recipes_detail_component__ = __webpack_require__("./src/app/recipes/recipes-detail/recipes-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipe_edit_recipe_edit_component__ = __webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_2__recipes_recipes_component__["a" /* RecipesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__recipes_recip_start_recip_start_component__["a" /* RecipStartComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_6__recipes_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__recipes_recipes_detail_recipes_detail_component__["a" /* RecipesDetailComponent */] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_6__recipes_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */] },
        ] },
    { path: 'shopping-list', component: __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header ></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\" style=\"margin-left: 5px\">\n    <div class=\"col-lg-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__ = __webpack_require__("./src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipes_recipes_list_recipes_list_component__ = __webpack_require__("./src/app/recipes/recipes-list/recipes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipes_recipes_detail_recipes_detail_component__ = __webpack_require__("./src/app/recipes/recipes-detail/recipes-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipes_recipes_list_recipes_item_recipes_item_component__ = __webpack_require__("./src/app/recipes/recipes-list/recipes-item/recipes-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shopping_list_shopping_list_component__ = __webpack_require__("./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shopping_list_shopping_edit_shopping_edit_component__ = __webpack_require__("./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_dropdown_directive__ = __webpack_require__("./src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shopping_list_shopping_list_service__ = __webpack_require__("./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recipes_recip_start_recip_start_component__ = __webpack_require__("./src/app/recipes/recip-start/recip-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__recipes_recipe_edit_recipe_edit_component__ = __webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__recipes_recipe_service__ = __webpack_require__("./src/app/recipes/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__["a" /* RecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__recipes_recipes_list_recipes_list_component__["a" /* RecipesListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__recipes_recipes_detail_recipes_detail_component__["a" /* RecipesDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__recipes_recipes_list_recipes_item_recipes_item_component__["a" /* RecipesItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shopping_list_shopping_edit_shopping_edit_component__["a" /* ShoppingEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_15__recipes_recip_start_recip_start_component__["a" /* RecipStartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__recipes_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__shopping_list_shopping_list_service__["a" /* ShoppingService */], __WEBPACK_IMPORTED_MODULE_18__recipes_recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_17__shared_data_storage_service__["a" /* DataStorageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light \">\n \n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/\">Recipe Book</a>\n    </div>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li routerLinkActive=\"active\">\n              <a class=\"nav-item nav-link\" routerLink=\"recipes\">\n                Recipes <span class=\"sr-only\">(current)</span></a></li>\n            <li routerLinkActive=\"active\">\n                <a class=\"nav-item nav-link\" routerLink=\"shopping-list\">\n              Shopping List</a></li>\n        </ul>\n\n        <!--\n        <ul class=\"navbar-nav navbar-right disabled\">\n            <li class=\"nav-item dropdown disabled\">\n                <a class=\"nav-link dropdown-toggle\"\n                  id=\"manageMenu\" data-toggle=\"dropdown\" \n                  aria-haspopup=\"true\"\n                  aria-expanded=\"true\" \n                  appDropdown>Manage</a>\n                <ul class=\"dropdown-menu \" >\n                  <li><a style=\"cursor: pointer;\" (click)=\"onSaveData()\" >Save Data</a></li>\n                  <li><a style=\"cursor: pointer;\" (click)=\"onFetchData()\" >Fetch Data</a></li>\n                </ul>\n            </li>\n        </ul>\n      -->\n    </div>\n\n    \n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("./src/app/shared/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataStorageService) {
        this.dataStorageService = dataStorageService;
    }
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStorageService.storeRecipes()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onFetchData = function () {
        this.dataStorageService.getRecipes();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recip-start/recip-start.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recip-start/recip-start.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Select a Recipes</h3>"

/***/ }),

/***/ "./src/app/recipes/recip-start/recip-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipStartComponent = /** @class */ (function () {
    function RecipStartComponent() {
    }
    RecipStartComponent.prototype.ngOnInit = function () {
    };
    RecipStartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recip-start',
            template: __webpack_require__("./src/app/recipes/recip-start/recip-start.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recip-start/recip-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipStartComponent);
    return RecipStartComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <button type=\"submit\" class=\"btn btn-success\"  >Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" >Cancel</button>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input \n            type=\"text\"\n            id=\"name\"\n            class=\"form-control\"\n            formControlName=\"name\">\n          </div>\n      </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"imagePath\">Image URL</label>\n              <input \n              type=\"text\"\n              id=\"imagePath\"\n              formControlName=\"imagePath\"\n              class=\"form-control\">\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <img src=\"\" class=\"img-responsive\">\n        </div>\n      </div>\n\n      \n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <label for=\"description\">Description</label>\n              <textarea \n              type=\"text\"\n              id=\"description\"\n              formControlName=\"description\"\n              class=\"form-control\"\n              row=6></textarea>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-sm-12\" formArrayName=\"ingredients\">\n            <label>Ingredient</label>\n            <div class=\"form-group\">\n              <div class=\"row\" \n              *ngFor=\"let ingrendientC of recipeForm.get('ingredients').controls; let i = index\"\n              [formGroupName]=\"i\" style=\"margin-top: 10px\">\n                \n                <div class=\"col-sm-8\">\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"name\"\n                  formControlName=\"name\">\n                </div>\n\n                <div class=\"col-sm-2\">\n                  <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  placeholder=1\n                  formControlName=\"amount\">\n                </div>\n\n                <div class=\"col-sm-2\">\n                   <button class=\"btn btn-danger\" (click)=\"onDeleteIngredient(i)\">X</button>\n                </div>\n                \n              </div>\n\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-success\"\n                    (click)=\"onAddIngredient()\">Add Ingredient</button>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("./src/app/recipes/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeEditComponent = /** @class */ (function () {
    function RecipeEditComponent(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            console.log("editmode ", _this.editMode);
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        console.log(this.recipeForm);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeIngredients = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeDescription = recipe.description;
            recipeImagePath = recipe.imagePath;
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingrendient = _a[_i];
                    console.log("kelp ", ingrendient.name);
                    recipeIngredients.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                        'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](ingrendient.name),
                        'amount': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](ingrendient.amount)
                    }));
                }
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](recipeName),
            'imagePath': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](recipeImagePath),
            'description': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](recipeDescription),
            'ingredients': recipeIngredients
        });
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'amount': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe-edit',
            template: __webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipe-edit/recipe-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RecipeEditComponent);
    return RecipeEditComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recipe_model__ = __webpack_require__("./src/app/recipes/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__ = __webpack_require__("./src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_service__ = __webpack_require__("./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeService = /** @class */ (function () {
    function RecipeService(shopService) {
        this.shopService = shopService;
        this.recipesChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.recipes = [
            new __WEBPACK_IMPORTED_MODULE_0__recipe_model__["a" /* Recipe */]('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!', 'https://static-communitytable.parade.com/wp-content/uploads/2018/01/instantpot-cheeseburger-mac-1.jpg', [
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]('Meat', 1),
                new __WEBPACK_IMPORTED_MODULE_2__shared_ingredient_model__["a" /* Ingredient */]('French Fries', 20)
            ])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        console.log(this.recipes);
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.addIngredientsToShop = function (ingredients) {
        this.shopService.addListIngredients(ingredients);
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_service__["a" /* ShoppingService */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-detail/recipes-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipes-detail/recipes-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <img \n    [src] =\"recipe.imagePath\" \n    alt=\"{{recipe.name}}\" \n    class=\"img-responsive\"\n    style=\"max-height:250px\">\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h1>Recipe Name</h1>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"btn-group \">\n        <button type=\"button\" \n        class=\"btn btn-primary dropdown-toggle\" appDropdown>\n          Manager Recipe <span class=\"cart\"></span>\n        </button>\n        <ul class=\"dropdown-menu \"  appBasicHighlight>\n          <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">\n            To Shopping List</a></li>\n          <li><a style=\"cursor: pointer;\" (click)=\"onEdit()\">Edit Recipe</a></li>\n          <li><a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\n        </ul>\n      </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n      {{recipe.description}}\n    </div>\n</div>\n  \n<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <li class=\"list-group-item\"\n      *ngFor=\"let ingredient of recipe.ingredients\">\n    {{ ingredient.name }} : {{ingredient.amount}}\n    </li>\n    </div>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/recipes/recipes-detail/recipes-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipesDetailComponent = /** @class */ (function () {
    function RecipesDetailComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    RecipesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipesDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addIngredientsToShop(this.recipe.ingredients);
    };
    RecipesDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    RecipesDetailComponent.prototype.onDeleteRecipe = function () {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    };
    RecipesDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes-detail',
            template: __webpack_require__("./src/app/recipes/recipes-detail/recipes-detail.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes-detail/recipes-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RecipesDetailComponent);
    return RecipesDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-item/recipes-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-item/recipes-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a  \r\n    style=\"cursor: pointer;\"\r\n    [routerLink]=\"[index]\"\r\n    routerLinkActive= \"active\"\r\n    class=\"list-group-item clearfix\">\r\n            <div class=\"float-left\">\r\n            <h4 class=\"list-group-item-heading\">{{recipe.name}}</h4>\r\n            <p class=\"list-group-item-text\">{{recipe.description}}</p>\r\n            </div>\r\n            <span class=\"float-right\">\r\n            <img \r\n            [src] = \"recipe.imagePath\"\r\n            alt=\"{{recipe.name}}\" \r\n            class=\"imf-responsive\" \r\n            style=\"max-height: 50px;\">\r\n            </span>\r\n</a>"

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-item/recipes-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("./src/app/recipes/recipe.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesItemComponent = /** @class */ (function () {
    function RecipesItemComponent() {
    }
    RecipesItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */])
    ], RecipesItemComponent.prototype, "recipe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], RecipesItemComponent.prototype, "index", void 0);
    RecipesItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes-item',
            template: __webpack_require__("./src/app/recipes/recipes-list/recipes-item/recipes-item.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes-list/recipes-item/recipes-item.component.css")]
        })
    ], RecipesItemComponent);
    return RecipesItemComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-recipes-item \n      *ngFor=\"let recipeEl of recipes; let i = index\"\n      [recipe] = \"recipeEl\"\n      [index] = \"i\"\n      ></app-recipes-item>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/recipes/recipes-list/recipes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipesListComponent = /** @class */ (function () {
    function RecipesListComponent(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
    }
    RecipesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.recipeService.recipesChanged
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    };
    RecipesListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipesListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecipesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes-list',
            template: __webpack_require__("./src/app/recipes/recipes-list/recipes-list.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes-list/recipes-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], RecipesListComponent);
    return RecipesListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-recipes-list></app-recipes-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("./src/app/recipes/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        //subscribe take in the parameter it will received then tell it  what it will do
    };
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipes',
            template: __webpack_require__("./src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__("./src/app/recipes/recipes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_service__ = __webpack_require__("./src/app/recipes/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataStorageService = /** @class */ (function () {
    function DataStorageService(http, recipeService) {
        this.http = http;
        this.recipeService = recipeService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    };
    DataStorageService.prototype.getRecipes = function () {
        var _this = this;
        this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json')
            .map(function (response) {
            var recipes = response.json();
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
            .subscribe(function (recipes) {
            _this.recipeService.setRecipes(recipes);
        });
    };
    DataStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_service__["a" /* RecipeService */]])
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isOpen = false;
    }
    DropdownDirective.prototype.onClick = function () {
        var dropdown = this.elementRef.nativeElement.nextElementSibling;
        if (!this.isOpen) {
            this.renderer.addClass(dropdown, 'show');
        }
        else {
            this.renderer.removeClass(dropdown, 'show');
        }
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "onClick", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = /** @class */ (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form (ngSubmit)=\"OnAddItem(f)\" #f=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <label for=\"name\">Name</label>\n          <input \n          type=\"text\" \n          id=\"name\" \n          class=\"form-control\"\n          name=\"name\"\n          ngModel\n          required>\n        </div>\n\n        <div class=\"col-sm-5 form-group\">\n            <label for=\"amount\">Amount</label>\n            <input \n            type=\"number\" \n            id=\"amount\" \n            class=\"form-control\"\n            name=\"amount\"\n            ngModel\n            required\n            pattern=\"^[1-9]+[0-9]*$\">\n        </div>\n\n      </div>\n      <hr>\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"f.invalid\" >{{editMode ? 'Update': \"Add\"}}</button>\n            <button class=\"btn btn-danger\" type=\"button\" \n            (click)=\"onDelete()\" *ngIf=\"editMode\">Delete</button>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\" >Clear</button>\n          </div>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ingredient_model__ = __webpack_require__("./src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_service__ = __webpack_require__("./src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent(shopService) {
        this.shopService = shopService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.shopService.startedEditing
            .subscribe(function (index) {
            _this.editedItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.shopService.getIngredient(index);
            console.log("edit ", _this.editedItem.name);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.OnAddItem = function (form) {
        var value = form.value;
        var newIngredient = new __WEBPACK_IMPORTED_MODULE_1__shared_ingredient_model__["a" /* Ingredient */](value.name, value.amount);
        if (this.editMode) {
            this.shopService.updateIngredient(this.editedItemIndex, newIngredient);
        }
        else {
            this.shopService.addIngredients(newIngredient);
        }
        this.editMode = false;
        form.reset();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.editMode = false;
        this.slForm.reset();
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.shopService.deleteIngredients(this.editedItemIndex);
        this.onClear();
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
    ], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-edit',
            template: __webpack_require__("./src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__("./src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shopping_list_service__["a" /* ShoppingService */]])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-shopping-edit ></app-shopping-edit>\n    <hr>\n    <ul class=\"list-group\">\n      <a class=\"list-group-item\" \n      style=\"cursor:pointer\"\n      *ngFor=\"let ingrendient of ingredients; let i = index\"\n      (click)=\"onEditItem(i)\">\n    {{ingrendient.name}} ({{ingrendient.amount}})\n      </a>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_list_service__ = __webpack_require__("./src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shopService) {
        this.shopService = shopService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.shopService.getIngredients();
        this.sub = this.shopService.ingredientsChanged.subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.shopService.startedEditing.next(index);
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShoppingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-list',
            template: __webpack_require__("./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__("./src/app/shopping-list/shopping-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shopping_list_service__["a" /* ShoppingService */]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_ingredient_model__ = __webpack_require__("./src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");


var ShoppingService = /** @class */ (function () {
    function ShoppingService() {
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_0__shared_ingredient_model__["a" /* Ingredient */]('apple', 10)
        ];
    }
    ShoppingService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.addIngredients = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingService.prototype.addListIngredients = function (ingredients) {
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a;
    };
    ShoppingService.prototype.deleteIngredients = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map