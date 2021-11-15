import Rating from "./Rating"

const Clgname=()=>{


    return(
        <>
<div className="container">
        <div className="row utf_sticky_main_wrapper">
          <div className="col-lg-12 col-md-12">
            <div id="titlebar" className="utf_listing_titlebar">
              <div className="utf_listing_titlebar_title">
                <h2>The Hot and More Restaurant <span className="listing-tag">Restaurant</span></h2>		   
                <span> <a href="#utf_listing_location" className="listing-address"> <i className="sl sl-icon-location" /> The Ritz-Carlton, Hong Kong </a> </span>			
                <span className="call_now"><i className="sl sl-icon-phone" /> (415) 796-3633</span>
                <div className="utf_star_rating_section" data-rating="4.5">
                  <div className="utf_counter_star_rating">(4.5) / (14 Reviews)</div>
                </div>
                <ul className="listing_item_social">
                  <li><a href="#"><i className="fa fa-bookmark" /> Bookmark</a></li>
                  <li><a href="#"><i className="fa fa-star" /> Add Review</a></li>              
                  <li><a href="#"><i className="fa fa-flag" /> Featured</a></li>
                  <li><a href="#"><i className="fa fa-share" /> Share</a></li>
                  <li><a href="#" className="now_open">Open Now</a></li>
                </ul>			
              </div>
            </div>
          </div>
        </div></div>
        
</>

    )
}
export default Clgname