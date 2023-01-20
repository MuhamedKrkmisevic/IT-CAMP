import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton/StyledButton";
import StyledInput from "./components/StyledInput/StyledInput";
import StyledHeader from "./components/StyledHeader/StyledHeader";
import StyledForms from "./components/StyledForms/StyledForms";

const App = () => {
  const [innerText, setInnerText] = useState("");
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    clicked ? setInnerText("clicked") : setInnerText("Click me");
  }, [clicked]);
  function buttonClick() {
    setClicked(!clicked);
  }
  function onChangeFunctions(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <StyledHeader></StyledHeader>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledButton innerText={innerText} onClickHandler={buttonClick} />
        <StyledInput onChangeHandler={onChangeFunctions} value={inputValue} />
        <StyledForms />
        <a
          className="App-link"
          href="https://github.com/MuhamedKrkmisevic"
          target="_blank"
          rel="noopener noreferrer"
        >
          MUHAMED-NIT
        </a>
      </header>
    </div>
  );
};
export default App;
