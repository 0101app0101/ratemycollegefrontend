import { useState } from 'react';
import StarRatings from 'react-star-ratings';


const Addcomment =({Id})=>{
  
 


 
  

  
  const [inputvalue,setInputvalue]=useState('')

  const [starstate, setStarState] = useState({

   param1:0,
   param2:0,
   param3:0,
   param4:0,
   param5:0
    
  })

  const changeParam1 = ( newRating, name ) => {
    setStarState({...starstate,
     param1: newRating
     })
    }
  const changeParam2 = ( newRating, name ) => {
   setStarState({...starstate,
    param2: newRating
    })
  }

  
  const changeParam3 = ( newRating, name ) => {
   setStarState({...starstate,
    param3: newRating
    })
  }

  const changeParam4 = ( newRating, name ) => {
    setStarState({...starstate,
     param4: newRating
     })
    }
    const changeParam5 = ( newRating, name ) => {
        setStarState({...starstate,
         param5: newRating
         })
        }
    const style={
        marginBottom: "20px",
        }

    return(
        <>
<div className="container">
        <div className="add_utf_listing_section margin-top-45"> 
          <div className="utf_add_listing_part_headline_part">
            <h3><i className="sl sl-icon-tag" /> Categories &amp; Tags</h3>
          </div>       
          <form>    
          <div className="row with-forms" style={style}>
            <div className="col-md-6">
              <div className="u-m-bottom--xs u-t--md">Rate the <span className="u-t--bold u-t--primary">room</span> out of 5 stars</div>
              <div className="u-t--gray">Keep in mind: size, comfort, natural lighting</div>
            </div>
            <div className="col-md-6">              
      
       
           <div className="container">
              <StarRatings
          rating={starstate.param1}
          starRatedColor="gold"
          changeRating={changeParam1}
          numberOfStars={5}
          name='param3'
          starHoverColor="gold"
        />
        </div>
            </div>
          </div>              
          <div className="row with-forms" style={style}>                 
            <div className="col-md-6">
              <div className="u-m-bottom--xs u-t--md">Rate the <span className="u-t--bold u-t--primary">room</span> out of 5 stars</div>
              <div className="u-t--gray">Keep in mind: size, comfort, natural lighting</div>
            </div>
            <div className="col-md-6">
            <div className="container">
              <StarRatings
          rating={starstate.param2}
          starRatedColor="gold"
          changeRating={changeParam2}
          numberOfStars={5}
          name='param3'
          starHoverColor="gold"
        />
        </div>
            </div>
          </div><div className="row with-forms" style={style}>                 
            <div className="col-md-6">
              <div className="u-m-bottom--xs u-t--md">Rate the <span className="u-t--bold u-t--primary">room</span> out of 5 stars</div>
              <div className="u-t--gray">Keep in mind: size, comfort, natural lighting</div>
            </div>
            <div className="col-md-6">
            <div className="container">
              <StarRatings
          rating={starstate.param3}
          starRatedColor="gold"
          changeRating={changeParam3}
          numberOfStars={5}
          name='param3'
          starHoverColor="gold"
        />
        </div>
            </div>
          </div><div className="row with-forms" style={style}>                 
            <div className="col-md-6">
              <div className="u-m-bottom--xs u-t--md">Rate the <span className="u-t--bold u-t--primary">room</span> out of 5 stars</div>
              <div className="u-t--gray">Keep in mind: size, comfort, natural lighting</div>
            </div>
            <div className="col-md-6">
            <div className="container">
              <StarRatings
          rating={starstate.param4}
          starRatedColor="gold"
          changeRating={changeParam4}
          numberOfStars={5}
          name='param3'
          starHoverColor="gold"
        />
        </div>
            </div>
          </div>
          <div className="row with-forms" style={style}>                 
            <div className="col-md-6">
              <div className="u-m-bottom--xs u-t--md">Rate the <span className="u-t--bold u-t--primary">room</span> out of 5 stars</div>
              <div className="u-t--gray">Keep in mind: size, comfort, natural lighting</div>
            </div>
            <div className="col-md-6">
            <div className="container">
            <StarRatings
          rating={starstate.param5}
          starRatedColor="gold"
          changeRating={changeParam5}
          numberOfStars={5}
          name='param3'
          starHoverColor="gold"
        />
        </div>
            </div>
          </div>

          <div className="row with-forms" style={style}>                 
            <div className="col-md-6">
              <div className="u-m-bottom--xs u-t--md">Rate the <span className="u-t--bold u-t--primary">room</span> out of 5 stars</div>
              <div className="u-t--gray">Keep in mind: size, comfort, natural lighting</div>
            </div>
            <div className="col-md-6">
            
            <input type="text" name="keywords" id="keywords" placeholder="Keywords..." value=""></input>
        
            </div>
          </div>
          
          <div className="row with-forms" style={style}>
            <div className="col-md-12">
              <div className="u-m-top--md u-m-bottom--md"><div className="u-m-right--sm u-t--md">Write a <span className="u-t--bold u-t--primary ">comment</span></div><div className="u-t--sm u-m-top--sm">Here's your chance to be specific and let others know what to expect!</div></div>
              <textarea id="w3review" name="w3review" rows={4} cols={50} defaultValue={"      \n            "} />
            </div>				
          </div> 
          </form>   
        </div>
      </div>
      </>


    )
}

export default Addcomment