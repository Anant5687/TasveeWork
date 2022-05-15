import style from './Login.module.css'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from '@mui/material';
import { GoogleOutlined } from '@ant-design/icons';
import tasveeMain from '../assets/logo.png'


const LoginFirstHalf = () => {
    return (
        <>
            <div className={style.main}>
                <div className={style.page}>
                    <img src={tasveeMain} alt="img" style={{ height: '130px', width: '130px', marginLeft: "130px" }} /><br />
                    <label className={style.label}>
                        E-mail
                    </label>
                    <br />
                    <TextField id="outlined-basic"
                        className={style.input1}
                        label="E-mail" variant="outlined" /><br />
                    {/* <Space direction="vertical">
                        <Input.Password
                        className={style.input2}
                        placeholder="Password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Space><br /> */}
                    <label className={style.label1}>Password</label><br/>
                     <TextField id="outlined-basic"
                        className={style.input2}
                        label="Password" variant="outlined" /><br />
                    <Button
                    className={style.button}
                    variant="contained">Log in</Button>
                    <h5 align="center" className={style.heading}>or continue with...</h5>
                    <Button variant="contained"
                    className={style.button2}> <GoogleOutlined /></Button><br /><br /><br /><br />
                    <h5 align="center" className={style.heading}>Don't have any account? <b>Register for free</b></h5>
                </div>
            </div>
        </>
    )
}

export default LoginFirstHalf
