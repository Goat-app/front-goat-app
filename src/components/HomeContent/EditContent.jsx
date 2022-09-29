import React from 'react'
import { FaPen } from 'react-icons/fa'

const EditContent = () => {
  return (
    <div className="flex w-full h-[1187px] ml-[370px] flex-col flex-wrap">
      <div className="w-[910px] h-[61px] rounded-xl bg-[#8A857E] mt-[50px]">
        <div className="flex flex-row mt-[14px] text-white">
          <FaPen className="ml-4 mr-2 text-xl" />
          <p className="text-lg">
            There is no mistaking a real book when one meets it. It is like
            falling in love.
          </p>
        </div>
      </div>
      <div className="flex w-[910px] h-[355px] rounded-xl bg-gray-200 mt-[26px]"></div>
      <p className="text-lg mt-[80px]">Title</p>
      <div className="flex w-[910px] h-[61px] rounded-xl bg-white mt-2 items-center">
        <p className="ml-3">불편한 편의점</p>
      </div>
      <p className="text-lg mt-[60px]">Author</p>
      <div className="flex w-[910px] h-[61px] rounded-xl bg-white mt-2 items-center">
        <p className="ml-3">김호연</p>
      </div>
      <p className="text-lg mt-[60px]">Content</p>
      <div className="flex w-[910px] h-[151px] rounded-xl bg-white mt-2 items-center">
        <p className="ml-3">
          삶은 관계이자 소통, 행복은 멀리 있지 않고 내 옆의 사람들과 마음을
          나누는 데 있다.
        </p>
      </div>
      <button className="mt-[30px] ml-[750px] w-[150px] h-[50px] bg-[#8A857E] text-white rounded-xl">
        Submit
      </button>
    </div>
  )
}

export default EditContent
