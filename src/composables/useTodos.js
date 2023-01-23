import { ref, computed } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore()

  const currentTab = ref('all')

  return {
    // data
    currentTab,
    todos: store.state.todos,

    // data getters
    tareasPendientes: computed( () => store.getters.tareasPendientes),
    tareasTotal: computed( () => store.getters['allTodos']),
    tareasCompletadas: computed( () => store.getters['completedTodos']),
    filtroxd: computed( () => store.getters['filtrarTodos']( currentTab.value )),
    
    // Methods
    cambiarEstado : (id) => store.commit('modificarCompleted', {id}), 
    createTodo : (text) => store.commit('toggleTodo', text), 

  }
}

export default useTodos;