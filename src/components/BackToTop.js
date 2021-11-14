import { useState } from 'react'
const BackToTop = () => {
    const [back_to_top_className, setBack_to_top_className] = useState("")
    const Sense_scroll_to_bottom = () => {
      window.pageYOffset >=600 ? setBack_to_top_className("visible") : setBack_to_top_className("")
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener('scroll', Sense_scroll_to_bottom)
    return(
        <div id="bottom_backto_top" className={back_to_top_className} ><a onClick={()=>scrollToTop()}></a></div>
    )
}
export default BackToTop