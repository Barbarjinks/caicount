import axios from 'axios';
import { useEffect, useState } from 'react';

function Quote() {
    const [newQuote, setQuote] = useState(null);

    useEffect(() => {
       fetch('https://random-math-quote-api.herokuapp.com/')
        .then(results => results.json())
        .then(data => {
            const {quote} = data.results[0];
            setQuote(quote.quote)
        })
    }, []);
}

export default Quote
