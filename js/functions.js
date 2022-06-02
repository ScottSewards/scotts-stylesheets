var setDropDowns = () => document.querySelectorAll(".drop-down-button").forEach((b) => b.addEventListener("click", () => b.parentElement.classList.toggle("active"))),
    setImgIntrinsicWidth = (e) => document.querySelector(e).setAttribute("style", `max-width: ${e.naturalWidth}px`),
    setAllImgIntrinsicWidth = () => document.querySelectorAll("img").forEach((e) => el.setAttribute("style", `max-width: ${e.naturalWidth}px`));
//CONSOLE
var log = (v) => console.log(v), table = (v) => console.table(v), warn = (v) => console.warn(v);
//COOKIE
var defaultCookie = (n, v) => { if(getCookie(n) == null) document.cookie = `${n}=${v}` },
    getCookies = () => { return document.cookie },
    getCookiesSplit = () => { return document.cookie.split(";") },
    logCookies = () => log(document.cookie),
    getCookie = (n) => {
      var c = document.cookie.split("; ").find(r => r.startsWith(`${n}=`));
      return c !== undefined ? c : null;
    },
    getCookieSplit = (n) => { return getCookie(n).split("=") },
    setCookie = (n, v) => document.cookie = `${n}=${v}`,
    issetCookie = (n) => getCookie(n) != null ? true : false,
    logCookie = (n) => log(getCookie(n)),
    getCookieValue = (n) => { return getCookie(n) != null ? getCookie(n).split("=")[1] : null },
    logCookieValue = (n) => log(getCookieValue(n));
    //unsetCookie = (n) => document.cookie = issetCookie(n) === true ? `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT` : null,
    //unsetCookies = () => document.cookie = "";


function roPreventDefault() {}
