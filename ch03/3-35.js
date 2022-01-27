function Profile() {
  const [age, setAge] = React.useState(0);
  const [name, setName] = React.useState(undefined);

  React.useEffect(()=> {
    setAge(23);
  }, []);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <input
        type="text" value={name} onChange={e => setName(e.target.value)} />
      <input
        type="text" value={age} onChange={e => setAge(e.target.value)} />
    </div>    
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Profile />, domContainer1);