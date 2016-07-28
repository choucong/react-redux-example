import { REQUEST_DETAIL } from '../actions';

export default function detail(state = {}, action) {
  // console.log("action_______",action.detail);
  switch (action.type) {
    case REQUEST_DETAIL:
        return Object.assign({},action.detail);
    default:
      return state;
  }
}
