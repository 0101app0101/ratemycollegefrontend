
const Listsbanner=({state})=>{


    return(
        <>
      <div>
         <div className="clearfix" />
         <div id="titlebar" className="gradient margin-bottom-0">
           <div className="container">
             <div className="row">
              
               <div className="col-md-12">

                 <h2>Colleges in {state[0].location.state.location.name}</h2>
               </div>
                
             </div>
           </div>
         </div>
       </div>
    
     
        </>
    )
}

export default Listsbanner