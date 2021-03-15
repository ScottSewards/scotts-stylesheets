const $ = document.querySelector.bind(document);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

function getCookie(name) {
  var cookies = document.cookie.split('; ');

  for(var i = 0; i < cookies.length; i++) {
    var split = cookies[i].split('=');
    var key = split[0];
    var value = split[1];
    if(name === key) return value;
  }

  return null; //IF COOKIE NAME NOT FOUND
}

function setCookie(name, value, print = false) {
  document.cookie = name + '=' + value;
  if(print) console.log(`Cookie set: ${name} = ${value}.`);
}

function unsetCookie() {
  
}
