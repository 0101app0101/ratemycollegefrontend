import Clglists from "../components/Clglists"
import Listsbanner from "../components/Listsbanner"
import { connect } from "react-redux"
import { useEffect } from "react"
import { getAllStateColleges } from "../Redux/Actions/action"
import { useParams } from "react-router"
import { useState } from "react"

const Statescreen=({states,dispatch})=>{
    const{id}=useParams()
    
    useEffect(()=>{
        dispatch(getAllStateColleges(id))
       
 
    
    },[states])
   
    // return(
    //     <>
    //     </>
    // )
    return(


        <>
         <Listsbanner state={states} />
        <Clglists state={states}/>
        </>
    )
}
const mapStateToProps = (state) => {
    return { states: state.statelistReducer };
  }
export default connect (mapStateToProps)(Statescreen)
// export default Statescreen