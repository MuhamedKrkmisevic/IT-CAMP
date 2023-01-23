import "./App.css";
import CustomForm from "./components/CustomForm/CustomForm";
import CustomDiv from "./components/CustomDiv/CustomDiv";
import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState("");

  function dataGrabber(name, lastName) {
    let fullName = name + " " + lastName;
    console.log(fullName);
    setFullName(fullName);
  }
  return (
    <div className="App">
      <header className="App-header">
        <CustomDiv>
          <h1>{fullName}</h1>
        </CustomDiv>
        <CustomForm sendData={(name, lName) => dataGrabber(name, lName)} />
      </header>
    </div>
  );
};

export default App;
