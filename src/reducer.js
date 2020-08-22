import FETCH_QUOTE from "./redux/actions/Quote";

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
    case "FETCH_QUOTE":
      console.log(action)

      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;