import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Loader2 className='animmate-spin' />
    </div>
  )
}

export default Loader