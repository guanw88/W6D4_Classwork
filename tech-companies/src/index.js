const DOMNodeCollection = require('./dom_node_collection');

const $l = (selector) => {
  let elementList;
  let domNodeCollection;
  if (typeof(selector) === "string") {
    console.log('should be css');
    elementList = document.querySelectorAll(selector);
    domNodeCollection = new DOMNodeCollection(elementList);
    debugger;

  } else if (selector instanceof HTMLElement) {
    console.log('should be html element');
    domNodeCollection = new DOMNodeCollection([selector]);
  }
  return domNodeCollection;
};

window.$l = $l;