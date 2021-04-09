import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Backdrop=()=>{
    //what color theme to use 
    const [theme,setTheme]=useState(0);
    //the entirety of quotes.json
    const [quotes,setQuotes]=useState([]);
    //data fetching/quote setting status
    const [status,setStatus]=useState('idle');
    //one quote/author passed to QuoteBOx
    const [quotePack,setQuotePack]=useState({quote:'',author:''});
    //url of quotes.json
    const [url]=useState("https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/data/quotes.json");

    let prevC=0;
    //fetching quotes.json
    useEffect(()=>{
        if (!url)return;
        const fetchData=async ()=>{
            setStatus('fetching');
                const response=await fetch(url);
                const data=await response.json();

            setQuotes(data.quotes);
            
            setStatus('idle');
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
    const onNewQuote= async()=>{
        setStatus('busy');
        setTheme(randomize(9));
        setQuotePack(quotes[randomize(quotes.length)]);
        await new Promise(resolve => setTimeout(resolve, 400));
        prevC=theme;

        setStatus('idle');
    };

    
    
    return (
        <div 
            id="backdrop"
            style={{backgroundColor:status==="busy"?prevC:`var(--col-pri-${theme})`}} 
            >
                <Expander theme={theme} status ={status} />
                <QuoteBox getQuote={onNewQuote} quote={quotePack} theme={theme} status={status}/>
        </div>
    )
};
const Expander =props =>{
    return (
        <div id="backAnim"
            style={{backgroundColor:`var(--col-pri-${props.theme})`,
                    animation:props.status==="busy"?'expand 450ms':'none'}} />
    )
}
const QuoteBox=props=>{
    const q = <div id="contQuote">
                <p id="text">{props.quote.quote}</p>
                <p id="author">-{props.quote.author}</p>
            </div>
    const b = <img src="https://media0.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" alt="loading" className="large centered"/>
    return (
        <div 
            id='quote-box' 
            style={{backgroundColor:`var(--col-acc1-${props.theme})`,
                    color:`var(--col-txt1-${props.theme})`,
                    animation:props.status==="busy"?window.innerWidth>=769?`bouncy2 400ms`:`bouncy 400ms`:'none'}}>

                    {props.status!=='idle'?b:q}
                    
                    <div id="contButton">
                        <TweetButton theme={props.theme} quote={props.quote} status={props.status}/>
                        <NewQuoteButton onClick={props.getQuote} theme={props.theme} status={props.status}/>
                    </div>


        </div>
    )
};

const TweetButton=props=>{
    const b = <img src="https://media0.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" alt="loading" className="small"/>
    const t= <i className="fab fa-twitter"></i>
    const tweetUrl=`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"'+props.quote.quote+'" '+props.quote.author)}`;
    return (
        <a 
            id='tweet-quote'
            className={props.status!=='idle'?'disableButton':'button'} 
            href={props.status!=='idle'?'#':tweetUrl}
            target="_blank"
            rel="noreferrer"
            style={{backgroundColor:props.status!=='idle'?"grey":`var(--col-pri-${props.theme})`,
                    color:`var(--col-acc2-${props.theme})`}}>
                {props.status!=='idle'?b:t}
        </a>
    )
};

const NewQuoteButton=props=>{
    const b = <img src="https://media0.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" alt="loading" className="small"/>
    return (
        <button 
            id='new-quote'
            className={props.status!=='idle'?'disableButton':'button'} 
            onClick={props.status!=='idle'?null:props.onClick} 
            style={{backgroundColor:props.status!=='idle'?"grey":`var(--col-pri-${props.theme})`,
                    color:`var(--col-acc2-${props.theme})`}}>
                {props.status!=='idle'?b:'New Quote'}
        </button>
    )
};

ReactDOM.render(<Backdrop />,document.getElementById('root'));
