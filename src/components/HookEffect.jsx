import React, { useEffect } from 'react'

const HookEffect = () => {

    useEffect(()=>{
        document.title = "Efectos Desafio 13 Floricela"
    })

  return (
    <div>HookEffect</div>
  )
}

export default HookEffect