
import React from "react";
//import About from "./components/About";
import Nav from "./components/Nav";
//import Portfolio from "./components/Portfolio";
//import Contact from "./components/Contact";
//import Resume from "./components/Resume";
import "./App.css";
import Main from "./components/Main/main";



function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
