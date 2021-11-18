import axios from "axios"

export const getAllColleges = () => {
    return  (dispatch) =>{ 
    return  axios.get("http://localhost:8000/api/colleges/").then(
        response => dispatch({ type: "GET_ALL_COLLEGES", payload: response.data })
    )}
}

