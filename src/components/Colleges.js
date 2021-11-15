import CollegeCard from "./cards/CollegeCard"

const Colleges = () => {
    const colleges = [1,2,3,4,5,6]
    return(
        <div className="container padding-bottom-70">
        <div className="row">
          <div className="col-md-12">
            <h3 className="headline_part centered margin-bottom-35 margin-top-70">Most Popular Colleges <span>Discover best things to do restaurants, shopping, hotels, cafes and places<br />around the world by categories.</span></h3>
          </div>
          {colleges.map(()=>(          
          <div className="col-md-4"> 
         <CollegeCard />
          </div>))}
         
          <div className="col-md-12 centered_content"> <a href="#" className="button border margin-top-20">View More Colleges</a> </div>
        </div>
      </div>
    )
}

export default Colleges