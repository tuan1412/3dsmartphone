var isRotate = false;
var eventX = '';
var eventY = '';
var speed = 0;
var whole = document.getElementById('hole');
var widthDoc = document.documentElement.clientWidth;
var phoneWidth = 220;
var phoneHeight = 440;
var phoneDeep = 15;
var phoneHeightLf = 355;
var phoneMgLr = 25;
var zoom = 100;

whole.addEventListener('mousedown', function(event) {
    isRotate = true;
    eventX = event.pageX;
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
});

function onMouseMove(event) {
    event.preventDefault();
    if (isRotate) {
        speed = ((event.pageX - eventX) / widthDoc) * 360;
        eventX = event.pageX;
        var curDeg = whole.getAttribute('data-deg');
        var newDeg = parseInt(curDeg) + speed;
        whole.style.cssText = 'transform: rotateY(' + newDeg + 'deg)';
        whole.setAttribute('data-deg', newDeg);
    }  
}

function onMouseUp() {
    isRotate = false;
    document.onmouseup = null;
    document.onmousemove = null;
}

var btns = document.querySelectorAll('.btn');
var root = document.documentElement
btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var sign = parseInt(btn.getAttribute('data-sign'));
        zoom = zoom + sign * 10;
        var zommPercent = zoom / 100;
        root.style.setProperty('--phone-width', phoneWidth * zommPercent + "px");
        root.style.setProperty('--phone-height', phoneHeight * zommPercent + "px");
        root.style.setProperty('--phone-height', phoneHeight * zommPercent + "px");
        root.style.setProperty('--phone-deep', phoneDeep * zommPercent + "px");
        root.style.setProperty('--phone-deep-nag', -phoneDeep * zommPercent + "px");
        root.style.setProperty('--phone-mg-lr', phoneMgLr * zommPercent + "px");
        root.style.setProperty('--phone-height-lr', phoneHeightLf * zommPercent + "px");
    })
    
});


