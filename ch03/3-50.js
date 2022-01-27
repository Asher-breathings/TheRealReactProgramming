const INITIAL_TEXT = "asdfasdf";
function Form() {
  const [text, setText] = React.useState(INITIAL_TEXT);
  const [showText, setShowText] = React.useState(true);

  const setInitialText = React.useCallback(ref => ref && setText(INITIAL_TEXT), [])
  return (
    <div>
      {showText && (
        <input type="text" ref={setInitialText} value={text} onChange={e => setText(e.target.value)} />
      )}
      <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Form />, domContainer1);