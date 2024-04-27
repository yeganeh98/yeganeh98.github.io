$(document).ready(function() {
    // Show the first section by default
    $('#home').show();

    // Navigation click actions
    $('.main-menu a').on('click', function() {
        var target = $(this).attr('href');
        $('.content-region').hide();
        $(target).show();
        $('.main-menu a').removeClass('active');
        $(this).addClass('active');
    });
});

