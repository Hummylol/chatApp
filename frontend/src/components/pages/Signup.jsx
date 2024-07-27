import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/UseSign'

const Register = () => {
	const [inputs,setInputs] = useState({
		fullName:'',
		username:'',
		password:'',
		confirmPassword:'',
		gender:''
	})
	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
		console.log(inputs);
	};
  return (
    <div className='flex flex-col items-center justify-center w-96 h-screen mx-auto '>
      <div className="glass w-[100%] p-6 ">
        <h1 className='text-3xl font-semibold text-center text-white'>Signup 
          <span className='text-3xl font-semibold text-center text-black'> Whatsup</span>
        </h1>
        <form onSubmit={handleSubmit}>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base label-text text-white'>Full Name</span>
 						</label>
 						<input type='text' placeholder='Humaid' className='w-full input input-bordered  h-10'
						value={inputs.fullName}
						onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
						/>
 					</div>

 					<div>
 						<label className='label p-2 '>
 							<span className='text-base label-text text-white'>Username</span>
 						</label>
 						<input type='text' placeholder='Hummy Dummy' className='w-full input input-bordered h-10'
						value={inputs.username}
						onChange={(e)=>setInputs({...inputs,username:e.target.value})}
						/>
  				</div>

 					<div>
 						<label className='label'>
 							<span className='text-base label-text text-white'>Password</span>
 						</label>
 						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e)=>setInputs({...inputs,password:e.target.value})}
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
							value={inputs.confirmPassword}
							onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link className='text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block' to="/login">
						Already have an account?
					</Link>

					<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
				</form>
      </div>
      </div>
  )
}

export default Register