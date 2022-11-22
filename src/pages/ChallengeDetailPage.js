import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography } from '@mui/material';
// import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ChallengeDetailPage(){

    // const location = useLocation();

    // const challengeInfo = location.state.row;
    
    const row = useSelector((state) => state.navigateReducer);

    useEffect(()=>{
        console.log(row);
    },[])
    return(
        <>
        <Helmet>
                <title> 오늘의 할일 | 챌린지 관리 </title>
        </Helmet>
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
                챌린지 상세조회 페이지
               {`row:${row.id}`}
            </Typography>
            </Stack>
        </Container>
        </>
    );
}