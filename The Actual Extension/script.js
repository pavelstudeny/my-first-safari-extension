console.log('script.js injected into', window.location.href);

document.addEventListener('DOMContentLoaded', function () {
  console.log(location.href, 'opening page', safari.extension.baseURI + 'dialog.html')
  var f = document.createElement('iframe');
  f.src = safari.extension.baseURI + 'dialog.html';
  document.body.appendChild(f);
});


