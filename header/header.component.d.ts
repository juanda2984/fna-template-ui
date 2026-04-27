import { AfterViewInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements AfterViewInit {
    private titleService;
    private renderer;
    private contrasteActivo;
    constructor(titleService: Title, renderer: Renderer2);
    ngAfterViewInit(): void;
    toggleContraste(): void;
    aumentarFuente(): void;
    disminuirFuente(): void;
    private setFavicon;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "app-header", never, {}, {}, never, never>;
}
