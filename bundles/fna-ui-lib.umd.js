(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fna-ui-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["fna-ui-lib"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var FnaUiLibService = /** @class */ (function () {
        function FnaUiLibService() {
        }
        return FnaUiLibService;
    }());
    FnaUiLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FnaUiLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var FnaUiLibComponent = /** @class */ (function () {
        function FnaUiLibComponent() {
        }
        FnaUiLibComponent.prototype.ngOnInit = function () {
        };
        return FnaUiLibComponent;
    }());
    FnaUiLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FnaUiLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FnaUiLibComponent, selector: "lib-fna-ui-lib", ngImport: i0__namespace, template: "\n    <p>\n      fna-ui-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-fna-ui-lib',
                        template: "\n    <p>\n      fna-ui-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FnaUiLibModule = /** @class */ (function () {
        function FnaUiLibModule() {
        }
        return FnaUiLibModule;
    }());
    FnaUiLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FnaUiLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibModule, declarations: [FnaUiLibComponent], exports: [FnaUiLibComponent] });
    FnaUiLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FnaUiLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FnaUiLibComponent
                        ],
                        imports: [],
                        exports: [
                            FnaUiLibComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of fna-ui-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FnaUiLibComponent = FnaUiLibComponent;
    exports.FnaUiLibModule = FnaUiLibModule;
    exports.FnaUiLibService = FnaUiLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fna-ui-lib.umd.js.map
