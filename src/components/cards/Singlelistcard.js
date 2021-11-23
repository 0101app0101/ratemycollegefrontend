const Signlelistcard=({state})=>{



    return(
      <>
      {state.map((state)=>
      <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="utf_listing_item-container list-layout"> <a href="listings_single_page_1.html" className="utf_listing_item">
            <div className="utf_listing_item-image"> 
              <img src="images/utf_listing_item-01.jpg" alt="" /> 
              <span className="like-icon" /> 
              <span className="tag"><i className="im im-icon-Hotel" /> Hotels</span> 
              <span className="featured_tag">Featured</span> 
              <div className="utf_listing_prige_block utf_half_list">							
                <span className="utf_meta_listing_price"><i className="fa fa-tag" /> $45 - $70</span>					
                <span className="utp_approve_item"><i className="utf_approve_listing" /></span>
              </div>
            </div>
            <span className="utf_open_now">Open Now</span>
            <div className="utf_listing_item_content">
              <div className="utf_listing_item-inner">
                <h3>{state.name}</h3>
                <span><i className="sl sl-icon-location" /> The Ritz-Carlton, Hong Kong</span>
                <span><i className="sl sl-icon-phone" /> (415) 796-3633</span>
                <div className="utf_star_rating_section" data-rating="4.5">
                  <div className="utf_counter_star_rating">(4.5)</div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt.</p>
              </div>
            </div>
          </a> 
        </div>
      </div></div>)}
        
</>

    )
}
export default Signlelistcard