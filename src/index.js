import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Backdrop=()=>{
    //what color theme to use 
    const [theme,setTheme]=useState(1);
    //the entirety of quotes.json
    const [quotes,setQuotes]=useState([]);
    //data fetching/quote setting status
    const [status,setStatus]=useState('idle');
    //one quote/author passed to QuoteBOx
    const [quotePack,setQuotePack]=useState({quote:'',author:''});
    //url of quotes.json
    const [url]=useState("https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/data/quotes.json");

    //fetching quotes.json
    useEffect(()=>{
        if (!url)return;
        const fetchData=async ()=>{
            setStatus('fetching');
                const response=await fetch(url);
                const data=await response.json();

            setQuotes(data.quotes);
            
            setStatus('fetched');
        }
        fetchData().catch(console.log);

    },[url]);

    //initialize first quote
    useEffect(()=>{
        if (quotes.length===0) return;

        setTheme(randomize(9));
        setQuotePack(quotes[randomize(quotes.length)]);
    },[quotes]);

    //loading screen at beginning while fetching, disable buttons while setting quotes
    useEffect(()=>{
        console.log(status);
    },[status]);

    //random theme/quote
    const randomize=ranMax=> Math.floor(Math.random()*ranMax);

    //onclick for when new quote button is pressed
    const onNewQuote=()=>{
        setTheme(randomize(9));
        setQuotePack(quotes[randomize(quotes.length)]);
    };

    return (
        <div 
            id="backdrop" 
            style={{backgroundColor:`var(--col-pri-${theme})`}}>
                <QuoteBox getQuote={onNewQuote} quote={quotePack} theme={theme}/>
        </div>
    )
};

const QuoteBox=props=>{
    return (
        <div 
            id='quote-box' 
            style={{backgroundColor:`var(--col-acc1-${props.theme})`,color:`var(--col-txt1-${props.theme})`}}>
                <div id="contQuote">
                    <p id="quote">{props.quote.quote}</p>
                    <p id="author">-{props.quote.author}</p>
                </div>
                <div id="contButton">
                    <TweetButton theme={props.theme} quote={props.quote}/>
                    <NewQuoteButton onClick={props.getQuote} theme={props.theme}/>
                </div>

        </div>
    )
};

const TweetButton=props=>{
    const tweetUrl=`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"'+props.quote.quote+'" '+props.quote.author)}`;
    return (
        <a 
            id='tweetButton'
            className='button' 
            href={tweetUrl}
            target="_blank"
            style={{backgroundColor:`var(--col-pri-${props.theme})`,
                    color:`var(--col-acc2-${props.theme})`}}>
                <i class="fab fa-twitter"></i>
        </a>
    )
};

const NewQuoteButton=props=>{
    return (
        <button 
            id='newQuoteButton'
            className='button' 
            onClick={props.onClick} 
            style={{backgroundColor:`var(--col-pri-${props.theme})`,
                    color:`var(--col-acc2-${props.theme})`}}>
                New Quote
        </button>
    )
};

ReactDOM.render(<Backdrop />,document.getElementById('root'));
