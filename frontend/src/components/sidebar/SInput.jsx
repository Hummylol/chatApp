import { IoSearchSharp } from "react-icons/io5";
import React from 'react'

const SInput = () => {
  return (
    <form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle hover:bg-green-400 text-white border-none'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
  )
}

export default SInput