<template>

  <div class="modal-background fade-in"
  @click.self="$emit('onClose')">

    <div class="modal-container"> 

      <slot name="headerx"></slot>
      <slot name="bodyx"></slot>
      <slot name="footerx"></slot>

      

      <div class="bonito">

        <slot name="exposed" :newTitle="newTitle" hola="mundo"></slot>
      </div>


      <slot name="addTodo"> </slot>


      <!-- <slot class="center"> 
        <div class="center">
          No hay contenido
        </div>
      </slot> -->

    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'Modal',
  emits:['onClose'],
  props:{
    title: {
      type: String,
      required: false,
      default: 'aaa'
    }
  },
  setup(props, context){
    console.log({props,context})

    return {
      newTitle : props.title.toUpperCase()
    }
  }

}
</script>

<style scoped>

.bonito {
  color: aqua;
}
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>