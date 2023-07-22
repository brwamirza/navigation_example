import { SET_COLORS } from './actions';

const initialState = {
    color:[]
}

function colorReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COLORS:
            return { ...state, color: action.payload };
        default:
            return state;
    }
}

export default colorReducer;