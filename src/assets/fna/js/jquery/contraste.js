function contrasteF(n) {

	// leonardo para conservar el tamaño de la fuente.

	var iconos = ".links-accesibility a img, .resp-acces a img, .ms-srch-sb > .ms-srch-sb-searchLink, .page-utilities a img, .right-item-doc, .page-utilities .utility img, #gestion a.highlight-detail img, #content-related img, #quickLinks .container #highlights .hLights li.tab a img, #quickLinks .container #social ul.redesS li.dfwp-item a img, a.highlight-detail img, #Ayuda .container .right #channels img, .close-btn";
	var blanco = 'white';
	var negro = 'black';
	var menucolor = '#1e1e1e';

	var azulOb = '#003087';

	var azul = '#3366cc'

	if (n > 0) {		

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

		$('.accesibilidadBotonApp').each(function () {
			$(this).css({
				"color": negro
			});
		});

		$("body").css({
			"border-color": blanco,
			"background-color": negro,
			"color": blanco
		});

		$("header").css({
			"background-color": negro
		});

		$("#footerFNA, #footerFNA .container, #footerFNA .row, #footerFNA div").css({
			"background-color": negro,
			"color": blanco
		});

		$("#footerFNA a").css({
			"color": blanco
		});

		

		$("#seccionGOV").css({
			"background-color": negro
		});

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

		$("section")
			.not("#slider, .image-container-page")
			.each(
				function (index) {
					$(
						"#slider *, .image-container-page *, #seguros, #seguros *")
						.css("background", "transparent");
					this.style.background = negro;
				});

		$("li.header-section, #toTop").addClass("ico-contraste");
		$("#people-list, #citizens-list, #builders-list, #employees-list")
			.addClass("menu-contraste");
		$("a.Link").addClass("link-contraste");
		$(".ms-rtestate-field ol > li, .lidentro li").addClass(
			"letter-list-contraste");

		$(".breadcrumb, .breadcrumb *").css("background", "transparent");

		$(".button, .link-fondoenlinea a, .link-fondoenlinea a span, a.dowload-app, a.dowload-app *:not(img)")
			.each(function (index) {
				this.style.background = blanco;
				$(this).css({
					'color': negro,
					'border-color': blanco,
					'border-style': 'solid'
				});
			})

		$(".dColor, #trick_bg").css("background", negro);
		$("#contraste").css({
			"background": negro,
			'color': blanco
		});
		$("input[type='submit'],input[type='button']").css({
			"background": blanco,
			'color': negro
		});

		$("#toTop").css("background", "transparent");

		$("button, a.btn, .ion-social-apple, .ion-social-android").css({
			'color': negro,
			'border-color': blanco,
			'border-style': 'solid',
			"background-color": blanco
		});

		$("  button, a.btn, .ion-social-apple, .ion-social-android").css({
			'color': negro,
			'border-color': blanco,
			'border-style': 'solid',
			"background-color": blanco
		});

		// Leonardo Cambios de contraste Calnedario Externo

		$(".fc-event ").css({
			'padding': '1px',
			'color': negro,
			'border-color': blanco,
			'border-style': 'solid',
			"background-color": blanco
		});

		$("span.ion-social-apple.salir, span.ion-social-apple.salir ").css({
			'background-color': "",
			'color': negro,
			'border-color': ""
		});

		$(".fc-year-have-event , .fc-widget-header , .fc-widget-content ").css(
			{

				'color': blanco,
				'border-color': blanco,
				'border-style': 'solid',
				"background-color": negro
			});

		$(
			".form-control , .init-date , .ui-state-default, .ui-widget-content, .ui-widget-header , .end-date, .init-date ")
			.css({
				'border-color': blanco,
				"background-color": negro,
				"color": blanco
			});

		// cambio de texto azul a blanco
		$(".fc-header-title h2").css({
			"background-color": negro,
			"color": blanco
		});

		// Cambios desplegable del datapiker

		$(" .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default  ")
			.css({
				"border-color": blanco,
				"background-color": negro,
				"color": blanco
			});

		// Boton del datapiker , color alrredor del boton

		$(".ui-datepicker .ui-datepicker-buttonpane button , .ui-widget-content ")
			.css({
				"border-color": blanco,
				"background-color": negro
			});

		$(".fc-header .fc-button").css({
			"border-color": blanco
		});


		$(".btn-primary:hover").css({
			"color": negro,
			"background-color": blanco,
			"border-color": blanco
		});

		$("select:hover").css({
			'border-size': "33px",
			'border-style': 'solid'
		});

		// cambios Hover en Certificados tributARIOS

		$(".btn-success:hover").css({
			"color": negro,
			"background-color": blanco,
			"border-color": blanco
		});

		// cmabios modal certifiacdos tributarios

		$(
			".modal-content, .modal, .modal-title, .modal-open, .modal-content, .vigilado, .modal-body, .modal-footer, .btn-primary, .btn , .modal-title ")
			.css({
				"border": "solid 1px white",
			});

		$(".container, .certificados, .mt15").css({
			"color": blanco,
			"background-color": negro
		});

		// Fin Cambios Leonardo
		$(".icon_simulador").css({
			"font-size": "",
			"color": "",
			"border": "solid 1px white",
			"padding": "",
			"border-radius": "",
			"background-color": negro,
			"cursor": ""
		});
		$(".icon_simulador_seleccionado").css({
			"color": "",
			"border": "solid 1px white",
			"padding": "",
			"border-radius": "",
			"background-color": negro
		});

		$("#footerFNA button").css({
			"background-color": negro,
			"color": blanco,
			"border-color": blanco,
			"border": "2px solid white"
		});

	} else {

		$(".huawei-icon").css({
			"background": "url('assets/fna/img/AppGallery1.png') no-repeat center",
			"background-size": "contain"
		});

		$(".mensaje").css({
			"border-color": "",
			"background-color": "",
			"border-width": "",
			"color": ""
		});

		$("header").css({
			"background-color": azulOb
		});

		$("#seccionGOV").css({
			"background-color": azul
		});

		$("#footerFNA, #footerFNA .container, #footerFNA .row, #footerFNA div").css({
			"background-color": "black",
			"color": ""
		});

		$("#footerFNA a").css({
			"color": ""
		});

		$("#footerFNA button").css({
			"background-color": "",
			"color": "",
			"border-color": "",
			"border": "0px solid white"
		});

		$('html *:not(script, style, noscript)').each(function () {
			$(this).css({
				"background-color": "",
				"color": ""
			});
		});

		$("#logoGobiernoColombia").attr("src", "assets/fna/img/logo.png");
		$("#logoGobiernoColombia2").attr("src", "assets/fna/img/logo.png");


		$(".link-fondoenlinea a img, a.dowload-app img").css({
			"background": "",
			"filter": ""
		});
		$(iconos).css("filter", "");

		$("section").not("#slider, .image-container-page").each(
			function (index) {

				$("#slider .bannerTitle *").css("color", "");
				this.style.background = "";
			});

		$("li.header-section, #toTop").removeClass("ico-contraste");
		$("#people-list, #citizens-list, #builders-list, #employees-list")
			.removeClass("menu-contraste");
		$("a.Link").removeClass("link-contraste")
		$(".ms-rtestate-field ol > li, .lidentro li").removeClass(
			"letter-list-contraste");

		$(".breadcrumb, .breadcrumb *").css("background", "");
		$(".left * ").css("background", "");

		$(
			".button, .link-fondoenlinea a, .link-fondoenlinea a img, input[type='submit'], .link-fondoenlinea a span")
			.each(function (index) {
				this.style.background = "";
				$(this).css('color', "");
			})

		$(".dColor, #trick_bg").css("background", "");

		$("#toTop").css("background", "");

		$("button, a.btn, .ion-social-apple, .ion-social-android, #contraste")
			.css({
				'color': "",
				'border-color': "",
				'border-style': '',
				"background-color": ""
			});

		// Leonardo Cambios de contraste Calnedario Externo

		$(".fc-event ").css({
			'padding': '',
			'color': '',
			'border-color': '',
			'border-style': ' ',
			"background-color": ''
		});

		$(
			".form-control , .init-date , .ui-state-default, .ui-widget-content, .ui-widget-header ")
			.css({
				'border-color': '',
				"background-color": '',
				"color": ''
			});

		// Cambios desplegable del datapiker

		$(
			" .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default  ")
			.css({
				"border-color": '',
				"background-color": '',
				"color": ''
			});

		// Boton del datapiker , color alrredor del boton

		$(
			".ui-datepicker .ui-datepicker-buttonpane button , .ui-widget-content ")
			.css({
				"border-color": '',
				"background-color": ''
			});

		$(".fc-header .fc-button").css({
			"border-color": ''
		});

		// Fin Cambios Leonardo

		$(".icon_simulador").css({
			"font-size": "",
			"color": "",
			"border": "",
			"padding": "",
			"border-radius": "",
			"background-color": "",
			"cursor": ""
		});

		$(".icon_simulador_seleccionado").css({
			"color": "",
			"border": "",
			"padding": "",
			"border-radius": "",
			"background-color": ""
		});
	}

}
//para contraste
var etiquetas = 'a, h1, h2, h3, h4, h5, h6, p, input, span, label, select, option , strong, textarea, button, div, th, td, li';
var coeficiente = 2;
var counter = 0;
var limite = 4;

