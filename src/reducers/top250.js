import { REQUEST_TOP250 } from '../actions';

export default function top250Movies(state = {count:0,total:0,start:0,data:[]}, action) {
  switch (action.type) {
    case REQUEST_TOP250:
        return {
            ...state,
            count: action.top250.count,
            total: action.top250.total,
            start: action.top250.start,
            data: action.top250.subjects
        };
    default:
      return state;
  }
}
