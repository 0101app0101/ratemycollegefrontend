import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Colleges from './components/Colleges'
import States from './components/States'
import Blogs from './components/Blogs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
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
  );
}

export default App;
