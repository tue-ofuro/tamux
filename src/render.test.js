//import * as myModule from 'render.js'; ES6, require babel.
const { renderRecursive } = require("./render");
const { Div, Text } = require("./dom/div");

test("renderRecursive", () => {
  const TamuxRoot = new Div([new Text("Hello")]);
  const given = renderRecursive(TamuxRoot);
  expect(given).toBe("<div>Hello</div>");
});
