<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir modal</button>
  <modal v-if="isOpen"
    title="Hola mundo"
    otraCosa="Otro xd"
    @onClose="closeModal">
    <template v-slot:footerx>
      <button @click="closeModal">Salir</button>
    </template>
    <template #headerx>
      <h1>Titulo del modal</h1>
    </template>
    <template #bodyx>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam ipsum distinctio repellendus vero. </p>
    </template>

    <template v-slot:exposed="{newTitle}"> <!-- Ponle cualquier nombre, sacará todos los elementos que hayan estado definidos en el slot del componente, al menos que lo desestructures-->
      <h1>🐱‍🐉🐱‍🐉🐱‍🐉 {{ newTitle }}</h1>
      <h6></h6>
    </template>

  </modal>
</template>

<script>
import { ref } from 'vue';
import Modal from "../components/Modal.vue";
export default {
  name: 'CustomSlots',
  components: {
    Modal
  },

  setup(){

    const isOpen = ref(false)

    return {
      isOpen,
      openModal: () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
    }
  }
}
</script>

<style>

</style>