import React from 'react'

const ProfileEditContent = () => {
  return (
    <div className="flex w-full h-[1187px] ml-[370px] flex-col flex-wrap">
      <div className="flex flex-row w-[910px] h-[426px] bg-white mt-[50px] rounded-xl shadow-xl">
        <div className="w-[20%] h-[426px]">
          <div className="w-[135px] h-[135px] bg-[url(../../goat-img/profileedit.jpg)] bg-cover mt-7 mx-auto"></div>
          <button className="w-[135px] h-[35px] bg-[#E0D9D2] mt-4 rounded-xl text-white ml-6">
            Change
          </button>
        </div>
        <div className="w-[80%] h-[426px] bg-white ml-4">
          <div className="w-[100%] h-[30%] bg-white mt-9">
            <b className="text-lg">Nick Name</b>
            <div className="flex items-center w-[320px] h-[60px] bg-[#F3F3F3] rounded-xl mt-2">
              <p className="ml-3 text-gray-400">Name</p>
            </div>
          </div>
          <div className="flex flex-row w-[100%] h-[30%] bg-white">
            <div>
              <b className="text-lg">Password</b>
              <div className="flex items-center w-[320px] h-[60px] bg-[#F3F3F3] rounded-xl mt-2">
                <p className="ml-3 text-gray-400">*********</p>
              </div>
            </div>
            <div className="ml-9">
              <b className="text-lg">Confirm new password</b>
              <div className="flex items-center w-[320px] h-[60px] bg-[#F3F3F3] rounded-xl mt-2">
                <p className="ml-3 text-gray-400">*********</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[30%] bg-white">
            <b className="text-lg">About</b>
            <div className="flex items-center w-[680px] h-[60px] bg-[#F3F3F3] rounded-xl mt-2">
              <p className="ml-3 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="w-[200px] h-[50px] bg-[#8A857E] text-white rounded-xl mt-[50px] ml-[705px]">
        Submit
      </button>
    </div>
  )
}

export default ProfileEditContent
