const initialState = {
    number: 0,
  }
  
  const rootReducer = (state = initialState, action) => {
    const datas = JSON.parse(localStorage.getItem('datas'))
    if (action.type === 'INC_NUMBER') {
       if (state.number === datas.length - 1) {
        return {
          ...state,
          number: state.number = 0
        }
      }else {
        return {
          ...state,
          number: state.number + 1
        }
      }
    }
    
    if (action.type === 'DEC_NUMBER'){
      if (state.number === 0 ){
        return {
          ...state,
           number: state.number = datas.length - 1
         }
      }else {
        return{
          ...state,
          number: state.number - 1
        }
      }
    }

    if (action.type === 'LIST_CLICK'){
      const datas = JSON.parse(localStorage.getItem('datas'))
      const index = datas.findIndex(val => (val.id) === (action.value))
      console.log(index)
      return {
        ...state,
        number: state.number = index
      }
    }
  
    return state;
  }
  
  export default rootReducer;