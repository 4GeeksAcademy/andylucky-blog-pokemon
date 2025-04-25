import { useState } from "react"
import { useNavigate } from "react-router-dom";
import serviciosPokemon from "./servicesPokemon";


export const  Buscar = () => {
    const [elemBusqueda, selectElemBusqueda] = useState("")
    const navigate = useNavigate()
    
    const handlerSubmit = (e) => {
        e.event.preventDefault();
        console.log(elemBusqueda)
        }

    const handerCambioBusqueda = (e) => {
        selectElemBusqueda(e.target.value);
        console.log(e.target.value)
    }
    const handlerClickBusqueda = async () => {
        const response = await serviciosPokemon.getOnePokemon(elemBusqueda);
        if(!response || elemBusqueda === ""){
            return
        }
        navigate(`/detalles/${elemBusqueda}`)
    }

    return (

        <form className="mt-2" onSubmit={handlerSubmit}>
        <input type="text" value={(elemBusqueda)} onChange={handerCambioBusqueda} />
        <input type="button" value={"Buscar por nombre"} onClick={handlerClickBusqueda} />
    
        </form>

    )
}