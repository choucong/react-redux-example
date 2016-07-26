import { REQUEST_INTHEATERS } from '../actions';

export default function intheaters(state = {count:0,total:0,start:0,data:[]}, action) {
  switch (action.type) {
    case REQUEST_INTHEATERS:
        return {
            ...state,
            count: action.intheaters.count,
            total: action.intheaters.total,
            start: action.intheaters.start,
            data: action.intheaters.subjects
        };
    default:
      return state;
  }
}
