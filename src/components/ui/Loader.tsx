import { Loader2 } from 'lucide-react'

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Loader2 size={32} className='animate-spin' />
    </div>
  )
}

export default Loader