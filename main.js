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

module.exports = "img {\n  margin-right: 2%;\n  background-repeat: no-repeat;\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  flex:1;\n  min-width:0;\n  margin-top: 0;\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  /*height: 100%;*/\n}\n\n\n.text-font {\n  font-family: Helvetica;\n  opacity: 0.7;\n  flex:2;\n\n}\n\n"

/***/ }),

/***/ "./src/app/app manager/About Me/aboutMe.component.html":
/*!*************************************************************!*\
  !*** ./src/app/app manager/About Me/aboutMe.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex\">\n\n  <img src=\"https://farm2.staticflickr.com/1861/29682791377_d0f7e5708f_z.jpg\">\n\n  <div class=\"text-font\">\n    <p>\n      Hi, I'm Gigi. I live in Seattle, WA, and am currently pursuing a degree in Computer Science at Seattle\n      University (anticipated graduation December 2019). I obtained my first degree in Psychology from UCLA in 2015.\n      When I decided to move to Seattle after graduating, I became interested in studying Computer Science.\n    </p>\n    <br>\n    <p>\n      I enjoy learning about the mind, especially exploring questions of consciousness, intelligence,\n      and learning. I would like to incorporate my studies in Psychology with my studies in Computer Science, so\n      I am therefore interested in Artificial Intelligence. However, I am not limiting myself to this, as I also\n      recently became interested in front- end web development.\n    </p>\n    <br>\n    <p>\n      As you will see as you explore this site, I also have a wide variety of hobbies, not all of which are expressed\n      here! In addition to the things you see on my \"hobbies\" page, I enjoy playing Breath of the Wild on my new Nintendo\n      Switch and playing D&D and board games.\n\n    </p>\n    <br>\n    <p>\n      NOTE: This site is a work in progress, and not in its final form. Stay tuned.\n    </p>\n\n  </div>\n\n</div>\n\n"

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

module.exports = "html, body {\n  margin: 0;\n  padding: 0;\n}\n\n.grid-list {\n  width:100%;\n  display: flex;\n}\n\n.text-style {\n  font-family: Helvetica;\n  font-size: large;\n}\n\n.container {\n  position: relative;\n}\n\n.container-outer {\n  /*height:600px;*/\n  /*overflow-y: scroll;*/\n  display: flex;\n  flex-direction: column;\n  flex: 4;\n  width: 100%;\n  /*background-color: aliceblue;*/\n\n}\n\n.center-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 25px;\n  font-family: 'Permanent Marker', cursive;\n}\n\n.sidebar {\n  font-family: 'Poiret One';\n  font-size: large;\n  padding-left: 1%;\n  padding-top: 15%;\n  flex: 1;\n  line-height: 2;\n}\n\nimg{\n  /*display: block;*/\n  height:150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.5;\n}\n\nimg:hover {\n  cursor: pointer;\n  opacity: 0.1;\n}\n\na {\n  margin-right: 1px;\n  padding-right: 1px;\n}\n\n\n"

/***/ }),

