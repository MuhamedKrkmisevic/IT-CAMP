import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton/StyledButton";
import StyledHeader from "./components/StyledHeader/StyledHeader";
function App() {
  return (
    <div className="App">
      <StyledHeader></StyledHeader>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledButton innerText="CLICK"></StyledButton>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          MUHAMED-NIT
        </a>
      </header>
    </div>
  );
}

export default App;
