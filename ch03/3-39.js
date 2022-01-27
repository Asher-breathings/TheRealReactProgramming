const UserContext = React.createContext('');

function App() {
  const [username, setUserName] = React.useState("");
  return (
    <div>
      <UserContext.Provider value={username}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
      </UserContext.Provider>
      <input type="text" value={username} onChange={e => setUserName(e.target.value)} />
    </div>
  )
}
const Profile = React.memo(() => {
  return (
    <Greeting />
  )
});
function Greeting() {
  return (
    <UserContext.Consumer>
      {userName => <p>{`${userName}님 안녕하세요.`}</p>}
    </UserContext.Consumer>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<App />, domContainer1);