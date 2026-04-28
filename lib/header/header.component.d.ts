import { AfterViewInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
}
