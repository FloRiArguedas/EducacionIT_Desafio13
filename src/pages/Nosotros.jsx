import React, {useEffect}  from 'react'

const Nosotros = () => {

  useEffect(() => {
    document.title = "Nosotros Desafio 13 Floricela";
  }, [])

  return (
    <>
        <h1 className='display-1 text-warning' >Nosotros</h1>
        <hr />
    </>
  )
}

export default Nosotros