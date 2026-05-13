declare var $: any;

/* ==================== CONTRASTE ==================== */
export function contrasteF(n: any): void {

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

    $('html *:not(script, style, noscript)').each(function (this: any) {
      $(this).css({
        "background-color": "transparent",
        "color": blanco
      });
    });

    $("#logoGobiernoColombia").attr("src", "assets/fna/img/logo_gobierno_nuevo_alto_contraste.png");
    $("#logoGobiernoColombia2").attr("src", "assets/fna/img/logo_gobierno_nuevo_alto_contraste.png");

    $('._720kb-datepicker-calendar').each(function (this: any) {
      $(this).css({
        "background-color": negro,
        "color": blanco
      });
    });

    $('.modal-content').each(function (this: any) {
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
      .each(function (this: any) {
        $("#slider *, .image-container-page *, #seguros, #seguros *")
          .css("background", "transparent");
        this.style.background = negro;
      });

    $("li.header-section, #toTop").addClass("ico-contraste");

    $(".breadcrumb, .breadcrumb *").css("background", "transparent");

    $(".button, .link-fondoenlinea a, .link-fondoenlinea a span, a.dowload-app, a.dowload-app *:not(img)")
      .each(function (this: any) {
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

  } else {

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

    $('html *:not(script, style, noscript)').each(function (this: any) {
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
export function reducir(): void {
  var elementos = $(etiquetas);
  counter -= coeficiente;

  localStorage.setItem("counter", String(counter));

  elementos.each(function (this: any) {
    var k = parseInt($(this).css('font-size'));
    var redSize = (k - coeficiente);
    $(this).css('font-size', redSize);
  });
}

export function aumentar(): void {
  var elementos = $(etiquetas);
  counter += coeficiente;

  localStorage.setItem("counter", String(counter));

  elementos.each(function (this: any) {
    var j = parseInt($(this).css('font-size'));
    var AuSize = (j + coeficiente);
    $(this).css('font-size', AuSize);
  });
}

/* ==================== INIT ==================== */
export function inicializarContraste(): void {

  $("#fontMenos").off("click").on("click", () => reducir());
  $("#fontMas").off("click").on("click", () => aumentar());

  
}