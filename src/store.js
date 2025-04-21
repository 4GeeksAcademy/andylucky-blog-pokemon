export const initialStore=()=>{
  return {
    results: null,
    locations: null,
    tipos: null
  }
}

export default function storeReducer(store, action = {}) { 
  switch(action.type){
   
    // case 'add_task':

    //   const { id,  color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };

      case "get_pokemons":
        const {results} = action.payload;

        return{
          ...store,
          results
        };
        case "get_pokemonsLocation":
        const {locations} = action.payload;

        return{
          ...store,
          locations
        };
        case "get_pokemonsTipo":

          const {tipos} = action.payload;
  
          return{
            ...store,
            tipos
          };
  


    default:
      throw Error('Unknown action.');
  }    
}
