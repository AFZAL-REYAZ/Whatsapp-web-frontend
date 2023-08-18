import {useEffect, useState, useContext} from 'react';
import { getUsers } from '../../../service/api';
import { Box , Divider} from '@mui/material';
import Conversation from './Conversation';
import {AccountContext} from '../../context/AccountProvider';
import styled from '@emotion/styled';

const Component = styled(Box)`
  height:81vh;
  overflow:overlay;
`
const Conversations = ({text}) => {
  const {account,socket,setActiveUsers}=useContext(AccountContext);

    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            let response = await getUsers();
            const filterData= response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    },[text]);

    useEffect(()=>{
      socket.current.emit('addUsers',account);
      socket.current.on("getUsers",users =>{
        setActiveUsers(users);
      })
    },[account]);

  return (
    <Component>
      {
        users.map((user)=>(
          user.sub !== account.sub &&
          <>
            <Conversation user={user}/>
            <Divider/>
          </>
        ))
      }  
    </Component>
  )
}

export default Conversations