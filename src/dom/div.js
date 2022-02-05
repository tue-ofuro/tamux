const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

class Div {
  nodeType = ELEMENT_NODE;
  childNodes = [];

  constructor(childNodes) {
    this.childNodes = childNodes;
  }

  // 子要素
  render(children) {
    return `<div>${children}</div>`;
  }
}

class Text {
  nodeType = TEXT_NODE;
  value = "";

  constructor(value) {
    this.value = value;
  }

  render() {
    return this.value;
  }
}
module.exports = {
  Div,
  Text,
  ELEMENT_NODE,
  TEXT_NODE,
};
