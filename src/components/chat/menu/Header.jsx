import {useContext, useState} from 'react'
import {AccountContext} from '../../context/AccountProvider';
import { Box } from '@mui/material';
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import HeadeMenu from './HeadeMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height:40px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
`
const Imageheader = styled('img')({
    height:40,
    width:40,
    borderRadius:"50%",
});
const Wrapper = styled(Box)`
    margin-left:auto;
    display:flex;
    align-items:center;
    & > * {
        margin-left:2px;
        padding:8px;
    };
    & :first-child{
        font-size:22px;
        margin-top:3px;
        margin-right:8px;
    }
`
const Header = () => {
    const {account} = useContext(AccountContext);
    const [openDrawer,setOpenDrawer] = useState(false);
    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }
  return (
        <Component>
            <Imageheader src={account.picture} alt='dp' onClick={()=>toggleDrawer()}/>
            <Wrapper>
                <ChatIcon/>
                <HeadeMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </Component>
  )
}

export default Header