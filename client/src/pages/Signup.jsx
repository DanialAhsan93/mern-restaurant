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
  const [errorMessage, seterrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const { theme } = useSelector((state) => state.theme)

  const handleInput = (e) => {
    formData({ ...form, [e.target.id]: e.target.value.trim() });
  };

  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      return seterrorMessage('Please fill out all the fields.')
    }
    setloading(true);
    try {
      const response = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      })

      const data = await response.json();
      console.log(data)
      if (data.success === false) {
        setloading(false)
        return seterrorMessage(data.message);
      }
      if (response.ok) {
        setloading(false)
        navigate('/signin')
      };

    } catch (error) {
      seterrorMessage(error.message)
      setloading(false);
    }
  };

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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
              <label className="mb-2 block text-[14px]">
                Your name
              </label>

              <input
                type='text'
                placeholder='username'
                id='username'
                onChange={handleInput}
                className='sm:w-96 w-full rounded-lg text-[14px] dark:text-gray-700 border-gray-500'

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
                className='sm:w-96 w-full rounded-lg text-[14px] dark:text-gray-700 border-gray-500'

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
                className='sm:w-96 w-full rounded-lg text-[14px] dark:text-gray-700 border-gray-500'
              />
            </div>


            <Button className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400 sm:w-96 w-full" type='submit' 
            disabled={loading} >
              {
                loading ?
                <>
                <span className='pe-1'>Loading...</span><Spinner size='md'/>
                 
                </>
                 :
                'Sign Up'
              }
            </Button>
            {/* <OAuth /> */}
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to={'/signin'} className='text-blue-500'>
              Sign In
            </Link>
          </div>
          
          {
            errorMessage && (
              <Alert className='mt-5' color={'failure'}>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signup;