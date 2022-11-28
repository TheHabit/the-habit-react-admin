import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography } from '@mui/material';
// import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { callGETClubDetailAPI } from '../apis/clubs/ClubAPICalls';


function dateFotmat(datetime){

    const dt = new Date(datetime);

    return `${dt.getFullYear()}년 ${dt.getMonth()+1}월 ${dt.getDate()}일 ${dt.getHours()}시`;
}

function scheduleFormat(List){
    let schedule = "";
    for(let i = 0; i < List.length ; i += 1 ){
        console.log(i)
        const str = ` ${List[i].dayOfWeek}요일 ${List[i].startTime} ~ ${List[i].endTime} \n`;

        schedule += str;
    
    }

    return schedule


    // for(const item of List){
    
    //     const str = `${item.dayOfWeek}요일 ${item.startTime} ~ ${item.endTime}`;
    //     console.log(str);

    // }

}
    // const iteration = (List) => {
    //     const nameList = List.map((schedule) => <li>{ ` ${schedule.dayOfWeek}요일 ${schedule.startTime} ~ ${schedule.endTime}`}</li>);
    //     return <ul>{nameList}<ul/>;
    // }




export default function ChallengeDetailPage(){

    const navigate = useNavigate();
    
    const location = useLocation();

    const clubId = location.state.clubId;
    
    const params = useSelector((state) => state.navigateReducer);
    const clubInfo = useSelector((state) => state.clubDetailReducer);
    const dispatch = useDispatch();
    // const { temp } = useParams();
    console.log(`파람 확인${clubId}`)
    
    const url = process.env.REACT_APP_API_URL;

    useEffect(()=>{
        if(localStorage.getItem('token') == null){
            navigate('/login');
            return;
        }
        // console.log(`clubInfo : ${clubInfo}`);
        console.log(`params clubid : ${params.clubId}`);
        dispatch(callGETClubDetailAPI(url, clubId));
        // dispatch(callGETClubDetailAPI(params.clubId));
        // dispatch(callGETClubDetailAPI(params.clubId));

    },[])
    const nameList = ( scheduleList ) => { scheduleList.map(schedule => <li>{`${schedule.dayOfWeek}요일 ${schedule.startTime} ~ ${schedule.endTime}`}</li>)};
    
    return(
        <>
        <Helmet>
                <title> RE-MATE | 모임 관리 </title>
        </Helmet>
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
                모임 상세 조회
            </Typography>
            </Stack>
        </Container>
        <Container fixed sx={{width:1200}}>

            <Stack direction="row" alignItems="center" justifyContent="center" mb={5}>
            <Paper elevation={1} sx={{margin:5}}>

            <Grid container spacing={3} columns={16}>
                <Grid xs={8} sx={{}}>
                    <Stack spacing={1} sx={{mt:2, margin:2}}>
                        <Typography variant="h5" color="primary" gutterBottom >
                            모임 명 : {clubInfo.clubName}
                        </Typography>
                        <Typography  variant="subtitle1"> {`ID : ${clubInfo.clubId}`} </Typography>
                        <Typography  variant="subtitle1"> {`대상 도서 : ${clubInfo.bookName}`} </Typography>
                        <Typography  variant="subtitle1"> {`참가 인원 : ${clubInfo.currentNumberOfMemeber} 명`} </Typography>
                        <Typography  variant="subtitle1"> 모임 소개 </Typography> 
                        <Typography> {clubInfo.clubIntro}</Typography>
                        <Typography variant="subtitle1"> 모집 기간 </Typography>
                        <Typography> 모집 시작일 : {dateFotmat(clubInfo.recruitStartDate)} </Typography>
                        <Typography> 모집 종료일 : {dateFotmat(clubInfo.recruitEndDate)} </Typography>
                        <Typography variant="subtitle1"> 모임 기간 </Typography>
                        <Typography> 모임 시작일 : {dateFotmat(clubInfo.startDate)} </Typography>
                        <Typography>모임 종료일 : {dateFotmat(clubInfo.endDate)} </Typography>
                        <Typography variant="subtitle1"> 회의 일정 </Typography>
                        <div style={{whiteSpace:'pre-wrap'}}>{clubInfo.scheduleDTOList ? scheduleFormat(clubInfo.scheduleDTOList):""} </div>

                    </Stack>
                </Grid>
                <Grid xs={8}>
                    <Stack alignItems="center" direction="col"
                        sx={{
                        height:400,
                        margin:2,
                        }}>
                        {/* <img alt="image_" width={600} src={clubInfo.imageUri} /> */}
                    <CardContent style={{
                    display:"flex",
                    gap:"30px"
                        }} >
                        {(
                            <CardMedia

                            component="img"
                            image={clubInfo.imageUri}
                            alt="img_"
                            />
                        )}
                    </CardContent>
                    </Stack>
                </Grid>
            </Grid>
            </Paper>
            
            </Stack>
        </Container>
        </>
    );
}