import React from 'react'
import bg from '../../goat-img/profile.PNG'
import { BsFillGeoAltFill } from 'react-icons/bs'

const ProfileContent = () => {
  return (
    <div className="flex flex-col space-y-4 text-center w-[320px] h-[520px] rounded-xl absolute top-[-175px] mx-auto bg-white">
      <div className="mx-auto w-[100px] h-[100px] bg-gray-400 rounded-full mt-[40px]">
        <img src={bg} alt="" className="w-full rounded-full" />
      </div>
      <b className="w-[300px] h-[24px] text-xl text-black">Kimnana</b>
      <p className="w-[300px] h-[24px] text-lg text-gray-400">@nickname</p>
      <p className="flex justify-center w-[300px] h-[24px] text-xl text-black">
        <BsFillGeoAltFill />
        <p className="ml-1">Daejoen, Korea</p>
      </p>
      <p className="w-[300px] h-[70px] text-xl text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="mx-auto w-[150px] h-[50px] bg-[#8A857E] text-white rounded-xl ">
        Create
      </button>
      <div className="h-[10px]"></div>
      <div className="flex w-full">
        <p className="flex w-[106px] h-[50px] justify-center flex-wrap border-r-2 border-gray-500 px-2 box-border ">
          Post
          <p className="flex w-[106px] h-[50px] justify-center">61</p>
        </p>
        <p className="flex w-[106px] h-[50px] justify-center flex-wrap border-r-2 border-gray-500 px-2">
          Followers
          <p className="flex w-[106px] h-[50px] justify-center">61</p>
        </p>
        <p className="flex w-[106px] h-[50px] justify-center flex-wrap px-2">
          Following
          <p className="flex w-[106px] h-[50px] justify-center">61</p>
        </p>
      </div>
    </div>
  )
}

export default ProfileContent
