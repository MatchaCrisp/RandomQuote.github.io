// external
// react
import react from "react";

// internal
// components
import TweetButton from './TweetButton';
import NewQuoteButton from './NewQuoteButton';
//content box, when changing quotes displays loading animation and bounces
const QuoteBox = props => {
    const q = <div id="contQuote">
        <ul id="hashtags">{props.quote.hashtag.map((taggy, ind) => <li key={ind}>#{taggy}</li>)}</ul>
        <p id="text">{props.quote.quote}</p>
        <p id="author">-{props.quote.author}</p>
    </div>
    const b = <img src="https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/img/loading.gif" alt="loading" className="large centered" />

    return (
        <div
            id='quote-box'
            style={{
                backgroundColor: `var(--col-acc1-${props.theme})`,
                color: `var(--col-txt1-${props.theme})`,
                animation: props.status === "busy" ? window.innerWidth >= 769 ? `bouncy2 400ms` : `bouncy 400ms` : 'none'
            }}>

            {props.status !== 'idle' ? b : q}

            <div id="contButton">
                <TweetButton theme={props.theme} quote={props.quote} status={props.status} />
                <NewQuoteButton onClick={props.getQuote} theme={props.theme} status={props.status} />
            </div>


        </div>
    )
};

export default QuoteBox;