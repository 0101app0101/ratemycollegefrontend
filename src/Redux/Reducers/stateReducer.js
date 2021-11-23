

const initialdata=[]


const stateReducer=(state=initialdata,action)=>{

switch (action.type){

case "GET_ALL_STATES":
    return action.payload
   
    default:
        return state
}

}


export default stateReducer