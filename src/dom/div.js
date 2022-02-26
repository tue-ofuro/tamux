const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

class Div {
  nodeType = ELEMENT_NODE;
  childNodes = [];
  styles = {};

  constructor(childNodes, styles = {}, onClick) {
    this.childNodes = childNodes;
    this.styles = styles;
    this.onClick = onClick;
  }

  // 子要素
  renderHTML(children) {
    return `<div style="${getInlineStyleFromObjectParam(
      this.styles
    )}">${children}</div>`;
  }
}

function getInlineStyleFromObjectParam(param) {
  let text = "";
  for (const [key, value] of Object.entries(param)) {
    text += `${key}: ${value};`;
  }
  return text;
}

class Text {
  nodeType = TEXT_NODE;
  value = "";

  constructor(value) {
    this.value = value;
  }

  renderHTML() {
    return this.value;
  }
}
module.exports = {
  Div,
  Text,
  ELEMENT_NODE,
  TEXT_NODE,
};
