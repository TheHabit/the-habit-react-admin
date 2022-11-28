import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography } from '@mui/material';
// import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { callGETClubDetailAPI } from '../apis/clubs/ClubAPICalls';


function dateFotmat(datetime){

    // const date = datetime.substr(0,11) +""+ datetime.substr(12,17);
    // return date

    // const year = new Date(datetime).getFullYear;
    // const month = new Date(datetime).getMonth;
    // const day = new Date(datetime).getDay;
    // const hour = new Date(datetime).getHours;
    // const minute = new Date(datetime).getMinutes;

    const dt = new Date(datetime);
    // const str1 = dt.getFullYear() + '년 ' + (dt.getMonth()+1) + '월 ' + dt.getDate() + '일';

    return `${dt.getFullYear()}년 ${dt.getMonth()+1}월 ${dt.getDate()}일 ${dt.getHours()}시`;
}

export default function ChallengeDetailPage(){
    
    const location = useLocation();

    const clubId = location.state.clubId;
    
    const params = useSelector((state) => state.navigateReducer);
    const clubInfo = useSelector((state) => state.clubDetailReducer);
    const dispatch = useDispatch();
    // const { temp } = useParams();
    console.log(`파람 확인${clubId}`)

    useEffect(()=>{
        // console.log(`clubInfo : ${clubInfo}`);
        console.log(`params clubid : ${params.clubId}`);
        dispatch(callGETClubDetailAPI(clubId));
        // dispatch(callGETClubDetailAPI(params.clubId));
        // dispatch(callGETClubDetailAPI(params.clubId));

    },[])
    return(
        <>
        <Helmet>
                <title> RE-MATE | 모임 관리 </title>
        </Helmet>
        <Typography variant="h4" gutterBottom>
                모임 상세 조회
            </Typography>
        <Container fixed >

            <Stack direction="row" alignItems="center" justifyContent="center" mb={5}>
            <Paper elevation={1} sx={{margin:5}}>

            <Grid container spacing={3} columns={16}>
                <Grid xs={8} sx={{}}>
                    <Stack spacing={1} sx={{mt:2, margin:2}}>
                        <Typography variant="h5" color="primary" gutterBottom >
                            모임 명 : {clubInfo.clubName}
                        </Typography>
                        <Typography  variant="subtitle1"> Id </Typography>
                        <Typography> {clubInfo.clubId} </Typography>
                        <Typography  variant="subtitle1"> 대상 도서 </Typography>
                        <Typography> {clubInfo.bookName}</Typography>
                        <Typography  variant="subtitle1"> 참가 인원 </Typography>
                        <Typography >{clubInfo.currentNumberOfMemeber} 명</Typography>
                        <Typography  variant="subtitle1"> 모임 소개 </Typography> 
                        <Typography> {clubInfo.clubIntro}</Typography>
                        <Typography variant="subtitle1"> 모집 기간 </Typography>
                        <Typography> 모집 시작일 : {dateFotmat(clubInfo.recruitStartDate)} </Typography>
                        <Typography> 모집 종료일 : {dateFotmat(clubInfo.recruitEndDate)} </Typography>
                        <Typography variant="subtitle1"> 모임 기간 </Typography>
                        <Typography> 모임 시작일 : {dateFotmat(clubInfo.startDate)} </Typography>
                        <Typography>모임 종료일 : {dateFotmat(clubInfo.endDate)} </Typography>
                        <Typography>{/* clubId : {clubInfo.scheduleDTOList[0]} */}</Typography>
                    </Stack>
                </Grid>
                <Grid xs={4}>
                    <Stack alignItems="center" direction="col"
                        sx={{
                        margin:2,
                        height: 400}}>
                        <img alt="image_" width={600} src={clubInfo.imageUri} />
                    </Stack>
                </Grid>
            </Grid>
            </Paper>
            
            </Stack>
        </Container>
        </>
    );
}