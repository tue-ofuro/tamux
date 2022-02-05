// { renderRecursive } = require("./render");

function mount(tamuxRoot, domRoot) {
  domRoot.innerHTML = renderRecursive(tamuxRoot);
}

module.exports = {
  mount,
};