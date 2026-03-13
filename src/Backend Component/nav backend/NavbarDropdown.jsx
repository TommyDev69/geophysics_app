import React from 'react'
import search from "../image/Search.png"

export default function NavbarDropdown() {
  return (
    <form action="">
      <div className="flex items-center relative px-4  max-w-[677px] ">
          <div className=" absolute left-8">
              <img src={search} className="max-w-[20px] " alt="" />
          </div>
          <input type="search" className=" w-full rounded-[10px] border-2 py-[8px] pl-[40px] pr-[16px] border-[#DADCE0] " />

      </div>
    </form>
  )
}
