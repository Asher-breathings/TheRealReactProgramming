function MyComponent() {
  // const [count, setCount] = React.useState({value : 0});
  const [count, setCount] = React.useState(0);
  function onClick() {
    /*
    setCount({value : count.value + 1});
    setCount({value : count.value + 1});
    */
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
  console.log('render called');

  return (
    <div>
      {/* <h2>{count.value}</h2> */}
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<MyComponent />, domContainer1);