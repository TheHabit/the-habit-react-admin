import { createActions, handleActions } from "redux-actions";

const initialState=[];

/* 액션 타입 설정 */
export const GET_CLUB_DETAIL='0'; 

const actions = createActions({
    [GET_CLUB_DETAIL]:() => {}
});

/* 리듀서 함수 */
const clubDetailReducer = handleActions(
    {
    [GET_CLUB_DETAIL]:(state ,{ payload }) => {
        
        console.log('clubDetailReducer payload: ', payload);
        
        return payload;
    }
    }, initialState
);

export default clubDetailReducer;