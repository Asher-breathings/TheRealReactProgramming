const UserContext = React.createContext('');

function App() {
  return (
    <div>
      <UserContext.Provider value="mike">
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
      </UserContext.Provider>
    </div>
  )
}
function Profile() {
  return (
    <Greeting />
  )
}
function Greeting() {
  return (
    <UserContext.Consumer>
      {userName => <p>{`${userName}님 안녕하세요.`}</p>}
    </UserContext.Consumer>
  )
}
const domContainer1 = document.querySelector("#root");
ReactDOM.render(<App />, domContainer1);