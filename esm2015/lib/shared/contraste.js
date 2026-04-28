/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* ==================== CONTRASTE ==================== */
/**
 * @param {?} n
 * @return {?}
 */
export function contrasteF(n) {
    /** @type {?} */
    var iconos = ".links-accesibility a img, .resp-acces a img, .ms-srch-sb > .ms-srch-sb-searchLink, .page-utilities a img, .right-item-doc, .page-utilities .utility img, #gestion a.highlight-detail img, #content-related img, #quickLinks .container #highlights .hLights li.tab a img, #quickLinks .container #social ul.redesS li.dfwp-item a img, a.highlight-detail img, #Ayuda .container .right #channels img, .close-btn";
    /** @type {?} */
    var blanco = 'white';
    /** @type {?} */
    var negro = 'black';
    /** @type {?} */
    var menucolor = '#1e1e1e';
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
        $("button,.button, .link-fondoenlinea a, .link-fondoenlinea a span, a.dowload-app, a.dowload-app *:not(img)")
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
export var etiquetas = 'a, h1, h2, h3, h4, h5, h6, p, input, span, label, select, option , strong, textarea, button, div, th, td, li';
/** @type {?} */
export var coeficiente = 2;
/** @type {?} */
export var counter = 0;
/** @type {?} */
export var limite = 4;
/* ==================== FUNCIONES ==================== */
/**
 * @return {?}
 */
export function reducir() {
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
export function aumentar() {
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
export function inicializarContraste() {
    $("#fontMenos").off("click").on("click", (/**
     * @return {?}
     */
    () => reducir()));
    $("#fontMas").off("click").on("click", (/**
     * @return {?}
     */
    () => aumentar()));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm5hLXRlbXBsYXRlLXVpLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb250cmFzdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLFVBQVUsQ0FBQyxDQUFNOztRQUUzQixNQUFNLEdBQUcsb1pBQW9aOztRQUU3WixNQUFNLEdBQUcsT0FBTzs7UUFDaEIsS0FBSyxHQUFHLE9BQU87O1FBQ2YsU0FBUyxHQUFHLFNBQVM7O1FBRXJCLE1BQU0sR0FBRyxTQUFTOztRQUNsQixJQUFJLEdBQUcsU0FBUzs7VUFFZCxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFNUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBRWIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNwQixZQUFZLEVBQUUsd0RBQXdEO1lBQ3RFLGlCQUFpQixFQUFFLFNBQVM7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsSUFBSTs7OztRQUFDO1lBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ1Ysa0JBQWtCLEVBQUUsYUFBYTtnQkFDakMsT0FBTyxFQUFFLE1BQU07YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHVEQUF1RCxDQUFDLENBQUM7UUFDaEcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSx1REFBdUQsQ0FBQyxDQUFDO1FBRWpHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNWLGtCQUFrQixFQUFFLEtBQUs7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QU0sVUFBVSxvQkFBb0I7SUFFbEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTzs7O0lBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7SUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDO0FBRzNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PSBDT05UUkFTVEUgPT09PT09PT09PT09PT09PT09PT0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYXN0ZUYobjogYW55KTogdm9pZCB7XHJcblxyXG4gIHZhciBpY29ub3MgPSBcIi5saW5rcy1hY2Nlc2liaWxpdHkgYSBpbWcsIC5yZXNwLWFjY2VzIGEgaW1nLCAubXMtc3JjaC1zYiA+IC5tcy1zcmNoLXNiLXNlYXJjaExpbmssIC5wYWdlLXV0aWxpdGllcyBhIGltZywgLnJpZ2h0LWl0ZW0tZG9jLCAucGFnZS11dGlsaXRpZXMgLnV0aWxpdHkgaW1nLCAjZ2VzdGlvbiBhLmhpZ2hsaWdodC1kZXRhaWwgaW1nLCAjY29udGVudC1yZWxhdGVkIGltZywgI3F1aWNrTGlua3MgLmNvbnRhaW5lciAjaGlnaGxpZ2h0cyAuaExpZ2h0cyBsaS50YWIgYSBpbWcsICNxdWlja0xpbmtzIC5jb250YWluZXIgI3NvY2lhbCB1bC5yZWRlc1MgbGkuZGZ3cC1pdGVtIGEgaW1nLCBhLmhpZ2hsaWdodC1kZXRhaWwgaW1nLCAjQXl1ZGEgLmNvbnRhaW5lciAucmlnaHQgI2NoYW5uZWxzIGltZywgLmNsb3NlLWJ0blwiO1xyXG5cclxuICB2YXIgYmxhbmNvID0gJ3doaXRlJztcclxuICB2YXIgbmVncm8gPSAnYmxhY2snO1xyXG4gIHZhciBtZW51Y29sb3IgPSAnIzFlMWUxZSc7XHJcblxyXG4gIHZhciBhenVsT2IgPSAnIzAwMzA4Nyc7XHJcbiAgdmFyIGF6dWwgPSAnIzMzNjZjYyc7XHJcblxyXG4gIGNvbnN0IHZhbG9yID0gTnVtYmVyKG4pIHx8IDA7XHJcblxyXG4gIGlmICh2YWxvciA+IDApIHtcclxuXHJcbiAgICAkKFwiLmh1YXdlaS1pY29uXCIpLmNzcyh7XHJcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCgnYXNzZXRzL2ZuYS9pbWcvQXBwR2FsbGVyeTEucG5nJykgbm8tcmVwZWF0IGNlbnRlclwiLFxyXG4gICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiBcImNvbnRhaW5cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnaHRtbCAqOm5vdChzY3JpcHQsIHN0eWxlLCBub3NjcmlwdCknKS5lYWNoKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBibGFuY29cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2xvZ29Hb2JpZXJub0NvbG9tYmlhXCIpLmF0dHIoXCJzcmNcIiwgXCJhc3NldHMvZm5hL2ltZy9sb2dvX2dvYmllcm5vX251ZXZvX2FsdG9fY29udHJhc3RlLnBuZ1wiKTtcclxuICAgICQoXCIjbG9nb0dvYmllcm5vQ29sb21iaWEyXCIpLmF0dHIoXCJzcmNcIiwgXCJhc3NldHMvZm5hL2ltZy9sb2dvX2dvYmllcm5vX251ZXZvX2FsdG9fY29udHJhc3RlLnBuZ1wiKTtcclxuXHJcbiAgICAkKCcuXzcyMGtiLWRhdGVwaWNrZXItY2FsZW5kYXInKS5lYWNoKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybyxcclxuICAgICAgICBcImNvbG9yXCI6IGJsYW5jb1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb2RhbC1jb250ZW50JykuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8sXHJcbiAgICAgICAgXCJjb2xvclwiOiBibGFuY29cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYWNjZXNpYmlsaWRhZEJvdG9uQXBwJykuY3NzKHsgXCJjb2xvclwiOiBuZWdybyB9KTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5jc3Moe1xyXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBibGFuY28sXHJcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybyxcclxuICAgICAgXCJjb2xvclwiOiBibGFuY29cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJoZWFkZXJcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BLCAjZm9vdGVyRk5BIC5jb250YWluZXIsICNmb290ZXJGTkEgLnJvdywgI2Zvb3RlckZOQSBkaXZcIilcclxuICAgICAgLmNzcyh7IFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybywgXCJjb2xvclwiOiBibGFuY28gfSk7XHJcblxyXG4gICAgJChcIiNmb290ZXJGTkEgYVwiKS5jc3MoeyBcImNvbG9yXCI6IGJsYW5jbyB9KTtcclxuXHJcbiAgICAkKFwiI3NlY2Npb25HT1ZcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvIH0pO1xyXG5cclxuICAgICQoXCIubWVuc2FqZVwiKS5jc3Moe1xyXG4gICAgICBcImJvcmRlci1jb2xvclwiOiBibGFuY28sXHJcbiAgICAgIFwiYm9yZGVyLXN0eWxlXCI6IFwic29saWRcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLFxyXG4gICAgICBcImJvcmRlci13aWR0aFwiOiBcIjJweFwiLFxyXG4gICAgICBcImNvbG9yXCI6IGJsYW5jb1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5saW5rLWZvbmRvZW5saW5lYSBhIGltZywgYS5kb3dsb2FkLWFwcCBpbWdcIikuY3NzKHtcclxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgXCJmaWx0ZXJcIjogXCJicmlnaHRuZXNzKDAlKVwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGljb25vcykuY3NzKFwiZmlsdGVyXCIsIFwiZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMzAwJSlcIik7XHJcblxyXG4gICAgJChcInNlY3Rpb25cIikubm90KFwiI3NsaWRlciwgLmltYWdlLWNvbnRhaW5lci1wYWdlXCIpXHJcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgICAkKFwiI3NsaWRlciAqLCAuaW1hZ2UtY29udGFpbmVyLXBhZ2UgKiwgI3NlZ3Vyb3MsICNzZWd1cm9zICpcIilcclxuICAgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwidHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gbmVncm87XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICQoXCJsaS5oZWFkZXItc2VjdGlvbiwgI3RvVG9wXCIpLmFkZENsYXNzKFwiaWNvLWNvbnRyYXN0ZVwiKTtcclxuXHJcbiAgICAkKFwiLmJyZWFkY3J1bWIsIC5icmVhZGNydW1iICpcIikuY3NzKFwiYmFja2dyb3VuZFwiLCBcInRyYW5zcGFyZW50XCIpO1xyXG5cclxuICAgICQoXCJidXR0b24sLmJ1dHRvbiwgLmxpbmstZm9uZG9lbmxpbmVhIGEsIC5saW5rLWZvbmRvZW5saW5lYSBhIHNwYW4sIGEuZG93bG9hZC1hcHAsIGEuZG93bG9hZC1hcHAgKjpub3QoaW1nKVwiKVxyXG4gICAgICAuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gYmxhbmNvO1xyXG4gICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgIGNvbG9yOiBuZWdybyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBibGFuY28sXHJcbiAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkKFwiI2Zvb3RlckZOQSBidXR0b25cIikuY3NzKHtcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLFxyXG4gICAgICBcImNvbG9yXCI6IGJsYW5jbyxcclxuICAgICAgXCJib3JkZXJcIjogXCIycHggc29saWQgd2hpdGVcIlxyXG4gICAgfSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgJChcIi5odWF3ZWktaWNvblwiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoJ2Fzc2V0cy9mbmEvaW1nL0FwcEdhbGxlcnkxLnBuZycpIG5vLXJlcGVhdCBjZW50ZXJcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCJjb250YWluXCJcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJoZWFkZXJcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IGF6dWxPYiB9KTtcclxuICAgICQoXCIjc2VjY2lvbkdPVlwiKS5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogYXp1bCB9KTtcclxuXHJcbiAgICAkKFwiI2Zvb3RlckZOQSwgI2Zvb3RlckZOQSAuY29udGFpbmVyLCAjZm9vdGVyRk5BIC5yb3csICNmb290ZXJGTkEgZGl2XCIpXHJcbiAgICAgIC5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIiwgXCJjb2xvclwiOiBcIlwiIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BIGFcIikuY3NzKHsgXCJjb2xvclwiOiBcIlwiIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BIGJ1dHRvblwiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcclxuICAgICAgXCJjb2xvclwiOiBcIlwiLFxyXG4gICAgICBcImJvcmRlclwiOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdodG1sICo6bm90KHNjcmlwdCwgc3R5bGUsIG5vc2NyaXB0KScpLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIlwiXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNsb2dvR29iaWVybm9Db2xvbWJpYVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ZuYS9pbWcvbG9nby5wbmdcIik7XHJcbiAgICAkKFwiI2xvZ29Hb2JpZXJub0NvbG9tYmlhMlwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ZuYS9pbWcvbG9nby5wbmdcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PSBWQVJJQUJMRVMgPT09PT09PT09PT09PT09PT09PT0gKi9cclxuZXhwb3J0IHZhciBldGlxdWV0YXMgPSAnYSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgaW5wdXQsIHNwYW4sIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiAsIHN0cm9uZywgdGV4dGFyZWEsIGJ1dHRvbiwgZGl2LCB0aCwgdGQsIGxpJztcclxuZXhwb3J0IHZhciBjb2VmaWNpZW50ZSA9IDI7XHJcbmV4cG9ydCB2YXIgY291bnRlciA9IDA7XHJcbmV4cG9ydCB2YXIgbGltaXRlID0gNDtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09IEZVTkNJT05FUyA9PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNpcigpOiB2b2lkIHtcclxuICB2YXIgZWxlbWVudG9zID0gJChldGlxdWV0YXMpO1xyXG4gIGNvdW50ZXIgLT0gY29lZmljaWVudGU7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBTdHJpbmcoY291bnRlcikpO1xyXG5cclxuICBlbGVtZW50b3MuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICB2YXIgayA9IHBhcnNlSW50KCQodGhpcykuY3NzKCdmb250LXNpemUnKSk7XHJcbiAgICB2YXIgcmVkU2l6ZSA9IChrIC0gY29lZmljaWVudGUpO1xyXG4gICAgJCh0aGlzKS5jc3MoJ2ZvbnQtc2l6ZScsIHJlZFNpemUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXVtZW50YXIoKTogdm9pZCB7XHJcbiAgdmFyIGVsZW1lbnRvcyA9ICQoZXRpcXVldGFzKTtcclxuICBjb3VudGVyICs9IGNvZWZpY2llbnRlO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgU3RyaW5nKGNvdW50ZXIpKTtcclxuXHJcbiAgZWxlbWVudG9zLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgdmFyIGogPSBwYXJzZUludCgkKHRoaXMpLmNzcygnZm9udC1zaXplJykpO1xyXG4gICAgdmFyIEF1U2l6ZSA9IChqICsgY29lZmljaWVudGUpO1xyXG4gICAgJCh0aGlzKS5jc3MoJ2ZvbnQtc2l6ZScsIEF1U2l6ZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09IElOSVQgPT09PT09PT09PT09PT09PT09PT0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaWNpYWxpemFyQ29udHJhc3RlKCk6IHZvaWQge1xyXG5cclxuICAkKFwiI2ZvbnRNZW5vc1wiKS5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsICgpID0+IHJlZHVjaXIoKSk7XHJcbiAgJChcIiNmb250TWFzXCIpLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gYXVtZW50YXIoKSk7XHJcblxyXG4gIFxyXG59Il19