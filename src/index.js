import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Backdrop=()=>{
    const [quotes,setQuotes]=useState({});
    const [status,setStatus]=useState('idle');
    const [url,setUrl]=useState("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    useEffect(()=>{
        if (!url)return;
        const fetchData=async ()=>{
            setStatus('fetching');

                const response=await fetch(url);
                const data=await response.json();



            setQuotes(data);
            setStatus('fetched');
        }
        fetchData().catch(console.log);

    },[url]);



    return (
        <div>

            <QuoteBox quotes={quotes}/>
        </div>
    )
};

const QuoteBox=props=>{
    console.log(props.quotes.quotes);

    return (
        <div className='quoteBox' >

            <TweetButton />
            <NewQuoteButton />
        </div>
    )
};

const TweetButton=()=>{
    return (
        <button className='tweetButton' >Tweet</button>
    )
};

const NewQuoteButton=()=>{
    return (
        <button className='newQuoteButton' >New Quote</button>
    )
};

ReactDOM.render(<Backdrop />,document.getElementById('root'));
