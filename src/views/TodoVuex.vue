<template>
  <h1>Lista de tareas de Thanos</h1>
  <h3>Cantidad: {{ $store.state.todos.length }}</h3>
  <ul v-for="todo in todos" :key="todo.text">
    <li  >
    Tarea: {{ todo.id }}) {{ todo.text }} - {{ todo.completed }}
    </li>
  </ul>
  <hr>
  <h1>Cantidad de tareas faltantes</h1>
  <h2>Tareas pendientes: {{ tareasPendientes.length }}</h2>
  <ul v-for="tarea in tareasPendientes" :key="tarea.id">
    <li> {{ tarea.text }}</li>
  </ul>

  <hr>

  <h1>Todas las tareas: {{ tareasTotal.length }}</h1>
  <h1>Todas las tareas completadas: {{ tareasCompletadas.length }}</h1>

  <hr>
  
  <button :class="{ 'active': currentTab === 'all'}"
    @click="currentTab = 'all'">
    Todos
  </button>

  <button :class="{ 'active': currentTab === 'pending'}"
    @click="currentTab = 'pending'">
    Pendientes
  </button>

  <button :class="{ 'active': currentTab === 'completed'}"
    @click="currentTab = 'completed'">
  Completados
  </button>
 

  <div>
    <ul>
      <li v-for="tarea in filtroxd" :key="tarea.id"
      :class="{ 'completed': tarea.completed}"
      @dblclick="cambiarEstado(tarea.id)"
      >
      {{ tarea.id }}. {{ tarea.text }} 
      </li>
    </ul>
  </div>


</template>

<script> 
import useTodos from "../composables/useTodos";

export default {
  setup(){
 
    const {
      currentTab,
      todos ,

      // data getters
      tareasPendientes ,
      tareasTotal ,
      tareasCompletadas ,
      filtroxd ,
      
      // Methods
      cambiarEstado ,

    } = useTodos()
     

    return {
      currentTab,
      todos,  
      tareasPendientes,
      tareasTotal,
      tareasCompletadas,
      filtroxd, 
      cambiarEstado , 

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

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active  {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}

</style>