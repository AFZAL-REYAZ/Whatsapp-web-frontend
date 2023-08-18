import axios from 'axios'

const url = 'https://drab-jade-walkingstick-gown.cyclic.cloud';
export const addUser = async (data) => {
  try{
    await axios.post(`${url}/add`,data);
  }catch(error){
    console.log("Error while addUser Api",error.message);
  }
}

export const getUsers = async () =>{
  try{
    let response=await axios.get(`${url}/users`);
    return response.data;
  }catch(error){
    console.log('Error while calling getUser api',error.message);
  }
}

export const setConversation = async (data) =>{
  try{
    await axios.post(`http://localhost:8000/conversation/add`,data);
  }catch(error){
    console.log('Error while calling setConversation api',error.message);
  }
}

export const getConversation = async (data) =>{
  try{
    let response = await axios.post(`https://drab-jade-walkingstick-gown.cyclic.cloud/conversation/get`,data)
    return response.data;
  }catch(error){
    console.log('Error while calling getConversation api',error.message);
  }
}

export const newMessage = async (data) =>{
  try{
    await axios.post(`https://drab-jade-walkingstick-gown.cyclic.cloud/message/add`,data);
  }catch(error){
    console.log("Error while calling newMessage api",error.message);
  }
}

export const getMessage = async (id) =>{
  try{
    let response=await axios.get(`${url}/message/get/${id}`);
    return response.data;
  }catch(error){
    console.log("Error while calling getMessage api",error.message);
  }
}

export const upLoadFile = async (data) =>{
  try{
    return await axios.post(`${url}/file/upload`,data);
  }catch(error){
    console.log("Error while calling uploadfile api",error.message);
  }
}
