import React from 'react';
import { Header } from './components/Header'
import { AllCars } from './components/AllCars'
import { AllCarExpenses } from './components/AllCarExpenses';
import { ExpenseList } from './components/ExpenseList';
import { AddExpense } from './components/AddExpense';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <div className = "container">
          <AllCars />
          <AllCarExpenses />
          <ExpenseList />
          <AddExpense />
        </div>
    </div>
  );
}

export default App;
