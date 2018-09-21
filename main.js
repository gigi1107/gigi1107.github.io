(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app manager/About Me/aboutMe.component.css":
/*!************************************************************!*\
  !*** ./src/app/app manager/About Me/aboutMe.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portrait {\n  data-flickr-embed: \"true\";\n  background-image: url(\"https://farm2.staticflickr.com/1861/29682791377_d0f7e5708f_z.jpg\");\n  height: 600px;\n  width: 1000px;\n  margin-right: 25px;\n}\n\n\n.text-font {\n  font-family: Avenir;\n}\n\n"

/***/ }),

/***/ "./src/app/app manager/About Me/aboutMe.component.html":
/*!*************************************************************!*\
  !*** ./src/app/app manager/About Me/aboutMe.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; align-items: stretch\">\n  <div class=\"portrait\">\n  </div>\n  <div class=\"text-font\">\n    <p>\n      Hi, I'm Gigi. I live in Seattle, WA, and am currently pursuing my second degree in Computer Science at Seattle\n      University (anticipated graduation December 2019). I obtained my first degree in Psychology from UCLA in 2015. When\n      I decided to move to Seattle immediately after graduating, I became interested in studying Computer Science.\n    </p>\n    <br>\n    <p>\n      My interests vary. I enjoy learning about the mind, especially exploring questions of consciousness, intelligence,\n      and learning. I would like to incorporate my studies in Psychology with my studies in Computer Science, so\n      I am therefore interested in Artificial Intelligence. However, I am not limiting myself to this, as I also\n      recently\n      became\n      interested in front- end web development.\n    </p>\n    <br>\n    <p>\n      As you will see as you explore this site, I also have a wide variety of hobbies, not all of which are expressed\n      here!\n      In addition to the things you see on my \"hobbies\" page, I enjoy playing Breath of the Wild on my new Nintendo\n      Switch and playing D&D and board games.\n\n    </p>\n    <br>\n    <p>\n      NOTE: This site is a work in progress, and not in its final form. Stay tuned.\n    </p>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app manager/About Me/aboutMe.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/app manager/About Me/aboutMe.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./aboutMe.component.html */ "./src/app/app manager/About Me/aboutMe.component.html"),
            styles: [__webpack_require__(/*! ./aboutMe.component.css */ "./src/app/app manager/About Me/aboutMe.component.css")]
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app manager/Hobbies/hobbies.component.css":
/*!***********************************************************!*\
  !*** ./src/app/app manager/Hobbies/hobbies.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*.header-background {*/\n  /*background-color: azure;*/\n  /*height: fit-content;*/\n  /*width: 250px;*/\n  /*border-radius: 50px;*/\n  /*cursor: pointer;*/\n  /*}*/\n  .grid-list {\n  width:100%;\n  display: flex;\n  /*flex: 2;*/\n}\n  .text-style {\n  font-family: \"Arial Rounded MT Bold\";\n  font-size: xx-large;\n\n}\n  .container {\n  position: relative;\n}\n  .container-outer {\n  height:600px;\n  overflow-y: scroll;\n  display: flex;\n  flex-wrap: wrap;\n  flex: 3;\n}\n  .center-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 25px;\n  font-family: Avenir;\n}\n  .sidebar {\n  width: 100%;\n  font-family: Avenir;\n  font-size: 25px;\n  /*padding-left: 25px;*/\n  padding-top: 15%;\n  flex: 1;\n}\n  img {\n  /*display: block;*/\n  height: 450px;\n  width: 500px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.5;\n\n}\n  img:hover {\n  cursor: pointer;\n  opacity: 0.1;\n}\n  a {\n  margin-right: 1px;\n  padding-right: 1px;\n}\n\n"

/***/ }),

/***/ "./src/app/app manager/Hobbies/hobbies.component.html":
/*!************************************************************!*\
  !*** ./src/app/app manager/Hobbies/hobbies.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-list\">\n  <div class=\"container-outer\">\n\n    <div class=\"container\" (mouseover)=\"sidebarText= 'Click to see what books I\\'ve most recently read, as well as my thoughts on them (LINK DOES NOT WORK YET)'\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a>\n        <img src=\"https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Books\n      </div>\n    </div>\n\n    <div class=\"container\" (mouseover)=\"sidebarText = 'Click to see a portfolio of some of my baked goods. Breads, Cakes, Pies, and more!'\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/144020287@N04/albums/72157699613888571\">\n        <img src=\"https://farm2.staticflickr.com/1870/43698575865_ee77d20e11_z.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Baking\n      </div>\n    </div>\n\n    <div class=\"container\" (mouseover)=\"sidebarText = 'See some things that I\\'ve cooked. Foods include homemade pastas and more! '\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/144020287@N04/albums/72157695365806880\">\n        <img src=\"https://farm2.staticflickr.com/1861/44558749232_079301684a_z.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Cooking\n      </div>\n    </div>\n\n    <div class=\"container\" (mouseover)=\"sidebarText = 'Click to see some of my favorite activites (LINK DOES NOT WORK YET)'\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a>\n        <img src=\"https://farm2.staticflickr.com/1893/43889643364_db0fc952c0_z.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Activities\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"sidebar\">\n    {{sidebarText}}\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app manager/Hobbies/hobbies.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/app manager/Hobbies/hobbies.component.ts ***!
  \**********************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
        this.sidebarText = 'Hover over any of the boxes for more info, or click on them to link to my work!';
    }
    HobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/app manager/Hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.css */ "./src/app/app manager/Hobbies/hobbies.component.css")]
        })
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/app manager/Resume/resume.component.css":
/*!*********************************************************!*\
  !*** ./src/app/app manager/Resume/resume.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frame-format {\n  height:1000px;\n  width: 1000px;\n  border:none;\n  overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/app manager/Resume/resume.component.html":
/*!**********************************************************!*\
  !*** ./src/app/app manager/Resume/resume.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--link to resume-->\n<!--link to github-->\n\n\n  <div>\n    <a href=\"https://github.com/gigi1107\">\n      Github\n    </a>\n    <br>\n    <br>\n    <br>\n\n    <a href= \"https://www.dropbox.com/s/94chygr2ms875lr/GenevaDavidson_2018.pdf?dl=0\">\n      Resume\n    </a>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/app manager/Resume/resume.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app manager/Resume/resume.component.ts ***!
  \********************************************************/
