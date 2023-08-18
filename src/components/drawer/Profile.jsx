import { Box ,Typography,styled} from '@mui/material'
import { useContext } from 'react'
import {AccountContext} from '../context/AccountProvider';

const ImageContaine = styled(Box)`
    display:flex;
    justify-content:center;
`
const Image = styled('img')({
    width:150,
    height:150,
    borderRadius:'50%',
    padding:'25px 0'
})
// shudo CSS Line 20 and 25
const Boxwrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.8);
    & :first-child{ 
        font-size:13px;
        color:#009688;
        font-weight:200;
    }
    & :last-child{
        margin: 14px 0;
        color:#4A4A4A;
    }
`

const DescriptionContaine = styled(Box)`
    padding:15px 20px 28px 30px;
    & > p{
        font-size:13px;
        color:#8696a0;
    }
`
const Profile = () => {
    const {account} = useContext(AccountContext);
  return (
    <Box>
        <ImageContaine>
            <Image src={account.picture} alt='DP'/>
        </ImageContaine>
        <Boxwrapper>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </Boxwrapper>
        <DescriptionContaine>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contact </Typography>
        </DescriptionContaine>
        <Boxwrapper>
            <Typography>About</Typography>
            <Typography>Next Step will be Best Step</Typography>
        </Boxwrapper>
    </Box>
  )
}

export default Profile