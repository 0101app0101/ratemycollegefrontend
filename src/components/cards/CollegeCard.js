const CollegeCard = () => {
    return(
        <a href="listings_single_page_1.html" className="utf_listing_item-container compact" tabIndex={0}>
        <div className="utf_listing_item"> <img src="images/utf_listing_item-02.jpg" alt="" /> <span className="tag"><i className="im im-icon-Electric-Guitar" /> Events</span>
          <div className="utf_listing_item_content">
            <div className="utf_listing_prige_block">							
              <span className="utf_meta_listing_price"><i className="fa fa-tag" /> $45 - $70</span>							
            </div>
            <h3>The Lounge &amp; Bar</h3>
            <span><i className="sl sl-icon-location" /> The Ritz-Carlton, Hong Kong</span>
            <span><i className="sl sl-icon-phone" /> (415) 796-3633</span>												
          </div>
        </div>
        <div className="utf_star_rating_section" data-rating="4.5">
          <div className="utf_counter_star_rating">(4.5)</div>
          <span className="utf_view_count"><i className="fa fa-eye" /> 822+</span>
          <span className="like-icon" />
          <span className="star" /><span className="star" /><span className="star" /><span className="star" /><span className="star half" /></div>
      </a>
    )
}
export default CollegeCard