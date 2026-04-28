import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Injectable, NgModule, Component, Renderer2, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnaTemplateUiService {
    constructor() { }
}
FnaTemplateUiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FnaTemplateUiService.ctorParameters = () => [];
/** @nocollapse */ FnaTemplateUiService.ngInjectableDef = defineInjectable({ factory: function FnaTemplateUiService_Factory() { return new FnaTemplateUiService(); }, token: FnaTemplateUiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnaTemplateUiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FnaTemplateUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-fna-template-ui',
                template: `
    <p>
      fna-template-ui works!
    </p>
  `
            }] }
];
/** @nocollapse */
FnaTemplateUiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* ==================== CONTRASTE ==================== */
/**
 * @param {?} n
 * @return {?}
 */
function contrasteF(n) {
    /** @type {?} */
    var iconos = ".links-accesibility a img, .resp-acces a img, .ms-srch-sb > .ms-srch-sb-searchLink, .page-utilities a img, .right-item-doc, .page-utilities .utility img, #gestion a.highlight-detail img, #content-related img, #quickLinks .container #highlights .hLights li.tab a img, #quickLinks .container #social ul.redesS li.dfwp-item a img, a.highlight-detail img, #Ayuda .container .right #channels img, .close-btn";
    /** @type {?} */
    var blanco = 'white';
    /** @type {?} */
    var negro = 'black';
    /** @type {?} */
    var azulOb = '#003087';
    /** @type {?} */
    var azul = '#3366cc';
    /** @type {?} */
    const valor = Number(n) || 0;
    if (valor > 0) {
        $(".huawei-icon").css({
            "background": "url('assets/fna/img/AppGallery1.png') no-repeat center",
            "background-size": "contain"
        });
        $('html *:not(script, style, noscript)').each((/**
         * @this {?}
         * @return {?}
         */
        function () {
            $(this).css({
                "background-color": "transparent",
                "color": blanco
            });
        }));
        $("#logoGobiernoColombia").attr("src", "assets/fna/img/logo_gobierno_nuevo_alto_contraste.png");
        $("#logoGobiernoColombia2").attr("src", "assets/fna/img/logo_gobierno_nuevo_alto_contraste.png");
        $('._720kb-datepicker-calendar').each((/**
         * @this {?}
         * @return {?}
         */
        function () {
            $(this).css({
                "background-color": negro,
                "color": blanco
            });
        }));
        $('.modal-content').each((/**
         * @this {?}
         * @return {?}
         */
        function () {
            $(this).css({
                "background-color": negro,
                "color": blanco
            });
        }));
        $('.accesibilidadBotonApp').css({ "color": negro });
        $("body").css({
            "border-color": blanco,
            "background-color": negro,
            "color": blanco
        });
        $("header").css({ "background-color": negro });
        $("#footerFNA, #footerFNA .container, #footerFNA .row, #footerFNA div")
            .css({ "background-color": negro, "color": blanco });
        $("#footerFNA a").css({ "color": blanco });
        $("#seccionGOV").css({ "background-color": negro });
        $(".mensaje").css({
            "border-color": blanco,
            "border-style": "solid",
            "background-color": negro,
            "border-width": "2px",
            "color": blanco
        });
        $(".link-fondoenlinea a img, a.dowload-app img").css({
            "background": "transparent",
            "filter": "brightness(0%)"
        });
        $(iconos).css("filter", "grayscale(100%) brightness(300%)");
        $("section").not("#slider, .image-container-page")
            .each((/**
         * @this {?}
         * @return {?}
         */
        function () {
            $("#slider *, .image-container-page *, #seguros, #seguros *")
                .css("background", "transparent");
            this.style.background = negro;
        }));
        $("li.header-section, #toTop").addClass("ico-contraste");
        $(".breadcrumb, .breadcrumb *").css("background", "transparent");
        $(".button, .link-fondoenlinea a, .link-fondoenlinea a span, a.dowload-app, a.dowload-app *:not(img)")
            .each((/**
         * @this {?}
         * @return {?}
         */
        function () {
            this.style.background = blanco;
            $(this).css({
                color: negro,
                borderColor: blanco,
                borderStyle: 'solid'
            });
        }));
        $("#footerFNA button").css({
            "background-color": negro,
            "color": blanco,
            "border": "2px solid white"
        });
    }
    else {
        $(".huawei-icon").css({
            "background": "url('assets/fna/img/AppGallery1.png') no-repeat center",
            "background-size": "contain"
        });
        $("header").css({ "background-color": azulOb });
        $("#seccionGOV").css({ "background-color": azul });
        $("#footerFNA, #footerFNA .container, #footerFNA .row, #footerFNA div")
            .css({ "background-color": "", "color": "" });
        $("#footerFNA a").css({ "color": "" });
        $("#footerFNA button").css({
            "background-color": "",
            "color": "",
            "border": ""
        });
        $('html *:not(script, style, noscript)').each((/**
         * @this {?}
         * @return {?}
         */
        function () {
            $(this).css({
                "background-color": "",
                "color": ""
            });
        }));
        $("#logoGobiernoColombia").attr("src", "assets/fna/img/logo.png");
        $("#logoGobiernoColombia2").attr("src", "assets/fna/img/logo.png");
    }
}
/* ==================== VARIABLES ==================== */
/** @type {?} */
var etiquetas = 'a, h1, h2, h3, h4, h5, h6, p, input, span, label, select, option , strong, textarea, button, div, th, td, li';
/** @type {?} */
var coeficiente = 2;
/** @type {?} */
var counter = 0;
/* ==================== FUNCIONES ==================== */
/**
 * @return {?}
 */
