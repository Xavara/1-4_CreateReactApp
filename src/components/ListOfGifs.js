import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [loading, setLoading] = useState(true )
  const [gifs, setGifs] = useState([]);

  useEffect(
    
    function () {
      setLoading(true)
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs)
        setLoading(false);
      });
      
    },
    [keyword]
  );

  if (loading) return <p>Cargando...</p>

  return (
    <>
      {
      gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))
      }
    </>
  );
}
