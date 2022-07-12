import React from 'react';
const GlobalState = React.createContext({ mostrar: false, setMostrar: () => {} 
});
export {GlobalState};