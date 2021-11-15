const Newsletter = () => {
    return(
        <section className="utf_cta_area_item utf_cta_area2_block">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="utf_subscribe_block clearfix">
                <div className="col-md-8 col-sm-7">
                  <div className="section-heading">
                    <h2 className="utf_sec_title_item utf_sec_title_item2">Subscribe to Newsletter!</h2>
                    <p className="utf_sec_meta">
                      Subscribe to get latest updates and information.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-5">
                  <div className="contact-form-action">
                    <form method="post">
                      <span className="la la-envelope-o" />
                      <input className="form-control" type="email" placeholder="Enter your email" required />
                      <button className="utf_theme_btn" type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Newsletter