import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Swal = require("sweetalert2");

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  if (total < 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text:
        "With this transaction your balance goes below 0! You should do something about that!",
    });
  }

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}
