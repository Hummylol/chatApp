import React from 'react'

const Signin = () => {
  return (
    <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto '>
      <div className="glass w-[100%] p-6 ">
        <h1 className='text-3xl font-semibold text-center text-white'>Login 
          <span className='text-3xl font-semibold text-center text-green-600'> Whatsup</span>
        </h1>
        <form>
					<div>
					<label className='label p-2 '>
						<span className='text-base text-white label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base text-white  label-text'>Password</span>
 						</label>
 						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>
					<a href='#' className='text-sm text-white  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2'>Login</button>
					</div>
				</form>

      </div>
    </div>
  )
}

export default Signin