import { Box, Typography } from '@mui/material'
import {emptyChatImage} from '../../../constants/data'
import styled from 'styled-components'

const Component = styled(Box)`
  background:#faf9fa;
  padding:30px 0;
  text-align:center;
  height:100%;
`
const Container = styled(Box)`
  padding:0 100px;
`
const Image = styled('img')({
  width:400,
  marginTop:100
})
const Title = styled(Typography)`
  font-size:32px;
  margin:25px 0 10px 0;
  font-weight:300;
  color:#41525d;
`
const SubTitle = styled(Typography)`
  font-size:14px;
  font-weight:400;
  color:#667781;
  font-family:inherit;
`
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt='loding'/>
        <Title>WhatsApp Web</Title>
        <SubTitle>Now send and recive messages without keeping your phone online.</SubTitle>
        <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
      </Container>
    </Component>
  )
}

export default EmptyChat