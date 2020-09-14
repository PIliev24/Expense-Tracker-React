import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { GlobalProvider } from "./context/GlobalState";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import MessageCheckbox from "./components/MessageCheckbox";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <MessageCheckbox />
      </div>
    </GlobalProvider>
  );
}

export default App;
