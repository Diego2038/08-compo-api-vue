import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state() {
    return{
      
      todos : [
        { id: '1', text: 'Recolectar las piedras del infinito', completed: false },
        { id: '2', text: 'Recolectar las piedra de la sabiduría', completed: true },
        { id: '3', text: 'Recolectar las piedra del amor', completed: true },
        { id: '4', text: 'Recolectar las piedra del dinero', completed: false },
        { id: '5', text: 'Conseguir chamba', completed: false },
      ]
    }
  },
  getters: {
    tareasPendientes(state, getters, rootState){
      return state.todos.filter( todo => !todo.completed)
    },

    allTodos( state, getters, rootState ){
      // state para acceder al state del módulo
      // getters para acceder a los getters del módulo
      // rootState para acceder al state global (muy útil para los módulos)
      // console.log({state, getters, rootState})
      return [...state.todos]; // Se realiza la desestructuración para que no pueda modificarse directamente desde el getter
    },

    completedTodos( state ){
      return [...state.todos].filter( t => t.completed );
    },

    filtrarTodos: ( _, getters) => ( tab ) => { 
      switch (tab) {
        case 'all': return getters.allTodos;
        case 'pending': return getters.tareasPendientes;
        case 'completed': return getters.completedTodos; 
       
      }
    } 
  },
  mutations: {
    // modificarCompleted: (state, {id}) => { // También se puede escribir, puede ser una función o un atributo del objeto
    modificarCompleted(state, {id}){ 

      const index = state.todos.findIndex( t => t.id === id );  
      
      state.todos[index].completed = !state.todos[index].completed ; 
    },
    
    toggleTodo( state, text=''){
      if( text.length < 1) return;

      state.todos.push({
        id: uuidv4(),
        text,
        completed: false
      }) 
      
    }

  },
  actions: {
  },
  modules: {
  }
})
