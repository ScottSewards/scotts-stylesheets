
<!--section id='about'>
<article>
<p>The prefered colour scheme can be set to light, dark or automatic (system settings).</p>
<p class='hide'>Select a colour scheme. This may not work for some browsers or devices.</p>
<form id='change-colour-scheme' class='hide'>
<fieldset>
<legend>Change Colour Scheme</legend>
<p>Set colour scheme:</p>
<div class='inline'>
<div class='inline'>
<input id='light-mode' type='radio' name='colour-scheme' value='0' disabled/>
<label for='light-mode'>Light</label>
</div>
<div class='inline'>
<input id='dark-mode' type='radio' name='colour-scheme' value='1' disabled/>
<label for='dark-mode'>Dark</label>
</div>
</div>
<div class='inline'>
<input id='auto-mode' type='radio' name='colour-scheme' value='2' disabled/>
<label for='auto-mode'>Automatic (system settings)</label>
</div>
</fieldset>
</form>
<script type='text/javascript'>
const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(prefersLight) document.getElementById('light-mode').checked = true;
else document.getElementById('dark-mode').checked = true;

document.getElementById('light-mode').addEventListener('change', function() {
if(this.checked) {
document.body.style.setProperty('--col-white', '#FFF');
document.body.style.setProperty('--col-black', '#111');
}
});
document.getElementById('dark-mode').addEventListener('change', function() {
if(this.checked) {
document.body.style.setProperty('--col-white', '#111');
document.body.style.setProperty('--col-black', '#FFF');
}
});
</script>
</article>
</section>

<section id='lists' class='hide'>
<h2>Lists</h2>
<div>
<h3>Descriptive List</h3>
<dl>
<dt>This is a descriptive term in a descriptive list.</dt>
<dd>This is a descriptive definition.</dd>
<dt>This is another descriptive term.</dt>
<dd>This is another descriptive definition.</dd>
</dl>
</div>
<h2>Quotes</h2>
<blockquote cite='https://www.goodreads.com/quotes/144310-the-nitrogen-in-our-dna-the-calcium-in-our-teeth'>The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.</blockquote>
<cite>This is a citation.</cite>
<q cite='http://reddit.com'>This is quote.</q>
</section>
<section id='directions' class='hide'>
<h2>Directions</h2>
<dialog>This is a dialog.</dialog>
<div class='hide'>
<h3>Details</h3>
<details open>
<summary>This is <code>summary</code> for details, click to toggle close/open.</summary>
<p>This text should be shown if the details element is opened.</p>
</details>
</div>
<div class=''>
<h3>Meter</h3>
<meter value='50' min='0' max='100'></meter>
</div>
<div class=''>
<h3>Progress</h3>
<progress value='50' max='100'>50%</progress>
</div>
</section-->
