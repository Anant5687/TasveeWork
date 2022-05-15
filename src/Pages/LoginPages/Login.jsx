
import React from 'react'
 import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoginSecondHalf from '../../Components/LoginSecondHalf';
import LoginFirstHalf from '../../Components/LoginFirstHalf';



const Login = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <LoginFirstHalf/>
                    </Grid>
                    <Grid item xs={8}>
                        <LoginSecondHalf/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login;
