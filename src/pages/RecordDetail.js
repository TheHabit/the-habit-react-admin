import { Helmet } from 'react-helmet-async';
import { Card, Container, Stack, TableBody, TableContainer, Typography, Rating  } from '@mui/material';
// import {useLocation} from 'react-router-dom';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Label from '../components/label';

export default function ChallengeDetailPage(){

    // const location = useLocation();

    // const challengeInfo = location.state.row;
    
    // const row = useSelector((state) => state.navigateReducer);
    

    
    const {state} = useLocation();

    const recordCode = state;

    const [recordDetails, setRecordDetails] = useState({});


    useEffect( () => {

        console.log(recordCode);
        async function getDetail(){
       
        await fetch(`http://127.0.0.1:8080/v1/records/one?recordCode=${recordCode}`,{
          method: "GET",
          headers: {
            'Content-type': 'application/json',
            'Authorization' :  `Bearer ${localStorage.getItem('token')}`
        },}).then(response => response.json())
        .then( res => {
          const record = {
            recordCode : res.data.recordCode,
            bookName : res.data.bookName,
            author : res.data.bookAuthor,
            publisher : res.data.bookPublishInfo,
            thumbnail : res.data.thumbnailLink,
            isbn : res.data.bookISBN,
            rating : res.data.rating,
            review : res.data.bookReview,
            oneLineReview : res.data.oneLineReview,
            isDone : res.data.isDone,
            isBest : res.data.isBest,
            reportDate : res.data.reportDate,
            writer : res.data.name
          }
          console.log("record");
          console.log(record);
          setRecordDetails(record);
          console.log(recordDetails);
        })
      }
      
      getDetail();
      console.log(recordDetails.rating)
    
      }, []);

    return(
        recordDetails.rating && (
        <>
        <Helmet>
                <title> RE-MATE | 독서 기록 상세 </title>
        </Helmet>
        <Container >
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    독서 기록 상세 조회
                </Typography>
            </Stack>
            <Card sx={{ minHeight: 500 }}>
                <CardHeader
                    action={
                    (
                        <IconButton aria-label="settings">
                            {recordDetails.isBest === 'Y' ? 'BEST' : null}
                        </IconButton>
                    )
                    }
                    title={
                        recordDetails.bookName
                    }
                    subheader={
                        `${recordDetails.author}`
                    }
                />
                {/* {(
                    <CardMedia
                    sx={{width: 1/4}}
                    component="img"
                    image={recordDetails.thumbnail}
                    alt={recordDetails.bookName}
                    />
                )} */}

                <CardContent style={{
                    display:"flex",
                    gap:"30px"
                }} >
                {(
                    <CardMedia
                    sx={{width: 1/4}}
                    component="img"
                    image={recordDetails.thumbnail}
                    alt={recordDetails.bookName}
                    />
                )}
                    {(
                    <Typography variant="body1" component="p">
                        {
                        `작성자 : ${recordDetails.writer}\n`
                        }
                         {(<>
                         <div style={{display:"flex", marginTop:"5px"}}>
                            <Typography component="legend">평점 :</Typography>
                            <Rating name="rating" value={recordDetails.rating} readOnly />
                           </div>

                           <Typography component="div" style={{marginTop:"30px"}}>
                                {`${recordDetails.review}`}
                           </Typography>

                           <Typography component="div" style={{marginTop:"40px"}}>
                                {`AI 한줄 요약 : ${recordDetails.oneLineReview}`}
                           </Typography>
                           <Typography component="div" style={{marginTop:"20px"}}>
                                {`기록한 날 : 
                                ${ new Date(recordDetails.reportDate).getFullYear()}년 
                                ${new Date(recordDetails.reportDate).getMonth()}월
                                ${new Date(recordDetails.reportDate).getDate()}일`}
                           </Typography>
                           <Typography component="div" style={{marginTop:"20px"}}>
                           <Label color={(recordDetails.isDone === 'N' && 'error') || 'success'} >{recordDetails.isDone === 'Y' ? '완독' : '독서 중' }</Label>
                               
                           </Typography>

                           </>
                        )}
                    </Typography>
                    )}
                   
                </CardContent>
            </Card>
        </Container>
        </>
    )
    );
}