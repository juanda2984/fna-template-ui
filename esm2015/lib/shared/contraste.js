/* ==================== CONTRASTE ==================== */
export function contrasteF(n) {
    var iconos = ".links-accesibility a img, .resp-acces a img, .ms-srch-sb > .ms-srch-sb-searchLink, .page-utilities a img, .right-item-doc, .page-utilities .utility img, #gestion a.highlight-detail img, #content-related img, #quickLinks .container #highlights .hLights li.tab a img, #quickLinks .container #social ul.redesS li.dfwp-item a img, a.highlight-detail img, #Ayuda .container .right #channels img, .close-btn";
    var blanco = 'white';
    var negro = 'black';
    var menucolor = '#1e1e1e';
    var azulOb = '#003087';
    var azul = '#3366cc';
    const valor = Number(n) || 0;
    if (valor > 0) {
        $(".huawei-icon").css({
            "background": "url('assets/fna/img/AppGallery1.png') no-repeat center",
            "background-size": "contain"
        });
        $('html *:not(script, style, noscript)').each(function () {
            $(this).css({
                "background-color": "transparent",
                "color": blanco
            });
        });
        $("#logoGobiernoColombia").attr("src", "assets/fna/img/logo_gobierno_nuevo_alto_contraste.png");
        $("#logoGobiernoColombia2").attr("src", "assets/fna/img/logo_gobierno_nuevo_alto_contraste.png");
        $('._720kb-datepicker-calendar').each(function () {
            $(this).css({
                "background-color": negro,
                "color": blanco
            });
        });
        $('.modal-content').each(function () {
            $(this).css({
                "background-color": negro,
                "color": blanco
            });
        });
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
            .each(function () {
            $("#slider *, .image-container-page *, #seguros, #seguros *")
                .css("background", "transparent");
            this.style.background = negro;
        });
        $("li.header-section, #toTop").addClass("ico-contraste");
        $(".breadcrumb, .breadcrumb *").css("background", "transparent");
        $(".button, .link-fondoenlinea a, .link-fondoenlinea a span, a.dowload-app, a.dowload-app *:not(img)")
            .each(function () {
            this.style.background = blanco;
            $(this).css({
                color: negro,
                borderColor: blanco,
                borderStyle: 'solid'
            });
        });
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
        $('html *:not(script, style, noscript)').each(function () {
            $(this).css({
                "background-color": "",
                "color": ""
            });
        });
        $("#logoGobiernoColombia").attr("src", "assets/fna/img/logo.png");
        $("#logoGobiernoColombia2").attr("src", "assets/fna/img/logo.png");
    }
}
/* ==================== VARIABLES ==================== */
export var etiquetas = 'a, h1, h2, h3, h4, h5, h6, p, input, span, label, select, option , strong, textarea, button, div, th, td, li';
export var coeficiente = 2;
export var counter = 0;
export var limite = 4;
/* ==================== FUNCIONES ==================== */
export function reducir() {
    var elementos = $(etiquetas);
    counter -= coeficiente;
    localStorage.setItem("counter", String(counter));
    elementos.each(function () {
        var k = parseInt($(this).css('font-size'));
        var redSize = (k - coeficiente);
        $(this).css('font-size', redSize);
    });
}
export function aumentar() {
    var elementos = $(etiquetas);
    counter += coeficiente;
    localStorage.setItem("counter", String(counter));
    elementos.each(function () {
        var j = parseInt($(this).css('font-size'));
        var AuSize = (j + coeficiente);
        $(this).css('font-size', AuSize);
    });
}
/* ==================== INIT ==================== */
export function inicializarContraste() {
    $("#fontMenos").off("click").on("click", () => reducir());
    $("#fontMas").off("click").on("click", () => aumentar());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZm5hLXRlbXBsYXRlLXVpL3NyYy9saWIvc2hhcmVkL2NvbnRyYXN0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSx5REFBeUQ7QUFDekQsTUFBTSxVQUFVLFVBQVUsQ0FBQyxDQUFNO0lBRS9CLElBQUksTUFBTSxHQUFHLG9aQUFvWixDQUFDO0lBRWxhLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDcEIsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBRTFCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUN2QixJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7SUFFckIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFFYixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3BCLFlBQVksRUFBRSx3REFBd0Q7WUFDdEUsaUJBQWlCLEVBQUUsU0FBUztTQUM3QixDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDVixrQkFBa0IsRUFBRSxhQUFhO2dCQUNqQyxPQUFPLEVBQUUsTUFBTTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsdURBQXVELENBQUMsQ0FBQztRQUNoRyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHVEQUF1RCxDQUFDLENBQUM7UUFFakcsQ0FBQyxDQUFDLDZCQUE2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VyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxvREFBb0Q7QUFDcEQsTUFBTSxVQUFVLG9CQUFvQjtJQUVsQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUczRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgJDogYW55O1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT0gQ09OVFJBU1RFID09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cmFzdGVGKG46IGFueSk6IHZvaWQge1xyXG5cclxuICB2YXIgaWNvbm9zID0gXCIubGlua3MtYWNjZXNpYmlsaXR5IGEgaW1nLCAucmVzcC1hY2NlcyBhIGltZywgLm1zLXNyY2gtc2IgPiAubXMtc3JjaC1zYi1zZWFyY2hMaW5rLCAucGFnZS11dGlsaXRpZXMgYSBpbWcsIC5yaWdodC1pdGVtLWRvYywgLnBhZ2UtdXRpbGl0aWVzIC51dGlsaXR5IGltZywgI2dlc3Rpb24gYS5oaWdobGlnaHQtZGV0YWlsIGltZywgI2NvbnRlbnQtcmVsYXRlZCBpbWcsICNxdWlja0xpbmtzIC5jb250YWluZXIgI2hpZ2hsaWdodHMgLmhMaWdodHMgbGkudGFiIGEgaW1nLCAjcXVpY2tMaW5rcyAuY29udGFpbmVyICNzb2NpYWwgdWwucmVkZXNTIGxpLmRmd3AtaXRlbSBhIGltZywgYS5oaWdobGlnaHQtZGV0YWlsIGltZywgI0F5dWRhIC5jb250YWluZXIgLnJpZ2h0ICNjaGFubmVscyBpbWcsIC5jbG9zZS1idG5cIjtcclxuXHJcbiAgdmFyIGJsYW5jbyA9ICd3aGl0ZSc7XHJcbiAgdmFyIG5lZ3JvID0gJ2JsYWNrJztcclxuICB2YXIgbWVudWNvbG9yID0gJyMxZTFlMWUnO1xyXG5cclxuICB2YXIgYXp1bE9iID0gJyMwMDMwODcnO1xyXG4gIHZhciBhenVsID0gJyMzMzY2Y2MnO1xyXG5cclxuICBjb25zdCB2YWxvciA9IE51bWJlcihuKSB8fCAwO1xyXG5cclxuICBpZiAodmFsb3IgPiAwKSB7XHJcblxyXG4gICAgJChcIi5odWF3ZWktaWNvblwiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoJ2Fzc2V0cy9mbmEvaW1nL0FwcEdhbGxlcnkxLnBuZycpIG5vLXJlcGVhdCBjZW50ZXJcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCJjb250YWluXCJcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2h0bWwgKjpub3Qoc2NyaXB0LCBzdHlsZSwgbm9zY3JpcHQpJykuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIFwiY29sb3JcIjogYmxhbmNvXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNsb2dvR29iaWVybm9Db2xvbWJpYVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ZuYS9pbWcvbG9nb19nb2JpZXJub19udWV2b19hbHRvX2NvbnRyYXN0ZS5wbmdcIik7XHJcbiAgICAkKFwiI2xvZ29Hb2JpZXJub0NvbG9tYmlhMlwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ZuYS9pbWcvbG9nb19nb2JpZXJub19udWV2b19hbHRvX2NvbnRyYXN0ZS5wbmdcIik7XHJcblxyXG4gICAgJCgnLl83MjBrYi1kYXRlcGlja2VyLWNhbGVuZGFyJykuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8sXHJcbiAgICAgICAgXCJjb2xvclwiOiBibGFuY29cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW9kYWwtY29udGVudCcpLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLFxyXG4gICAgICAgIFwiY29sb3JcIjogYmxhbmNvXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmFjY2VzaWJpbGlkYWRCb3RvbkFwcCcpLmNzcyh7IFwiY29sb3JcIjogbmVncm8gfSk7XHJcblxyXG4gICAgJChcImJvZHlcIikuY3NzKHtcclxuICAgICAgXCJib3JkZXItY29sb3JcIjogYmxhbmNvLFxyXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8sXHJcbiAgICAgIFwiY29sb3JcIjogYmxhbmNvXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiaGVhZGVyXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybyB9KTtcclxuXHJcbiAgICAkKFwiI2Zvb3RlckZOQSwgI2Zvb3RlckZOQSAuY29udGFpbmVyLCAjZm9vdGVyRk5BIC5yb3csICNmb290ZXJGTkEgZGl2XCIpXHJcbiAgICAgIC5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8sIFwiY29sb3JcIjogYmxhbmNvIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BIGFcIikuY3NzKHsgXCJjb2xvclwiOiBibGFuY28gfSk7XHJcblxyXG4gICAgJChcIiNzZWNjaW9uR09WXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybyB9KTtcclxuXHJcbiAgICAkKFwiLm1lbnNhamVcIikuY3NzKHtcclxuICAgICAgXCJib3JkZXItY29sb3JcIjogYmxhbmNvLFxyXG4gICAgICBcImJvcmRlci1zdHlsZVwiOiBcInNvbGlkXCIsXHJcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybyxcclxuICAgICAgXCJib3JkZXItd2lkdGhcIjogXCIycHhcIixcclxuICAgICAgXCJjb2xvclwiOiBibGFuY29cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIubGluay1mb25kb2VubGluZWEgYSBpbWcsIGEuZG93bG9hZC1hcHAgaW1nXCIpLmNzcyh7XHJcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIFwiZmlsdGVyXCI6IFwiYnJpZ2h0bmVzcygwJSlcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgJChpY29ub3MpLmNzcyhcImZpbHRlclwiLCBcImdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDMwMCUpXCIpO1xyXG5cclxuICAgICQoXCJzZWN0aW9uXCIpLm5vdChcIiNzbGlkZXIsIC5pbWFnZS1jb250YWluZXItcGFnZVwiKVxyXG4gICAgICAuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICAgJChcIiNzbGlkZXIgKiwgLmltYWdlLWNvbnRhaW5lci1wYWdlICosICNzZWd1cm9zLCAjc2VndXJvcyAqXCIpXHJcbiAgICAgICAgICAuY3NzKFwiYmFja2dyb3VuZFwiLCBcInRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9IG5lZ3JvO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkKFwibGkuaGVhZGVyLXNlY3Rpb24sICN0b1RvcFwiKS5hZGRDbGFzcyhcImljby1jb250cmFzdGVcIik7XHJcblxyXG4gICAgJChcIi5icmVhZGNydW1iLCAuYnJlYWRjcnVtYiAqXCIpLmNzcyhcImJhY2tncm91bmRcIiwgXCJ0cmFuc3BhcmVudFwiKTtcclxuXHJcbiAgICAkKFwiLmJ1dHRvbiwgLmxpbmstZm9uZG9lbmxpbmVhIGEsIC5saW5rLWZvbmRvZW5saW5lYSBhIHNwYW4sIGEuZG93bG9hZC1hcHAsIGEuZG93bG9hZC1hcHAgKjpub3QoaW1nKVwiKVxyXG4gICAgICAuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gYmxhbmNvO1xyXG4gICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgIGNvbG9yOiBuZWdybyxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBibGFuY28sXHJcbiAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkKFwiI2Zvb3RlckZOQSBidXR0b25cIikuY3NzKHtcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLFxyXG4gICAgICBcImNvbG9yXCI6IGJsYW5jbyxcclxuICAgICAgXCJib3JkZXJcIjogXCIycHggc29saWQgd2hpdGVcIlxyXG4gICAgfSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgJChcIi5odWF3ZWktaWNvblwiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoJ2Fzc2V0cy9mbmEvaW1nL0FwcEdhbGxlcnkxLnBuZycpIG5vLXJlcGVhdCBjZW50ZXJcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCJjb250YWluXCJcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJoZWFkZXJcIikuY3NzKHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IGF6dWxPYiB9KTtcclxuICAgICQoXCIjc2VjY2lvbkdPVlwiKS5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogYXp1bCB9KTtcclxuXHJcbiAgICAkKFwiI2Zvb3RlckZOQSwgI2Zvb3RlckZOQSAuY29udGFpbmVyLCAjZm9vdGVyRk5BIC5yb3csICNmb290ZXJGTkEgZGl2XCIpXHJcbiAgICAgIC5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIiwgXCJjb2xvclwiOiBcIlwiIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BIGFcIikuY3NzKHsgXCJjb2xvclwiOiBcIlwiIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BIGJ1dHRvblwiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcclxuICAgICAgXCJjb2xvclwiOiBcIlwiLFxyXG4gICAgICBcImJvcmRlclwiOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdodG1sICo6bm90KHNjcmlwdCwgc3R5bGUsIG5vc2NyaXB0KScpLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiXCIsXHJcbiAgICAgICAgXCJjb2xvclwiOiBcIlwiXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNsb2dvR29iaWVybm9Db2xvbWJpYVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ZuYS9pbWcvbG9nby5wbmdcIik7XHJcbiAgICAkKFwiI2xvZ29Hb2JpZXJub0NvbG9tYmlhMlwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL2ZuYS9pbWcvbG9nby5wbmdcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PSBWQVJJQUJMRVMgPT09PT09PT09PT09PT09PT09PT0gKi9cclxuZXhwb3J0IHZhciBldGlxdWV0YXMgPSAnYSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgaW5wdXQsIHNwYW4sIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiAsIHN0cm9uZywgdGV4dGFyZWEsIGJ1dHRvbiwgZGl2LCB0aCwgdGQsIGxpJztcclxuZXhwb3J0IHZhciBjb2VmaWNpZW50ZSA9IDI7XHJcbmV4cG9ydCB2YXIgY291bnRlciA9IDA7XHJcbmV4cG9ydCB2YXIgbGltaXRlID0gNDtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09IEZVTkNJT05FUyA9PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNpcigpOiB2b2lkIHtcclxuICB2YXIgZWxlbWVudG9zID0gJChldGlxdWV0YXMpO1xyXG4gIGNvdW50ZXIgLT0gY29lZmljaWVudGU7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBTdHJpbmcoY291bnRlcikpO1xyXG5cclxuICBlbGVtZW50b3MuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICB2YXIgayA9IHBhcnNlSW50KCQodGhpcykuY3NzKCdmb250LXNpemUnKSk7XHJcbiAgICB2YXIgcmVkU2l6ZSA9IChrIC0gY29lZmljaWVudGUpO1xyXG4gICAgJCh0aGlzKS5jc3MoJ2ZvbnQtc2l6ZScsIHJlZFNpemUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXVtZW50YXIoKTogdm9pZCB7XHJcbiAgdmFyIGVsZW1lbnRvcyA9ICQoZXRpcXVldGFzKTtcclxuICBjb3VudGVyICs9IGNvZWZpY2llbnRlO1xyXG5cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgU3RyaW5nKGNvdW50ZXIpKTtcclxuXHJcbiAgZWxlbWVudG9zLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgdmFyIGogPSBwYXJzZUludCgkKHRoaXMpLmNzcygnZm9udC1zaXplJykpO1xyXG4gICAgdmFyIEF1U2l6ZSA9IChqICsgY29lZmljaWVudGUpO1xyXG4gICAgJCh0aGlzKS5jc3MoJ2ZvbnQtc2l6ZScsIEF1U2l6ZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09IElOSVQgPT09PT09PT09PT09PT09PT09PT0gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaWNpYWxpemFyQ29udHJhc3RlKCk6IHZvaWQge1xyXG5cclxuICAkKFwiI2ZvbnRNZW5vc1wiKS5vZmYoXCJjbGlja1wiKS5vbihcImNsaWNrXCIsICgpID0+IHJlZHVjaXIoKSk7XHJcbiAgJChcIiNmb250TWFzXCIpLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gYXVtZW50YXIoKSk7XHJcblxyXG4gIFxyXG59Il19