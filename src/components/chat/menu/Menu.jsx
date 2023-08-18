import { useState } from 'react'
import Header from './Header'
import Serch from './Serch'
import Conversations from './Conversations'

const Menu = () => {
  const [text,setText]=useState('');

  return (
    <div>
      <Header/> 
      <Serch setText={setText}/>
      <Conversations text={text}/>
    </div>
  )
}

export default Menu