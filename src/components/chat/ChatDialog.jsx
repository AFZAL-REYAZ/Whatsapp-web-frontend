import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box,styled } from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import ChatBox from './chat/ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const dilogStyle = {
  height:"90%",
  width:"100%",
  margin:"20px",
  maxWidth:"100%",
  maxHight:"100%",
  boxShadow:"none",
}

const Component = styled(Box)`
  display:flex;
  max-height:100%;
`
const LeftComponent = styled(Box)`
  min-width:450px;
`
const RightComponent = styled(Box)`
  width:73%;
  min-width:300px;
  height:100%;
  border-left:1px solid rgba(0,0,0,0.14);
`
const ChatDialog = () => {
  const {person}=useContext(AccountContext);
  return (
    <Dialog open={true} PaperProps={{sx:dilogStyle}} hideBackdrop={true} maxWidth={'md'}>
      <Component>
        <LeftComponent>
          <Menu/>
        </LeftComponent>
        <RightComponent>
        {Object.keys(person).length?<ChatBox/> : <EmptyChat/>}
        </RightComponent>
      </Component>
    </Dialog>
  )
}

export default ChatDialog