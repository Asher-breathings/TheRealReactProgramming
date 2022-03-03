
function Timer({initialTotalSeconds}) {
  const [state, dispatch] = React.useReducer(reducer, {
    hour : Math.floor(initialTotalSeconds / 3600),
    minute : Math.floor((initialTotalSeconds % 3600) / 60),
    second : initialTotalSeconds % 60
  })
  React.useEffect(() => {
     const id = setInterval(dispatch, 1000);
     return () => clearInterval(id);
  })
  const { hour, minute, second } = state;
  return (
    <p>
      <span>{hour}</span>
      <span>:</span>
      <span>{minute}</span>
      <span>:</span>
      <span>{second}</span>
      </p>
  )
}

function reducer(state) {
  const { hour, minute, second } = state;
  if(second) {
    return { ...state, second : second - 1}

  } else if(minute) {
    return { ...state, minutes : minute - 1, second : 59}
  } else if(hour) {
    return { ...state, hour : hour - 1, second : 59, minute : 59 }
  } else {
    return state;
  }
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Timer initialTotalSeconds={36000}/>, domContainer1);