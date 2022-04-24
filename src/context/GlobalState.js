import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    expenses: [
        { id: 1, text:'Car named Oscar', amount: -20 },
        { id: 2, text:'Car named Ginny', amount: 300 },
        { id: 3, text: 'Car named Sally', amount: -10 },
        { id: 4, text: 'Car named Bob', amount: 150 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        expenses:state.expenses
    }}>
        {children}
    </GlobalContext.Provider>);
}