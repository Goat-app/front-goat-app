import React from 'react'

const DetailContent = () => {
  return (
    <div className=" w-[910px] h-[1187px] ml-[370px] flex-col flex-wrap relative ">
      <div className="w-[816px] h-[320px] rounded-xl bg-gray-200 absolute -mt-48 left-[50%] translate-x-[-50%]"></div>
      <div className="flex w-[910px] h-[440px] rounded-xl bg-[#FCE4EA] mt-[450px]">
        <div className="w-[816px] h-72 mx-auto mb-0 mt-auto">
          <b className="text-lg">불편한 편의점</b>
          <p className="text-base mt-5">김호연</p>
          <p className="text-base mt-10">
            삶은 관계이자 소통, 행복은 멀리 있지 않고 내 옆의 사람들과 마음을
            나누는 데 있다.
          </p>
        </div>
      </div>
      <div className="w-[910px] h-[50px] flex justify-end mt-[90px]">
        <button className="w-[150px] h-[50px] bg-[#8A857E] text-white rounded-xl">
          Edit
        </button>
        <button className="w-[150px] h-[50px] bg-[#8A857E] text-white rounded-xl ml-9">
          Delete
        </button>
      </div>
    </div>
  )
}

export default DetailContent
