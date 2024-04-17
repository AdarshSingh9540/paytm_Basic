// SignUp.js
import React from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import ButtonWarning from '../components/ButtonWarning';
import SignIn from './SignIn' 

function SignUp() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-4 px-4 h-mamx '> 
          <Heading label={"Sign Up"}/>
          <SubHeading label={"Enter your details for signup"} />
          <InputBox label={"First Name"} placeholder={"Adarsh"}/>
          <InputBox label={"Last Name"} placeholder={"Singh"}/>
          <InputBox label={"Email"} placeholder={"email"}/>
          <InputBox label={"Password"} placeholder={"password"}/>
          <div className='pt-4'>
            <Button label={"Sign Up"}/>
            <ButtonWarning label={"Already have an account ?"} buttonText={"Sign in"} to={"/signin"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