/***/ "./src/app/app manager/Hobbies/hobbies.component.html":
/*!************************************************************!*\
  !*** ./src/app/app manager/Hobbies/hobbies.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-list\">\n\n  <div class=\"container-outer\">\n\n    <div class=\"container\" (mouseover)=\"sidebarText= 'Click to see what books I\\'ve most recently read, as well as my thoughts on them (LINK DOES NOT WORK YET)'\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a>\n        <img src=\"https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Books\n      </div>\n    </div>\n\n    <div class=\"container\" (mouseover)=\"sidebarText = 'Click to see a portfolio of some of my baked goods. Breads, Cakes, Pies, and more!'\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/144020287@N04/albums/72157699613888571\">\n        <img src=\"https://farm2.staticflickr.com/1870/43698575865_ee77d20e11_z.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Baking\n      </div>\n    </div>\n\n    <div class=\"container\" (mouseover)=\"sidebarText = 'See some things that I\\'ve cooked. Foods include homemade pastas and more! '\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/144020287@N04/albums/72157695365806880\">\n        <img src=\"https://farm2.staticflickr.com/1861/44558749232_079301684a_z.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Cooking\n      </div>\n    </div>\n\n    <div class=\"container\" (mouseover)=\"sidebarText = 'Click to see some of my favorite activites (LINK DOES NOT WORK YET)'\"\n    (mouseleave)=\"sidebarText = ''\">\n      <a>\n        <img src=\"https://farm2.staticflickr.com/1893/43889643364_db0fc952c0_z.jpg\">\n      </a>\n      <div class=\"center-text\">\n        Activities\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"sidebar\">\n    {{sidebarText}}\n  </div>\n</div>\n\n\n\n\n"

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

module.exports = ".center-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: x-large;\n  color: mediumblue;\n  font-family: 'Permanent Marker';\n\n}\n\n.body-class{\n  display: block;\n  /*width: fit-content;*/\n  /*height: fit-content;*/\n  /*padding: 45px 0;*/\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  margin-top: 2%;\n  height: 50%;\n  background-color: white;\n}\n\n.body-class:hover {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  cursor: pointer;\n}\n\n.container {\n  position: relative;\n\n}\n\nimg {\n  height: 100%;\n  width: 100%;\n\n}\n"

/***/ }),

/***/ "./src/app/app manager/Resume/resume.component.html":
/*!**********************************************************!*\
  !*** ./src/app/app manager/Resume/resume.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--link to resume-->\n<!--link to github-->\n\n\n<div style=\"display: flex; background-color: aliceblue\">\n  <div class=\"body-class\">\n    <a href=\"https://github.com/gigi1107\">\n      <img src=\"https://image.flaticon.com/icons/svg/25/25231.svg\">\n      <div class=\"center-text\">\n\n        Link to my Github\n      </div>\n\n    </a>\n  </div>\n\n\n  <div style=\"padding-right: 20px\"></div>\n\n\n  <div class=\"body-class\">\n    <a href=\"https://www.dropbox.com/s/yzh7e87ruheewii/GenevaDavidson_2018_Resume.pdf?dl=0\">\n      <img src=\"https://farm2.staticflickr.com/1884/30958033828_94a2f5c24e_z.jpg\" width=\"495\" height=\"640\">\n\n      <div class=\"center-text\">\n        Link to Resume\n      </div>\n    </a>\n\n  </div>\n\n</div>\n"

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

module.exports = "\nimg {\n  position: absolute;\n  width: 50%;\n  /*height: 50%;*/\n  margin-top: 5%;\n  margin-left: 20%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n\n}\n\n.background {\n  background-color: aliceblue;\n  height: 2000px;\n}\n"

/***/ }),

/***/ "./src/app/app manager/home/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/app manager/home/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"background\">\n    <img src=\"https://images.all-free-download.com/images/graphiclarge/white_rose_monochrome_516089.jpg\">\n\n</div>\n"

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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
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

module.exports = ".spacer {\n  /*padding-bottom: 20px;*/\n}\n\n.title-font {\n  font-family: 'Poiret One', cursive;\n\n  font-size: xx-large;\n  /*padding-left: 30%;*/\n}\n\n.button-font {\n font-family: 'Poiret One', cursive;\n  font-size: medium;\n  background-color: rgba(255,255,255,0.1);\n}\n\n.button-margin {\n  padding-left: 45%;\n}\n\n.background-image {\n  background-color: aliceblue;\n  width:100% ;\n  height:100%;\n  overflow-x: hidden;\n\n\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"background-image\">\n    <div style=\"padding: 2%; display: flex\">\n      <div class=\"title-font\">\n        <link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker|Poiret+One\" rel=\"stylesheet\">\n        Geneva Rose Davidson\n      </div>\n\n\n      <div class=\"button-margin\">\n        <button mat-button class=\"button-font\" routerLink=\"/home\">Home</button>\n        <button mat-button class=\"button-font\" routerLink=\"/about-me\">About Me</button>\n        <button mat-button class=\"button-font\" routerLink=\"/hobbies\">Hobbies</button>\n        <button mat-button class=\"button-font\" routerLink=\"/portfolio\">Portfolio</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"spacer\"></div>\n  <router-outlet></router-outlet>\n"

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