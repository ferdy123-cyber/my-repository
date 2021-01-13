const initialState = {
    number: 0,
  }
  
  const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_NUMBER') {
      if (state.number === 8) {
        return {
          ...state,
          number: state.number - 8
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
           number: state.number + 8
         }
      }else {
        return{
          ...state,
          number: state.number - 1
        }
      }
    }
  
    return state;
  }
  
  export default rootReducer;