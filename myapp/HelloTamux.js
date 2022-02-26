// Application Component
class HelloTamux {
  styles = {};

  onClick() {
    console.log("clicked! Hello Tamux!");
    console.log(this, this.styles);
    this.styles.color = "red";
    this.styles["font-weight"] = "bold";
    this.styles["font-size"] = "68px";
    // Tamux.forceRender();
    reconcile(undefined, this);
  }

  render() {
    return new Div([
      new Div([new Text("Hello Tamux!")], {}, this.onClick.bind(this)),
      new Div([new Text("Hello Tamux!")], {}, this.onClick.bind(this)),
      new Div([new Text("Hello Tamux!")], {}, this.onClick.bind(this)),
      new Div([new Text("Hello")], this.styles),
      new Div([new Text("Hello")], this.styles),
    ]);
  }
}
