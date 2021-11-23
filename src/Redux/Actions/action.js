import axios from "axios"
import { connect } from "react-redux"

export const getAllColleges = () => {
    return  (dispatch) =>{ 
    return  axios.get("http://localhost:8000/api/colleges/").then(
        response => dispatch({ type: "GET_ALL_COLLEGES", payload: response.data })
    )}
}

export const    getAllStates=()=>{
return (dispatch)=>{
    return axios.get("http://localhost:8000/api/states/names").then(
        response=> dispatch({type:"GET_ALL_STATES",payload:response.data})
    )}
}
export const getAllStateColleges=(id)=>{

    return(dispatch)=>{

        return axios.get(`http://localhost:8000/api/states/colleges/${id}`).then(
            response=> dispatch({type:"GET_ALL_STATE_COLLEGES",payload:response.data})
         ) }
}
export const addCollege=(starstate)=>{

    return(dispatch)=>{

        return axios.post("http://localhost:8000/api/colleges/createcollege",JSON.stringify(starstate),{header: {'Content-Type': "application/json"}})
    }
}


// const mapStateToProps = (state) => {
//     return { states: state.statelistReducer };
//   }
//    connect(mapStateToProps)(getAllStateColleges)

