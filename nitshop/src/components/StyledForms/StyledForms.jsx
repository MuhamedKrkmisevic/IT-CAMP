import React from "react";
import "./StyledForms";
import "./StyledForms.css";

function StyledForms(props) {
  return (
    <div class="class1">
      <label for="name">Unesite svoje ime</label>
      <input
        type="text"
        name="Ime"
        id="name"
        placeholder="Unesite ime"
        required
      ></input>

      <button type="posalji">Posalji</button>
      <br />
      <label for="lastname">Unesite svoje prezime</label>
      <input
        type="text"
        name="Prezime"
        id="Lastname"
        placeholder="Unesite prezime"
        required
      />

      <button type="posalji">Posalji</button>
    </div>
  );
}

export default StyledForms;
