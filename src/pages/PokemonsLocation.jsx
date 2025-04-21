
import serviciosPokemon from "./servicesPokemon.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import star from "../assets/img/star.png"

export const PokemonsLocation = () => {

    const {store, dispatch} =useGlobalReducer();
    
    const getPokemonsLocation = async ()=> {
        const thePokemosnLocation = await serviciosPokemon.getPokemonsLocation();
        
        dispatch({
            type: "get_pokemonsLocation",
            payload: {locations: thePokemosnLocation.results}
        })


    }


    useEffect(()=> {
        getPokemonsLocation()
    console.log(store.locations)

    },[])

    return (
        <div className="container">
            <h3 className="my-3 custom-h3-color1">Por Localizacion </h3>
            <div className="row d-flex flex-nowrap overflow-auto">
          {store && store.locations?.map((poke) => {
            const pokeId = poke.url.split("/")[6];
             const imagenPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
          
            
            return  <div className="col-sm-5 col-md-5 col-lg-2 col-xl-2 " key={Number(pokeId)}>

                    <div className="card" >
                        <img className="card-img-top" src={imagenPoke} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title" style={{height:"48px"}} >Ciudad: { poke.name}</h5>
                           <div className="d-flex d-flex justify-content-around">
                            <a href="#" className="btn btn-primary">Detalles</a>
                            <img className="favorito" src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
    
        
          })}
          </div>
        </div>



    )

}