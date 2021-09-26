// src/App.js

import "./App.css";
import { Switch, Route } from "react-router-dom";   // <== IMPORT

import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT

function App() {
  return (
    <div className="App">
      
     {/*  ADD <Navbar>, <Switch> & <Route>  */}
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
      </Switch>
      
    </div>
  );
}

export default App;
