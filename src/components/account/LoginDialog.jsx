import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, List, ListItem, Typography, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {AccountContext} from "../context/AccountProvider";
import { addUser } from '../../service/api';

const Component = styled(Box)`
    display:flex;
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const QRCODE = styled(`img`)({
    height:264,
    width:264
})

const Title= styled(Typography)`
    font-size:25px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px;
`
const Styledlist = styled(List)`
    & > li {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
    }
`

const dilogStyle = {
    height:"90%",
    marginTop:"12%",
    width:"60%",
    maxWidth:"100%",
    maxHight:"100%",
    boxShadow:"none",
    overflow:"hidden"
}

const LoginDialog = () => {
    const {setAccount} = useContext(AccountContext);
    const onLoginSuccess = async (res)=>{
        const decoded=jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError = (res)=>{
        console.log("Login Failed",res);
    }
  return (
    <Dialog open={true} PaperProps={{sx:dilogStyle}} hideBackdrop={true}>
        <Component>
            <Container>
                <Title>To use WhatsApp on your computer</Title>
                <Styledlist>
                    <ListItem>1. open whatsApp on your phone</ListItem>
                    <ListItem>2. Top Menu Setting and select WhatsApp Web</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                </Styledlist>
            </Container>
            <Box style={{position:'relative'}}>
                <QRCODE src={qrCodeImage} alt='qr code' />
                <Box style={{position:'absolute',top:'35%',transform:'translatex(25%)'}}>
                    <GoogleLogin
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>

    </Dialog>
  )
}

export default LoginDialog