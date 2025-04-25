import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Navbar = () => {
const {store, dispatch} =useGlobalReducer();

	const setContactoAEliminar = (pokede) => {
		console.log("click eliminar")
		dispatch({
			type: "set_poketDeselected",
			payload: {pokede}  
		})
	}
		


	return (
		<nav className="navbar navbar-light bg-light d-flex flex-column">
			<div className="container d-flex">
			<h3 className="flex-2">Los Pokemons</h3> 
			<span className="flex-2 ms-auto">Hay un total de {store.pokemons?.length} Pokemons</span>
			<div className="ms-auto dropdown flex-2">
				<button className="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
						Poke Favoritos
				</button>
					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">


					{Object.keys(store.pokeFavName).length ? Object.keys(store.pokeFavName).map((key) => {
						const poke = store.pokeFavName[key];
						return (
							
		
							<li className=" listapoke d-flex mr-2 " key={[poke.name]}>
								<a className="dropdown-item" href="#">
									Poke: {poke.name}
								</a>
								<i className="bi bi-trash text-secondary" onClick={() => setContactoAEliminar(poke)} style={{ cursor: "pointer" }}></i>
							</li>
						);
					}) : (
						<li kye={"noid"}>
							<a className="dropdown-item" href="#">
								No hay pokemones
							</a>
						</li>
					)}

					</ul>
		   </div>
			</div>
			
			
		</nav>
	);
};





