import Comments from "./Comments"

const Comment=()=>{



    return(
        <div>
        <li>
          <div classname="avatar"><img src="images/client-avatar1.jpg" alt="" /></div>
          <div classname="utf_comment_content">
            <div classname="utf_arrow_comment">
              <div classname="utf_star_rating_section" data-rating="{5}">
                <a href="#" classname="rate-review">Helpful Review <i classname="fa fa-thumbs-up" /></a><i classname="fa fa-thumbs-up">                   
                  <div classname="utf_by_comment">Francis Burton<span classname="date"><i classname="fa fa-clock-o"> Jan 05, 2019 - 8:52 am</i></span><i classname="fa fa-clock-o"> </i></div><i classname="fa fa-clock-o">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.</p>                                    
                  </i></i></div><i classname="fa fa-thumbs-up"><i classname="fa fa-clock-o">
                </i></i></div></div></li><i classname="fa fa-thumbs-up"><i classname="fa fa-clock-o">
          </i></i></div>
    )
}
export default Comment