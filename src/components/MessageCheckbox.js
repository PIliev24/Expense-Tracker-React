import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function MessageCheckbox() {
  const { checkboxClick } = useContext(GlobalContext);

  return (
    <>
      <h4>
        Alert when the balance goes below 0
        <input
          id="checkboxForMessage"
          type="checkbox"
          onClick={() =>
            checkboxClick(document.getElementById("checkboxForMessage").checked)
          }
        ></input>
      </h4>
    </>
  );
}
