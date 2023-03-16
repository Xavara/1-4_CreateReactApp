import React, { useState } from "react";
import { Link } from "wouter";

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="buscar">Busqueda: </label>
        <input
          type="text"
          id="buscar"
          name="buscar"
          onChange={(e) => {
            setBusqueda(`/gif/${e.target.value}`);
          }}
        />
        <h3><Link to={busqueda}>Buscar</Link></h3>
      </form>
    </div>
  );
};

export default Busqueda;
