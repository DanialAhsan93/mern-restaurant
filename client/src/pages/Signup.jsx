import { Alert, Button, Label, Spinner, TextInput, } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { assetsData } from '../data/assetsdata';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
// import OAuth from '../components/OAuth';

function Signup() {

  const [form, formData] = useState({});
  // const [errorMessage, seterrorMessage] = useState(null);
  // const [loading, setloading] = useState(false);
  // const { loading, error: errorMessage } = useSelector(state => state.user)
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme)

  const handleInput = (e) => {
    formData({ ...form, [e.target.id]: e.target.value.trim() });
  }


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!form.email || !form.password) {
  //     // return seterrorMessage('Please fill out all the fields.')
  //     return dispatch(signInFailure('Please fill out all the fields.'))
  //   }

  //   try {
  //     dispatch(signInStart())

  //     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/Signin`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include',
  //       body: JSON.stringify(form),
  //     })

  //     const data = await response.json();
  //     console.log(data)
  //     if (data.success === false) {
  //       // setloading(false)
  //       // return seterrorMessage(data.message);
  //       dispatch(signInFailure(data.message));
  //     }
  //     // setloading(false)
  //     if (response.ok) {
  //       dispatch(signInSuccess(data))
  //       navigate('/')
  //     };
  //     // console.log(data)
  //     // if (data === "Signin successful" ) {
  //     //   alert(data)
  //     // }else{
  //     //   alert(data.message)
  //     // }
  //   } catch (error) {
  //     // seterrorMessage(error.message)
  //     // setloading(false);
  //     dispatch(signInFailure(error.message));
  //   }
  // }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl flex-col md:flex-row md:items-center mx-auto gap-5'>
        {/* left */}
        <div className=' flex-1'>
          <Link to={'/'} >
            <div className='w-[201px] h-[76px] flex'>
              <img src={assetsData.Logo} alt="logo" />
            </div>
          </Link>

          <p className='text-sm mt-5'>
            This is a demo project. You can Sign in with your email and password or with google.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' >
            <div className=''>
              <label className="mb-2 block text-[14px]">
                Your name
              </label>

              <input
                type='text'
                placeholder='username'
                id='username'
                onChange={handleInput}
                className='w-96 rounded-lg text-[14px] dark:text-gray-700 border-gray-500'

              />
            </div>
            <div className=''>
              <label className="mb-2 block text-[14px]">
                Your email
              </label>

              <input
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleInput}
                className='w-96 rounded-lg text-[14px] dark:text-gray-700 border-gray-500'

              />
            </div>
            <div className=''>
              <label className="mb-2 block text-[14px]">
                Your password
              </label>
              <input
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleInput}
                className='w-96 rounded-lg text-[14px] dark:text-gray-700 border-gray-500'
              />
            </div>


            {/* <Button gradientDuoTone={'purpleToPink'} type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size={'sm'} />
                    <span className='pl-3'>loading...</span>
                  </>
                ) : 'Sign In'
              }

            </Button> */}
            {/* <OAuth /> */}
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to={'/signup'} className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {/* 
          {
            errorMessage && (
              <Alert className='mt-5' color={'failure'}>
                {errorMessage}
              </Alert>
            )
          } */}
        </div>
      </div>
    </div>
  )
}

export default Signup;