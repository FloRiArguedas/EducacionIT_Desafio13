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
const Usuarios = () => {

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
  const agregarUsuario = async (usuario) => {

    try {

      const options = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuario)
      }
      //HAGO LA PETICIÓN
      const res = await fetch (url, options)
      
      if (!res.ok) {
        throw new Error (`No fue posible agregar el usuario ${res.status}`)
      }

      const dataNuevoUsuario = await res.json()
      console.log(dataNuevoUsuario)

      //CAMBIO EL ESTADO DE REACT PARA RENDERIZAR

      const nuevoEstadoUsuarios = [...users, dataNuevoUsuario]
      setUsers(nuevoEstadoUsuarios)

      
    } catch (error) {
      console.error(error)
    }

  }

  //?ELIMINAR USUARIO
  const eliminarUsuario = async (id) => { 
   
    try {
      
      //HAGO LA PETICIÓN
      const urleliminar = url + id
      
      const options = {
        method: 'DELETE'
      }

      const res = await fetch (urleliminar, options)

      if (!res.ok) {
        throw new Error (`No fue posible eliminar el usuario ${res.status}`)
      }

      const dataEliminado = await res.json()

      const data = {
        id: id,
        usuario: dataEliminado
      }

      //CAMBIO EL ESTADO DE REACT PARA RENDERIZAR

      const nuevoEstadoUsuarios = users.filter ( user => user.id !== data.id)
      setUsers(nuevoEstadoUsuarios)

   
    } catch (error) {
      console.error(error)
    }

  }

  //?EDITAR USUARIO

  const editarUsuario = async (usuarioEditado) => {

    try {

      const options = {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuarioEditado)
      }

      const urlEdicion = url + usuarioEditado.id

      console.log(urlEdicion)

      //HAGO LA PETICIÓN
      const res = await fetch (urlEdicion, options)
      
      if (!res.ok) {
        throw new Error (`No fue posible editar el usuario ${res.status}`)
      }

      const dataEditado = await res.json()
      console.log(dataEditado)

      //CAMBIO EL ESTADO DE REACT PARA RENDERIZAR

      const nuevoEstadoUsuarios = users.map (user => (user.id === usuarioEditado.id) ? usuarioEditado : user)
      setUsers(nuevoEstadoUsuarios)

      
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
    
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

export default Usuarios


 