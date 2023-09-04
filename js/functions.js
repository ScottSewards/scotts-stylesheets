var setDropDowns = () => document.querySelectorAll(".drop-down-button").forEach((b) => b.addEventListener("click", () => b.parentElement.classList.toggle("active"))),
    setImgIntrinsicWidth = (e) => document.querySelector(e).setAttribute("style", `max-width: ${e.naturalWidth}px`),
    setAllImgIntrinsicWidth = () => document.querySelectorAll("img").forEach((e) => el.setAttribute("style", `max-width: ${e.naturalWidth}px`));

// Console
var log = (v) => console.log(v), info = (v) => console.log(v), table = (v) => console.table(v), warn = (v) => console.warn(v), error = (v) => console.error(v);

// Cookies
var getCookies = () => { return document.cookie },
    splitCookies = () => { return getCookies().split(";") },
    getCookie = (k) => { return splitCookies().trim().find(r => r.startsWith(`${k}=`)); },
    splitCookie = (k) => { return getCookie(k).split("=") },

    setCookie = (k, v) => document.cookie = `${k}=${v};`,
    defaultCookies = (a) => Object.entries(a).forEach((e) => { if(getCookie(e[0]) == undefined) setCookie(e[0], e[1]) }),
    defaultCookie = (k, v) => { if(getCookie(n) == undefined) setCookie(k, v); },

    logCookies = () => console.log(getCookies()),
    logCookie = (k) => console.log(getCookie(k)),

    issetCookie = (k) => getCookie(k) != undefined ? true : false, // NEEDS getCookie
    getCookieValue = (k) => { return issetCookie(k) ? getCookie(k).split("=")[1] : null }, // NEEDS issetCookie
    logCookieValue = (k) => console.log(getCookieValue(k)) // NEEDS getCookieValue
    ;
    //unsetCookie = (n) => document.cookie = issetCookie(n) === true ? `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT` : null,
    //unsetCookies = () => document.cookie = "";
    //setCookieExpires()
    //getCookieExpires

// Cookies
/*
var setCookie = (k, v) => document.cookie = `${k}=${v};path=;`,
		getCookies = () => { return document.cookie },
    splitCookies = () => { return getCookies().split(";"); },
    getCookie = (k) => { return splitCookies().trim().find(r => r.startsWith(`${k}=`)); },
		issetCookie = (k) => { return getCookie(k) != undefined ? true : false; },
		logCookie = (k) => console.log(getCookie(k)),
    splitCookie = (k) => { return getCookie(k).split("="); },
		defaultCookie = (k, v) => { if(!issetCookie(k)) setCookie(k, v); },
		defaultCookies = (a) => Object.entries(a).forEach((e) => { if(issetCookie(e[0])) setCookie(e[0], e[1]) }),
		unsetCookie = (n) => document.cookie = issetCookie(n) ? `${n}=; Max-Age=-99999999` : null,
    getCookieValue = (k) => { return issetCookie(k) ? getCookie(k).split("=")[1] : null }, // NEEDS issetCookie
    logCookieValue = (k) => console.log(getCookieValue(k)) // NEEDS getCookieValue
		logCookies = () => console.log(getCookies());
    //unsetCookies = () => document.cookie = "";
    //setCookieExpires()
    //getCookieExpires

		unsetCookieDomain = (k) => {

		}
*/
