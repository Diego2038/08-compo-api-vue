<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ title }}</h3>
    <button @click="changeTitle">cambiar title</button>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch
} from 'vue'

export default {
  name: 'AboutView',

  setup(){ 


    const title = ref('About')

    console.log('Setup se llamó')

    onMounted( () => {
      console.log("onMounted")
    }),

    onUpdated( () => {
      console.log("onUpdated")
    }),

    onUnmounted( () => {
      console.log("onUnmounted")
    }),

    onBeforeMount( () => {
      console.log("onBeforeMount")
    }),

    onBeforeUpdate( () => {
      console.log("onBeforeUpdate")
    }),

    onBeforeUnmount( () => {
      console.log("onBeforeUnmount")
    }),

    onErrorCaptured( () => {
      console.log("onErrorCaptured")
    }),

    onRenderTracked( () => {
      console.log("onRenderTracked")
    }),

    onRenderTriggered( () => {
      console.log("onRenderTriggered")
    }),

    onActivated( () => {
      console.log("onActivated")
    }),

    onDeactivated( () => {
      console.log("onDeactivated")
    }),

    onServerPrefetch( () => {
      console.log("onServerPrefetch")
    })

    return{
      title,
      changeTitle: () => title.value='about cambiado'
    }

  }
}
</script>
