const TextInput = React.forwardRef((props, ref) =>  {
  return (
    <div>
      <input type="text" ref={ref} />
      <button>저장</button>
    </div>
  )
}
);
function Form() {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Form />, domContainer1);