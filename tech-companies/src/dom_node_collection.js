class DOMNodeCollection {
  constructor (htmlElements) {
    this.htmlElements = htmlElements;
  }
  
  html (string) {
    if (string === undefined) {
      return this.htmlElements[0].innerHTML();
    } else {
      this.htmlElements[0].innerHTML = string;
    }
  }
  
  empty () {
    for (let i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].html("");
    }
  }
  
  append (el) {
    this.htmlElements.forEach(node = () => { //HALP THIS LOOKS RONG
      if (el instanceof DOMNodeCollection) {
        node.innerHTML().append(el.outerHTML());
      } else if (el instanceof HTMLElement) {
        console.log('html element...');
      }
    });
  }
}

module.exports = DOMNodeCollection;