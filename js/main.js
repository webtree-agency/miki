/* ===================================================================
 * Glint - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 10, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    var clCookieBanner = function() {
        // Cookie functions
        function setCookie(name, value, days) {
            var expires = '';
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }
            document.cookie = name + '=' + (value || '') + expires + '; path=/';
        }
        
        function getCookie(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
        
        // Check if cookie consent has been set
        if (getCookie('cookieConsent') === null) {
            $('#cookie-banner').fadeIn();
        }
        
        // Accept cookies
        $(document).on('click', '#accept-cookies', function() {
            setCookie('cookieConsent', 'accepted', cfg.cookieExpiry);
            $('#cookie-banner').fadeOut();
            
            // Now that cookies are accepted, show the popup with some delay
            setTimeout(function() {
                clPopup();
            }, 2000);
        });
        
        // Decline cookies
        $(document).on('click', '#decline-cookies', function() {
            setCookie('cookieConsent', 'declined', cfg.cookieExpiry);
            $('#cookie-banner').fadeOut();
            
            // Show popup even if cookies declined
            setTimeout(function() {
                clPopup();
            }, 2000);
        });
        
        // If cookie consent is already given, prepare to show popup
        if (getCookie('cookieConsent') !== null) {
            setTimeout(function() {
                clPopup();
            }, cfg.popupDelay);
        }
    };
    
    var clPopup = function() {
        // Check if popup should be hidden based on localStorage
        var isPopupHidden = localStorage.getItem('hidePopup') === 'true';
        
        if (!isPopupHidden) {
            $('#popup').fadeIn().addClass('popup-visible');
        }
        
        // Handle close button click
        $(document).on('click', '#close-popup', function() {
            $('#popup').fadeOut();
            // Don't permanently hide popup when just closed
        });
        
        // Handle "Don't show again" button if it exists
        $(document).on('click', '#hide-popup', function() {
            $('#popup').fadeOut();
            localStorage.setItem('hidePopup', 'true');
        });
    };

   /* Preloader
    * -------------------------------------------------- */
    var clPreloader = function() {
        
        $("html").addClass('cl-preload');

        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');
        
        });
    };

   /* OffCanvas Menu
    * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');	
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };


   /* photoswipe
    * ----------------------------------------------------- */
    var clPhotoswipe = function() {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

            // get items
            $folioItems.each( function(i) {

                var $folio = $(this),
                    $thumbLink =  $folio.find('.thumb-link'),
                    $title = $folio.find('.item-folio__title'),
                    $caption = $folio.find('.item-folio__caption'),
                    $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                    $captionText = $.trim($caption.html()),
                    $href = $thumbLink.attr('href'),
                    $size = $thumbLink.data('size').split('x'),
                    $width  = $size[0],
                    $height = $size[1];
         
                var item = {
                    src  : $href,
                    w    : $width,
                    h    : $height
                }

                if ($caption.length > 0) {
                    item.title = $.trim($titleText + $captionText);
                }

                items.push(item);
            });

            // bind click event
            $folioItems.each(function(i) {

                $(this).on('click', function(e) {
                    e.preventDefault();
                    var options = {
                        index: i,
                        showHideOpacity: true
                    }

                    // initialize PhotoSwipe
                    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                    lightBox.init();
                });

            });

    };
    

   /* Stat Counter
    * ------------------------------------------------------ */
    var clStatCount = function() {
        
        var statSection = $(".about-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                } 

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };

   /* slick slider
    * ------------------------------------------------------ */
    var clSlickSlider = function() {

        $('.clients').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            //autoplay: true,
            pauseOnFocus: false,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }

            ]
        });

        $('.testimonials').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    
    };

   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


   /* Placeholder Plugin Settings
    * ------------------------------------------------------ */
    var clPlaceholder = function() {
        $('input, textarea, select').placeholder();  
    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    var clAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };


   /* Contact Form
    * ------------------------------------------------------ */
    var clContactForm = function() {
        
        /* local validation */
        $('#contactForm').validate({
        
            /* submit via ajax */
            submitHandler: function(form) {
    
                var sLoader = $('.submit-loader');
    
                $.ajax({
    
                    type: "POST",
                    url: "inc/sendEmail.php",
                    data: $(form).serialize(),
                    beforeSend: function() { 
    
                        sLoader.slideDown("slow");
    
                    },
                    success: function(msg) {
    
                        // Message was sent
                        if (msg == 'OK') {
                            sLoader.slideUp("slow"); 
                            $('.message-warning').fadeOut();
                            $('#contactForm').fadeOut();
                            $('.message-success').fadeIn();
                        }
                        // There was an error
                        else {
                            sLoader.slideUp("slow"); 
                            $('.message-warning').html(msg);
                            $('.message-warning').slideDown("slow");
                        }
    
                    },
                    error: function() {
    
                        sLoader.slideUp("slow"); 
                        $('.message-warning').html("Something went wrong. Please try again.");
                        $('.message-warning').slideDown("slow");
    
                    }
    
                });
            }
    
        });
    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var clAOS = function() {
        
        AOS.init( {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };


   /* AjaxChimp
    * ------------------------------------------------------ */
    var clAjaxChimp = function() {
        
        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });

        // Mailchimp translation
        //
        //  Defaults:
        //	 'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
            2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
            5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
        } 

    };


   /* Back to Top
    * ------------------------------------------------------ */
    var clBackToTop = function() {
        
        var pxShow  = 500,         // height on which the button will show
        fadeInTime  = 400,         // how slow/fast you want the button to show
        fadeOutTime = 400,         // how slow/fast you want the button to hide
        scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $(".go-top")
        
        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };
    /* Form Functions
 * ------------------------------------------------------ */
