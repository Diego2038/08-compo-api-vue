<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h1 v-else>Usuarios</h1>
  
  <h6 v-if="errorMessage">{{ errorMessage }}</h6>

  <div v-if="!isLoading && !errorMessage">
    <ul>
      <li v-for="{ id, first_name, last_name, email, avatar} in users" :key="id">
        <h3>ID: {{ id }}</h3>
        <h3>Nombre: {{ first_name }} {{ last_name }}</h3> 
        <h5>{{ email }}</h5>
        <img :src=" avatar" :alt="'Persona ' + id">
      </li>
    </ul>
  </div>

  <button @click="disminuirPage">Atrás</button>
    <button @click="aumentarPage">Adelante</button>
    <span>Página {{ currentPage }}</span>

</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  name: 'Usuario',

  setup(){

    const users = ref([])
    const isLoading = ref(false)
    const currentPage = ref(1)
    const errorMessage = ref(null)
    
    const requestApi = async (page = 1) => {
      
      if (page <= 0 ) page = 1
      
      isLoading.value = true

      const { data } = await axios.get('https://reqres.in/api/users', {
        params: {
          page
        }
      })  
 
      // console.log( data.data )   

      if( data.data.length > 0 ){
        users.value = data.data
        currentPage.value = page 
        errorMessage.value = false
      } else if ( currentPage.value > 0 ) {
        errorMessage.value = "No hay más usuarios"
        errorMessage.value = true
      }
      isLoading.value = false
 
    }

    const disminuirPage = () => {
      if( currentPage.value < 1 ) {
        currentPage.value = 1
      } else {
        currentPage.value --
      }

      requestApi( currentPage.value )
    }

    const aumentarPage = () => {
      currentPage.value++
      requestApi( currentPage.value )
    }

    requestApi()

    return{
      currentPage,
      errorMessage,
      isLoading,
      users,
      
      aumentarPage,
      disminuirPage,
    }
  }
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  h2 {
    text-align: center;
    width: 100%;
  }

  ul {
    width: 250px;
  }
</style>