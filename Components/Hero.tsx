import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Rish from "../public/IMG_3796.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The Name Rishan Dilruk",
      "Guy-who-loves-cofee.tsx",
      "<ButLovesCodeMore/>",
    ],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className='h-screen flex flex-col space-y-8 pt-32 items-center justify-center first-letter
    text-center overflow-hidden
    
    '
    >
      <BackgroundCircles />

      <Image
        src={Rish}
        className=' object-cover w-[150px] h-[150px]  rounded-full mx-auto mt-52'
        alt={""}
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Front End engineer
        </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10 font-burtons'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor=' #F7AB0A' />
        </h1>

        <div className='z-20 pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#about'>
            <button className='heroButton'>experence</button>
          </Link>{" "}
          <Link href='#about'>
            <button className='heroButton'>Skills</button>
          </Link>{" "}
          <Link href='#about'>
            <button className='heroButton'>projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
