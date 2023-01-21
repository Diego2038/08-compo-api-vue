import { ref } from "vue"

const useCounter = (valorInicial = 31) => {
  const counter = ref(valorInicial)

    // const counterMasUno = () => {
    //   counter.value++
    // }
    
    // const counterMenosUno = () => {
    //   counter.value--
    // }

    return {
      counter,

      // Sólo es necesario exportar la función si se utiliza internamente en el setup
      counterMasUno: () => counter.value++ ,
      counterMenosUno: () => counter.value--,
    }
}

export default useCounter;