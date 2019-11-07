$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('#overlay').hide();
        
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('#overlay').show();
    });
    $(window).scroll(startCounter);
    function startCounter() {
        var hT = $('.ceo-container-box').offset().top,
            hH = $('.ceo-container-box').outerHeight(),
            wH = $(window).height();
        if ($(window).scrollTop() > hT+hH-wH) {
            $(window).off("scroll", startCounter);
            $('.count').each(function () {
                var $this = jQuery(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.round(this.Counter));
                    }
                });
            });
        }
    }
});


