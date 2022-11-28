import { GET_CLUBS } from "../../modules/ClubModule";
import { GET_CLUB_DETAIL } from "../../modules/ClubDetailModule";

export function callGETClubsAPI(url, params){

  const requestURL = url || `${process.env.REACT_APP_URL}/v1/clubs`; 
  console.log(`requestURL${requestURL}`)

    return async function getClubs(dispatch, getState) {
        console.log(`=여기==${process.env.REACT_APP_URL}`);
        console.log("요청확인 api api");
    
        const result = await fetch(requestURL,{
            method:"GET",
            headers: {
                'Content-type': 'application/json',
                'Authorization' :  `Bearer ${localStorage.getItem('token')}`
        },}).then(res => res.json());
    
        console.log('result : ', result.data);
    
        dispatch({type:GET_CLUBS, payload: result.data });
    }
}


export function callGETClubDetailAPI(params){
  const requestURL = `${process.env.REACT_APP_URL}/v1/clubs?clubId=${params}`; 

  return async function getClubDetail(dispatch, getState) {

      console.log(`클럽 디테일 api 요청확인${params}`);
  
      const result = await fetch(requestURL,{
          method:"GET",
          headers: {
              'Content-type': 'application/json',
              'Authorization' :  `Bearer ${localStorage.getItem('token')}`
      },}).then(res => res.json());
  
      console.log('callGETClubDetailAPI result : ', result.data);
      dispatch({type:GET_CLUB_DETAIL, payload: result.data});
  }
}
