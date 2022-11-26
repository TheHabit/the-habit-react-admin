import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    let isSuccess = "";

    await fetch('http://127.0.0.1:8080/v1/auths/login',{
      method: "POST",
      headers: {
        'Content-type': 'application/json'
    },
      body: JSON.stringify({
        memberId: id,
        memberPwd: pwd
      })
    }).then(response => response.json())
    .then(res => {
      localStorage.setItem("token", res.data.accessToken)
      isSuccess = res.status;
    })

    if(isSuccess === 200){
      navigate('/dashboard', { replace: true });
    } else{
      alert("로그인에 실패했습니다.");
    }
    
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="id" label="ID" value={id} onChange={(e) => setId(e.target.value)}/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={pwd}
          onChange={(e) => setPwd(e.target.value) }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <></>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        로그인
      </LoadingButton>
    </>
  );
}
