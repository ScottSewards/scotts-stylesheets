//https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
class Slideshow extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    //console.log("observedAttributes");
    return ["autoslide", "timer"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    //console.log(`attributeChangedCallback, ${attr}, ${newValue}`);
    switch(attr) {
      case "autoslide":
        this.autoslide = newValue;
        if(this.autoslide == "true") setInterval(() => this.nextSlide(), this.timer);
        else this.addEventListener("click", () => this.nextSlide());
        break;
      case "timer":
        this.timer = newValue;
        break;
    }
  }

  connectedCallback() {
    //console.log("connectedCallback");
  }

  disconnectedCallback() {
    //console.log("disconnectedCallback");
  }

  adoptedCallback() {
    //console.log("adoptedCallback");
  }

  autoslide = false;
  get autoslide() {
    if(this.hasAttribute("autoslide")) return this.getAttribute("autoslide");
    else null;
  }
  set autoslide(value) {
    this.setAttribute("autoslide", value);
  }

  timer = 1000;
  get timer() {
    if(this.hasAttribute("timer")) return this.getAttribute("timer");
    else null;
  }
  set timer(value) {
    this.setAttribute("timer", value);
  }

  nextSlide() {
    //console.log("Next slide.");
  };
}

customElements.define("ss-slideshow", Slideshow);
customElements.define("ss-slide", class extends Image {
  constructor(height = 50, width = 100) {
    super(height * 1, width * 1);
  }
}, { extends: "img" });

//customElements.whenDefined("ss-slideshow").then(() => console.log("ss-slideshow defined."));
//customElements.whenDefined("ss-slide").then(() => console.log("ss-slide defined."));

/*
window.onload = function() {
  var slideshows = document.getElementsByClassName("slideshow");
  Array.prototype.forEach.call(slideshows, function(slideshow) {
    var slides = slideshow.children;
    setInterval(function() {
      slideshow.appendChild(slides[0]);
    }, timeToSlide);
  });
}
*/
