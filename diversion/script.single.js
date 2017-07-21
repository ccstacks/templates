          $(function () {
              $('.sharing-section').stick_in_parent({
                  offset_top: $('.l-men').outerHeight()+20
              });
          });

document.getElementsByClassName('momo')[0].setAttribute('style', 'height:' + document.getElementsByClassName('e-content')[0].offsetHeight + 'px')

/*
function stickySharing(){
    var main = document.getElementsByClassName('post-main')[0],
        el = document.getElementsByClassName('sharing-section')[0],
        parent = document.getElementsByClassName('e-content')[0],
        menu = document.getElementsByClassName('l-men')[0];

    if(window.scrollY + menu.offsetHeight + 20 >= main.offsetTop + el.offsetTop +20 && !(window.scrollY >= parent.offsetHeight + 20)){
        if(el.className.indexOf(' sticky') < 0){
            el.className = el.className + ' sticky';
            el.setAttribute('style', 'position: fixed;top: ' + (menu.offsetHeight + 20) + 'px;left:' + main.offsetLeft + 'px')
        }
    } else {
        el.className = el.className.replace(' sticky', '');
        el.removeAttribute('style');
    }

    if(window.scrollY >= parent.offsetHeight + 20){
        if(el.className.indexOf(' bottom') < 0){
            el.className = el.className + ' bottom';
            el.setAttribute('style', 'position:absolute;top:auto;bottom:0')
        }
    } else {
        el.className = el.className.replace(' bottom', '');
    }
}

window.addEventListener('scroll', stickySharing);
*/