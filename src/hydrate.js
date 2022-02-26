function hydrateRecursive(rootRef, vdom) {
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
    if (elm.onClick != undefined) {
      hydrate(htmlChildNodes[i], elm);
    }
    // FIXME: application Componentが来る可能性もあるので省く
    hydrateRecursive(htmlChildNodes[i], elm);
  }
}

function hydrate(ref, vdom) {
  // 具体的なhtml Refが必要
  ref.addEventListener("click", vdom.onClick, false);
}
