import StateCard from "./cards/StateCard"
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllStates } from "../Redux/Actions/action";

const States = ({states,dispatch}) =>{
  const [i,setI]=useState(10)
  

  useEffect(()=>{
    dispatch(getAllStates())
},[])
 
    return(
      <section style={{background:"#f9f9f9"}}>
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="headline_part centered margin-top-75"> Most Popular Categories<span>Browse the most desirable categories</span></h3>
            {states.slice(0,i).map((state)=>
            

            <StateCard state={state} />
            
            
)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="container_categories_box margin-top-5 margin-bottom-30"> 
              
            </div>
            <div className="col-md-12 centered_content"> <button className="button border margin-top-20" onClick={()=>i>30?setI(10):setI(i+10)}>{i>30?"View less":"View More States"}</button> </div>
          </div>
        </div>
      </div>
      </section>
    )
    
}
const mapStateToProps=state=>{


  return{states:state.stateReducer}
}
export default connect(mapStateToProps) (States) 