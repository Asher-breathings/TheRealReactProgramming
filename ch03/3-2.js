function Todo() {
  
  const [count, setCount] = React.useState();
  
  function onClick() {
    setCount(count+1);
  }
  return (
    <div>
      <Title title={`현재 카운트 ${count}`} />
      <button onClick={onClick}>증가</button>
    </div>
  )
}
const Title = React.memo(function(props) {
  return <p>{props.title}</p>
})

const domContainer1 = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Todo), domContainer1);