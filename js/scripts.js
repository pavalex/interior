window.onload = function () {

    var menu = document.querySelectorAll('.menu__list .menu__link');
    var url = document.location.href;

    for (var i = 0; i < menu.length; i++) {

        if (url == menu[i].href) {
            menu[i].classList.add('menu__link--active');
        }
    }
}
