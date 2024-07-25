import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto '>
      <div className="glass w-[100%] p-6 ">
        <h1 className='text-3xl font-semibold text-center text-white'>Signup 
          <span className='text-3xl font-semibold text-center text-green-600'> Whatsup</span>
        </h1>
        <form>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text text-white'>Full Name</span>
 						</label>
 						<input type='text' placeholder='Humaid' className='w-full input input-bordered  h-10' />
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text text-white'>Username</span>
 						</label>
 						<input type='text' placeholder='Hummy Dummy' className='w-full input input-bordered h-10' />
  				</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text text-white'>Password</span>
 						</label>
 						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-white'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<GenderCheckbox />

					<a className='text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
					</div>
				</form>
      </div>
      </div>
  )
}

export default Register