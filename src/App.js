import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import Busqueda from "./components/Busqueda";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy API</h1>
        <header>
          <Link to="/gif/Panda">Gifs de pandas</Link>
          <Link to="/gif/Rick">Gifs de Rick</Link>
          <Link to="/gif/Morty">Gifs de Morty</Link>
          <Link to="/gif/Bart">Gifs de Bart</Link>
        </header>
        <Busqueda/>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
