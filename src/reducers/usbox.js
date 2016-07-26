import { REQUEST_USBOX } from '../actions';

export default function usboxMovies(state = {count:0,total:0,start:0,data:[]}, action) {
  switch (action.type) {
    case REQUEST_USBOX:
        return {
            ...state,
            count: action.usbox.count,
            total: action.usbox.total,
            start: action.usbox.start,
            data: action.usbox.subjects
        };
    default:
      return state;
  }
}
