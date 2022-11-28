import { createActions, handleActions } from "redux-actions";

const initialState=[];

/* 액션 타입 설정 */
export const GET_RECORDS='1'; 

const actions = createActions({
    [GET_RECORDS]:() => {}
});

/* 리듀서 함수 */
const recordReducer = handleActions(
    {
    [GET_RECORDS]:(state ,{ payload }) => {
        
        console.log('reducer, payload: ', payload);
        
        return payload;
    }
    }, initialState
);

export default recordReducer;