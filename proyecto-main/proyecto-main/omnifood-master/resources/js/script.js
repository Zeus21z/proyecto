$(document).ready(function() {

    // HACIENDO EL MENÚ PEGAJOSO
    var waypoint = new Waypoint({
        element: document.getElementsByClassName('js--section-features'),
        handler: function(direction) {
          if(direction == "down") {
            $('nav').addClass('sticky');
          }
          else {
            $('nav').removeClass('sticky');
          }
        },
        offset: '60px'
      });

    //   DESPLAZAMIENTO EN BOTONES
      $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
      });

      $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
      });


    //   DESPLAZAMIENTO DE NAVEGACIÓN

            // Seleccionar todos los enlaces con anclajes
        $('a[href*="#"]')
        // Eliminar enlaces que en realidad no enlazan a nada
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // Enlaces internos
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Descubrir el elemento al que se desplazará
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // ¿Existe un destino de desplazamiento?
            if (target.length) {
            /* Solo prevenir el comportamiento 
            predeterminado si realmente va a suceder la animación*/
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Llamada devuelta despues de la animación
                // ¡Debe cambiar el foco!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Verificar si el destino estaba enfocado
                return false;
                } else {
                $target.attr('tabindex','-1'); // Agregar tabindex para los elementos no enfocables
                $target.focus(); // Establecer el foco nuevamente
                };
            });
            }
        } 
    });


// ANIMACIONES EN DESPLAZAMIENTO
// PARA LAS CARACTERÍSTICAS
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    // PARA EL IPHONE IMG
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    // PARA LAS CIUDADES
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    // // PARA LOS PLANES
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    // NAVEGACIÓN MÓVIL
    $('.js--nav-icon').click(function() {
        var nav  = $('.js--main-nav');
        var icon  = $('.js--nav-icon i');

        // PARA ABRIR Y CERRAR NAV EN EL BOTÓN HAGA CLIC
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }


    });

    // MAPA
    var map  = new GMaps({
        div: '.map',
        lat: 38.7437396,
        lng: -9.05, 
        zoom: 12
      });

      map.addMarker({
        lat: 38.7437396,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
          }
      });

});