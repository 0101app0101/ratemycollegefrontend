import { Link } from "react-router-dom"

const Navbar=()=>{





    return(
        <div id="main_wrapper">
        <header id="header_part"> 
          <div id="header">
            <div className="container"> 
              <div className="utf_left_side"> 
                <div id="logo"> <a href="index_1.html"><img src="images/logo.png" alt="" /></a> </div>
                <div className="mmenu-trigger">
                  <button className="hamburger utfbutton_collapse" type="button">
                    <span className="utf_inner_button_box">
                      <span className="utf_inner_section" />
                    </span>
                  </button>
                </div>
                <nav id="navigation" className="style_one">
                  <ul id="responsive">
                    <li><a className="current" href="#">Home</a>
                      <ul>
                        <li><a className="active" href="index_1.html">Home Version 1</a></li>
                        <li><a href="index_2.html">Home Version 2</a></li>
                        <li><a href="index_3.html">Home Version 3</a></li>
                        <li><a href="index_4.html">Home Version 4</a></li>
                        <li><a href="index_5.html">Home Version 5</a></li>
                        <li><a href="index_6.html">Home Version 6</a></li>
                        <li><a href="index_7.html">Home Version 7</a></li>
                      </ul>
                    </li>	
                    {/* <a className='nav-link'> <Link to='/review'><i className="bi bi-people-fill me-2" />Review</Link></a>		   */}
                    <li><Link to='/colleges'>All Colleges</Link>
                      <ul>
                        <li><a href="#">List Layout</a>
                          <ul>
                            <li><a href="listings_list_with_sidebar.html">Listing List Sidebar</a></li>
                            <li><a href="listings_list_full_width.html">Listing List Full Width</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Grid Layout</a>
                          <ul>
                            <li><a href="listings_grid_with_sidebar.html">Listing Grid Sidebar</a></li>
                            <li><a href="listings_two_column_map_grid.html">Listing Two Column Grid</a></li>
                            <li><a href="listings_grid_full_width.html">Listing Grid Full Width</a></li>
                          </ul>
                        </li> 
                        <li><a href="#">Half Listing Map</a>
                          <ul>
                            <li><a href="listings_half_screen_map_list.html">Listing Half List</a></li>
                            <li><a href="listings_half_screen_map_grid.html">Listing Half Grid</a></li>
                          </ul>
                        </li> 	
                        <li><a href="#">Listing Details</a>
                          <ul>
                            <li><a href="listings_single_page_1.html">Single Listing Version 1</a></li>
                            <li><a href="listings_single_page_2.html">Single Listing Version 2</a></li>
                            <li><a href="listings_single_page_3.html">Single Listing Version 3</a></li>
                            <li><a href="listings_single_page_4.html">Single Listing Version 4</a></li>
                            <li><a href="listings_single_page_5.html">Single Listing Version 5</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">User Panel</a>
                      <ul>
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="dashboard_add_listing.html">Add Listing</a></li>
                        <li><a href="dashboard_my_listing.html">My Listings</a></li>				  
                        <li><a href="dashboard_bookings.html">Bookings</a></li>				  
                        <li><a href="dashboard_messages.html">Messages</a></li>
                        <li><a href="dashboard_wallet.html">Wallet</a></li>
                        <li><a href="dashboard_visitor_review.html">Reviews</a></li>
                        <li><a href="dashboard_bookmark.html">Bookmark</a></li>
                        <li><a href="dashboard_my_profile.html">My Profile</a></li>				  
                        <li><a href="dashboard_change_password.html">Change Password</a></li>
                        <li><a href="dashboard_invoice.html">Invoice</a></li>				  
                      </ul>
                    </li>
                    <li><a href="#">Blog</a>
                      <ul>
                        <li><a href="blog_page.html">Blog Grid</a></li>
                        <li><a href="blog_page_left_sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog_page_right_sidebar.html">Blog Right Sidebar</a></li>
                        <li><a href="blog_detail_left_sidebar.html">Blog Detail Leftside</a></li>
                        <li><a href="blog_detail_right_sidebar.html">Blog Detail Rightside</a></li>					
                      </ul>
                    </li>
                    <li><a href="#">Pages</a>
                      <ul>
                        <li><a href="page_about.html">About Us</a></li>
                        <li><a href="#">Categorie Type</a>
                          <ul>
                            <li><a href="page_categorie_one.html">Categorie One</a></li>
                            <li><a href="page_categorie_two.html">Categorie Two</a></li>                      
                          </ul>	
                        </li>	
                        <li><a href="add_listing.html">Add Listing</a></li>
                        <li><a href="listing_booking.html">Booking Listing</a></li>
                        <li><a href="page_pricing.html">Pricing Plan</a></li>				  
                        <li><a href="wishlist_listings.html">Wishlist Page</a></li>	
                        <li><a href="page_filtering_style.html">Filtering Style</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="page_element.html">Page Element</a></li>
                        <li><a href="page_faqs.html">Page Faq</a></li>			
                        <li><a href="#">Icons</a>
                          <ul>
                            <li><a href="page_icons_one.html">Icon-Mind Icon</a></li>
                            <li><a href="page_icons_two.html">Simple Line Icon</a></li>
                            <li><a href="page_icons_three.html">Font Awesome Icon</a></li>
                          </ul>
                        </li>	
                        <li><a href="page_not_found.html">Page Error 404</a></li>
                        <li><a href="page_coming_soon.html">Coming Soon</a></li>                  
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </li>              
                  </ul>
                </nav>
                <div className="clearfix" />
              </div>
              <div className="utf_right_side">
                <div className="header_widget"> <Link to='/' className="button border sign-in popup-with-zoom-anim"><i className="sl sl-icon-paper-plane" />Add Review</Link> <Link to='/Addcollege' className="button border with-icon"><i className="sl sl-icon-home" />Add College</Link></div>
              </div>
              <div id="dialog_signin_part" className="zoom-anim-dialog mfp-hide">
                <div className="small_dialog_header">
                  <h3>Add College</h3>
                </div>
                <div className="utf_signin_form style_one">
                  <ul className="utf_tabs_nav">
                    <li className><a href="#tab1">Log In</a></li>
                    <li><a href="#tab2">Register</a></li>
                  </ul>
                  <div className="tab_container alt"> 
                    <div className="tab_content" id="tab1" style={{display: 'none'}}>
                      <form method="post" className="login">
                        <a href="javascript:void(0);" className="social_bt facebook_btn">Login with Facebook <i className="fa fa-facebook" /></a>
                        <a href="javascript:void(0);" className="social_bt google_btn">Login with Google <i className="fa fa-google-plus" /></a>
                        <p className="utf_row_form utf_form_wide_block">
                          <label htmlFor="username">
                            <input type="text" className="input-text" name="username" id="username" defaultValue placeholder="Username" />
                          </label>
                        </p>
                        <p className="utf_row_form utf_form_wide_block">
                          <label htmlFor="password">
                            <input className="input-text" type="password" name="password" id="password" placeholder="Password" />
                          </label>
                        </p>
                        <div className="utf_row_form utf_form_wide_block form_forgot_part"> <span className="lost_password fl_left"> <a href="javascript:void(0);">Forgot Password?</a> </span>
                          <div className="checkboxes fl_right">
                            <input id="remember-me" type="checkbox" name="check" />
                            <label htmlFor="remember-me">Remember Me</label>
                          </div>
                        </div>
                        <div className="utf_row_form">
                          <input type="submit" className="button border margin-top-5" name="login" defaultValue="Login" />
                        </div>
                      </form>
                    </div>
                    <div className="tab_content" id="tab2" style={{display: 'none'}}>
                      <form method="post" className="register">
                        <p className="utf_row_form utf_form_wide_block">
                          <label htmlFor="username2">
                            <input type="text" className="input-text" name="username" id="username2" defaultValue placeholder="Username" />
                          </label>
                        </p>
                        <p className="utf_row_form utf_form_wide_block">
                          <label htmlFor="email2">
                            <input type="text" className="input-text" name="email" id="email2" defaultValue placeholder="Email" />
                          </label>
                        </p>
                        <p className="utf_row_form utf_form_wide_block">
                          <label htmlFor="password1">
                            <input className="input-text" type="password" name="password1" id="password1" placeholder="Password" />
                          </label>
                        </p>
                        <p className="utf_row_form utf_form_wide_block">
                          <label htmlFor="password2">
                            <input className="input-text" type="password" name="password2" id="password2" placeholder="Confirm Password" />
                          </label>
                        </p>
                        <input type="submit" className="button border fw margin-top-10" name="register" defaultValue="Register" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
}


export default Navbar