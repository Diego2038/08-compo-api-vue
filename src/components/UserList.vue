<template>
  <ul> 
    <!-- <h3>ID: {{ id }}</h3>
    <h3>Nombre: {{ first_name }} {{ last_name }}</h3> 
    <h5>{{ email }}</h5>
    <img :src=" avatar" :alt="'Persona ' + id"> -->
    <slot v-for="user in users" :key="user.id" :esteUsuario="user">
    </slot> 

    <slot name="elNombre" :numeroMagico="numero">

    </slot>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  setup(){
    return {
      numero: ref(666)
    }
  }
}
</script>

<style>

</style>