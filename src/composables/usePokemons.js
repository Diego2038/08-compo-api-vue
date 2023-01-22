import { ref } from 'vue';
import axios from 'axios';

const usePokemons =  (pokemonId = '1') => {

  const pokemon = ref();
  const errorMessage = ref();
  const isLoading = ref(false);

  const getPokemon = async ( id) => {
    if (id == null) return 
    isLoading.value = true;
    pokemon.value = null;
    
    try{
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
      pokemon.value = data;
      isLoading.value = false;
    }catch( err ){
      errorMessage.value = 'Sucedió un error'
    } 
  }


  getPokemon( pokemonId);



  return {
    pokemon,
    errorMessage,
    isLoading,

    getPokemon
  }

}

export default usePokemons;