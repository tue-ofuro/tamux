const { mount } = require("./mount");
const { Div, Text } = require("./dom/div");

test("mount", () => {
  const TamuxRoot = new Div([new Text("Hello")]);
  const domRoot = {};
  mount(TamuxRoot, domRoot);
  expect(domRoot).toEqual({
    innerHTML: "<div>Hello</div>",
  });
});
