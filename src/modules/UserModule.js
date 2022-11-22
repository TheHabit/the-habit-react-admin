import { createActions, handleActions } from "redux-actions";


const initialState=[];

/* 액션 타입 설정 */
export const GET_USERS=''; 

const actions = createActions({
    [GET_USERS]:() => {}
});

/* 리듀서 함수 */
const userReducer = handleActions(
    {
    [GET_USERS]:(state ,{ payload }) => {
        
        console.log('payload: ', payload);
        
        return payload;
    }
    }, initialState
);

export default userReducer;