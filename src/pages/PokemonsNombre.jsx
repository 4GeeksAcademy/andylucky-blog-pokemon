
import serviciosPokemon from "./servicesPokemon.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import star from "../assets/img/star.png"

export const PokemonsNombre = () => {

    const {store, dispatch} =useGlobalReducer();
    
    const getPokemons = async ()=> {
        const thePokemosn = await serviciosPokemon.getPokemons();
        
        dispatch({
            type: "get_pokemons",
            payload: {results: thePokemosn.results}
        })
    }

   


    useEffect(()=> {
    getPokemons();
   
    console.log(store.results)

    },[])

    return (
        <div className="container">
            <h3 className="my-3 custom-h3-color1">Por nombre </h3>
            <div className="row d-flex flex-nowrap overflow-auto">
          {store && store.results?.map((poke) => {
            
            const pokeId = poke.url.split("/")[6];
            const imagenPoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
          
            
            return  <div className="col-sm-5 col-md-5 col-lg-2 col-xl-2" key={Number(pokeId)}>

                    <div className="card" >
                    <img className="card-img-top" src={imagenPoke} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title" style={{height:"48px"}} >Nombre: { poke.name}</h5>
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