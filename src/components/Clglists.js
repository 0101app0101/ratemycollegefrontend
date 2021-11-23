import Signlelistcard from "./cards/Singlelistcard"

const Clglists=({state})=>{



    return(
      

<>

<div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="listing_filter_block margin-top-30">
              <div className="col-md-3 col-xs-3">
                <div className="utf_layout_nav"> <a href="listings_grid_full_width.html" className="grid"><i className="fa fa-th" /></a> <a href="#" className="list active"><i className="fa fa-align-justify" /></a> </div>
              </div>
              <div className="col-md-9 col-xs-9">
                <div className="sort-by utf_panel_dropdown sort_by_margin float-right"> <a href="#">Destination</a>
                  <div className="utf_panel_dropdown-content">
                    <input className="distance-radius" type="range" min={1} max={999} step={1} defaultValue={1} data-title="Select Range" />
                    <div className="panel-buttons">
                      <button className="panel-apply">Apply</button>
                    </div>
                  </div>
                </div>
                <div className="sort-by">
                  <div className="utf_sort_by_select_item sort_by_margin">
                    <select data-placeholder="Sort by Listing" className="utf_chosen_select_single">
                      <option>Sort by Listing</option>
                      <option>Latest Listings</option>
                      <option>Popular Listings</option>
                      <option>Price (Low to High)</option>
                      <option>Price (High to Low)</option>
                      <option>Highest Reviewe</option>
                      <option>Lowest Reviewe</option>                  
                      <option>Newest Listing</option>
                      <option>Oldest Listing</option>
                      <option>Random Listings</option>
                    </select>
                  </div>
                </div>
                <div className="sort-by">
                  <div className="utf_sort_by_select_item sort_by_margin">
                    <select data-placeholder="Categories:" className="utf_chosen_select_single">
                      <option>Categories</option>
                      <option>Restaurant</option>
                      <option>Health</option>
                      <option>Hotels</option>
                      <option>Real Estate</option>                  
                      <option>Fitness</option>                  
                      <option>Shopping</option>				  				 
                    </select>
                  </div>
                </div>
                <div className="sort-by">
                  <div className="utf_sort_by_select_item utf_search_map_section">
                    <ul>
                      <li><a className="utf_common_button" href="#"><i className="fa fa-dot-circle-o" />Near Me</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Signlelistcard state={state}/>
            <div className="clearfix" />
            <div className="row">
              <div className="col-md-12">
                <div className="utf_pagination_container_part margin-top-20 margin-bottom-75">
                  <nav className="pagination">
                    <ul>
                      <li><a href="#"><i className="sl sl-icon-arrow-left" /></a></li>
                      <li><a href="#" className="current-page">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#"><i className="sl sl-icon-arrow-right" /></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>

    )
}
export default Clglists