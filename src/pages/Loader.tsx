import React from 'react'
import loading from '@/assets/loading.gif'
function Loader() {
  return (
    <>
      <div className='fixed top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-white/60'>
        <img className='h-60' src={loading} alt='loading. please wait' />
      </div>
    </>
  )
}

export default Loader
