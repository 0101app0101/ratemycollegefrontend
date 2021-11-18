import CollegeCard from "./cards/CollegeCard"
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllColleges } from "../Redux/Actions/action"

const Colleges = ({colleges, dispatch}) => {
   
    useEffect(()=>{
      dispatch(getAllColleges())
  },[])
    return(
        <div className="container padding-bottom-70">
        <div className="row">
          <div className="col-md-12">
            <h3 className="headline_part centered margin-bottom-35 margin-top-70">Most Popular Colleges <span>Discover best things to do restaurants, shopping, hotels, cafes and places<br />around the world by categories.</span></h3>
          </div>
          {colleges.map((college)=>(          
          <div className="col-md-4"> 
         <CollegeCard College = {college} />
          </div>))}
         
          <div className="col-md-12 centered_content"> <a href="#" className="button border margin-top-20">View More Colleges</a> </div>
        </div>
      </div>
    )
}
const mapStateToProps = (state) => {
  return { colleges: state.collegesReducer };
};

export default connect(mapStateToProps)(Colleges);