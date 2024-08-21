import React, {useEffect} from 'react'

const Inicio = () => {

  useEffect(() => {
    document.title = "Inicio Desafio 13 Floricela";
  }, [])

  return (
    <>
        <h1 className='display-1 text-warning' >Inicio</h1>
        <hr />
    </>
  )
}

export default Inicio