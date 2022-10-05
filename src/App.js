
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
let Component
// eslint-disable-next-line default-case
switch (window.location.pathname) {
  case "/":
    Component = <AboutMe />
    break
}

  return (
    <div className="App">
      <NavBar />
      {Component}
      <footer >
      <Footer />
      </footer>
    </div>
  );
}

export default App;
