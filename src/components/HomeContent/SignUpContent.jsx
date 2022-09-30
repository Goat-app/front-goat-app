import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'

const SignUpContent = () => {
  return (
    <div className="flex w-full h-[1187px] ml-[370px] flex-col flex-wrap">
      <div className="flex flex-row mt-6 text-xl">
        <BsFillHeartFill />
        <b className="ml-2">Thanks for coming!</b>
      </div>
      <div className="mt-6">
        <p>ID</p>
        <div className="w-[910px] h-[61px] bg-white rounded-xl shadow-xl"></div>
      </div>
      <div className="mt-6">
        <p>Password</p>
        <div className="w-[910px] h-[61px] bg-white rounded-xl shadow-xl"></div>
      </div>
      <div className="mt-6">
        <p>Password Confirmation</p>
        <div className="w-[910px] h-[61px] bg-white rounded-xl shadow-xl"></div>
      </div>
      <div className="mt-6">
        <p>Name</p>
        <div className="w-[910px] h-[61px] bg-white rounded-xl shadow-xl"></div>
      </div>
      <div className="mt-6">
        <p>NickName</p>
        <div className="w-[910px] h-[61px] bg-white rounded-xl shadow-xl"></div>
      </div>
      <div className="mt-6">
        <p>Introduction</p>
        <div className="w-[910px] h-[61px] bg-white rounded-xl shadow-xl"></div>
      </div>
      <div className="mt-6">
        <p>Profile</p>
        <div className="flex items-center justify-center w-[250px] h-[250px] bg-white rounded-xl shadow-xl">
          <p className="text-2xl text-gray-300">No Image</p>
        </div>
      </div>
      <div className="flex mt-6">
        <button className="w-[200px] h-[50px] bg-[#8E9A9F] text-white rounded-xl">
          File
        </button>
        <button className="w-[200px] h-[50px] bg-[#8A857E] text-white rounded-xl ml-[530px]">
          Submit
        </button>
      </div>
    </div>
  )
}

export default SignUpContent
