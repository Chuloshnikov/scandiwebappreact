import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Basket from "./pages/Basket";
import BasketTerminal from "./pages/BasketTerminal";



function App() {

  const[theme, colorMode] = useMode();

  return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Basket/>}/>
                <Route path="/basket-terminal" element={<BasketTerminal/>}/> 
              </Routes>
            </BrowserRouter>  
            </div>
            <CssBaseline/>
          </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
