const Profile = React.forwardRef((props, ref) => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);

  React.useImperativeHandle(ref, () => ({
    addAge : value => setAge(age + value),
    getNameLength : () => name.length 
  }))

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
    </div>
  )
})
function Parent() {
  const profileRef = React.useRef();
  const onClick = () => {
    if(profileRef.current) {
      console.log('current name length : ', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<Parent />, domContainer1);