/*! exports provided: ResumeComponent, SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/app manager/Resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/app manager/Resume/resume.component.css")]
        })
    ], ResumeComponent);
    return ResumeComponent;
}());

var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/app manager/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app manager/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox {\n  background-color:rgba(255,255,255,0.5);\n  /*opacity: 50%;*/\n  z-index: 1;\n  width:300px;\n  height: auto;\n  border-radius: 50px;\n  margin-left: 35%;\n\n  margin-top:15%;\n\n}\n\n.text {\n  font-family: Avenir;\n  font-size: large;\n  padding: 20px;\n  opacity: 1;\n\n}\n\n.image {\n  overflow:hidden;\n  background-image: url('https://i0.wp.com/vcvoices.org/wp-content/uploads/2017/05/sunflowers.jpg?zoom=2&fit=1024%2C640');\n  height: 800px;\n  width: 100%;\n  /*margin-top: 0px !important;*/\n}\n"

/***/ }),

/***/ "./src/app/app manager/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/app manager/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\n\n  <div class=\"textbox\">\n    <div class=\"text\">\n      I made this website to practice my Angular skills and to display my work-- both academic and not!\n      Use the above tabs for easy navigation.\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app manager/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app manager/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/app manager/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/app manager/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_manager_Hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app manager/Hobbies/hobbies.component */ "./src/app/app manager/Hobbies/hobbies.component.ts");
/* harmony import */ var _app_manager_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app manager/home/home.component */ "./src/app/app manager/home/home.component.ts");
/* harmony import */ var _app_manager_About_Me_aboutMe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app manager/About Me/aboutMe.component */ "./src/app/app manager/About Me/aboutMe.component.ts");
/* harmony import */ var _app_manager_Resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app manager/Resume/resume.component */ "./src/app/app manager/Resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'home', component: _app_manager_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'hobbies', component: _app_manager_Hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_2__["HobbiesComponent"] },
    { path: 'about-me', component: _app_manager_About_Me_aboutMe_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"] },
    { path: 'portfolio', component: _app_manager_Resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"] },
    { path: '**', component: _app_manager_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  /*padding-bottom: 20px;*/\n}\n\n.title-font {\n  font-family: \"Hiragino Kaku Gothic Std\";\n  font-size: xx-large;\n  padding-left: 30%;\n}\n\n.button-font {\n  font-family: Avenir;\n  font-size: medium;\n  background-color: rgba(255,255,255,0.1);\n}\n\n.button-margin {\n  padding-left: 30%;\n}\n\n.background-image {\n  data-flickr-embed:\"true\";\n  background-color: aliceblue;\n  width:100% ;\n  height:100%;\n\n\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card class=\"background-image\">\n      <div class=\"title-font\">\n        Geneva Rose Davidson\n      </div>\n\n\n    <div class=\"button-margin\">\n      <button mat-button class=\"button-font\" routerLink=\"/home\">Home</button>\n      <button mat-button class=\"button-font\" routerLink=\"/about-me\">About Me</button>\n      <button mat-button class=\"button-font\" routerLink=\"/hobbies\">Hobbies</button>\n      <button mat-button class=\"button-font\" routerLink=\"/portfolio\">Portfolio</button>\n    </div>\n  </mat-card>\n  <div class=\"spacer\"></div>\n  <router-outlet></router-outlet>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_manager_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app manager/home/home.component */ "./src/app/app manager/home/home.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _app_manager_Hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app manager/Hobbies/hobbies.component */ "./src/app/app manager/Hobbies/hobbies.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_manager_About_Me_aboutMe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app manager/About Me/aboutMe.component */ "./src/app/app manager/About Me/aboutMe.component.ts");
/* harmony import */ var _app_manager_Resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app manager/Resume/resume.component */ "./src/app/app manager/Resume/resume.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    // const appRoutes: Routes = [
    //   { path: 'app-home', component: HomeComponent },
    //   { path: 'app-hobbies',  component: HobbiesComponent },
    //   { path: 'app-about-me', component: AboutMeComponent},
    //   { path: 'app-resume', component: ResumeComponent},
    //   { path: '',
    //     redirectTo: '/app-home',
    //     pathMatch: 'full'
    //   },
    // ];
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_manager_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _app_manager_Hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__["HobbiesComponent"],
                _app_manager_Resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                _app_manager_About_Me_aboutMe_component__WEBPACK_IMPORTED_MODULE_9__["AboutMeComponent"],
                _app_manager_Resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
        // const appRoutes: Routes = [
        //   { path: 'app-home', component: HomeComponent },
        //   { path: 'app-hobbies',  component: HobbiesComponent },
        //   { path: 'app-about-me', component: AboutMeComponent},
        //   { path: 'app-resume', component: ResumeComponent},
        //   { path: '',
        //     redirectTo: '/app-home',
        //     pathMatch: 'full'
        //   },
        // ];
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gdavidson/IdeaProjects/gigisWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map