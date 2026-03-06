import React from 'react';
import { ContactImg } from '../../assets/index';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const ContactFromLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#242427] p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
      <div className='bg-white p-2 rounded-lg mb-4 flex justify-center items-center'>
        <img
          className='object-contain w-full h-80 rounded-md'
          src={ContactImg}
          alt="contactImg"
        />
      </div>

      <div className='flex flex-col gap-4 mb-8'>
        <h2 className='text-3xl font-bold text-white'>Shiva Amballa</h2>
        <p className='text-lg tracking-wide text-gray-400'>QA Automation Engineer</p>
        <p className='text-base tracking-wide text-gray-400'>
          A passionate QA Automation engineer currently looking for SDET role expert in writing structured framework and also gained knowledge in both UI and API automation testing.
        </p>
        <p className='text-base tracking-wide text-gray-400'>
          Mobile: <span className='text-lightText'>+91-7013572842</span>
        </p>
        <p className='text-base tracking-wide text-gray-400'>
          Email: <span className='text-lightText'>amballashiva967@gmail.com</span>
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='mb-4 text-base uppercase text-lightText'>
          find me in
        </h2>
      </div>
      <div className='flex gap-4'>
        <span className='bannerIcon'>
        <a href="https://www.linkedin.com/in/shiva-amballa-017549202" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
          </a>
          </span>
        <span className='bannerIcon'>
        <a href="https://github.com/Shiva-Aspire" target="_blank" rel="noreferrer">
        <FaGithub />
        </a>
        </span>
      </div>

    </div>
  )
}

export default ContactFromLeft;