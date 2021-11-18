const initialdata = []

const collegesReducer=(state=initialdata,action)=>{
 
    switch (action.type) {
        case "GET_ALL_COLLEGES":
            return [...state,...action.payload]

        default:
            return state
    }

}

export default collegesReducer