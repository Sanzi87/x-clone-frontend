'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <div className='h-screen flex items-center justify-between p-8'>
      <div className='hidden lg:flex w-1/2 items-center justify-center'>
        <svg
          width='320'
          height='320'
          viewBox='0 0 48 48'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='white'
            d='M35.5,41.804c1.894,0 3.356,-0.27 4.33,-0.865c0.974,-0.596 2.706,-1.732 5.141,-3.41c0.974,-1.136 1.569,-1.894 1.84,-2.381c0.271,-0.433 0.649,-1.786 1.136,-4.113l-0.108,-0.054c-5.141,3.896 -9.092,5.845 -11.797,5.845c-1.137,0 -2.111,-0.325 -2.923,-0.92c-1.894,-1.407 -2.814,-3.897 -2.814,-7.577c0,-3.572 0.595,-6.873 1.732,-9.741c1.569,-3.843 3.463,-5.737 5.736,-5.737c1.029,0 2.057,0.433 3.031,1.299c0.108,0.163 0.216,0.379 0.379,0.595c0.108,0.217 0.27,0.433 0.433,0.704c0.162,0.271 0.324,0.325 0.433,0.216l4.654,0.379c0.162,-0.379 0.216,-0.92 0.216,-1.515c0,-0.595 -0.487,-1.732 -1.515,-3.409c-2.111,-2.544 -4.329,-3.789 -6.657,-3.843c-0.595,0 -1.569,0.108 -2.868,0.271c-3.301,1.244 -5.953,3.572 -8.009,6.873c-1.949,3.301 -2.977,7.522 -2.977,12.609c0,9.85 3.518,14.774 10.607,14.774Z'
          />
          <path
            fill='white'
            d='M0.107,37.962l0,0.054l3.572,2.111c0.758,-0.487 1.624,-1.624 2.544,-3.355c0.92,-1.841 2.489,-4.492 4.6,-8.064c3.193,6.602 5.087,10.553 5.844,11.744c0.65,1.298 1.191,2.218 1.516,2.814c0.27,0.595 0.541,0.974 0.703,1.19c0.162,0.108 0.487,0.379 0.974,0.65c0.487,0.324 0.812,0.649 1.137,0.974c0.216,0.27 0.433,0.487 0.595,0.595l0.162,-0.054l0.379,-3.139c0,-1.353 -2.706,-8.009 -8.117,-19.861c4.058,-6.44 7.63,-11.311 10.607,-14.666l0.378,-0.433c2.111,-0.704 3.41,-1.84 4.005,-3.518c-0.108,-1.19 -0.216,-1.948 -0.27,-2.327c-0.163,-0.92 -0.758,-1.353 -1.786,-1.353c-1.732,0 -3.518,1.353 -5.304,4.005c-0.054,0.054 -0.866,1.353 -2.598,3.842c-1.623,2.49 -3.192,4.871 -4.545,7.036c-1.407,2.273 -2.165,3.409 -2.273,3.571c-2.652,-5.844 -4.438,-9.524 -5.304,-10.986c-0.92,-1.461 -1.732,-2.218 -2.489,-2.272l-0.054,0c-0.542,0.054 -1.245,0.162 -2.111,0.432c-0.812,0.271 -1.353,0.433 -1.624,0.488c-0.162,0.378 -0.216,0.757 -0.216,1.298c0,0.433 0.108,1.029 0.325,1.732l0.811,1.678c2.327,3.193 4.763,7.468 7.415,12.772c-3.193,5.033 -5.845,8.929 -7.956,11.689l-0.487,0.595c-0.27,0.379 -0.433,0.65 -0.487,0.704l0,0.054l0.054,0Z'
          />
        </svg>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <h1 className='text-2xl xsm:text-4xl md:text-6xl font-bold'>
          Stay Connected
        </h1>
        <h1 className='text-2xl '>Join today.</h1>
        <SignUp.Root>
          <SignUp.Step name='start' className='flex flex-col gap-4'>
            {/* <Clerk.Connection
              name='google'
              className='bg-white rounded-full p-2 text-black w-72 flex items-center justify-center gap-2 font-bold'
            >
              <svg viewBox='0 0 24 24' width={24} height={24}>
                <path
                  d='M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z'
                  fill='#EA4335'
                ></path>
                <path
                  d='M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z'
                  fill='#FBBC05'
                ></path>
                <path
                  d='M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z'
                  fill='#34A853'
                ></path>
                <path
                  d='M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z'
                  fill='#4285F4'
                ></path>
              </svg>
              Sign up with Google
            </Clerk.Connection> */}
            <div className='flex flex-col gap-4'>
              Sign up with Credentials
              <Clerk.Field name='username' className='flex flex-col gap-2'>
                <Clerk.Input
                  className='py-2 px-6 rounded-full text-black w-72 placeholder:text-sm'
                  placeholder='Username'
                />
                <Clerk.FieldError className='text-red-300 text-sm' />
              </Clerk.Field>
              <Clerk.Field name='emailAddress' className='flex flex-col gap-2'>
                <Clerk.Input
                  className='py-2 px-6 rounded-full text-black w-72 placeholder:text-sm'
                  placeholder='E-mail'
                />
                <Clerk.FieldError className='text-red-300 text-sm' />
              </Clerk.Field>
              <Clerk.Field name='password' className='flex flex-col gap-2'>
                <Clerk.Input
                  className='py-2 px-6 rounded-full text-black w-72 placeholder:text-sm'
                  placeholder='Password'
                />
                <Clerk.FieldError className='text-red-300 text-sm' />
              </Clerk.Field>
              <SignUp.Captcha />
              <SignUp.Action
                submit
                className='bg-iconBlue rounded-full p-2 text-white font-bold w-72 text-center '
              >
                Sign up
              </SignUp.Action>
            </div>
          </SignUp.Step>
          <SignUp.Step name='continue' className='flex flex-col gap-4'>
            <Clerk.Field name='username'>
              <Clerk.Input
                placeholder='username'
                className='py-2 px-6 rounded-full text-black w-72 placeholder:text-sm'
              />
              <Clerk.FieldError className='text-red-300 text-sm' />
            </Clerk.Field>

            <SignUp.Action
              submit
              className='w-72 text-center text-iconBlue underline'
            >
              Continue
            </SignUp.Action>
          </SignUp.Step>
          <SignUp.Step name='verifications'>
            <SignUp.Strategy name='email_code'>
              <h1 className='text-sm mb-2'>Check your e-mail</h1>
              <Clerk.Field name='code' className='flex flex-col gap-4'>
                <Clerk.Input
                  placeholder='Verification code'
                  className='py-2 px-6 rounded-full text-black w-72 placeholder:text-sm'
                />
                <Clerk.FieldError className='text-red-300 text-sm' />
              </Clerk.Field>
              <SignUp.Action
                submit
                className='mt-2 underline text-iconBlue text-sm'
              >
                Verify
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
          {/* OR SIGN UP */}
          <div className='w-72 flex items-center gap-4'>
            <div className='h-px bg-borderGray flex-grow'></div>
            <span className='text-textGrayLight'>or</span>
            <div className='h-px bg-borderGray flex-grow'></div>
          </div>
          <Link
            href='/sign-in'
            className='bg-iconBlue rounded-full p-2 text-white font-bold w-72 text-center'
          >
            Already have an account?
          </Link>
          <p className='w-72 text-xs'>
            By signing up, you agree to the{' '}
            <span className='text-iconBlue'>Terms of Service</span> and{' '}
            <span className='text-iconBlue'>Privacy Policy</span>, including{' '}
            <span className='text-iconBlue'>Cookie Use</span>.
          </p>
        </SignUp.Root>
      </div>
    </div>
  );
};

export default SignUpPage;
