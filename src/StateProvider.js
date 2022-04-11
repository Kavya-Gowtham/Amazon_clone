import React, {createContext, useContext, useReducer } from 'react';

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our data and provide the datalayer to every component server
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value= { useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull the information from the datalayer
export const useStateValue = ()  => useContext(StateContext);