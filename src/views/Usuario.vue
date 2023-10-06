<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h1 v-else>Usuarios</h1>
  
  <h6 v-if="errorMessage">{{ errorMessage }}</h6>

  <div v-if="!isLoading && !errorMessage">
    <user-list :users="users" >
      <template v-slot="{ esteUsuario }">
        <h4> {{ esteUsuario.first_name }} {{ esteUsuario.last_name }}</h4> 
        <h6> {{ esteUsuario.email }}</h6> 
        <img :src="esteUsuario.avatar" :alt="esteUsuario.id">
        <hr>
      </template>
      

      <template #elNombre="equisde">
        <h6>El número que se consigue con Scoped slots es: {{ equisde.numeroMagico }}</h6>
      </template>
    </user-list>
    
  </div>

  <button @click="disminuirPage ">Atrás</button>
    <button @click="aumentarPage ">Adelante</button>
    <span>Página {{ currentPage }}</span>
    

</template>

<script> 
import useUsers from "../composables/useUsers";
import UserList from "@/components/UserList.vue";
export default {
  name: 'Usuario',
  components: { UserList },
  setup(){

    const { currentPage, errorMessage, isLoading, users, aumentarPage, disminuirPage } = useUsers()

    return {
      currentPage, errorMessage, isLoading, users, aumentarPage, disminuirPage 
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