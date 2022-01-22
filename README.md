# tamux

React ぽいものつくるぞ

# 今日(1/22)の目標

- 何をやるか考える(9 割)
  - Virtual DOM
    - 差分検出処理(Reconciliation) https://ja.reactjs.org/docs/faq-internals.html
      - https://ja.reactjs.org/docs/reconciliation.html
      - 初期同期
      - 変更検知
      - 差分算出
      - 変更実行
    - ファイバー (fiber) https://github.com/acdlite/react-fiber-architecture
  - JSX (React.CreateElement())
- 少しだけ実装してみる(1 割できれば)

- only in JS
  - before vs after
    - class DivElement extends HTMLElement {}
    - render(after: []HTMLElement): string
      - recursive function
        - if before.name === after.name
          - if not: after.create or after.unmount()
        - if before.attribute === after.attribute
          - if not: after.componentDidUpdate(after)

```javascript
class HTMLElement {
  create() // constructor
  unmount() // destructor
  componentDidUpdate() // change props
  abstruct render(): HTMLElement // 各々で実装してね

  children: []HTMLElement
}

class DivElement extends HTMLElement {
  tagName = 'div'

  // 子要素
  render (): string {
    return '<%s>hoge</%s>'
  }
}
type InputElement {
  value: string
  type: Enum("text")
}
class InputElement extends HTMLElement {
  // 親から変えられる変数
  props: InputElement
  // こいつ自体が持ってる全ての変数
  hidden: boolean
}

class List extends HTMLElement {
  children: []HTMLElement
  tagName = "List"

  hoge = "fasdfas"
  fafasd = "asdfasdf"
  id

  // 子要素
  render (): HTMLElement {
    return new DivElement(
      // <div>hoge</div>
      children: [
        new TextNode(value: "hoge"),
        new TextNode(value: this.fafasd),
      ]
    )
  }
}

let before: HTMLElement = new DivElement(children: [ new DivElement(),  new DivElement()])
// HTMLのrender. 副作用ゴリゴリ関数
const appRoot = document.getElementById('app')
function render (appRoot, after: HTMLElement) {
  renderRecursive(appRoot, before, after)
}

function renderRecursive(htmlContainer: TRUEHTMLDocument, before: HTMLElement, after: HTMLElement) {
  if (before.tagName !== after.tagName) {
    // TODO: destory!
    after.render()
    // htmlContainer = htmlContainer.getElementByXPATH(".//div[24]")
    // htmlContainer.insertBefore("asdf")
    // TODO: どうやってhtmlに編集しに行く？？ポインタ？xpath?とかもってないと指しに行けない
  }
  // TODO: dynamic search all attributes
  if (before.className !== after.className) {
    // TODO: changeProps
  }
  
  // TODO: list with keys
  
  
  // recursive
  if (before.children.length > after.children.length) {
    // delete??
    for (let i = 0; i<after.children.length;i++) {
      renderRecursive(before.children[i], after.children[i])
    }  
    remove before.children[それいこう]
  } else if (before.children.length < after.children.length) {
    // insert??
    for (let i = 0; i<before.children.length;i++) {
      renderRecursive(before.children[i], after.children[i])
    }  
    append after.children[それいこう]
  }
  // before.children.length === after.children.length
  for (let i = 0; i<before.children.length;i++) {
    renderRecursive(before.children[i], after.children[i])

    // keyがあったときの話: keyのmapをつくって保持して、一致したら使いまわす
    /**
     * <ul>
        <li key="duke"><div><div><div><div><div>111111</div></div></div></div></div></li>
        <li>Villanova</li>
      </ul>

      <ul>
        <li>Connecticut</li>
        <li key="duke"><div><div><div><div><div>2222</div></div></div></div></div></li>
      </ul>
    */
  }
}
```

# test
