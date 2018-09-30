var bgDpi = 0.2;
var zr = null;

function init() {
    width = Math.floor(window.innerWidth * bgDpi);
    height = Math.floor(window.innerHeight * bgDpi);

    var zrDom = document.getElementById('zr');
    zrDom.setAttribute('width', width);
    zrDom.setAttribute('height', height);
    zr = zrender.init(zrDom);
}

function renderArea () {
    
}