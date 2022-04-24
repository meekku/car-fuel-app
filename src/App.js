import React from 'react';
import { Header } from './components/Header'
import { AllCars } from './components/AllCars'
import { AllCarExpenses } from './components/AllCarExpenses';
import { ExpenseList } from './components/ExpenseList';
import { AddExpense } from './components/AddExpense';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
        <Header />
        <div className = "container">
          <AllCars />
          <AllCarExpenses />
          <ExpenseList />
          <AddExpense />
        </div>
    </GlobalProvider>
  );
}

export default App;
