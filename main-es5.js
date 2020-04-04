function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/app/app.component */
    "./src/app/components/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");
    /* harmony import */


    var _components_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/item/item.component */
    "./src/app/components/item/item.component.ts");
    /* harmony import */


    var _components_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/copy-right/copy-right.component */
    "./src/app/components/copy-right/copy-right.component.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store */
    "./src/app/store/index.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(Object(_store__WEBPACK_IMPORTED_MODULE_11__["createStore"])()), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: false
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"], _components_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_10__["CopyRightComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _components_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"], _components_copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_10__["CopyRightComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(Object(_store__WEBPACK_IMPORTED_MODULE_11__["createStore"])()), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: false
          })],
          providers: [],
          bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/app/app.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/app/app.component.ts ***!
    \*************************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppComponentsAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_todo_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/todo-local.service */
    "./src/app/services/todo-local.service.ts");
    /* harmony import */


    var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/actions/todo.action */
    "./src/app/store/actions/todo.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../copy-right/copy-right.component */
    "./src/app/components/copy-right/copy-right.component.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../list/list.component */
    "./src/app/components/list/list.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    function AppComponent_app_list_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list");
      }
    }

    function AppComponent_app_footer_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(store) {
        _classCallCheck(this, AppComponent);

        this.store = store;
        this.todos$ = this.store.select('todos');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(Object(_store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onLoad"])(_services_todo_local_service__WEBPACK_IMPORTED_MODULE_1__["TodoLocalService"].loadTodos()));
          this.todos$.subscribe(function (todos) {
            return _services_todo_local_service__WEBPACK_IMPORTED_MODULE_1__["TodoLocalService"].storeTodos(todos);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 6,
      consts: [["id", "app"], [1, "todoapp"], [4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_list_3_Template, 1, 0, "app-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_footer_5_Template, 1, 0, "app-footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-copy-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.todos$).length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.todos$).length);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _copy_right_copy_right_component__WEBPACK_IMPORTED_MODULE_6__["CopyRightComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/copy-right/copy-right.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/copy-right/copy-right.component.ts ***!
    \***************************************************************/

  /*! exports provided: CopyRightComponent */

  /***/
  function srcAppComponentsCopyRightCopyRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CopyRightComponent", function () {
      return CopyRightComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CopyRightComponent = function CopyRightComponent() {
      _classCallCheck(this, CopyRightComponent);
    };

    CopyRightComponent.ɵfac = function CopyRightComponent_Factory(t) {
      return new (t || CopyRightComponent)();
    };

    CopyRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CopyRightComponent,
      selectors: [["app-copy-right"]],
      decls: 11,
      vars: 0,
      consts: [[1, "info"], ["href", "http://github.com/blacksonic/"], ["href", "http://todomvc.com"]],
      template: function CopyRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Double-click to edit a todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Created by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "blacksonic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Part of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "TodoMVC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-copy-right',
          templateUrl: './copy-right.template.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/selectors/todo.selector */
    "./src/app/store/selectors/todo.selector.ts");
    /* harmony import */


    var _constants_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constants/filter */
    "./src/app/constants/filter.ts");
    /* harmony import */


    var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/actions/todo.action */
    "./src/app/store/actions/todo.action.ts");
    /* harmony import */


    var _store_actions_filter_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store/actions/filter.action */
    "./src/app/store/actions/filter.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var item_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.handleFilterSelect(item_r4.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", item_r4.key === _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r2.filter$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.value, " ");
      }
    }

    function FooterComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.handleClearCompleted();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear completed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(store) {
        _classCallCheck(this, FooterComponent);

        this.store = store;
        this.filterTitles = [{
          key: _constants_filter__WEBPACK_IMPORTED_MODULE_2__["FILTERS"].all,
          value: 'All'
        }, {
          key: _constants_filter__WEBPACK_IMPORTED_MODULE_2__["FILTERS"].active,
          value: 'Active'
        }, {
          key: _constants_filter__WEBPACK_IMPORTED_MODULE_2__["FILTERS"].completed,
          value: 'Completed'
        }];
        this.itemsLeft$ = store.select(_store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__["selectItemsLeft"]);
        this.completedCount$ = store.select(_store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__["selectCompletedCount"]);
        this.itemText$ = store.select(function (state) {
          return Object(_store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__["selectItemsLeft"])(state) === 1 ? 'item' : 'items';
        });
        this.filter$ = store.select('filter');
      }

      _createClass(FooterComponent, [{
        key: "handleClearCompleted",
        value: function handleClearCompleted() {
          this.store.dispatch(Object(_store_actions_todo_action__WEBPACK_IMPORTED_MODULE_3__["onClearCompleted"])());
        }
      }, {
        key: "handleFilterSelect",
        value: function handleFilterSelect(filter) {
          this.store.dispatch(Object(_store_actions_filter_action__WEBPACK_IMPORTED_MODULE_4__["onFilterSelect"])(filter));
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 12,
      vars: 10,
      consts: [[1, "footer"], [1, "todo-count"], [1, "filters"], [4, "ngFor", "ngForOf"], ["class", "clear-completed", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"], [1, "clear-completed", 3, "click"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FooterComponent_li_9_Template, 4, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FooterComponent_button_10_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.itemsLeft$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.itemText$), " left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterTitles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.completedCount$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/actions/todo.action */
    "./src/app/store/actions/todo.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var ENTER_KEY = 'Enter';

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(store) {
        _classCallCheck(this, HeaderComponent);

        this.store = store;
        this.name = '';
      }

      _createClass(HeaderComponent, [{
        key: "handleChange",
        value: function handleChange(event) {
          this.name = event.target.value;
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
          if (event.key !== ENTER_KEY) {
            return;
          }

          this.store.dispatch(Object(_store_actions_todo_action__WEBPACK_IMPORTED_MODULE_1__["onCreate"])(this.name));
          this.name = '';
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 1,
      consts: [[1, "header"], ["placeholder", "What needs to be done?", 1, "new-todo", 3, "value", "input", "keyup"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeaderComponent_Template_input_input_3_listener($event) {
            return ctx.handleChange($event);
          })("keyup", function HeaderComponent_Template_input_keyup_3_listener($event) {
            return ctx.handleSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.name);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/item/item.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/item/item.component.ts ***!
    \***************************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppComponentsItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ItemComponent_input_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ItemComponent_input_6_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.name = $event;
        })("blur", function ItemComponent_input_6_Template_input_blur_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.handleBlur();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.name);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        completed: a0,
        editing: a1
      };
    };

    var ItemComponent = /*#__PURE__*/function () {
      function ItemComponent() {
        _classCallCheck(this, ItemComponent);

        this.editing = false;
        this.name = '';
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ItemComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.todo) {
            this.name = changes.todo.currentValue.name;
          }
        }
      }, {
        key: "handleRemove",
        value: function handleRemove() {
          this.remove.emit(this.todo.id);
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.update.emit({
            id: this.todo.id,
            name: this.name
          });
          this.editing = false;
        }
      }, {
        key: "handleEdit",
        value: function handleEdit() {
          this.editing = true;
        }
      }, {
        key: "handleCompleted",
        value: function handleCompleted() {
          this.update.emit({
            id: this.todo.id,
            completed: !this.todo.completed
          });
        }
      }]);

      return ItemComponent;
    }();

    ItemComponent.ɵfac = function ItemComponent_Factory(t) {
      return new (t || ItemComponent)();
    };

    ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ItemComponent,
      selectors: [["app-item"]],
      inputs: {
        todo: "todo"
      },
      outputs: {
        remove: "remove",
        update: "update"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 7,
      vars: 7,
      consts: [[3, "ngClass"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "checked", "change"], [3, "dblclick"], [1, "destroy", 3, "click"], ["class", "edit", "autofocus", "", 3, "ngModel", "ngModelChange", "blur", 4, "ngIf"], ["autofocus", "", 1, "edit", 3, "ngModel", "ngModelChange", "blur"]],
      template: function ItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ItemComponent_Template_input_change_2_listener() {
            return ctx.handleCompleted();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ItemComponent_Template_label_dblclick_3_listener() {
            return ctx.handleEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_5_listener() {
            return ctx.handleRemove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ItemComponent_input_6_Template, 1, 1, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx.todo.completed, ctx.editing));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.todo.completed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.todo.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editing);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-item',
          templateUrl: './item.component.html'
        }]
      }], null, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        remove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/selectors/todo.selector */
    "./src/app/store/selectors/todo.selector.ts");
    /* harmony import */


    var _store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/actions/todo.action */
    "./src/app/store/actions/todo.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../item/item.component */
    "./src/app/components/item/item.component.ts");

    function ListComponent_app_item_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("remove", function ListComponent_app_item_5_Template_app_item_remove_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.handleRemove($event);
        })("update", function ListComponent_app_item_5_Template_app_item_update_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.handleUpdate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r10);
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(store) {
        _classCallCheck(this, ListComponent);

        this.store = store;
        this.visibleTodos$ = store.select(_store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__["selectVisible"]);
        this.allCompleted$ = store.select(_store_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_1__["selectAllCompleted"]);
      }

      _createClass(ListComponent, [{
        key: "handleRemove",
        value: function handleRemove(id) {
          this.store.dispatch(Object(_store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onRemove"])(id));
        }
      }, {
        key: "handleUpdate",
        value: function handleUpdate(values) {
          this.store.dispatch(Object(_store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onUpdate"])(values));
        }
      }, {
        key: "handleCompleteAll",
        value: function handleCompleteAll() {
          this.store.dispatch(Object(_store_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onCompleteAll"])());
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 7,
      vars: 6,
      consts: [[1, "main"], ["id", "toggle-all", "type", "checkbox", "readonly", "", 1, "toggle-all", 3, "checked"], ["htmlFor", "toggle-all", 3, "click"], [1, "todo-list"], [3, "todo", "remove", "update", 4, "ngFor", "ngForOf"], [3, "todo", "remove", "update"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_label_click_3_listener() {
            return ctx.handleCompleteAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListComponent_app_item_5_Template, 1, 1, "app-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.allCompleted$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.visibleTodos$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_5__["ItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html'
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants/action-type.ts":
  /*!******************************************!*\
    !*** ./src/app/constants/action-type.ts ***!
    \******************************************/

  /*! exports provided: ACTION_TYPES */

  /***/
  function srcAppConstantsActionTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function () {
      return ACTION_TYPES;
    });

    var ACTION_TYPES = {
      load: 'LOAD',
      create: 'CREATE',
      remove: 'REMOVE',
      update: 'UPDATE',
      completeAll: 'COMPLETE_ALL',
      clearCompleted: 'CLEAR_COMPLETED',
      selectFilter: 'SELECT_FILTER'
    };
    /***/
  },

  /***/
  "./src/app/constants/filter.ts":
  /*!*************************************!*\
    !*** ./src/app/constants/filter.ts ***!
    \*************************************/

  /*! exports provided: FILTERS */

  /***/
  function srcAppConstantsFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FILTERS", function () {
      return FILTERS;
    });

    var FILTERS = {
      all: 'all',
      active: 'active',
      completed: 'completed'
    };
    /***/
  },

  /***/
  "./src/app/services/todo-local.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/todo-local.service.ts ***!
    \************************************************/

  /*! exports provided: TodoLocalService */

  /***/
  function srcAppServicesTodoLocalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoLocalService", function () {
      return TodoLocalService;
    });

    var LOCAL_STORAGE_KEY = 'todoapp_todos';

    var TodoLocalService = /*#__PURE__*/function () {
      function TodoLocalService() {
        _classCallCheck(this, TodoLocalService);
      }

      _createClass(TodoLocalService, null, [{
        key: "loadTodos",
        value: function loadTodos() {
          return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        }
      }, {
        key: "storeTodos",
        value: function storeTodos(todos) {
          window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        }
      }]);

      return TodoLocalService;
    }();
    /***/

  },

  /***/
  "./src/app/store/actions/filter.action.ts":
  /*!************************************************!*\
    !*** ./src/app/store/actions/filter.action.ts ***!
    \************************************************/

  /*! exports provided: onFilterSelect */

  /***/
  function srcAppStoreActionsFilterActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onFilterSelect", function () {
      return onFilterSelect;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _constants_action_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants/action-type */
    "./src/app/constants/action-type.ts");

    var onFilterSelect = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].selectFilter, function (filter) {
      return {
        filter: filter
      };
    });
    /***/
  },

  /***/
  "./src/app/store/actions/todo.action.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/actions/todo.action.ts ***!
    \**********************************************/

  /*! exports provided: onLoad, onCreate, onRemove, onUpdate, onCompleteAll, onClearCompleted */

  /***/
  function srcAppStoreActionsTodoActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onLoad", function () {
      return onLoad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onCreate", function () {
      return onCreate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onRemove", function () {
      return onRemove;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onUpdate", function () {
      return onUpdate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onCompleteAll", function () {
      return onCompleteAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onClearCompleted", function () {
      return onClearCompleted;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _constants_action_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants/action-type */
    "./src/app/constants/action-type.ts");

    var onLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].load, function (todos) {
      return {
        todos: todos
      };
    });
    var onCreate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].create, function (name) {
      return {
        name: name
      };
    });
    var onRemove = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].remove, function (id) {
      return {
        id: id
      };
    });
    var onUpdate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].update, function (values) {
      return {
        values: values
      };
    });
    var onCompleteAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].completeAll);
    var onClearCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_constants_action_type__WEBPACK_IMPORTED_MODULE_1__["ACTION_TYPES"].clearCompleted);
    /***/
  },

  /***/
  "./src/app/store/index.ts":
  /*!********************************!*\
    !*** ./src/app/store/index.ts ***!
    \********************************/

  /*! exports provided: createStore */

  /***/
  function srcAppStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createStore", function () {
      return createStore;
    });
    /* harmony import */


    var _reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./reducers/todo.reducer */
    "./src/app/store/reducers/todo.reducer.ts");
    /* harmony import */


    var _constants_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/filter */
    "./src/app/constants/filter.ts");
    /* harmony import */


    var _reducers_filter_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reducers/filter.reducer */
    "./src/app/store/reducers/filter.reducer.ts");

    var createStore = function createStore() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        todos: [],
        filter: _constants_filter__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].all
      };
      return {
        todos: Object(_reducers_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["createTodoReducer"])(initialState.todos),
        filter: Object(_reducers_filter_reducer__WEBPACK_IMPORTED_MODULE_2__["createFilterReducer"])(initialState.filter)
      };
    };
    /***/

  },

  /***/
  "./src/app/store/reducers/filter.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/reducers/filter.reducer.ts ***!
    \**************************************************/

  /*! exports provided: createFilterReducer */

  /***/
  function srcAppStoreReducersFilterReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createFilterReducer", function () {
      return createFilterReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _constants_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants/filter */
    "./src/app/constants/filter.ts");
    /* harmony import */


    var _actions_filter_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/filter.action */
    "./src/app/store/actions/filter.action.ts");

    var createFilterReducer = function createFilterReducer() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants_filter__WEBPACK_IMPORTED_MODULE_1__["FILTERS"].all;
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_filter_action__WEBPACK_IMPORTED_MODULE_2__["onFilterSelect"], function (state, _ref) {
        var filter = _ref.filter;
        return filter;
      }));
    };
    /***/

  },

  /***/
  "./src/app/store/reducers/todo.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/todo.reducer.ts ***!
    \************************************************/

  /*! exports provided: createTodoReducer */

  /***/
  function srcAppStoreReducersTodoReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTodoReducer", function () {
      return createTodoReducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _actions_todo_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/todo.action */
    "./src/app/store/actions/todo.action.ts");
    /* harmony import */


    var _selectors_todo_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../selectors/todo.selector */
    "./src/app/store/selectors/todo.selector.ts");

    var createTodoReducer = function createTodoReducer() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onLoad"], function (state, _ref2) {
        var todos = _ref2.todos;
        return todos;
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onCreate"], function (state, _ref3) {
        var name = _ref3.name;
        return [].concat(_toConsumableArray(state), [{
          id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
          name: name,
          completed: false
        }]);
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onUpdate"], function (state, _ref4) {
        var values = _ref4.values;
        return state.map(function (todo) {
          return todo.id === values.id ? Object.assign(Object.assign({}, todo), values) : todo;
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onRemove"], function (state, _ref5) {
        var id = _ref5.id;
        return state.filter(function (todo) {
          return todo.id !== id;
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onCompleteAll"], function (state) {
        var areAllCompleted = state.length && Object(_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_3__["selectCompleted"])(state).length === state.length;
        return state.map(function (todo) {
          return Object.assign(Object.assign({}, todo), {
            completed: !areAllCompleted
          });
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_todo_action__WEBPACK_IMPORTED_MODULE_2__["onClearCompleted"], function (state) {
        return Object(_selectors_todo_selector__WEBPACK_IMPORTED_MODULE_3__["selectNotCompleted"])(state);
      }));
    };
    /***/

  },

  /***/
  "./src/app/store/selectors/todo.selector.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/selectors/todo.selector.ts ***!
    \**************************************************/

  /*! exports provided: selectVisible, selectAllCompleted, selectItemsLeft, selectCompletedCount, selectNotCompleted, selectCompleted */

  /***/
  function srcAppStoreSelectorsTodoSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectVisible", function () {
      return selectVisible;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAllCompleted", function () {
      return selectAllCompleted;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectItemsLeft", function () {
      return selectItemsLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCompletedCount", function () {
      return selectCompletedCount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectNotCompleted", function () {
      return selectNotCompleted;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectCompleted", function () {
      return selectCompleted;
    });
    /* harmony import */


    var _constants_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../constants/filter */
    "./src/app/constants/filter.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    function selectVisible(_ref6) {
      var todos = _ref6.todos,
          filter = _ref6.filter;

      switch (filter) {
        case _constants_filter__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].all:
          return _toConsumableArray(todos);

        case _constants_filter__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].completed:
          return selectCompleted(todos);

        case _constants_filter__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].active:
          return selectNotCompleted(todos);

        default:
          return _toConsumableArray(todos);
      }
    }

    var selectAllCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(function (state) {
      return state.todos;
    }, function (todos) {
      return todos.length && todos.every(function (todo) {
        return todo.completed;
      });
    });
    var selectItemsLeft = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(function (state) {
      return state.todos;
    }, function (todos) {
      return selectNotCompleted(todos).length;
    });
    var selectCompletedCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(function (state) {
      return state.todos;
    }, function (todos) {
      return selectCompleted(todos).length;
    });

    function selectNotCompleted(todos) {
      return todos.filter(function (todo) {
        return !todo.completed;
      });
    }

    function selectCompleted(todos) {
      return todos.filter(function (todo) {
        return todo.completed;
      });
    }
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/blacksonic/todomvc-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map