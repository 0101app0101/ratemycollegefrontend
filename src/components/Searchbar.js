const SearchBar = () => {

    return (
        <div className="search_container_block main_search_block" data-background-image="images/home_section_1.jpg" style={{ backgroundImage: 'url("images/home_section_1.jpg")' }}>
            <div className="main_inner_search_block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Rate My College India</h2>
                            <h4>Search, Rate, and Find out More About your College.</h4>
                            <h4>We dont Take down your reviews because we know Google would, We support Free Speech </h4>
                            <div className="main_input_search_part">
                                <div className="main_input_search_part_item">
                                    <input type="text" placeholder="Search For Your College..." />
                                </div>
                                <button className="button" onclick="window.location.href='listings_half_screen_map_list.html'">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar