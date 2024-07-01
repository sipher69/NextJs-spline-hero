"use client";

import Header from '@/components/header';
import Section from '@/components/section';

import Spline from '@splinetool/react-spline';


export default function Home() {
  return (
    <div>
      <Header />
      <div className='w-[70vw] text-[40px] leading-none text-gray-600 px-8 pt-[50px]'>
        explore our saas platform for the best
      </div>
      <div className='w-[80vw] text-[80px] leading-none text-black px-8'>
        ai services. <br />
      </div>
      <div className='h-[40vh]'>
        <Spline scene="https://prod.spline.design/11HAfmhyCQyrdVjp/scene.splinecode" />
      </div>
      <Section />
    </div>
  );
}
