import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

//components
import Routes from '../src/routes/Routes';

function App() {
  return (
    <div>
       <BrowserRouter>
         <Route component={Routes}/>
       </BrowserRouter>
    </div>
  );
}

export default App;
