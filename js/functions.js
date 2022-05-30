;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.ready(function () {

        $('body').bind('click', function(e) {
            if($(e.target).closest('.navbar-toggler').length == 0) {
                var opened = $('.navbar-collapse').hasClass('collapse');
                if ( opened === true ) {
                    $('.navbar-collapse').collapse('hide');
                }
            }
        });

        var slider = $(".slider-area");

        slider.slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: false
        });
        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides).removeClass('is-animating');
        });

        slider.on('afterChange', function(event, slick, currentSlide, nextSlide) {
            $(slick.$slides.get(currentSlide)).addClass('is-animating');
        });


        $(".centrer-slider").slick({
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='pe-7s-angle-left  pe-2x pe-va' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='pe-7s-angle-right  pe-2x pe-va' aria-hidden='true'></i></button>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {


                        slidesToShow: 1
                    }
                }
            ]

        });

        $('#myModal').modal('show');
        // $('.advanced-search-model').modal('show');

        var advance_search_btn = $('#advance_search_btn');

        advance_search_btn.on("click", function() {
            if ($('.advanced-search-model').length > 0) {
                $('.advanced-search-model').modal('show');
            }
        });


        // var not_available = $('.not-available')
        // if (not_available.length > 0){
        //     not_available.toggleClass('is-visible');
        //     $('.modal-toggle').on('click', function(e) {
        //         e.preventDefault();
        //         not_available.toggleClass('is-visible');
        //     });
        // }

        var available = $('.available')
        if (available.length > 0){
            available.toggleClass('is-visible');
        }


        $('.acc_container').hide();
       //
       $('.acc_trigger').click(function(){
            var $this = $(this),
                thisActive = $this.hasClass('active'),
                active;
            if (thisActive) {
                $this.removeClass('active');
            }
            else {
                active = $('.acc_trigger.active');
                if (active.length === 1) {
                    active.removeClass('active');
                }
                $this.addClass('active');
            }
        });

        $('.sub_cat').click(function(){
            var $this = $(this),
                thisActive = $this.hasClass('active'),
                active;
            if (thisActive) {
                $this.removeClass('active');
            }
            else {
                active = $('.sub_cat.active');
                if (active.length === 1) {
                    active.removeClass('active');
                }
                $this.addClass('active');
            }
        });



        $('.pe-lg').click(function(){
            var $this = $(this),
                thisActive = $this.hasClass('active'),
                active;
            $this.addClass('pe-7s-angle-down');
            $this.removeClass('pe-7s-angle-up');
            // If this one is active, we always just close it.

            if (thisActive) {
                $this.removeClass('active').parents('li').find('.acc_container').slideUp();
                $this.parents('li').removeClass('active');
            }
            else {
                // Is there just one active?
                active = $('.pe-lg.active');
                if (active.length === 1) {
                    // Yes, close it
                    active.removeClass('active').parents('li').find('.acc_container').slideUp();
                    $this.parents('li').removeClass('active');
                    active.addClass('pe-7s-angle-down');
                    active.removeClass('pe-7s-angle-up');
                }

                // Open this one

                $this.addClass('active').parents('li').find('.acc_container').slideDown();
                $this.parents('li').addClass('active');
                $this.removeClass('pe-7s-angle-down');
                $this.addClass('pe-7s-angle-up');
            }
        });




        $( '.input-range').each(function(){
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if( separator !== -1 ){
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[ i ] = parseFloat( item );
                });
            } else {
                value = parseFloat( value );

            }
            $( this ).slider({
                formatter: function(value) {
                    // console.log(value);
                    return '$' + value;
                },
                min: parseFloat( $( this ).attr('data-slider-min') ),
                max: parseFloat( $( this ).attr('data-slider-max') ),
                range: $( this ).attr('data-slider-range'),
                value: value,
                tooltip_split: $( this ).attr('data-slider-tooltip_split'),
                tooltip: $( this ).attr('data-slider-tooltip')
            });



            var min_value =  parseFloat( $( this ).attr('data-slider-min') );
            var max_value = parseFloat( $( this ).attr('data-slider-max') );

            $('.price-filter').find('.min-value').html(min_value);
            $('.price-filter').find('.max-value').html(max_value);
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.flex-control-nav',
            accesibility: false,
            draggable: false,
            swipe: false,
            touchMove: false
        });
        $('.flex-control-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });

        var  triger = $('.review-box').find('ul>li.active i');

        if (triger.length > 0) {
            triger.removeClass('fa-star-o');
            triger.addClass('fa-star');
        }

        function increaseValue() {
            var value = parseInt(document.getElementById('quantity').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
             document.getElementById('quantity').value = value;
        }

        function decreaseValue() {
            var value = parseInt(document.getElementById('quantity').value, 10);
            value = isNaN(value) ? 0 : value;
            value < 1 ? value = 1 : '';
            value--;
            document.getElementById('quantity').value = value;

        }


        $('.increase').click(function(){
            increaseValue();
        });
        $('.decrease').click(function(){
            decreaseValue();
        });


        var S = $(".load-more-item"), k = $(".load-more"), y = S.length;
        S.hide(), y > 3 && k.show(), k.length && k.on("click", function () {
            var t = S.filter(":visible").length;
            S.slice(t - 0, t + 3).fadeIn(), S.filter(":visible").length >= y && k.hide();
        });



        $( "#datepicker" ).datepicker({
            changeMonth: true,
            yearRange: "1960:2050",
            changeYear: true,
            directionReverse: false
        });

          var addreviewbtn= $('.addReview').find('.addreviewbtn');
        var addreviewForm = $('.add-review-form');
        addreviewForm.hide();
        addreviewbtn.on( 'click', function () {
            addreviewForm.show();
            addreviewbtn.hide();

        });

        var  variation = $('.variation').find('p');
        var  variation_add_to_cart = $('.deal-info-box').find('.add-to-cart');

        variation.on( 'click', function () {
            variation.parent('li.active').removeClass('active');
            $(this).parent('li').addClass('active');
            variation_add_to_cart.removeAttr('disabled')


        });



    });
})(jQuery, window, document);





