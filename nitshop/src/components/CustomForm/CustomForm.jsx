import React, { useState } from "react";
import StyledInput from "../StyledInput/StyledInput";
import StyledButton from "../StyledButton/StyledButton";

const CustomForm = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }

  function lastNameHandler(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <label>Username</label>
      <br />
      <StyledInput onChangeHandler={nameHandler} value={name} />
      <br />
      <StyledInput onChangeHandler={lastNameHandler} value={lastName} />
      <br />
      <StyledButton
        onClickHandler={() => props.sendData(name, lastName)}
        innerText="Send"
      />
    </div>
  );
};

export default CustomForm;
