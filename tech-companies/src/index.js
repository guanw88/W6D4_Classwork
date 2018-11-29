const DOMNodeCollection = require('./dom_node_collection');

const $l = (selector) => {
  let elementList;
  if (typeof(selector) === "string") {
    elementList = document.querySelectorAll(selector);
    const domNodeCollection = new DOMNodeCollection(elementList);
  } else if (selector instanceof HTMLElement) {
    const domNodeCollection = new DOMNodeCollection([selector]);
  }
  return domNodeCollection;
};

window.$l = $l;