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
        $("button,.button, .link-fondoenlinea a, .link-fondoenlinea a span, a.dowload-app, a.dowload-app *:not(img)")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhc3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm5hLXRlbXBsYXRlLXVpLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb250cmFzdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEseURBQXlEO0FBQ3pELE1BQU0sVUFBVSxVQUFVLENBQUMsQ0FBTTtJQUUvQixJQUFJLE1BQU0sR0FBRyxvWkFBb1osQ0FBQztJQUVsYSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDckIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3BCLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUUxQixJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDdkIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBRXJCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBRWIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNwQixZQUFZLEVBQUUsd0RBQXdEO1lBQ3RFLGlCQUFpQixFQUFFLFNBQVM7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ1Ysa0JBQWtCLEVBQUUsYUFBYTtnQkFDakMsT0FBTyxFQUFFLE1BQU07YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLHVEQUF1RCxDQUFDLENBQUM7UUFDaEcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSx1REFBdUQsQ0FBQyxDQUFDO1FBRWpHLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLElBQUksQ0FBQztZ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SUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsb0RBQW9EO0FBQ3BELE1BQU0sVUFBVSxvQkFBb0I7SUFFbEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFHM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09IENPTlRSQVNURSA9PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udHJhc3RlRihuOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgdmFyIGljb25vcyA9IFwiLmxpbmtzLWFjY2VzaWJpbGl0eSBhIGltZywgLnJlc3AtYWNjZXMgYSBpbWcsIC5tcy1zcmNoLXNiID4gLm1zLXNyY2gtc2Itc2VhcmNoTGluaywgLnBhZ2UtdXRpbGl0aWVzIGEgaW1nLCAucmlnaHQtaXRlbS1kb2MsIC5wYWdlLXV0aWxpdGllcyAudXRpbGl0eSBpbWcsICNnZXN0aW9uIGEuaGlnaGxpZ2h0LWRldGFpbCBpbWcsICNjb250ZW50LXJlbGF0ZWQgaW1nLCAjcXVpY2tMaW5rcyAuY29udGFpbmVyICNoaWdobGlnaHRzIC5oTGlnaHRzIGxpLnRhYiBhIGltZywgI3F1aWNrTGlua3MgLmNvbnRhaW5lciAjc29jaWFsIHVsLnJlZGVzUyBsaS5kZndwLWl0ZW0gYSBpbWcsIGEuaGlnaGxpZ2h0LWRldGFpbCBpbWcsICNBeXVkYSAuY29udGFpbmVyIC5yaWdodCAjY2hhbm5lbHMgaW1nLCAuY2xvc2UtYnRuXCI7XHJcblxyXG4gIHZhciBibGFuY28gPSAnd2hpdGUnO1xyXG4gIHZhciBuZWdybyA9ICdibGFjayc7XHJcbiAgdmFyIG1lbnVjb2xvciA9ICcjMWUxZTFlJztcclxuXHJcbiAgdmFyIGF6dWxPYiA9ICcjMDAzMDg3JztcclxuICB2YXIgYXp1bCA9ICcjMzM2NmNjJztcclxuXHJcbiAgY29uc3QgdmFsb3IgPSBOdW1iZXIobikgfHwgMDtcclxuXHJcbiAgaWYgKHZhbG9yID4gMCkge1xyXG5cclxuICAgICQoXCIuaHVhd2VpLWljb25cIikuY3NzKHtcclxuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKCdhc3NldHMvZm5hL2ltZy9BcHBHYWxsZXJ5MS5wbmcnKSBuby1yZXBlYXQgY2VudGVyXCIsXHJcbiAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6IFwiY29udGFpblwiXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdodG1sICo6bm90KHNjcmlwdCwgc3R5bGUsIG5vc2NyaXB0KScpLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBcImNvbG9yXCI6IGJsYW5jb1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbG9nb0dvYmllcm5vQ29sb21iaWFcIikuYXR0cihcInNyY1wiLCBcImFzc2V0cy9mbmEvaW1nL2xvZ29fZ29iaWVybm9fbnVldm9fYWx0b19jb250cmFzdGUucG5nXCIpO1xyXG4gICAgJChcIiNsb2dvR29iaWVybm9Db2xvbWJpYTJcIikuYXR0cihcInNyY1wiLCBcImFzc2V0cy9mbmEvaW1nL2xvZ29fZ29iaWVybm9fbnVldm9fYWx0b19jb250cmFzdGUucG5nXCIpO1xyXG5cclxuICAgICQoJy5fNzIwa2ItZGF0ZXBpY2tlci1jYWxlbmRhcicpLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAkKHRoaXMpLmNzcyh7XHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLFxyXG4gICAgICAgIFwiY29sb3JcIjogYmxhbmNvXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBuZWdybyxcclxuICAgICAgICBcImNvbG9yXCI6IGJsYW5jb1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5hY2Nlc2liaWxpZGFkQm90b25BcHAnKS5jc3MoeyBcImNvbG9yXCI6IG5lZ3JvIH0pO1xyXG5cclxuICAgICQoXCJib2R5XCIpLmNzcyh7XHJcbiAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IGJsYW5jbyxcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLFxyXG4gICAgICBcImNvbG9yXCI6IGJsYW5jb1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImhlYWRlclwiKS5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8gfSk7XHJcblxyXG4gICAgJChcIiNmb290ZXJGTkEsICNmb290ZXJGTkEgLmNvbnRhaW5lciwgI2Zvb3RlckZOQSAucm93LCAjZm9vdGVyRk5BIGRpdlwiKVxyXG4gICAgICAuY3NzKHsgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IG5lZ3JvLCBcImNvbG9yXCI6IGJsYW5jbyB9KTtcclxuXHJcbiAgICAkKFwiI2Zvb3RlckZOQSBhXCIpLmNzcyh7IFwiY29sb3JcIjogYmxhbmNvIH0pO1xyXG5cclxuICAgICQoXCIjc2VjY2lvbkdPVlwiKS5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8gfSk7XHJcblxyXG4gICAgJChcIi5tZW5zYWplXCIpLmNzcyh7XHJcbiAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IGJsYW5jbyxcclxuICAgICAgXCJib3JkZXItc3R5bGVcIjogXCJzb2xpZFwiLFxyXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8sXHJcbiAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IFwiMnB4XCIsXHJcbiAgICAgIFwiY29sb3JcIjogYmxhbmNvXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmxpbmstZm9uZG9lbmxpbmVhIGEgaW1nLCBhLmRvd2xvYWQtYXBwIGltZ1wiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmRcIjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBcImZpbHRlclwiOiBcImJyaWdodG5lc3MoMCUpXCJcclxuICAgIH0pO1xyXG5cclxuICAgICQoaWNvbm9zKS5jc3MoXCJmaWx0ZXJcIiwgXCJncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygzMDAlKVwiKTtcclxuXHJcbiAgICAkKFwic2VjdGlvblwiKS5ub3QoXCIjc2xpZGVyLCAuaW1hZ2UtY29udGFpbmVyLXBhZ2VcIilcclxuICAgICAgLmVhY2goZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAgICQoXCIjc2xpZGVyICosIC5pbWFnZS1jb250YWluZXItcGFnZSAqLCAjc2VndXJvcywgI3NlZ3Vyb3MgKlwiKVxyXG4gICAgICAgICAgLmNzcyhcImJhY2tncm91bmRcIiwgXCJ0cmFuc3BhcmVudFwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSBuZWdybztcclxuICAgICAgfSk7XHJcblxyXG4gICAgJChcImxpLmhlYWRlci1zZWN0aW9uLCAjdG9Ub3BcIikuYWRkQ2xhc3MoXCJpY28tY29udHJhc3RlXCIpO1xyXG5cclxuICAgICQoXCIuYnJlYWRjcnVtYiwgLmJyZWFkY3J1bWIgKlwiKS5jc3MoXCJiYWNrZ3JvdW5kXCIsIFwidHJhbnNwYXJlbnRcIik7XHJcblxyXG4gICAgJChcImJ1dHRvbiwuYnV0dG9uLCAubGluay1mb25kb2VubGluZWEgYSwgLmxpbmstZm9uZG9lbmxpbmVhIGEgc3BhbiwgYS5kb3dsb2FkLWFwcCwgYS5kb3dsb2FkLWFwcCAqOm5vdChpbWcpXCIpXHJcbiAgICAgIC5lYWNoKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSBibGFuY287XHJcbiAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgY29sb3I6IG5lZ3JvLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGJsYW5jbyxcclxuICAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BIGJ1dHRvblwiKS5jc3Moe1xyXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogbmVncm8sXHJcbiAgICAgIFwiY29sb3JcIjogYmxhbmNvLFxyXG4gICAgICBcImJvcmRlclwiOiBcIjJweCBzb2xpZCB3aGl0ZVwiXHJcbiAgICB9KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICAkKFwiLmh1YXdlaS1pY29uXCIpLmNzcyh7XHJcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCgnYXNzZXRzL2ZuYS9pbWcvQXBwR2FsbGVyeTEucG5nJykgbm8tcmVwZWF0IGNlbnRlclwiLFxyXG4gICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiBcImNvbnRhaW5cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImhlYWRlclwiKS5jc3MoeyBcImJhY2tncm91bmQtY29sb3JcIjogYXp1bE9iIH0pO1xyXG4gICAgJChcIiNzZWNjaW9uR09WXCIpLmNzcyh7IFwiYmFja2dyb3VuZC1jb2xvclwiOiBhenVsIH0pO1xyXG5cclxuICAgICQoXCIjZm9vdGVyRk5BLCAjZm9vdGVyRk5BIC5jb250YWluZXIsICNmb290ZXJGTkEgLnJvdywgI2Zvb3RlckZOQSBkaXZcIilcclxuICAgICAgLmNzcyh7IFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLCBcImNvbG9yXCI6IFwiXCIgfSk7XHJcblxyXG4gICAgJChcIiNmb290ZXJGTkEgYVwiKS5jc3MoeyBcImNvbG9yXCI6IFwiXCIgfSk7XHJcblxyXG4gICAgJChcIiNmb290ZXJGTkEgYnV0dG9uXCIpLmNzcyh7XHJcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIlwiLFxyXG4gICAgICBcImNvbG9yXCI6IFwiXCIsXHJcbiAgICAgIFwiYm9yZGVyXCI6IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2h0bWwgKjpub3Qoc2NyaXB0LCBzdHlsZSwgbm9zY3JpcHQpJykuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJcIixcclxuICAgICAgICBcImNvbG9yXCI6IFwiXCJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2xvZ29Hb2JpZXJub0NvbG9tYmlhXCIpLmF0dHIoXCJzcmNcIiwgXCJhc3NldHMvZm5hL2ltZy9sb2dvLnBuZ1wiKTtcclxuICAgICQoXCIjbG9nb0dvYmllcm5vQ29sb21iaWEyXCIpLmF0dHIoXCJzcmNcIiwgXCJhc3NldHMvZm5hL2ltZy9sb2dvLnBuZ1wiKTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09IFZBUklBQkxFUyA9PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgdmFyIGV0aXF1ZXRhcyA9ICdhLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBpbnB1dCwgc3BhbiwgbGFiZWwsIHNlbGVjdCwgb3B0aW9uICwgc3Ryb25nLCB0ZXh0YXJlYSwgYnV0dG9uLCBkaXYsIHRoLCB0ZCwgbGknO1xyXG5leHBvcnQgdmFyIGNvZWZpY2llbnRlID0gMjtcclxuZXhwb3J0IHZhciBjb3VudGVyID0gMDtcclxuZXhwb3J0IHZhciBsaW1pdGUgPSA0O1xyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT0gRlVOQ0lPTkVTID09PT09PT09PT09PT09PT09PT09ICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2lyKCk6IHZvaWQge1xyXG4gIHZhciBlbGVtZW50b3MgPSAkKGV0aXF1ZXRhcyk7XHJcbiAgY291bnRlciAtPSBjb2VmaWNpZW50ZTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIFN0cmluZyhjb3VudGVyKSk7XHJcblxyXG4gIGVsZW1lbnRvcy5lYWNoKGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgIHZhciBrID0gcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ2ZvbnQtc2l6ZScpKTtcclxuICAgIHZhciByZWRTaXplID0gKGsgLSBjb2VmaWNpZW50ZSk7XHJcbiAgICAkKHRoaXMpLmNzcygnZm9udC1zaXplJywgcmVkU2l6ZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdW1lbnRhcigpOiB2b2lkIHtcclxuICB2YXIgZWxlbWVudG9zID0gJChldGlxdWV0YXMpO1xyXG4gIGNvdW50ZXIgKz0gY29lZmljaWVudGU7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291bnRlclwiLCBTdHJpbmcoY291bnRlcikpO1xyXG5cclxuICBlbGVtZW50b3MuZWFjaChmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICB2YXIgaiA9IHBhcnNlSW50KCQodGhpcykuY3NzKCdmb250LXNpemUnKSk7XHJcbiAgICB2YXIgQXVTaXplID0gKGogKyBjb2VmaWNpZW50ZSk7XHJcbiAgICAkKHRoaXMpLmNzcygnZm9udC1zaXplJywgQXVTaXplKTtcclxuICB9KTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT0gSU5JVCA9PT09PT09PT09PT09PT09PT09PSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pY2lhbGl6YXJDb250cmFzdGUoKTogdm9pZCB7XHJcblxyXG4gICQoXCIjZm9udE1lbm9zXCIpLm9mZihcImNsaWNrXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4gcmVkdWNpcigpKTtcclxuICAkKFwiI2ZvbnRNYXNcIikub2ZmKFwiY2xpY2tcIikub24oXCJjbGlja1wiLCAoKSA9PiBhdW1lbnRhcigpKTtcclxuXHJcbiAgXHJcbn0iXX0=