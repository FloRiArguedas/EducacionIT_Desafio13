import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Tabla from "./components/Tabla"
import usuarios from './constants/usuarios'
import { v4 as uuidv4 } from 'uuid'; //Librería para generar ID al azar
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import NoEncontrada from "./pages/NoEncontrada";
import Navbar from "./components/Navbar";
import Efectos from "./pages/Efectos";

/* CONTENEDOR */
const InicioApp = () => {

  const url = import.meta.env.VITE_API_USUARIOS
  
  const [users, setUsers] = useState(null) //Lo inicio en null

  const [usuarioAEditar, setUsuarioAEditar] = useState(null) //Array con el usuario que quiero editar


  //AGREGO USEEFFECT PARA PETICIÓN ASINCRÓNICA

  useEffect(() => {
    console.log("Se pone el componente en la pantalla")
    ObtenerTodosLosUsuarios()
  }, [])

  const ObtenerTodosLosUsuarios = async () => {
    //Hago aquí la petición
    try {

      const res = await fetch (url)
      
      
      if (!res.ok) {
        throw new Error (`No fue posible obtener los usuarios ${res.status}`)
      }

      const data = await res.json()

      console.log(data)

      setUsers(data) //Aquí hago el set para los usuarios que llegan del backend
      
    } catch (error) {
      
    }
  }
  

  //?AGREGAR USUARIO
  const agregarUsuario = (usuario) => {
    // usuario.id = uuidv4() //Agrego el ID para el usuario
    // console.log('Agregando el usuario nuevo al array...', usuario)
    // const nuevoEstadousuarios = [...usuarios, usuario] //Nuevo array con usuario nuevo.
    // setUsers(nuevoEstadousuarios) 
  }

  //?ELIMINAR USUARIO
  const eliminarUsuario = (id) => { 
    // //Nuevo array para recorrerlo y comparar el ID
    // const nuevoEstadoUsuarios = users.filter(function(user) { 
    //   if ( user.id !== id ) {
    //     return user
    //   } else {console.log(user, 'Este es el usuario que se va a eliminar', id)}
    // })
    // setUsers(nuevoEstadoUsuarios) //Creo el nuevo array sin el usuario borrado.
  }

  //?EDITAR USUARIO

  const editarUsuario = (usuarioEditado) => {
    // const nuevoEstadoUsuarios = usuarios.map (function(user){
    //   if (user.id === usuarioEditado.id){
    //       return usuarioEditado
    //   } else {
    //     return user
    //   }
    // })
    // setUsers(nuevoEstadoUsuarios)
  }

  return (
    <>

    <BrowserRouter>

      <Navbar />
      <div className="container">
        <Routes>
          <Route path= '/' element={<Inicio />}/>
          <Route path= '/efectos' element={<Efectos />}/>
          <Route path= '/nosotros' element={<Nosotros />}/>
          <Route path= '/contacto' element={<Contacto />}/>
          <Route path= '*' element={<NoEncontrada />}/>
        </Routes>
      </div>

    </BrowserRouter>

    
    <div className="container">
      <Formulario 
        agregarUsuario={agregarUsuario}
        usuarioAEditar={usuarioAEditar}
        setUsuarioAEditar={setUsuarioAEditar}
        editarUsuario={editarUsuario}
      />
      <Tabla 
        users={users} 
        eliminarUsuario={eliminarUsuario}
        setUsuarioAEditar={setUsuarioAEditar}
      />
    </div>
   

    </>
    
  )
}

export default InicioApp


 