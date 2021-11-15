import StateCard from "./cards/StateCard"

const States = () =>{
    const states = [1,2,3,4,5,6,7,8,9,10]
    return(
      <section style={{background:"#f9f9f9"}}>
        <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="headline_part centered margin-top-75"> Most Popular Categories<span>Browse the most desirable categories</span></h3>
            {states.map(()=><StateCard />)}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="container_categories_box margin-top-5 margin-bottom-30"> 
              
            </div>
            <div className="col-md-12 centered_content"> <a href="#" className="button border margin-top-20">View More States</a> </div>
          </div>
        </div>
      </div>
      </section>
    )
}
export default States 