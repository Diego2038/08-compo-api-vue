import { ref } from 'vue'
import axios from 'axios'

const useUsers = () => {
  const currentPage = ref(1)
  const errorMessage = ref(null)
  const isLoading = ref(false)
  const users = ref([])
  
  const aumentarPage = fAumentarPage // son eventos
  const disminuirPage = fDisminuirPage // son eventos
  const requestApi = fRequestApi()

  requestApi

  return{
    currentPage,
    errorMessage,
    isLoading,
    users,
    
    aumentarPage,
    disminuirPage,
  }


  async function fRequestApi (page = 1) {
    
    if (page <= 0 ) page = 1
    
    isLoading.value = true

    const { data } = await axios.get('https://reqres.in/api/users', {
      params: {
        page
      }
    })  

    // console.log( data.data )   

    if( data.data.length > 0 ){
      users.value = data.data
      currentPage.value = page 
      errorMessage.value = false
    } else if ( currentPage.value > 0 ) {
      errorMessage.value = "No hay más usuarios" 
    }
    isLoading.value = false

  }

  function fDisminuirPage () {
    if( currentPage.value < 1 ) {
      currentPage.value = 1
    } else {
      currentPage.value --
    }

    fRequestApi( currentPage.value )
  }

  function fAumentarPage () {
    currentPage.value++
    fRequestApi( currentPage.value )
  }

};

export default useUsers;