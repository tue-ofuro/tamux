// var { TEXT_NODE } = require("./dom/div");

function render(appRoot, after) {
  renderRecursive(appRoot, before, after);
}

function renderRecursive(tamuxVDOM) {
  let children = [];
  if (tamuxVDOM.nodeType === ELEMENT_NODE) {
    children = tamuxVDOM.childNodes.map(renderRecursive);
  }
  // Raw HTML
  if (tamuxVDOM.renderHTML) {
    return tamuxVDOM.renderHTML(children.join(""));
  }
  // Application Component
  if (tamuxVDOM.render) {
    return renderRecursive(tamuxVDOM.render());
  }
  console.log(tamuxVDOM);
  throw new Error(`Unknown VDOM`);
}

//export default subtract; ES6 , require babel
//Node CommonJS module system:
module.exports = {
  renderRecursive,
};
