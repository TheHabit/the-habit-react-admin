import { createActions, handleActions } from "redux-actions";


const initialState={};

/* 액션 타입 설정 */
export const SET_PARAM='param/set'; 

const actions = createActions({
    [SET_PARAM]:() => {}
});

/* 리듀서 함수 */
const navigateReducer = handleActions(
    {
    [SET_PARAM]:(state , {payload}) => {
        
        console.log('state payload: ', payload);
        
        return payload;
    }
    }, initialState
);

export default navigateReducer;