function actualizarTamanioDivActualizarCertificadosTributarios() {
	if (counter < 0 || counter > 0) {
		var kids = $('div.divActualizarCertificadosTributarios').find("*");
		$.each(kids, function (index, value) {
			var elementos = $(etiquetas);
			if ($.inArray(value, elementos) != -1) {
				if (($(value).children().length < 1 || $(this)[0].tagName === 'SELECT') &&
					$(this).parent()[0].tagName != 'SELECT') {
					var k = parseInt($(value).css('font-size'));
					var redSize = 0;
					redSize = (k + (counter));

					localStorage.setItem("constanteA", redSize);
					$(value).css('font-size', redSize);
				}
			}
		});
	}
	var n = localStorage.getItem("contraste");
	contrasteF(n);
}

function reducir() {
	var elementos = $(etiquetas);
	counter -= coeficiente;
	localStorage.setItem("counter", counter);

	if (counter >= limite * (-1)) {
		elementos.each(function (index) {

			if (($(this).children().length < 1 || $(this)[0].tagName === 'SELECT') &&
				$(this).parent()[0].tagName != 'SELECT') {
				var k = parseInt($(this).css('font-size'));

				var redSize = (k - coeficiente); // disminuye 2px

				localStorage.setItem("constanteMENOS", k);
				localStorage.setItem("constanteMAS", 0);

				localStorage.setItem("constanteA", redSize);

				$(this).css('font-size', redSize);
			}
		});
	}
	if (counter < limite * (-1)) {
		counter = limite * (-1);
	}
}

function aumentar() {
	var elementos = $(etiquetas);
	counter += coeficiente;
	localStorage.setItem("counter", counter);

	if (counter <= limite) {
		elementos.each(function (index) {
			if (($(this).children().length < 1 || $(this)[0].tagName === 'SELECT') &&
				$(this).parent()[0].tagName != 'SELECT') {
				var j = parseInt($(this).css('font-size'));

				var AuSize = (j + coeficiente); // aumenta 2px

				localStorage.setItem("constanteMENOS", 0);
				localStorage.setItem("constanteMAS", j);

				localStorage.setItem("constanteA", AuSize);

				$(this).css('font-size', AuSize);
			}
		});
	}
	if (counter > limite) {
		counter = limite;
	}
}

// Reducir Font Size
$("#fontMenos").click(function () {
	reducir()
});

$("#fontMenos").keypress(function (event) {
	if (event.which == 13) {
		reducir()
	}
});

// Aumentar Font Size
$("#fontMas").click(function () {
	aumentar()
});


$("#fontMas").keypress(function (event) {
	if (event.which == 13) {
		aumentar()
	}
});

/* ==================== Boton de contraste ==================== */
var GetElem = $("div, section, ul.menu-dynamic, #people-list, #citizens-list, #builders-list, #employees-list, a, h1, h2, h3, h4, p, span, input, b, .button, .link-fondoenlinea a, .link-fondoenlinea a span");

$(document).ready(function () {
	$("#contraste").attr("tabindex", 0)
});

$('html *:not(script, style, noscript)').each(function () {
	fondo = $(this).css("background-color");
	letra = $(this).css("color");
});

$('#contraste').click(function () {

	$(this).toggleClass("contrast-active");
	$('body').toggleClass("alto_contraste");

	// Store
	localStorage.setItem("contraste", $("#contraste.contrast-active").length);
	contrasteF(localStorage.getItem("contraste"));

});

$("img#contraste").keypress(function (event) {
	if (event.which == 13) {
		$(this).toggleClass("contrast-active");
		$('body').toggleClass("alto_contraste");

		// Store
		localStorage.setItem("contraste", $("#contraste.contrast-active").length);
		contrasteF(localStorage.getItem("contraste"));
	}
});

$(document).ready(function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});

$(document).on('click', '.btn', function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});

$(document).on('click', '.btn-success', function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});

$(document).on('click', '.btn-primary', function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});

$(document).on('click', '.fc-button', function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});
$(document).on('click', '.fc-event-inner', function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});

$(document).on('click', 'td', function () {
	var n = localStorage.getItem("contraste");
	contrasteF(n);
});
