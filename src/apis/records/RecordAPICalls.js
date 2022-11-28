import { GET_RECORDS } from "../../modules/RecordModule"

export function callGetRecordsAPI(url, params){
    // const requestURL = url || 'http://15.165.28.206:80/v1/records/all-admin'; 
    // const requestURL = url || 'http://127.0.0.1:8080/v1/records/all-admin'; 
    const requestURL = url || `${process.env.REACT_APP_URL}/v1/records/all-admin`; 

    return async function getRecords(dispatch, getState) {

        console.log("요청확인 api api")
        let records = [];
        await fetch(requestURL,{
            method: "GET",
            headers: {
              'Content-type': 'application/json',
              'Authorization' :  `Bearer ${localStorage.getItem('token')}`
          },}).then(response => response.json())
          .then(res => {
            console.log(res.data);
            records = res.data.map((user) => ({
              code: user.recordCode,
              bookName: user.bookName,
              isbn: user.bookISBN,
              author: user.bookAuthor,
              writer: user.name,
              rating: user.rating
            }))
        })
        dispatch({type:GET_RECORDS, payload: records });
    }
}




// await fetch('http://15.165.28.206:80/v1/records/all-admin',{
//     method: "GET",
//     headers: {
//       'Content-type': 'application/json',
//       'Authorization' :  `Bearer ${localStorage.getItem('token')}`
//   },}).then(response => response.json())
//   .then( res => {
//     console.log(res.data);
//     const records = res.data.map((user) => ({
//       code: user.recordCode,
//       bookName: user.bookName,
//       isbn: user.bookISBN,
//       author: user.bookAuthor,
//       writer: user.name,
//       rating: user.rating
//     }))
//     console.log(records);
//     setUserList(records);
//     console.log(USERLIST);
//   })
// }
// getUser();