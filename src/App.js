// external
// react
import React, { useEffect, useState } from 'react';

// internal
// stylesheet
import './index.css';

// components
import Expander from './components/Expander';
import QuoteBox from './components/QuoteBox';

const App = () => {
    //what color theme to use 
    const [theme, setTheme] = useState(0);
    //the entirety of quotes.json
    const [quotes, setQuotes] = useState([]);
    //data fetching/quote setting status
    const [status, setStatus] = useState('idle');
    //one quote/author passed to QuoteBOx
    const [quotePack, setQuotePack] = useState({ quote: '', author: '', hashtag: [] });
    //url of quotes.json
    const [url] = useState("https://raw.githubusercontent.com/MatchaCrisp/RandomQuote.github.io/main/src/data/quotes.json");
    let prevC = 0;

    //random theme/quote
    const randomize = ranMax => Math.floor(Math.random() * ranMax);

    //fetching quotes.json
    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(url);
            const data = await response.json();

            setQuotes(data.quotes);
            setStatus('idle');
        }
        fetchData().catch(console.log);
    }, [url]);

    //initialize first quote
    useEffect(() => {
        if (quotes.length === 0) return;

        setTheme(randomize(9));
        setQuotePack(quotes[randomize(quotes.length)]);


    }, [quotes]);

    //loading screen at beginning while fetching, disable buttons while setting quotes
    useEffect(() => {
        console.log(status);
    }, [status]);

    //onclick for when new quote button is pressed
    const onNewQuote = async () => {
        setStatus('busy');
        let newT = theme;
        while (newT === theme) newT = randomize(9);
        setTheme(newT);
        let newQ = quotePack;
        while (newQ === quotePack) newQ = quotes[randomize(quotes.length)];
        setQuotePack(newQ);
        await new Promise(resolve => setTimeout(resolve, 400));
        prevC = theme;

        setStatus('idle');
    };


    //delay loading of backdrop until expander fills screen
    return (
        <div
            id="backdrop"
            style={{ backgroundColor: status === "busy" ? prevC : `var(--col-pri-${theme})` }}
        >
            <Expander theme={theme} status={status} />
            <QuoteBox getQuote={onNewQuote} quote={quotePack} theme={theme} status={status} />
        </div>
    )
};

export default App;