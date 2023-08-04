import React from 'react'
import SideChat from './SideChat'
import ChatMain from './ChatMain'
const Lobby = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='mx-1'>
        <div className=''>
          <div className='text-center'>Gossip Chat App</div>
        </div>
        <div className='flex gap-3'>
          <SideChat />
          <ChatMain />
        </div>
      </div>
    </div>
  )
}

export default Lobby
