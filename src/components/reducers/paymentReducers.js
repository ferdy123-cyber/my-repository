const initialState = {
    Chart: []
}
  
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_ITEM'){
        const index = state.Chart.findIndex(val => val.Chart.Id === action.Chart.Id)
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

    if (action.type === 'FILTER_NAME') {
        const datas = JSON.parse(localStorage.getItem('datas'))
        alert('ok')
        console.log(datas)
        return (
            <div>
                {/* <div>{
                    datas && datas.map((e, index) => {
                        return (
                            <div key={index}>
                                <p>{e.name}</p>
                            </div>
                            )
                        })    
                }</div> */}
            </div>
            
        )
    }

    return state;
}
  
export default rootReducer;