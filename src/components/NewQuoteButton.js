// external
// react
import react from "react";
//displays loading animation and is disabled when changing quotes
const NewQuoteButton = props => {
    const b = <img src="https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/img/loading.gif" alt="loading" className="small" />
    return (
        <button
            id='new-quote'
            className={props.status !== 'idle' ? 'disableButton' : 'button'}
            onClick={props.status !== 'idle' ? null : props.onClick}
            style={{
                backgroundColor: props.status !== 'idle' ? "grey" : `var(--col-pri-${props.theme})`,
                color: `var(--col-acc2-${props.theme})`
            }}
            disabled={props.status !== 'idle'}>
            {props.status !== 'idle' ? b : 'New Quote'}
        </button>
    )
};

export default NewQuoteButton;