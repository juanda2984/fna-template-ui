import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class FnaUiLibService {
    constructor() { }
}
FnaUiLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FnaUiLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FnaUiLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
FnaUiLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FnaUiLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FnaUiLibComponent, selector: "lib-fna-ui-lib", ngImport: i0, template: `
    <p>
      fna-ui-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-fna-ui-lib',
                    template: `
    <p>
      fna-ui-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FnaUiLibModule {
}
FnaUiLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FnaUiLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibModule, declarations: [FnaUiLibComponent], exports: [FnaUiLibComponent] });
FnaUiLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FnaUiLibModule, decorators: [{
            type: NgModule,
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

export { FnaUiLibComponent, FnaUiLibModule, FnaUiLibService };
//# sourceMappingURL=fna-ui-lib.js.map
