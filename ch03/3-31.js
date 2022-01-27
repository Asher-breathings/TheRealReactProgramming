function useUser(userId) {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    getUserAPI(userId).then(data => serUser(data));
  }, [userId]);
  return user;
}
function Profile({userId}) {
  const user = useUser(userId);
  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <input
        type="text" value={state.name} onChange={e => setState({...state, name : e.target.value})} />
      <input
        type="text" value={state.age} onChange={e => setState({...state, age : e.target.value})} />
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Profile />, domContainer1);