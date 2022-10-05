
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Footer from "./components/Footer";
import ContactMe from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
let Component
// eslint-disable-next-line default-case
switch (window.location.pathname) {
  case "/":
    Component = <AboutMe />
    break
    case "/projects":
    Component = <Projects />
    break
    case "/contactMe":
    Component = <ContactMe />
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
