import React from 'react';
import { Header } from './components/Header'
import { AllCars } from './components/AllCars'
import { EstimatedKilometersCalc } from './components/EstimatedKilometers';
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
          <EstimatedKilometersCalc />
          <ExpenseList />
          <AddExpense />
        </div>
    </GlobalProvider>
  );
}

export default App;
