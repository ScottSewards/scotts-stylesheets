/*
$('#theme-colour-hue').value = getComputedStyle(document.documentElement).getPropertyValue('--col-theme-hue');
$('#theme-colour-output').value = getComputedStyle(document.documentElement).getPropertyValue('--col-theme-hue');
$('#theme-colour-hue').addEventListener('change', function() {
  document.documentElement.style.setProperty("--col-theme-hue", this.value);
  $('#theme-colour-output').value = this.value.toUpperCase();
  setCookie('themeColourHue', this.value);
});
$('#theme-colour-hue').addEventListener('input', function() {
  document.documentElement.style.setProperty("--col-theme-hue", this.value);
  $('#theme-colour-output').value = this.value.toUpperCase();
});

var hue = getComputedStyle(document.documentElement).getPropertyValue('--col-theme-hue');
setInterval(function() {
  hue = parseInt(hue) + 1;
  document.documentElement.style.setProperty('--col-theme-hue', hue + '');
  setCookie('themeColourHue', hue, false);
}, 100);
*/
