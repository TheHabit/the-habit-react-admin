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
                <title> RE-MATE | 독서 기록 </title>
        </Helmet>
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
                독서 기록 상세조회 페이지
               {`row:${row.id}`}
            </Typography>
            </Stack>
        </Container>
        </>
    );
}