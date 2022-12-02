import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className=' sticky top-0 flex items-start justify-between  max-w-7xl mx-auto z-20  p-5'>
      <motion.div
        className='flex flex-row items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        {/* social icons */}
        <SocialIcon
          url='https://www.linkedin.com/in/rishan-dilruk-6019481a4/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/rishan-dilruk-6019481a4/'
          fgColor='gray'
          bgColor='transparent'
        />{" "}
        <SocialIcon
          url='https://www.linkedin.com/in/rishan-dilruk-6019481a4/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        initial={{
          x: 500,
          opacity: 0.5,
          scale: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <SocialIcon
          className=' cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />

        <p className=' uppercase hidden md:inline-flex text-sm text-gray-400 '>
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
