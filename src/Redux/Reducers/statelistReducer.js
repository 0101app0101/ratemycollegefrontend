
const initialdata=[]

const statelistReducer=(state=initialdata,action)=>{

switch(action.type){
    case "GET_ALL_STATE_COLLEGES":
        return [...state,...action.payload]
        default :
        return state

}



}
export default statelistReducer