import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';

const Signin = () => {
	const [username,setUsername] = useState("");
	const [password,setPassword] = useState("");
	const { loading, login } = useLogin();
	const handleSubmit=async (e)=>{
		e.preventDefault();
		await login(username,password);
	}
  return (
    <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto '>
      <div className="glass w-[100%] p-6 ">
        <h1 className='text-3xl font-semibold text-center text-white'>Login 
          <span className='text-3xl font-semibold text-center text-black'> Whatsup</span>
        </h1>
        <form onSubmit={handleSubmit}>
					<div>
					<label className='label p-2 '>
						<span className='text-base text-white label-text'>Username</span>
 						</label>
 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' 
						value={username}
						onChange={(e)=>setUsername(e.target.value)}
						/>
 					</div>

 					<div>
 						<label className='label'>
 							<span className='text-base text-white  label-text'>Password</span>
 						</label>
 						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e)=>setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm text-white  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
					<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>

      </div>
    </div>
  )
}

export default Signin