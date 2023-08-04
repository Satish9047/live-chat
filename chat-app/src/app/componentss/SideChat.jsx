import React from 'react'
const SideChat = () => {
  return (
    <div className='flex-col border w-[20%] p-1'>
      <div className='flex gap-1 items-center p-1'>
        <div className='flex'>
          <input
            type='search '
            className='border p-2 rounded-sm'
            placeholder='Search here'
          />
        </div>
        <div>
          <button className='border p-2 bg-[#00ADB5] rounded-md text-white'>
            Search
          </button>
        </div>
      </div>
      <div className='flex flex-col border gap-1 rounded-sm p-1'>
        <div className='border p-2 rounded-sm hover:bg-slate-200 shadow-md'>
          <div className=' flex items-center gap-2 rounded-[400px]'>
            <div>
              <img
                className='w-12 h-12 rounded-[400px] object-fit'
                src='https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                alt=''
              />
            </div>
            <div>
              <p className='font-bold'>Ram Shrestha</p>
              <p className='text-xs'>Sent or received message</p>
            </div>
          </div>
        </div>
        <div className='border p-2 rounded-sm hover:bg-slate-200 shadow-md'>
          <div className=' flex items-center gap-2 rounded-[400px]'>
            <div>
              <img
                className='w-12 h-12 rounded-[400px] object-fit'
                src='https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
                alt=''
              />
            </div>
            <div>
              <p className='font-bold'>Ram Shrestha</p>
              <p className='text-xs'>Sent or received message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideChat
