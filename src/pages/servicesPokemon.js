const serviciosPokemon = {};

serviciosPokemon.getPokemons = async () => {
    debugger
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",{
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
        });
        const data = await response.json();

        if(!response.ok){
            throw new Error("Error : " +  response.statusText)
        }
        return data
    } 
    catch (error) {
        console.log(error)
    }
}


serviciosPokemon.getPokemonsLocation = async () => {

        try {
            const response = await fetch("https://pokeapi.co/api/v2/location",{
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },
            });
            const data = await response.json();
    
            if(!response.ok){
                throw new Error("Error : " +  response.statusText)
            }
            return data
        } 
        catch (error) {
            console.log(error)
        }
    }



    serviciosPokemon.getPokemonsTipo = async () => {
 
            try {
                const response = await fetch("https://pokeapi.co/api/v2/type",{
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json"
                    },
                });
                const data = await response.json();
        
                if(!response.ok){
                    throw new Error("Error : " +  response.statusText)
                }
                return data
            } 
            catch (error) {
                console.log(error)
            }
        }

export default serviciosPokemon;
