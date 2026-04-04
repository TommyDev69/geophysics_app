import React from 'react';

export default function ProfileInfomation({ onChange, values, onSubmit, errors }) {
  return (
    <form onSubmit={onSubmit} className='border border-[#DADCE0] rounded-[10px] pt-[25px] pb-[1px] px-[25px]'>

      <div className='w-[917px]'>
        <p className="font-instrument text-[#101828] font-semibold text-[18px]">
          Profile Information
        </p>
      </div>

      <div className='w-[917px]'>

        {/* Full Name + Email */}
        <div className="flex text-[#364153] gap-4 capitalize">

          <div className="w-[451px]">
            <p className='py-4 font-instrument font-medium text-[14px]'>full name</p>
            <input
              name='fullName'
              value={values.fullName}
              onChange={onChange}
              className='border py-[8px] text-[14px] w-full px-[16px] rounded-[10px] border-[#DADCE0]'
            />
            <p className="text-[#E7000B] text-sm">{errors?.fullName}</p>
          </div>

          <div className="w-[451px]">
            <p className='py-4 font-instrument font-medium text-[14px]'>email</p>
            <input
              name='email'
              value={values.email}
              onChange={onChange}
              className='border py-[8px] text-[14px] w-full px-[16px] rounded-[10px] border-[#DADCE0]'
            />
            <p className="text-[#E7000B] text-sm">{errors?.email}</p>
          </div>

        </div>

        {/* Job Title */}
        <div className='py-8 text-[#364153]'>
          <p className='py-4 font-instrument font-medium text-[14px]'>job title</p>
          <input
            name='jobTitle'
            value={values.jobTitle}
            onChange={onChange}
            className='border py-[8px] text-[14px] w-full px-[16px] rounded-[10px] border-[#DADCE0]'
          />
          <p className="text-[#E7000B] text-sm">{errors?.jobTitle}</p>
        </div>

        {/* Organisation */}
        <div className='pb-8 text-[#364153]'>
          <p className='py-4 font-instrument font-medium text-[14px]'>organisation</p>
          <input
            name='organisation'
            value={values.organisation}
            onChange={onChange}
            className='border py-[8px] text-[14px] w-full px-[16px] rounded-[10px] border-[#DADCE0]'
          />
          <p className="text-[#E7000B] text-sm">{errors?.organisation}</p>
        </div>

        {/* Submit Button */}
        <div className='flex justify-end items-center pb-12'>
          <button
            type='submit'
            className="bg-[#585858] font-instrument font-medium text-[16px] text-white py-[8px] px-[16px] rounded-[10px] capitalize"
          >
            save change
          </button>
        </div>

      </div>
    </form>
  );
}