import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Backdrop=()=>{
    const [theme,setTheme]=useState(1);
    const [quotes,setQuotes]=useState([]);
    const [status,setStatus]=useState('idle');
    const [quotePack,setQuotePack]=useState({quote:'',author:''});
    const [url]=useState("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    console.log('theme',theme,'quotes',quotes,'quotePack',quotePack);
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

    useEffect(()=>{
        if (quotes.length===0) return;

        setTheme(randomize(9));
        setQuotePack(quotes[randomize(quotes.length)]);
    },[quotes]);

    useEffect(()=>{
        console.log(status);
    },[status]);

    const randomize=ranMax=> {

        const rand=Math.floor(Math.random()*ranMax);
        console.log(rand);
        return rand;
    }

    const onNewQuote=()=>{
        setTheme(randomize(9));
        setQuotePack(quotes[randomize(quotes.length)]);
    };

    return (
        <div className="backdrop" style={{backgroundColor:`var(--col-pri-${theme})`}}>

            <QuoteBox getQuote={onNewQuote} quote={quotePack} theme={theme}/>
        </div>
    )
};

const QuoteBox=props=>{
    console.log('quoteBox received',props)
    return (
        <div className='quoteBox' id='quote-box' style={{backgroundColor:`var(--col-acc1-${props.theme})`,color:`var(--col-txt1-${props.theme})`}}>
            <p id="quote">{props.quote.quote}</p>
            <p id="author">{props.quote.author}</p>
            <TweetButton theme={props.theme}/>
            <NewQuoteButton onClick={props.getQuote} theme={props.theme}/>
        </div>
    )
};

const TweetButton=props=>{
    return (
        <button className='tweetButton' style={{backgroundColor:`var(--col-pri-${props.theme})`}}>Tweet</button>
    )
};

const NewQuoteButton=props=>{
    console.log('new quote button received', props)
    return (
        <button className='newQuoteButton' onClick={props.onClick} style={{backgroundColor:`var(--col-pri-${props.theme})`}}>New Quote</button>
    )
};

ReactDOM.render(<Backdrop />,document.getElementById('root'));
