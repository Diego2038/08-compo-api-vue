<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironMan }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="cambiarIronMan">Cambiar ironMan</button>
    <button @click="cambiarHulk">Cambiar hulk</button>
    <hr>
    <h3>{{ ironManVida }}</h3>
    <h3>{{ hulkVida }}</h3>

    <button @click="cambiarVidaIronMan">Cambiar Vida Ironman</button> 
    <button @click="cambiarVidaHulk">Cambiar Vida hulk</button>    
    <hr>
    <p>En conclusión, ref es míl veces mejor</p> 

  </div>
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  name: 'HomeView',  
  setup(){
    const ironMan = ref({nombre:'Tony', edad:50})
    const hulk = reactive({nombre:'Bruce', edad:45})

    const ironManVida = reactive(false)
    const hulkVida = ref(true)

    const cambiarVidaIronMan = () => {
      ironMan = !ironMan
    }

    const cambiarVidaHulk = () => {
      hulkVida.value = ! hulkVida.value
    } 

    return {
      ironMan,
      hulk,
      ironManVida,
      hulkVida,

      cambiarIronMan : () => {
        ironMan.value.edad = 55
      },
      cambiarHulk: () => {
        hulk.edad = 50
      },
      cambiarVidaIronMan,
      cambiarVidaHulk
    }
  }
}
</script>
