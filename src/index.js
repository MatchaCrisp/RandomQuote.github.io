import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Backdrop=()=>{
    const [quotes,setQuotes]=useState({});

    useEffect(()=>{
        if (!quotes)return;
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response=>response.json())
        .then(data=>{
            
            setQuotes(data);
        })
        .catch(e=>console.log(e))
    },[quotes]);



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