// external
// react
import react from "react";

//displays loading animation and is disabled when changing quotes, adds custom hashtags to tweet
const TweetButton = props => {
    const b = <img src="https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/img/loading.gif" alt="loading" className="small" />
    const t = <i className="fab fa-twitter"></i>
    const h = props.quote.hashtag.join(',');
    const tweetUrl = `https://twitter.com/intent/tweet?hashtags=${h}&related=freecodecamp&text=${encodeURIComponent('"' + props.quote.quote + '" ' + props.quote.author)}`;
    return (
        <a
            id='tweet-quote'
            className={props.status !== 'idle' ? 'disableButton' : 'button'}
            href={props.status !== 'idle' ? '#' : tweetUrl}
            target="_blank"
            rel="noreferrer"
            style={{
                backgroundColor: props.status !== 'idle' ? "grey" : `var(--col-pri-${props.theme})`,
                color: `var(--col-acc2-${props.theme})`
            }}>
            {props.status !== 'idle' ? b : t}
        </a>
    )
};
export default TweetButton;