import { Box, InputBase, styled } from '@mui/material'
import {EmojiEmotionsOutlined, AttachFile, Mic} from '@mui/icons-material';
import { useEffect } from 'react';
import { upLoadFile } from '../../../service/api';
 
const Container = styled(Box)`
    height:55px;
    background:#ededed;
    display:flex;
    width:100%
    align-items:center;
    padding:0 15px;
    & > * {
        margin:20px;
        color:#919191;
    }
`
const Search = styled(Box)`
    background-color:#FFFFFF;
    border-radius:15px;
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    padding:2px;
    margin-top:6px;
`
const InputField = styled(InputBase)`
    width:100%;
    padding:10px;
    height:60px;
    padding-left:25px;
    font-size:14px;
`
const ClipIcon = styled(AttachFile)`
    transform:rotate(40deg);
`
const Footer = ({sendText,setValue,value,file,setFile,setImage}) => {

    useEffect(()=>{
        const getImage = async () =>{
            if(file){
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                let response = await upLoadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    })
    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }
  return (
    <Container>
        <EmojiEmotionsOutlined/>
        <label htmlFor='FileInput'>
            <ClipIcon/>
        </label>
        <input 
            id='FileInput'
            type='file'
            style={{display:'none'}}
            onChange={(e)=>onFileChange(e)}
        />
        <Search>
            <InputField placeholder='Type a message'
            onChange={(e)=>setValue(e.target.value)}
            onKeyDown={(e)=>sendText(e)} 
            value={value}/>
        </Search>
        <Mic/>
    </Container>
  )
}

export default Footer