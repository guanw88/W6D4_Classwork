class DOMNodeCollection {
  constructor (htmlElements) {
    this.htmlElements = htmlElements;
  }
  
  html (string) {
    if (string === undefined) {
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements[0].innerHTML = string;
    }
  }
  
  empty () {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].innerHTML = "";
    }
  }
  
  append (el) {
    for (let i = 0; i < this.htmlElements.length; i++) {
      if (el instanceof DOMNodeCollection) {
        console.log('dom node collection');
        for (let j = 0; j < el.htmlElements.length; j++) {
          let a = document.createElement(el.htmlElements[j].outerHTML);
          this.htmlElements[i].appendChild(a);
        }
      } else if (el instanceof HTMLElement) {
        this.htmlElements[i].appendChild(el);
      } else if (typeof(el) === "string") {
        console.log("string");
      }
    }
  }
}

module.exports = DOMNodeCollection;