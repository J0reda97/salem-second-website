$(document).ready(function () {

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active'); // remove active class from all links
        $(this).addClass('active'); // add active class to the clicked link
    });

    $("#login-toggler").click(function () {
        if ($("#login-div").height() >= 100) {
            $("#login-div").animate({ height: 0 }, 500);
        } else {
            $("#login-div").animate({ height: 300 }, 500);
        }
    });

    // When the login button is clicked, show the login form
    $('#login-btn').click(function () {
        $('#modalLoginForm').modal('show');
    });

    // When the login form is submitted, perform login validation
    $('#login-submit-btn').click(function () {
        // Perform login validation here
    });

    // When the close button is clicked, close the modal form
    $('.close').click(function () {
        $('#modalLoginForm').modal('hide');
    });
});