function reducir() {
    /** @type {?} */
    var elementos = $(etiquetas);
    counter -= coeficiente;
    localStorage.setItem("counter", String(counter));
    elementos.each((/**
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        var k = parseInt($(this).css('font-size'));
        /** @type {?} */
        var redSize = (k - coeficiente);
        $(this).css('font-size', redSize);
    }));
}
/**
 * @return {?}
 */
function aumentar() {
    /** @type {?} */
    var elementos = $(etiquetas);
    counter += coeficiente;
    localStorage.setItem("counter", String(counter));
    elementos.each((/**
     * @this {?}
     * @return {?}
     */
    function () {
        /** @type {?} */
        var j = parseInt($(this).css('font-size'));
        /** @type {?} */
        var AuSize = (j + coeficiente);
        $(this).css('font-size', AuSize);
    }));
}
/* ==================== INIT ==================== */
/**
 * @return {?}
 */
function inicializarContraste() {
    $("#fontMenos").off("click").on("click", (/**
     * @return {?}
     */
    () => reducir()));
    $("#fontMas").off("click").on("click", (/**
     * @return {?}
     */
    () => aumentar()));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    /**
     * @param {?} titleService
     * @param {?} renderer
     */
    constructor(titleService, renderer) {
        this.titleService = titleService;
        this.renderer = renderer;
        this.contrasteActivo = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.titleService.setTitle('Fondo Nacional del Ahorro');
        this.setFavicon('assets/fna/img/logo.png');
        inicializarContraste();
        /** @type {?} */
        const contrasteGuardado = localStorage.getItem('contraste');
        this.contrasteActivo = contrasteGuardado === '1';
        /** @type {?} */
        const contraste = document.getElementById('contraste');
        if (this.contrasteActivo) {
            document.body.classList.add('alto_contraste');
            if (contraste) {
                contraste.classList.add('contrast-active');
            }
            contrasteF(1);
        }
        else {
            document.body.classList.remove('alto_contraste');
            if (contraste) {
                contraste.classList.remove('contrast-active');
            }
            contrasteF(0);
        }
    }
    /**
     * @return {?}
     */
    toggleContraste() {
        this.contrasteActivo = !this.contrasteActivo;
        /** @type {?} */
        const valor = this.contrasteActivo ? 1 : 0;
        /** @type {?} */
        const contraste = document.getElementById('contraste');
        localStorage.setItem('contraste', String(valor));
        if (this.contrasteActivo) {
            document.body.classList.add('alto_contraste');
            if (contraste) {
                contraste.classList.add('contrast-active');
            }
        }
        else {
            document.body.classList.remove('alto_contraste');
            if (contraste) {
                contraste.classList.remove('contrast-active');
            }
        }
        contrasteF(valor);
    }
    /**
     * @return {?}
     */
    aumentarFuente() {
        // aquí puedes llamar tu función TS aumentar() si la exportaste
    }
    /**
     * @return {?}
     */
    disminuirFuente() {
        // aquí puedes llamar tu función TS reducir() si la exportaste
    }
    /**
     * @private
     * @param {?} iconUrl
     * @return {?}
     */
    setFavicon(iconUrl) {
        /** @type {?} */
        let link = document.querySelector("link[rel*='icon']");
        if (!link) {
            link = (/** @type {?} */ (this.renderer.createElement('link')));
            link.rel = 'icon';
            this.renderer.appendChild(document.head, link);
        }
        link.type = 'image/png';
        link.href = iconUrl;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: "<div class=\"row\">\n  <a\n    href=\"https://www.gov.co\"\n    target=\"_blank\"\n    title=\"V\u00EDnculo al sitio web del Gobierno de Colombia\"\n    class=\"linkGob\"\n    rel=\"noopener noreferrer\"\n  >\n    <div id=\"seccionGOV\">\n      <div class=\"containerr\">\n        <img\n          id=\"logoGOV\"\n          src=\"assets/fna/img/logo_gov_co.png\"\n          alt=\"Logo Gobierno de Colombia\"\n        />\n      </div>\n    </div>\n  </a>\n</div>\n\n<header>\n  <div class=\"containerr\" id=\"headerFNAT\">\n    <div id=\"seccionFna\">\n      <a\n        href=\"https://www.fna.gov.co\"\n        target=\"_blank\"\n        title=\"V\u00EDnculo al sitio web del Fondo Nacional del Ahorro\"\n        rel=\"noopener noreferrer\"\n      >\n        <img\n          src=\"assets/fna/img/logo_new.png\"\n          alt=\"Logo FNA\"\n          class=\"img logofna\"\n        />\n      </a>\n    </div>\n\n    <div class=\"controls\">\n      <table>\n        <tr>\n          <td style=\"width: 20px;\">\n            <span\n              id=\"fontMas\"\n              style=\"font-size: xx-large; color: white;\"\n              title=\"Aumentar tama\u00F1o de fuente\"\n              tabindex=\"0\"\n              (click)=\"aumentarFuente()\"\n              (keydown.enter)=\"aumentarFuente()\"\n            >\n              A\n            </span>\n          </td>\n          <td style=\"width: 30px; text-align: center; color: white;\">\n            <span\n              id=\"fontMenos\"\n              title=\"Reducir tama\u00F1o de fuente\"\n              tabindex=\"0\"\n              (click)=\"disminuirFuente()\"\n              (keydown.enter)=\"disminuirFuente()\"\n            >\n              A\n            </span>\n          </td>\n          <td style=\"width: 30px; text-align: center;\">\n            <img\n              id=\"contraste\"\n              src=\"assets/fna/img/contraste.png\"\n              class=\"img img-responsive\"\n              alt=\"Modo alto contraste\"\n              title=\"Modo alto contraste\"\n              tabindex=\"0\"\n              (click)=\"toggleContraste()\"\n              (keydown.enter)=\"toggleContraste()\"\n            />\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</header>",
                styles: ["body,html{margin:0;padding:0}.alto-contraste{filter:contrast(1.4);background-color:#000!important;color:#fff!important}#headerFNAT,#seccionGOV,.containerr{width:100%}.linkGob{text-decoration:none}.logofna{max-width:100%;height:auto}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: Title },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() {
        this.fechaActual = '';
        this.anio = new Date().getFullYear();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const fecha = new Date();
        /** @type {?} */
        const meses = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];
        this.fechaActual = `${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    abrirUrl(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                template: "<footer id=\"footerFNA\">\n  <div class=\"footer-main\">\n    <div class=\"footer-grid\">\n\n      <div class=\"footer-vigilado\">\n        <img\n          src=\"assets/fna/img/logo-vigilado.png\"\n          alt=\"Vigilado Superfinanciera\"\n          class=\"imgvigilado\"\n        />\n      </div>\n\n      <div class=\"footer-col footer-correspondencia\">\n        <h6>Punto de atenci\u00F3n principal - Correspondencia</h6>\n\n        <p>Calle 12 # 65 - 11, Puente Aranda, Bogot\u00E1 - Colombia</p>\n\n        <p>\n          Lunes a viernes de 8:00 a.m. - 4:00 p.m.<br />\n          S\u00E1bados de 8:00 a.m. - 1:00 p.m.\n        </p>\n\n        <img\n          src=\"assets/fna/img/icontec.png\"\n          alt=\"Icontec\"\n          class=\"icontec-img\"\n        />\n      </div>\n\n      <div class=\"footer-col footer-sede\">\n        <h6>Sede principal</h6>\n\n        <p>Carrera 65 # 11 - 83, Puente Aranda, Bogot\u00E1 - Colombia</p>\n\n        <p>\n          <strong>Tel\u00E9fono:</strong> 601 307 7070<br />\n          <strong>L\u00EDnea gratuita nacional:</strong> 01 8000 52 7070<br />\n          <strong>L\u00EDnea de legalizaci\u00F3n:</strong> 01 8000 12 3362\n        </p>\n\n        <p class=\"notificaciones\">\n          <strong>Notificaciones judiciales:</strong>\n        </p>\n\n        <p>\n          <a href=\"mailto:notificacionesjudiciales@fna.gov.co\">\n            notificacionesjudiciales@fna.gov.co\n          </a>\n        </p>\n\n        <h6 class=\"app-title\">Descarga nuestra app</h6>\n\n        <div class=\"apps\">\n          <button\n            type=\"button\"\n            (click)=\"abrirUrl('https://itunes.apple.com/co/app/fna-movil-agil/id1138892675?mt=8')\"\n          >\n            <span class=\"ion-social-apple\"></span>\n            <span>App Store</span>\n          </button>\n\n          <button\n            type=\"button\"\n            (click)=\"abrirUrl('https://play.google.com/store/apps/details?id=com.ibm.fna.movil')\"\n          >\n            <span class=\"ion-social-android\"></span>\n            <span>Google play</span>\n          </button>\n\n          <button\n            type=\"button\"\n            class=\"huawei-btn\"\n            (click)=\"abrirUrl('https://huaweimobileservices.com/es/appgallery-esp/')\"\n          >\n            <span class=\"huawei-icon\"></span>\n            <span>Huawei App<br />Gallery</span>\n          </button>\n        </div>\n      </div>\n\n      <div class=\"footer-col footer-fecha\">\n        <h6>\u00DAltima actualizaci\u00F3n</h6>\n        <p>{{ fechaActual }}</p>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"footer-bottom\">\n    <div class=\"footer-bottom-inner\">\n      <nav class=\"footer-links\">\n        <a href=\"https://www.fna.gov.co/sobre-el-fna\" target=\"_blank\" rel=\"noopener noreferrer\">Sobre el FNA</a>\n        <a href=\"https://www.fna.gov.co/prensa\" target=\"_blank\" rel=\"noopener noreferrer\">Prensa</a>\n        <a href=\"https://www.fna.gov.co/atencion-ciudadana/peticiones-quejas-reclamos-y-denuncias\" target=\"_blank\" rel=\"noopener noreferrer\">PQRyD</a>\n        <a href=\"https://www.fna.gov.co/atencion-ciudadana/transparencia-y-acceso-a-la-informacion\" target=\"_blank\" rel=\"noopener noreferrer\">Transparencia y acceso a la informaci\u00F3n</a>\n        <a href=\"https://www.fna.gov.co/mapa-del-sitio\" target=\"_blank\" rel=\"noopener noreferrer\">Mapa del sitio</a>\n        <a href=\"https://www.fna.gov.co/atencion-ciudadana/condiciones-y-politicas\" target=\"_blank\" rel=\"noopener noreferrer\">Condiciones y pol\u00EDticas</a>\n      </nav>\n\n      <div class=\"footer-rights\">\n        \u00A9 FNA Todos los derechos reservados {{ anio }}\n      </div>\n    </div>\n  </div>\n</footer>",
                styles: ["#footerFNA{transform:scale(.7);transform-origin:top center;margin-left:-12.5%;width:100%;background:#fff;color:#333;font-family:Arial,Helvetica,sans-serif;border-top:1px solid #ddd}:host{display:block;width:100%}.footer-main{width:92%;max-width:1650px;margin:0 auto;padding:78px 0 70px;border-bottom:1px solid #e0e0e0}.footer-grid{display:grid;grid-template-columns:70px 470px 520px 330px;column-gap:55px;align-items:start}.footer-vigilado{padding-top:52px}.imgvigilado{height:auto;opacity:.9;width:28px;filter:grayscale(100%);display:flex;align-items:flex-start;justify-content:flex-start}.footer-col h6{margin:0 0 18px;font-size:21px;line-height:1.2;font-weight:700;color:#333}.footer-col p{margin:0 0 18px;font-size:17px;line-height:1.4;color:#333}.footer-col strong{font-weight:700}.footer-col a{color:#1c6bb8;text-decoration:none;font-size:17px}.footer-col a:hover{text-decoration:underline}.footer-correspondencia{padding-top:0}.icontec-img{width:355px;height:auto;display:block;margin-top:100px}.footer-sede{padding-top:0}.notificaciones{margin-top:50px!important;margin-bottom:14px!important}.app-title{margin-top:48px!important;margin-bottom:16px!important}.apps{display:grid;grid-template-columns:190px 190px;gap:28px 36px}.apps button{width:190px;min-height:62px;border:0;border-radius:4px;background:#003087;color:#fff;font-size:18px;line-height:1.2;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:14px}.apps button span:first-child{font-size:32px}.huawei-btn{grid-column:1/2}.huawei-icon{width:40px;height:40px;background:url(/assets/fna/img/AppGallery1.png) center/contain no-repeat;border-radius:6px;display:inline-block}.footer-fecha{padding-top:0}.footer-bottom{max-width:1650px;margin:0 auto;padding:42px 0 22px}.footer-bottom-inner{display:flex;align-items:center;justify-content:space-between}.footer-links{display:flex;align-items:center;gap:30px;flex-wrap:wrap}.footer-links a{color:#333;text-decoration:none;font-size:17px;line-height:1.2}.footer-links a:hover{text-decoration:underline}.footer-rights{color:#333;font-size:17px;white-space:nowrap}@media (max-width:1200px){.footer-grid{grid-template-columns:60px 1fr 1fr;row-gap:40px}.footer-fecha{grid-column:2/4}.footer-bottom-inner{flex-direction:column;align-items:flex-start;gap:25px}}@media (max-width:768px){.footer-bottom,.footer-main{width:90%}.footer-grid{grid-template-columns:1fr}.footer-vigilado{padding-top:0}.icontec-img{width:280px;margin-top:35px}.apps{grid-template-columns:1fr}.apps button{width:220px}.footer-fecha{grid-column:auto}}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FnaTemplateUiModule {
}
FnaTemplateUiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FnaTemplateUiComponent,
                    HeaderComponent,
                    FooterComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    FnaTemplateUiComponent,
                    HeaderComponent,
                    FooterComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FnaTemplateUiService, FnaTemplateUiComponent, FnaTemplateUiModule, HeaderComponent, FooterComponent };

//# sourceMappingURL=fna-template-ui.js.map