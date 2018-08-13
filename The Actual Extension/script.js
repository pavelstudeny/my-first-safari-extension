console.log('script.js injected into', window.location.href);

if (document.body) {
    injectIframe();
}
else {
    document.addEventListener('DOMContentLoaded', injectIframe);
}

function injectIframe() {
    console.log(location.href, 'opening page', safari.extension.baseURI + 'dialog.html')
    
    var i = document.createElement('img');
    i.src = safari.extension.baseURI + 'icon32.png';
    document.body.appendChild(i);

    var f = document.createElement('iframe');
    f.src = safari.extension.baseURI + 'dialog.html';
    document.body.appendChild(f);
}
