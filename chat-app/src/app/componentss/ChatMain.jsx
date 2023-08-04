import React from 'react'

const ChatMain = () => {
  return (
    <div className='border  w-full p-1'>
      <div className='border p-2 flex gap-2 items-center text-lg shadow-lg mb-3'>
        <div className=''>
          <img
            className='w-12 h-12 rounded-[400px] object-fit'
            src='https://images.pexels.com/photos/17781600/pexels-photo-17781600.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
            alt=''
          />
        </div>
        <div>
          <h2>Ram Yadav</h2>
        </div>
      </div>
      <div className='w-full h-[80vh] border my-1 p-2 text-slate-300 overflow-hidden overflow-y-scroll'>
        <p className='max-w-[500px] w-fit p-2 bg-[#00ADb5] rounded-xl my-1'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, qui
          laboriosam laudantium aspernatur facilis nulla voluptatem possimus
          expedita eaque a dicta dolore.
        </p>
        <p className='max-w-[500px] w-fit p-2 bg-blue-600 rounded-xl ml-auto'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, qui
          laboriosam laudantium asre.
        </p>
        <p className='p-2  max-w-[500px] w-fit  bg-[#00ADb5] rounded-xl my-1'>
          Lorem ipsum,
        </p>
        <p className='max-w-[500px] w-fit p-2  bg-blue-600  rounded-xl ml-auto'>
          Lorem ipsum, dolor sit
        </p>
        <p className='max-w-[500px] w-fit p-2 bg-[#00ADb5] rounded-xl my-1'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, qui
          laboriosam laudantium aspernatur facilis nulla voluptatem possimus
          expedita eaque a dicta dolore.
        </p>
        <p className='max-w-[500px] w-fit p-2 bg-blue-600 rounded-xl ml-auto'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, qui
          laboriosam laudantium aspernatur facilis nulla voluptatem possimus
          expedita eaque a dicta dolore.
        </p>
        <p className='p-2  max-w-[500px] w-fit  bg-[#00ADb5] rounded-xl my-1'>
          Lorem ipsum,
        </p>
        <p className='max-w-[500px] w-fit p-2  bg-blue-600  rounded-xl ml-auto'>
          Lorem ipsum, dolor sit
        </p>
        <p className='max-w-[500px] w-fit p-2 bg-[#00ADb5] rounded-xl my-1'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, qui
          laboriosam laudantium aspernatur facilis nulla voluptatem possimus
          expedita eaque a dicta dolore.
        </p>
        <p className='max-w-[500px] w-fit p-2 bg-blue-600 rounded-xl ml-auto'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, qui
          laboriosam laudantium aspernatur facilis nulla voluptatem possimus
          expedita eaque a dicta dolore.
        </p>
        <p className='p-2  max-w-[500px] w-fit  bg-[#00ADb5] rounded-xl my-1'>
          Lorem ipsum,
        </p>
        <p className='max-w-[500px] w-fit p-2  bg-blue-600  rounded-xl ml-auto'>
          Lorem ipsum, dolor sit
        </p>
      </div>
      <div className='flex gap-1'>
        <input type='text' className='w-[1042px] border p-2 rounded-lg' />
        <button className='bg-[#00ADB5] h-10 rounded-lg px-5'>Send</button>
      </div>
    </div>
  )
}

export default ChatMain
