
function MyComponent() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    function onClick() {
      setCount(prev => prev + 1);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  })
  return (
    <div>
      {count}
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<MyComponent />, domContainer1);