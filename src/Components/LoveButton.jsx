
import "./LoveButton.css"
function LoveButton(props){
    return(

        <button style={{ backgroundColor: props.color }}>

         {props.label}
        </button>
    )
}

export default LoveButton