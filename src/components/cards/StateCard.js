


const StateCard = ({state}) => {

  

    return(
        <a href={`/states/${state.code}`} className="utf_category_small_box_part"> <i className="im im-icon-Hotel" />
        <h4>{state.name}</h4>
        <span>22</span>
      </a> 
    )
}

export default StateCard