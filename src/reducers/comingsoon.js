import {
    REQUEST_COMINGSOON
} from '../actions';

export default function comingsoon(state = {count:0,total:0,start:0,data:[]}, action) {
    console.log("action:----", action);
    switch (action.type) {
        case REQUEST_COMINGSOON:
            return {
                ...state,
                count: action.comingsoon.count,
                total: action.comingsoon.total,
                start: action.comingsoon.start,
                data: action.comingsoon.subjects
            };
        default:
            return state;
    }
}
