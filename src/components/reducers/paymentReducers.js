import { Redirect } from "react-router-dom"

const initialState = {
    Chart: []
}
  
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_ITEM'){
        const index = state.Chart.findIndex(val => val.Chart.Id === action.Chart.Id)
        console.log(state.Chart && state.Chart.map((val)=>val.Id))
        if (index !== -1) {
            const newChart = state.Chart
            newChart[index].itemQty += 1
            return {
                ...state,
                Chart: newChart,
            }
        } else {
            return {
                ...state,
                Chart: [...state.Chart, {
                    Chart: action.Chart,
                    itemQty: 1
                }]
            }
        }
        
    }
    if (action.type === 'REMOVE_ITEM'){
        return {
            ...state,
            Chart: state.Chart.filter((val) => String(val.Chart.Id) !== String(action.value))
        }
    }

    if (action.type === 'ADD_QTY') {
        const index = state.Chart.findIndex(val => (val.Chart.Id) === (action.value))
        if (index !== -1) {
            const newChart = state.Chart
            newChart[index].itemQty += 1
            return {
                ...state,
                itemQty: newChart
            }
        }else {
            return state
        }
    }

    if (action.type === 'MIN_QTY') {
        const index = state.Chart.findIndex(val => (val.Chart.Id) === (action.value))
        if (index !== -1) {
            const newChart = state.Chart
            newChart[index].itemQty -= 1
            return {
                ...state,
                itemQty: newChart
            }
        }
    }

    return state;
}
  
export default rootReducer;