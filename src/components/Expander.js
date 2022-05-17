// external
// react
import react from "react";

//fills screen in 450ms when changing quotes, default is 0 size middle of screen
const Expander = props => {
    return (
        <div id="backAnim"
            style={{
                backgroundColor: `var(--col-pri-${props.theme})`,
                animation: props.status === "busy" ? 'expand 450ms' : 'none'
            }} />
    )
}

export default Expander;