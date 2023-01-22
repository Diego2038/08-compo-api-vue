<template>
  <h1>Pokemon</h1>
  <h2 v-if="isLoading">Cargando...</h2>
  <h2 v-else-if="errorMessage">No se pudo cargar el pokemon</h2>
  <template v-else>
    <h4> {{ pokemon.name }}</h4> 
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </template>
  <div>
    <router-link :to="{ name: 'search pokemon'}">
    Buscar otro pokemon
    </router-link>
  </div>
  
</template>

<script>
import usePokemons from "../composables/usePokemons";
import { useRoute } from "vue-router";
export default {

  name:'Pokemon',

  setup(){

    const route = useRoute() 

    const { pokemon, isLoading, errorMessage } = usePokemons( route.params.id)

    return { pokemon, isLoading, errorMessage }
  }
  
  
}
</script>

<style>

</style>