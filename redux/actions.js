export const SET_COLORS = 'SET_COLORS';


export const setColors = color => dispatch => {
    dispatch({
        type: SET_COLORS,
        payload: color,
    });
};
