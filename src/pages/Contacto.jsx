import React, { useEffect} from "react";

const Contacto = () => {

  useEffect(() => {
    document.title = "Contacto Desafio 13 Floricela";
  }, [])

  return (
    <>
      <h1 className="display-1 text-warning">Contacto</h1>
      <hr />
    </>
  );
};

export default Contacto;
