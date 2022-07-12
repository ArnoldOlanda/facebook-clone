import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'

export const GlobalProvider = ({ children }) => {

    const [mostrar, setMostrar] = useState(false);

    const onMostrarChange = (showHide) => {
        setMostrar(showHide)
    }

    return (
        <GlobalContext.Provider
            value={{
                mostrar,
                onMostrarChange
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
