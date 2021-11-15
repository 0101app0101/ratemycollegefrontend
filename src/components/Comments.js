const Comments=()=>{


    return(

        <div>
        <div className="comments utf_listing_reviews">
          <ul>
            <li>
              <div className="avatar"><img src="images/client-avatar1.jpg" alt="" /></div>
              <div className="utf_comment_content">
                <div className="utf_arrow_comment" />
                <div className="utf_star_rating_section" data-rating={5} />
                <a href="#" className="rate-review">Helpful Review <i className="fa fa-thumbs-up" /></a>                   
                <div className="utf_by_comment">Francis Burton<span className="date"><i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52 am</span> </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                                    
              </div>
            </li>
            <li>
              <div className="avatar"><img src="images/client-avatar2.jpg" alt="" /> </div>
              <div className="utf_comment_content">
                <div className="utf_arrow_comment" />
                <div className="utf_star_rating_section" data-rating={4} />
                <a href="#" className="rate-review">Helpful Review <i className="fa fa-thumbs-up" /></a>                  
                <div className="utf_by_comment">Francis Burton<span className="date"><i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52 am</span> </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                  
              </div>
            </li>
            <li>
              <div className="avatar"><img src="images/client-avatar3.jpg" alt="" /> </div>
              <div className="utf_comment_content">
                <div className="utf_arrow_comment" />
                <div className="utf_star_rating_section" data-rating={4} />                  
                <div className="utf_by_comment">Francis Burton<span className="date"><i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52 am</span> </div>
                <a href="#" className="rate-review">Helpful Review <i className="fa fa-thumbs-up" /></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                  
              </div>
            </li>
            <li>
              <div className="avatar"><img src="images/client-avatar1.jpg" alt="" /></div>
              <div className="utf_comment_content">
                <div className="utf_arrow_comment" />
                <div className="utf_star_rating_section" data-rating="4.5" />                  
                <div className="utf_by_comment">Francis Burton<span className="date"><i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52 am</span> </div>
                <a href="#" className="rate-review">Helpful Review <i className="fa fa-thumbs-up" /></a> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>
                <div className="review-images utf_gallery_container"> 
                  <a href="images/review-image-01.jpg" className="utf_gallery"><img src="images/review-image-01.jpg" alt="" /></a> 
                  <a href="images/review-image-02.jpg" className="utf_gallery"><img src="images/review-image-02.jpg" alt="" /></a> 
                  <a href="images/review-image-03.jpg" className="utf_gallery"><img src="images/review-image-03.jpg" alt="" /></a> 
                  <a href="images/review-image-01.jpg" className="utf_gallery"><img src="images/review-image-01.jpg" alt="" /></a> 
                  <a href="images/review-image-02.jpg" className="utf_gallery"><img src="images/review-image-02.jpg" alt="" /></a> 
                  <a href="images/review-image-03.jpg" className="utf_gallery"><img src="images/review-image-03.jpg" alt="" /></a> 
                </div>                  
              </div>
            </li>
            <li>
              <div className="avatar"><img src="images/client-avatar3.jpg" alt="" /> </div>
              <div className="utf_comment_content">
                <div className="utf_arrow_comment" />
                <div className="utf_star_rating_section" data-rating={4} />                  
                <div className="utf_by_comment">Francis Burton<span className="date"><i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52 am</span> </div>
                <a href="#" className="rate-review">Helpful Review <i className="fa fa-thumbs-up" /></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                  
              </div>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
        <div className="row">
          <div className="col-md-12">
            <div className="utf_pagination_container_part margin-top-30">
              <nav className="pagination">
                <ul>
                  <li><a href="#"><i className="sl sl-icon-arrow-left" /></a></li>
                  <li><a href="#" className="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    )
}

export default Comments