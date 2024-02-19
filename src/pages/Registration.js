import React, { useState } from 'react';
import { darkLogo } from "../assets/index";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    // Error Message Start
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState("");

    //Handle function start
    const handleName =(e)=>{
        setClientName(e.target.value)
    }
    const handleRegistration = (e) => {
        e.preventDefault()
        if(!clientName){
            setErrClientName("Enter your name")
        }
    };

    return (
        <div className='w-full'>
            <div className='w-full bg-white pb-10'>
                <form className='w-[350px] mx-auto flex flex-col items-center'>
                    <img className='w-32' src={darkLogo} alt='darkLogo' />
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create Account</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Your Name</p>
                                <input onChange={handleName} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within: shadow-amazonInput duration-100' type='text' />
                            {
                                errClientName && (
                                    <p className='text-red-600 text-xs font-semibold tracking0wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base '>!</span>{errClientName}</p>
                                )
                            }
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email or mobile phone number</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within: shadow-amazonInput duration-100' type='email' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within: shadow-amazonInput duration-100' type='password' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Re-enter Password</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within: shadow-amazonInput duration-100' type='password' />
                            </div>
                            <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                                Continue
                            </button>
                        </div>
                        <p className='text-xs text-black leading-4 mt-4'>By Continuinig, you agree to Amazon's 
                            <span className='text-blue-600'>Conditions of Use{" "}</span>and 
                            <span className='text-blue-600'>Privacy Notice.</span>
                        </p>
                        <div>
                            <p className='text-xs text-black'>
                                Already have an account?{" "}
                                <Link to="/signin">
                                <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Sign in{" "}
                                    <ArrowRightIcon/>
                                </span></Link>
                            </p>
                            <p className='text-xs text-black -mt-2'>Buying for workk? 
                                <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Create a free business account</span>
                            </p>  
                        </div>
                    </div>
                </form>
                <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10 '>
                    <div className='flex items-center gap-6 '>
                        <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of Use</p>
                        <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
                        <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Conditions of Use</p>
                    </div>
                    <p className='text-xs tet-gray-600'>
                        © 1996-2023, ReactBd.com, Inc, or its affiliates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
