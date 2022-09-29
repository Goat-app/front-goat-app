import React from 'react'
import bg from '../../goat-img/unknown.png'
import { GoSearch } from 'react-icons/go'

const Header = () => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      <img src={bg} alt="" className="w-full" />
      <div className="flex justify-between absolute top-0 left-0 w-full py-6">
        <h1>
          LOGO
          <GoSearch className="text-3xl" />
        </h1>
        <div className="w-[228px] h-[45px] bg-white rounded-xl">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
