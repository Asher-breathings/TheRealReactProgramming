function MyComponent() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    function onClick() {
      setCount(prev => prev + 1);
      setCount(prev => prev + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [])
  console.log('render called');

  return (
    <div>
      {/* <h2>{count.value}</h2> */}
      <h2>{count}</h2>
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<MyComponent />, domContainer1);