var clFormOptions = function() {
    
    function updateFormOptions() {
        const angebot = document.getElementById('gewähltes Angebot').value;
        const standortSelect = document.getElementById('Standort');
        const regularTrainingOptions = document.getElementById('regular-training-options');
        const birthdaySpecialOptions = document.getElementById('birthday-special-options');
        const talentcampOptions = document.getElementById('talentcamp-options');
        
        // Get form fields that need toggling required attribute
        const anzahlPersonen = document.getElementById('Anzahl Personen');
        const gewähltesAbo = document.getElementById('gewähltes Abo');
        const terminwunsch = document.getElementById('Terminwunsch');
        const geburtstagPersonen = document.getElementById('geburtstag-personen');
        
        // Reset all sections first
        regularTrainingOptions.style.display = 'none';
        birthdaySpecialOptions.style.display = 'none';
        talentcampOptions.style.display = 'none';
        
        // Always disable Standort first
        standortSelect.disabled = true;
        
        if (angebot === 'Hallen-Training') {
            standortSelect.value = 'Hombrechtikon';
            regularTrainingOptions.style.display = 'block';
            
            // Set required fields
            anzahlPersonen.setAttribute('required', 'true');
            gewähltesAbo.setAttribute('required', 'true');
            terminwunsch.removeAttribute('required');
            geburtstagPersonen.removeAttribute('required');
        } 
        else if (angebot === 'Rasen-Training') {
            // Rasen-Training is always in Stäfa
            standortSelect.value = 'Stäfa';
            regularTrainingOptions.style.display = 'block';
            
            // Set required fields
            anzahlPersonen.setAttribute('required', 'true');
            gewähltesAbo.setAttribute('required', 'true');
            terminwunsch.removeAttribute('required');
            geburtstagPersonen.removeAttribute('required');
        }
        else if (angebot === 'Talent-Camp') {
            // Talentcamp is always in Stäfa and is a fixed 10er abo
            standortSelect.value = 'Stäfa';
            talentcampOptions.style.display = 'block';
            
            // Remove required fields for training options
            anzahlPersonen.removeAttribute('required');
            gewähltesAbo.removeAttribute('required');
            terminwunsch.removeAttribute('required');
            geburtstagPersonen.removeAttribute('required');
        }
        else if (angebot === 'Geburtstag-Special') {
            // For Geburtstag-Special, show location selection
            standortSelect.disabled = false;
            standortSelect.value = '';  // Reset the selection
            birthdaySpecialOptions.style.display = 'block';
            
            // Set required fields
            anzahlPersonen.removeAttribute('required');
            gewähltesAbo.removeAttribute('required');
            terminwunsch.setAttribute('required', 'true');
            geburtstagPersonen.setAttribute('required', 'true');
        } 
        else {
            // Default state when no option is selected
            standortSelect.value = '';
            standortSelect.disabled = false;
        }
    }
    
    // Initialize form and form submission
    document.addEventListener('DOMContentLoaded', function() {
        // Add event listener to the form select
        var angebotSelect = document.getElementById('gewähltes Angebot');
        if (angebotSelect) {
            angebotSelect.addEventListener('change', updateFormOptions);
            // Initialize form options
            updateFormOptions();
        }
        
        // Setup form submission
        var form = document.getElementById("contactFormBuchen");
        if (form) {
            form.onsubmit = function(event) {
                event.preventDefault();
                var formData = new FormData(form);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", form.action, true);
                xhr.send(formData);
                
                xhr.onload = function(e) {
                    if (xhr.status === 200) {
                        window.location.href = 'erfolg.html';
                        form.reset();  
                    } else {
                        window.alert("Ein Fehler ist aufgetreten, bitte versuche es erneut!");
                    }
                };
            };
        }
    });
};




   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        clPreloader();
        clOffCanvas();
        clPhotoswipe();
        clStatCount();
        clSlickSlider();
        clSmoothScroll();
        clPlaceholder();
        clAlertBoxes();
        clContactForm();
        clAOS();
        clAjaxChimp();
        clBackToTop();
        clCookieBanner();
        clFormOptions();

    })();
  document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });  
})(jQuery);