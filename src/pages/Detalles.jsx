import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import serviciosPokemon from "./servicesPokemon";
import useGlobalReducer from "../hooks/useGlobalReducer";
import star from "../assets/img/star.png"
export const Detalles = () => {
    const { id } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [respon, setResponse] = useState([])
    const getDetalles = async () => {
        const respon = await serviciosPokemon.getOnePokemon(id);

        if (!respon) {
            console.log("Error al obtener detalles del Pokémon");
            return false;
        }

        setResponse(respon);

        dispatch({
            type: "get_pokemonsDetalles",
            payload: { detalles: respon }
        });
    };

    const imagenPokeLocation = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${respon.id}.png`;

    const handlerfav = () => {
        debugger
        let poke = respon
        dispatch({
            type: "set_poketselected",
            payload: { poke }
        });
    }

    useEffect(() => {
        getDetalles()
    }, [])




    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="d-flex flex-column">

                    <h3 className="mt-2">Detalles para {store.detalles?.name.toUpperCase()}</h3>
                    <p>TIpo de Specie: {store.detalles?.species.name.toUpperCase()}</p>
                    <p>Peso: {store.detalles?.weight}</p>
                    <h5>Tipos de habilidades</h5>
                    <ul className="flex-fill">
                        {store.detalles?.abilities.map(element => (
                            <li key={element.ability.name}> {element.ability.name} </li>
                        ))}
                    </ul>
                    <span className="d-flex">
                        <button className="w-50 btn btn-success  hoverWHite"><Link to={"/"}>Volver</Link></button>
                        <img onClick={() => handlerfav()} className="favorito" src={star} alt="" />
                    </span>
                </div>
                <div>
                    <span>
                        <img src={imagenPokeLocation} alt="" /></span>
                    <p className="text-success mb-0  fs-3"><strong>Puntuacion: {store.detalles?.base_experience}</strong></p>
                </div>
            </div>
            <footer className="container">

            </footer>

        </>
    )
}