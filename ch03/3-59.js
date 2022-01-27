const INITIAL_STATE = { name : 'empty', age : 0 };
function reducer(state, action) {
  switch(action.type) {
    case 'setName':
      return { ...state, name : action.name };
    case 'setAge':
      return { ...state, age : action.age };
  }
}
function Profile() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input type="text" value={state.name} onChange={e => dispatch({type : 'setName', name : e.currentTarget.value })} />
      <input type="number" value={state.age} onChange={e => dispatch({type : 'setAge', aged : e.currentTarget.value })} />
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Profile />, domContainer1);