import { GET_CLUBS } from "../../modules/ClubModule";
import { GET_CLUB_DETAIL } from "../../modules/ClubDetailModule";

export function callGETClubsAPI(url, params){

    const requestURL = `${url}clubs`; 

    return async function getClubs(dispatch, getState) {

        console.log("요청확인 api api")
    
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

export function callGETClubDetailAPI(url, params){

  const requestURL = `${url}clubs?clubId=${params}`; 

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


/*
  useEffect( () => {
    async function getUser(){
   
    await fetch(`http://127.0.0.1:8080/v1/members?page=${listPage/4 -1}&size=${realRowsPerPage}`,{
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${localStorage.getItem('token')}`
    },}).then(response => response.json())
    .then( res => {
      console.log(res.data.memberAdminDTOList);
      const users = res.data.memberAdminDTOList.map((user) => ({
        code : user.memberCode,
        id: user.memberId,
        nickName: user.nickName,
        role: user.memberRole,
        status: user.isWithDrawal
      }))
      const newUsers = USERLIST.concat(users);
      
      console.log(newUsers);
      setTotalPage(res.data.totalPage);
      setUserList(newUsers);
      console.log("USERLIST");
      console.log(USERLIST);
    })
  }
  getUser();

  }, [listPage]);
*/