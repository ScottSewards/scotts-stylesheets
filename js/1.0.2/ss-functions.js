/* jQuery INSPIRED SELECTORS */
const $ = document.querySelector.bind(document);
const $$ = (css, parent = document) => Array.from(parent.querySelectorAll(css));

/* RUN CODE ON DOCUMENT READY */

function initScottsFunctions() {
  /* ENABLE drop-list-button TO HIDE OR UNHIDE drop-list-* */
  $$(".drop-down-button").forEach((element) => {
    element.addEventListener("click", function() {
      this.parentElement.classList.toggle("active");
    });
  });

  /* APPLY img INTRINSIC WIDTH AS max-width */
  $$("img").forEach((img, index) => img.setAttribute("style", `max-width: ${img.naturalWidth}px`));

  $$("[type='input']").forEach((element) => {
    element.attr("aria-label", `${element.name}`);
  });
}

/* COOKIE FUNCTIONS */
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


/* CLASS FUNCTIONS */
function transitionElements(transitionTime = "0.1s") {
  $$("[class*='transition-']").forEach((element, i) => {
    if(element.classList.contains("transition-all")) element.style.setProperty("transition", `* ${transitionTime}`);
    else {
      element.style.setProperty("transition", `background 1s`);
    }
  });
}
