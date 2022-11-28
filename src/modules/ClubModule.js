import { createActions, handleActions } from "redux-actions";

const initialState=[];

/* 액션 타입 설정 */
export const GET_CLUBS=' '; 

const actions = createActions({
    [GET_CLUBS]:() => {}
});

/* 리듀서 함수 */
const clubReducer = handleActions(
    {
    [GET_CLUBS]:(state ,{ payload }) => {
        
        console.log('reducer, payload: ', payload);
        
        return payload;
    }
    }, initialState
);

export default clubReducer;