import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Basket from "./pages/Basket";
import BasketTerminal from "./pages/BasketTerminal";



function App() {

  const[theme, colorMode] = useMode();
  const [goods, setGoods] = useState(JSON.parse(localStorage.getItem('goods')) || []);
  console.log(goods);

  useEffect(() => {
    //goods to Local Storage
      localStorage.setItem('goods', JSON.stringify(goods))
  }, [goods])

  return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Basket goods={goods}/>}/>
                <Route path="/basket-terminal" element={<BasketTerminal setGoods={setGoods}/>}/> 
              </Routes>
            </BrowserRouter>  
            </div>
            <CssBaseline/>
          </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
