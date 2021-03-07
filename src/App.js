import React, { Component } from "react";
// import { Button,Nav,Navbar,Form,FormControl,Link } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CardBlock from "./components/CardBlock";

import Lorem, { someValue } from "./components/Lorem";
import "./App.css";

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <br></br>

      <main>
        <Card />
        <br></br>
        <CardBlock />
        <br></br>
        <Lorem />
        <br></br>
        <Lorem />
        <br></br>
        <Lorem />
      </main>

      <Footer />
    </div>
  );
}

export default App;
