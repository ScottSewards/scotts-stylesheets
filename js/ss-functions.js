const $ = document.querySelector.bind(document);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

window.onload = function() {
  $$("img").forEach((img, index) => img.setAttribute("style", `max-width: ${img.naturalWidth}px`));

  $$(".drop-list-button").forEach((element) => {
    element.addEventListener("click", function() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("hide");
    });
  });
}

function animteClasses(transitionTime = "0.1s") {
  $$("[class*='animate-']").forEach((element, i) => {
    if(element.classList.contains("animate-all")) element.style.setProperty("transition", `* ${transitionTime}`);
    else {
      element.style.setProperty("transition", `background 1s`);
    }
  });
}

var getCookie = (name) => {
  const cookie = document.cookie.split("; ").find(row => row.startsWith(`${name}=`));
  return cookie !== undefined ? cookie.split("=")[1] : null;
}
var getCookieValue = (value) => {
  const cookie = document.cookie.split("; ").find(row => row.startsWith(`${name}=`));
  return cookie !== undefined ? cookie.split("=")[0] : null;
}

var setCookie = (name, value) => document.cookie = `${name}=${value}`;
var issetCookie = (name) => getCookie(name) !== null ? true : false;
var issetCookieValue = (value) => getCookieValue(value) !== null ? true : false;

var printCookie = (name) => console.log(document.cookie.split("; ").find(row => row.startsWith(`${name}=`)) !== null ? `${name}=` + getCookie(name) : "Cookie does not exist.");
var printCookies = () => console.table(document.cookie);

var unsetCookie = (name) => document.cookie = issetCookie(name) === true ? `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT` : null;
//var unsetCookies = () => console.log("");
