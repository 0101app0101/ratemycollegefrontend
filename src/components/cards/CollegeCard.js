const CollegeCard = ({College}) => {

  const commentstyle = {
    whiteSpace: "nowrap",
    width: 80 + "%",
    overflow: "hidden",
    textOverflow: "ellipsis", 
  }

    return(
        <a href="listings_single_page_1.html" className="utf_listing_item-container compact" tabIndex={0}>
        <div className="utf_listing_item"> <img src="images/utf_listing_item-02.jpg" alt="" /> <span className="tag"><i className="im im-icon-Business-Mens" /> Popular</span>
          <div className="utf_listing_item_content">
           
            <h3>{College.name}</h3>
            <span><i className="sl sl-icon-location" /> {College.location.state.name || College.location.country}</span>
            <span style={commentstyle} ><i className="sl sl-icon-bubbles" />{College.comments || "Be the first to comment"}</span>												
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