const Rating=()=>{



    return(


        <div id="utf_listing_reviews" className="utf_listing_section">
        <h3 className="utf_listing_headline_part margin-top-75 margin-bottom-20">Reviews <span>(08)</span></h3>
        <div className="clearfix" />
        <div className="reviews-container">
          <div className="row">
            <div className="col-lg-3">
              <div id="review_summary">
                <strong>4.5</strong>
                <em>Superb Reviews</em>
                <small>Out of 15 Reviews</small>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-2 review_progres_title"><small><strong>Quality</strong></small></div>
                <div className="col-lg-9">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-lg-1 review_progres_title"><small><strong>77</strong></small></div>
              </div>
              <div className="row">
                <div className="col-lg-2 review_progres_title"><small><strong>Space</strong></small></div>
                <div className="col-lg-9">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-lg-1 review_progres_title"><small><strong>15</strong></small></div>
              </div>
              <div className="row">
                <div className="col-lg-2 review_progres_title"><small><strong>Price</strong></small></div>
                <div className="col-lg-9">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-lg-1 review_progres_title"><small><strong>18</strong></small></div>
              </div>
              <div className="row">
                <div className="col-lg-2 review_progres_title"><small><strong>Service</strong></small></div>
                <div className="col-lg-9">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-lg-1 review_progres_title"><small><strong>10</strong></small></div>
              </div>
              <div className="row">
                <div className="col-lg-2 review_progres_title"><small><strong>Location</strong></small></div>
                <div className="col-lg-9">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="col-lg-1 review_progres_title"><small><strong>05</strong></small></div>
              </div>
            </div>
          </div>
        </div></div>

    )
}

export default Rating