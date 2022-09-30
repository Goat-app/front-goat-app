import React from 'react'
import { BiBookHeart } from 'react-icons/bi'

const WriteContent = () => {
  return (
    <div className="flex w-full h-[1187px] ml-[370px] flex-col flex-wrap">
      <div className="w-[910px] h-[61px] rounded-xl bg-[#8A857E] mt-[50px]">
        <div className="flex flex-row mt-[14px] text-white">
          <BiBookHeart className="ml-4 mr-2 text-xl" />
          <p className="text-lg">
            There is no mistaking a real book when one meets it. It is like
            falling in love.
          </p>
        </div>
      </div>
      <div className="flex w-[910px] h-[355px] rounded-xl mt-[26px] bg-[url(../../goat-img/flower.jpg)] bg-cover bg-no-repeat bg-[center_top_-200px]"></div>
      <p className="text-lg mt-[80px]">Title</p>
      <div className="flex w-[910px] h-[61px] rounded-xl bg-white mt-2 items-center">
        <p className="ml-3 text-gray-400">제목을 작성해주세요.</p>
      </div>
      <p className="text-lg mt-[60px]">Author</p>
      <div className="flex w-[910px] h-[61px] rounded-xl bg-white mt-2 items-center">
        <p className="ml-3 text-gray-400">작가 이름을 작성해주세요.</p>
      </div>
      <p className="text-lg mt-[60px]">Content</p>
      <div className="flex w-[910px] h-[151px] rounded-xl bg-white mt-2 items-center">
        <p className="ml-3 text-gray-400">
          감명 깊었던 내용이나 대사를 자유롭게 작성해주세요.
        </p>
      </div>
      <button className="mt-[30px] ml-[750px] w-[150px] h-[50px] bg-[#8A857E] text-white rounded-xl">
        Submit
      </button>
    </div>
  )
}

export default WriteContent
