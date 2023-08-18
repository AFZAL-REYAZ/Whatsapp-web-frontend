import { Box, styled } from '@mui/material'
import Footer from './Footer'
import { useContext, useEffect, useState, useRef } from 'react';
import {AccountContext} from '../../context/AccountProvider';
import { getMessage, newMessage } from '../../../service/api';
import Messaje from './Messaje.jsx';

const Wrapper = styled(Box)`
    background-image:url(${'https://mcdn.wallpapersafari.com/335/27/32/jt4AoG.jpg'})
    `
const Component = styled(Box)`
    height:80vh;
    overflow-y:scroll;
`
const Container = styled(Box)`
  padding:1px 80px;
`
const Messages = ({person,conversation}) => {
  const [value,setValue]=useState('');
  const {account,socket,newMessageFlag,setNewMessageFlag}=useContext(AccountContext);
  const [messages, setMessages]=useState([]);
  const [file,setFile]=useState();
  const [image,setImage] = useState('');
  const [incomingMessage,setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  useEffect(()=>{
    socket.current.on('getMessage',data =>{
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    }) 
  },[])

  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages(prev => [...prev, incomingMessage])
  },[incomingMessage,conversation]);

  useEffect(()=>{
    const getMessageDetails=async()=>{
      let data = await getMessage(conversation._id);
      setMessages(data);
    }  
    conversation._id && getMessageDetails();
  },[person._id,conversation._id,newMessageFlag]);

useEffect(()=>{
  scrollRef.current?.scrollIntoView({transition:'smooth'})
},[messages])

  const sendText = async (e)=>{
    const code = e.keyCode || e.wich;
    if(code === 13){
      let message = {};
      if(!file){
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'text',
          text:value
        }
      }else {
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'file',
          text:image
        }
      }
      
      socket.current.emit('sendMessage',message);

      await newMessage(message);
      setValue('');
      setFile('');
      setImage('');
      setNewMessageFlag(prev => !prev)
    }
  }
  return (
    <Wrapper>
        <Component>
          {
            messages && messages.map((message) =>{
              return (
                <Container ref={scrollRef}>
                  <Messaje message={message}/>
                </Container>
              )
            })
          }
        </Component>
        <Footer 
          sendText={sendText} 
          setValue={setValue} 
          value={value}
          file={file}
          setFile={setFile}
          setImage={setImage}
          />
    </Wrapper>
  )
}

export default Messages