// { renderRecursive } = require("./render");

let before = undefined;
let domRoot = undefined;

function mount(tamuxRoot, _domRoot) {
  before = tamuxRoot;
  _domRoot.innerHTML = renderRecursive(tamuxRoot);
  hydrateRecursive(_domRoot, tamuxRoot);
  domRoot = _domRoot;
}

function reconcile(rootRef, vdom) {
  if (rootRef == undefined) {
    rootRef = domRoot;
  }
  let childNodes = [];
  if (vdom.nodeType !== ELEMENT_NODE && vdom.nodeType !== TEXT_NODE) {
    childNodes = [vdom.render()]; // FIXME: Application Componentの場合はダメ
  } else {
    childNodes = vdom.childNodes;
  }
  if (childNodes == undefined) {
    return;
  }
  const htmlChildNodes = [...rootRef.childNodes];
  if (htmlChildNodes.length !== childNodes.length) {
    throw new Error("children length mismatch");
  }
  for (let i = 0; i < htmlChildNodes.length; i++) {
    const elm = childNodes[i];
    // propety diff 検知: stylesのみ
    // - diffあったら、renderRecursiveを呼ぶ
    if (JSON.stringify(before.styles) !== JSON.stringify(elm.styles)) {
      const htmlString = renderRecursive(elm);
      htmlChildNodes[i].outerHTML = htmlString; // TODO: outerHTML ? innerHTML ?
    }
    reconcile(htmlChildNodes[i], elm);
  }

  // TODO: 属性diff検知

  before = vdom;
}

module.exports = {
  mount,
};
