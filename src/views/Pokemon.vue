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
import { onBeforeRouteLeave, useRoute } from "vue-router";
import { watch } from 'vue';
export default {

  name:'Pokemon',

  setup(){

    const route = useRoute() 

    const { pokemon, isLoading, errorMessage, getPokemon } = usePokemons( route.params.id)

    // watch( route.params.id, (value, previousValue) => {
    //   console.log(value, previousValue)
    // }) // sólo sirve con ref que no sean getters setters

    watch( () => route.params.id, 
    (value, prevVal) => console.log(value, prevVal))

    watch( () => route.params.id,
      (   ) => getPokemon( route.params.id ))
    
    onBeforeRouteLeave( () => {
      const answer = window.confirm('¿Desea salir de aquí?')
      return answer
    })

    

    return { pokemon, isLoading, errorMessage }
  }
  
  
}
</script>

<style>

</style>