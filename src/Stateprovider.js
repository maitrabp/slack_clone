import React from 'react'
import { createContext, useContext, useReducer} from "react";

export const Statecontext = createContext(); //Data layer where we can push info and pull from

export const Stateprovider = ({reducer, initialState, children}) => (
    <Statecontext.Provider value={useReducer(reducer, initialState)}> {/*essentially this is our data layer*/}
        {children}
    </Statecontext.Provider>
);

export const useStateValue = () => useContext(Statecontext);
