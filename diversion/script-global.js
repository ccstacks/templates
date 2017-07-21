var body = document.getElementsByTagName('body')[0],
    otop = document.getElementsByClassName('l-men')[0].offsetTop,
    opn = document.getElementById('s-button'),
    sinp = document.getElementById('search-input'),
    sinput = document.getElementById('fs-input');

var svg = document.getElementById('sbut'),
    path1 = svg.querySelectorAll('path')[0],
    path2 = svg.querySelectorAll('path')[1],
    polygon1 = svg.querySelectorAll('polygon')[0],
    polygon2 = svg.querySelectorAll('polygon')[1];

function stickyNav() {
    var nav = document.getElementsByClassName('l-men')[0];

    if (window.scrollY >= otop) {
        if (nav.className.indexOf('fixed') < 0) {
            nav.className = nav.className + ' fixed';
            body.setAttribute('style', 'margin-top:' + nav.offsetHeight + 'px')
        }
    } else {
        if (nav.className.indexOf('fixed') >= 0) {
            nav.className = nav.className.replace(' fixed', '');
            body.removeAttribute('style')
            sinp.removeAttribute('class');
            svgSet('close');
        }
    }
}

function svgSet(n) {
    if (n == 'open') {
        path1.setAttribute('d', 'M-62 -1057c9,-9 13,-19 13,-31 0,-12 -4,-22 -13,-30 -8,-8 -18,-13 -30,-13 -12,0 -22,5 -31,13 -8,8 -12,18 -12,30 0,12 4,22 12,31 9,8 19,12 31,12 12,0 22,-4 30,-12zm9 26l-1 -1c-11,8 -24,12 -38,12 -9,0 -18,-2 -27,-5 -8,-4 -15,-9 -21,-15 -6,-6 -11,-13 -15,-21 -3,-9 -5,-17 -5,-27 0,-9 2,-18 5,-26 4,-8 9,-16 15,-22 6,-6 13,-10 21,-14 9,-4 18,-5 27,-5 9,0 18,1 26,5 8,4 16,8 22,14 6,6 11,14 14,22 4,8 5,17 5,26 0,12 -2,22 -7,32l-21 25z');
        path2.setAttribute('d', 'M-53 -1031l21 -25c-1,2 -3,4 -5,7l33 33c3,2 4,5 4,8 0,4 -1,7 -4,9 -2,2 -5,4 -8,4 -4,0 -7,-2 -9,-4l-32 -32z');
        polygon1.setAttribute('points', '-5,151 151,-5 165,9 9,165 ');
        polygon2.setAttribute('points', '151,165 -5,9 9,-5 165,151 ');
    } else {
        path1.setAttribute('d', 'M98 98c9,-8 13,-18 13,-30 0,-12 -4,-22 -13,-31 -8,-8 -18,-12 -30,-12 -12,0 -22,4 -31,12 -8,9 -12,19 -12,31 0,12 4,22 12,30 9,9 19,13 31,13 12,0 22,-4 30,-13zm9 26l-1 -1c-11,8 -24,12 -38,12 -9,0 -18,-1 -27,-5 -8,-4 -15,-8 -21,-14 -6,-6 -11,-14 -15,-22 -3,-8 -5,-17 -5,-26 0,-9 2,-18 5,-27 4,-8 9,-15 15,-21 6,-6 13,-11 21,-15 9,-3 18,-5 27,-5 9,0 18,2 26,5 8,4 16,9 22,15 6,6 11,13 14,21 4,9 5,18 5,27 0,11 -2,21 -7,31l-21 25z');
        path2.setAttribute('d', 'M107 124l21 -25c-1,2 -3,5 -5,7l33 33c3,2 4,5 4,9 0,3 -1,6 -4,8 -2,3 -5,4 -8,4 -4,0 -7,-1 -9,-4l-32 -32z');
        polygon1.setAttribute('points', '1986,456 2142,300 2156,314 2000,470 ');
        polygon2.setAttribute('points', '2142,470 1986,314 2000,300 2156,456 ');
    }

}

function showS() {
    if (sinp.className.indexOf('open') < 0) {
        sinput.focus();
        sinp.className = sinp.className + 'open';
        svgSet('open');
    } else {
        sinp.removeAttribute('class');
        svgSet('close');
    }
}

window.addEventListener('scroll', stickyNav);
opn.addEventListener('click', showS);