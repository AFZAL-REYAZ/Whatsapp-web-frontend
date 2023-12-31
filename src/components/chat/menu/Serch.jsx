import { Box , InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Component = styled(Box)`
    background:#fff;
    height:45px;
    border-bottom:1px solid #F2F2F2;
    display:flex;
    align-items:center;
`
const Wrapper = styled(Box)`
    background-color:#f0f2f5;
    position:relative;
    margin:0 13px;
    width:100%;
    border-radius:10px;
`
const Icon = styled(Box)`
    position:absolute;
    height:100%;
    padding:8px;
    color:#919191;
`
const InputField = styled(InputBase)`
    width:100%;
    padding:16px;
    padding-left:65px;
    height:15px;
    font-size:14px;
`

const Serch = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon/>
            </Icon>
            <InputField placeholder='Search or chat' onChange={(e)=>setText(e.target.value)}/>
        </Wrapper>
    </Component>
  )
}

export default Serch