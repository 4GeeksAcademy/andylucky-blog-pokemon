export const initialStore=()=>{
  return {
    pokemons: null,
    locations: null,
    tipos: null,
    detalles: null,
    pokeFavName: {}
  }
}

export default function storeReducer(store, action = {}) { 
  switch(action.type){


      case "get_pokemons":
        const {pokemons} = action.payload;

        return{
          ...store,
          pokemons
        };

        case "get_pokemonsLocation":
          const { locations } = action.payload;
          return {
            ...store,
            locations
          };

        case "get_pokemonsTipo":
          const {tipos} = action.payload;
          return{
            ...store,
            tipos
          };

          case "get_pokemonsDetalles":
            const {detalles} = action.payload;
            return{
              ...store,
              detalles
            };
  
            case "set_poketselected":
              debugger
            const {poke} = action.payload;
            return{
              ...store,
              pokeFavName: {
                  ...store.pokeFavName,       
                  [poke.name]: poke            
              }
            }
            case "set_poketDeselected":
              debugger
          const { pokede } = action.payload; 
          const newPokeFavName = { ...store.pokeFavName };
          delete newPokeFavName[pokede.name]; 

          return {
            ...store,
            pokeFavName: newPokeFavName
          };
            

    default:
      throw Error('Unknown action.');
  }    
}
