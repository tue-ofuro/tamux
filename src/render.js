// var { TEXT_NODE } = require("./dom/div");

function render(appRoot, after) {
  renderRecursive(appRoot, before, after);
}

function reconcile(htmlContainer, before, after) {}

function renderRecursive(tamuxVDOM) {
  let children = [];
  if (tamuxVDOM.nodeType !== TEXT_NODE) {
    children = tamuxVDOM.childNodes.map(renderRecursive);
  }
  return tamuxVDOM.render(children.join(""));
}

//export default subtract; ES6 , require babel
//Node CommonJS module system:
module.exports = {
  renderRecursive,
};