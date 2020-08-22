import Quote from "./redux/actions/Quote";

function reducer(state = { num: 0, quote: 'Quote' }, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + action.step,
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num
      };
    case "DATE":
      return {
        ...state,
        quote: Quote
      };
    default:
      return state;
  }
}

export default reducer;