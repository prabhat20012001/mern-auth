import React,{useState} from 'react'

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState);
    };
  return (
    <>
    <section className='flex mx-auto justify-center items-center'>
        <div className=''>
            <div>
        <h1>Welcome Back To Login In</h1>
        <p>Hi,Please login.</p>
        </div>
        <form >
           <div>
            <label htmlFor="email">Email</label>
            <div>
            <input type="email" name='email' id='email' placeholder='Enter Your Email Adress'  className="py-2 pr-10 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"  />
            </div>
           </div>
           <div>
            <label htmlFor="password">Password</label>
            <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        id="password"
        placeholder="Enter Your Email Password"
        className="py-2 pr-10 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-md"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
           </div>

<button className='bg-blue-600 text-white w-full py-1 my-2'>Login</button>
<p>Don't have an Account? Sign Up</p>
        </form>
        </div>
    </section>
    </>
  )
}

export default Login