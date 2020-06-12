$(function () {
    $(document).scroll(function () {
        let $nav = $("#navbar-container");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

particlesJS.load("particles-js", 'particles.json');
