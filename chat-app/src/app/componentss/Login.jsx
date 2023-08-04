import React from 'react'

const Login = () => {
  return (
    <div className='h-[100vh] flex items-center justify-center bg-[#393E46]'>
      <form className='border border-black p-5  bg-[#EEEEEE] rounded-md'>
        <h2 className='text-2xl font-bold text-[#00ADB5] text-center'>Login</h2>
        <hr class='h-px my-2 bg-gray-300 border-0 '></hr>
        <div className='flex flex-col gap-3 py-2 w-[300px]'>
          <div>
            <input
              type='text'
              placeholder='Enter your email'
              id='email'
              name='email'
              className='border p-2 w-[300px] rounded-lg'
            />
          </div>

          <div>
            <input
              type='password'
              placeholder='Enter your password'
              id='password'
              name='password'
              className='border p-2 w-[300px] rounded-lg'
            />
          </div>
          <div>
            <input
              type='submit'
              className='border p-2 w-[300px] bg-[#00ADB5] text-[#FFFFFF]'
              id='submit'
              name='submit'
            />
          </div>

          <div className='flex items-center gap-1'>
            <span className='text-xs'>No account?</span>
            <a href='./register' className='text-sm underline'>
              Register here
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
