import Colleges from "../components/Colleges"
import Navbar from "../components/Navbar"
import SearchBar from "../components/Searchbar"
import States from "../components/States"
import Blogs from "../components/Blogs"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

const Homescreen=()=>{



    return(

        <>
         <Navbar/>
 <SearchBar />
 <Colleges />
 <States />
 <Blogs />
 <Newsletter />
 <Footer />
 <BackToTop />
        </>
    )
}


export default Homescreen