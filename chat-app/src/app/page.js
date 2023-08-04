export default function Home() {
  return (
    <main className='flex h-[100vh] items-center justify-center gap-1 bg-[#393E46]'>
      <div className='p-3 bg-[#00ADB5] text-white hover:bg-[#EEEEEE] hover:text-[#00ADB5] '>
        <a href='/login'>Go to Login</a>
      </div>
      <div className='p-3 bg-[#EEEEEE] text-[#00ADB5]  hover:bg-[#00ADB5] hover:text-white  '>
        <a href='/register'>Go to register</a>
      </div>
      <div className='p-3 bg-[#EEEEEE] text-[#00ADB5]  hover:bg-[#00ADB5] hover:text-white  '>
        <a href='/lobby'>Go to lobby</a>
      </div>
    </main>
  )
}
