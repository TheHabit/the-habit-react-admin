import { GET_USERS } from "src/modules/UserModule";

export function callGETUsersAPI(url, params){
    const requestURL = url || ''; 

    return async function getUsers(dispatch, getState) {
    
        const result = await fetch(requestURL).then(res => res.json());
    
        console.log('result : ', result);
    
        dispatch({ type: GET_USERS, payload: result });
    }
}