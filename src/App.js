import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//styles
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";

//components
import Routes from '../src/routes/Routes';
// import NavigationBar from '../src/components/NavBar/NavigationBar';
// import Footer from '../src/components/Footer/Footer';

function App(props) {
  return (
    <div>
      {/* <NavigationBar /> */}
      {/* {props.children} */}
       <BrowserRouter>
         <Route component={Routes}/>
       </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
