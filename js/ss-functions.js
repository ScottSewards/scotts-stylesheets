
var addDropDownButtons = () => document.querySelectorAll(".drop-down-button").forEach((button) => button.addEventListener("click", () => button.parentElement.classList.toggle("active")));
var setImageIntrinsicWidth = () => document.querySelectorAll("img").forEach((img) => img.setAttribute("style", `max-width: ${img.naturalWidth}px`));

// COOKIE FUNCTIONS
var getCookie = (name, element = 1) => {
  const cookie = document.cookie.split("; ").find(row => row.startsWith(`${name}=`));
  return cookie !== undefined ? cookie.split("=")[element] : null;
}
var getCookieValue = (value) => { return getCookie(value, 0); }
var setCookie = (name, value) => document.cookie = `${name}=${value}`;
var issetCookie = (name) => getCookie(name) !== null ? true : false;
var issetCookieValue = (value) => getCookieValue(value) !== null ? true : false;
var printCookie = (name) => log(document.cookie.split("; ").find(row => row.startsWith(`${name}=`)) !== null ? `${name}=` + getCookie(name) : "Cookie does not exist.");
var printCookies = () => table(document.cookie);
var unsetCookie = (name) => document.cookie = issetCookie(name) === true ? `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT` : null;
//var unsetCookies = () => log("");

var log = (value) => console.log(value);
var table = (value) => console.table(value);
