import { GET_RECORDS } from "../../modules/RecordModule"


export function callGetRecordsAPI(url, params){
   
    const requestURL = `${url}records/all-admin`

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
      });
      console.log(records);
  
      dispatch({type:GET_RECORDS, payload: records });
    }
}