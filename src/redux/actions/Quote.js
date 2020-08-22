import axios from 'axios';
export const FETCH_QUOTE = 'FETCH_QUOTE';

export function getQuote() {

const request = axios.get('https://random-math-quote-api.herokuapp.com/');
console.log(request);
    return{
        type: FETCH_QUOTE,
        payload: request.quote
    };
    
}