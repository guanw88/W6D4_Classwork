const DOMNodeCollection = require('./dom_node_collection');

const $l = (selector) => {
  let elementList;
  let domNodeCollection;
  if (typeof(selector) === "string") {
    elementList = document.querySelectorAll(selector);
    domNodeCollection = new DOMNodeCollection(elementList);
  } else if (selector instanceof HTMLElement) {
    domNodeCollection = new DOMNodeCollection([selector]);
  }
  return domNodeCollection;
};

window.$l = $l;