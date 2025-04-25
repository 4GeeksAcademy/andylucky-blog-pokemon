

import { CardPokemon } from "./CardPokemon.jsx";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Buscar } from "./Buscar.jsx";

export const Home = () => {
	const {store, dispatch} =useGlobalReducer();

	return (
		<>
		<div className="containter d-flex justify-content-center"><Buscar /></div>
		<div className="container">
            <h3 className="my-3 custom-h3-color1">Por nombre </h3>
            <div className="row d-flex flex-nowrap overflow-auto">
			{store.pokemons?.map((poke) => {
			const id = poke.url.split("/")[6];
			const imagenPokeName = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			return <CardPokemon theId={id} titulo={"Nombre"} key={`pokemon-${id}`} name={poke.name} imgUrl={imagenPokeName} />;
			})}
   			</div>
   		</div>

		   <div className="container">
            <h3 className="my-3 custom-h3-color1">Por Localizacion </h3>
            <div className="row d-flex flex-nowrap overflow-auto">
			{store.locations?.map((location) => {
			const id = location.url.split("/")[6];
			const imagenPokeLocation = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			return <CardPokemon theId={id} titulo={"Localizacion"} key={`location-${id}`} name={location.name} imgUrl={imagenPokeLocation} />;
			})} 
			</div>
			</div>


			
			<div className="container">
            <h3 className="my-3 custom-h3-color1">Por Tipo de poder </h3>
            <div className="row d-flex flex-nowrap overflow-auto">
			{store.locations?.map((location) => {
			const id = location.url.split("/")[6];
			const imagenPokeLocation = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
			return <CardPokemon theId={id} titulo={"Poderes"} key={`location-${id}`} name={location.name} imgUrl={imagenPokeLocation} />;
			})} 
			</div>
			</div>

	   </>
	);
}; 