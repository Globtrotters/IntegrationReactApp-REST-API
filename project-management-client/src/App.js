// src/App.js

import "./App.css";
import { Switch, Route } from "react-router-dom";   // <== IMPORT

import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT

import ProjectListPage from "./pages/ProjectListPage";      //  <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage"; //  <== IMPORT
import EditProjectPage from "./pages/EditProjectPage";     //  <== IMPORT
 
 
function App() {
  return (
    <div className="App">
      <Navbar />
 
      <Switch>
        <Route exact path="/" component={HomePage} />        
        <Route exact path="/projects" component={ProjectListPage} />   
        <Route exact path="/projects/:id" component={ProjectDetailsPage} />
        <Route exact path="/projects/edit/:id" component={EditProjectPage} />             
      </Switch>
    </div>
  );
}
 
export default App;
