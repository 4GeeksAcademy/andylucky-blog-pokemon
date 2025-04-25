const serviciosPokemon = {};

serviciosPokemon.getPokemons = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

        if(!response.ok){
            throw new Error("Error : " +  response.statusText)
        }
        const data = await response.json();
        return data
    } 
    catch (error) {
        console.log(error)
    }
}




serviciosPokemon.getPokemonsLocation = async () => {
        try {

            const response = await fetch("https://pokeapi.co/api/v2/location/?offset=0&limit=20");
            if(!response.ok){
                throw new Error("Error : " +  response.statusText)
            }
            const data = await response.json();
           
            return data
        } 
        catch (error) {
            console.log(error)
        }
    }





    serviciosPokemon.getPokemonsTipo = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/type")
                
                if(!response.ok){
                    throw new Error("Error : " +  response.statusText)
                }
                const data = await response.json();
                return data
            } 
            catch (error) {
                console.log(error)
            }
        }


        serviciosPokemon.getOnePokemon= async (id) => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                
                if(!response.ok){
                    console.log("Error : " + response.statusText);
                    return false; // ✅ Esto sí se ejecuta
                }
                const data = await response.json();

                return data
            } 
            catch (error) {
                console.log(error)
            }
        }



export default serviciosPokemon;
