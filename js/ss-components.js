class Slideshow extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', () => this.nextSlide());
  }

  static get observedAttributes() {
    return ['autoslide', 'timer'];
  }

  attributeChangedCallback(attr, value) {
    if(attr == 'timer') this.timer = value;
  }

  autoslide = false;
  get autoslide() {
    return this.hasAttribute('autoslide');
  }

  set autoslide(value) {

  }

  timer = 1000;
  get timer() {
    return this.timer;
  }

  set timer(value) {
    this.timer = value;
  }

  nextSlide() {
    alert('Next slide.');
  };
}

customElements.define('ss-slideshow', Slideshow);
customElements.whenDefined('ss-slideshow').then(() => console.log('ss-slideshow defined.'));

/*
customElements.define('slide-img', class extends Image {
constructor(height = 50, width = 100) {
super(height * 1, width * 1);
}
}, {
extends: 'img'
});

customElements.whenDefined('slide-img').then(() => {
  console.log('slide-img defined.');
});

window.onload = function() {
  var slideshows = document.getElementsByClassName('slideshow');
  Array.prototype.forEach.call(slideshows, function(slideshow) {
    var slides = slideshow.children;
    setInterval(function() {
      slideshow.appendChild(slides[0]);
    }, timeToSlide);
  });
}
*/
