import React, {HTMLAttributes, useEffect, useState} from "react";
import {Navigation} from './navigation'
import classNames from "classnames";
import Link from 'next/link'
import {FiX} from "react-icons/fi";

export function Header(p:{props: any}) {
  const { sticky=true,isTransparent ,className } = p?.props || {}
  const [visible,setVisible] = useState(false);
  useEffect(()=>{
    const tips = localStorage.getItem('tips')
    setVisible(!tips)
  },[])
  const onCloseTips = ()=>{
    localStorage.setItem('tips','enable')
    setVisible(false)
  }
  return (
    <div className={classNames(sticky?'sticky':'',"w-full z-10 top-0 ",isTransparent?'bg-transparent':'bg-white',className)}>
      {
        visible &&
        <div className="bg-green text-white text-base h-[4.3125rem] flex justify-center px-8 items-center md:text-sm">
          GTech’s official site is under development and this version is for demonstration purpose only. For more information, please contract email hi@gtech.world.
          <FiX onClick={onCloseTips} className="absolute right-6 text-xl cursor-pointer md:top-4 md:right-5" />
        </div>
      }
      <div className="flex justify-between items-center px-32 py-5 md:px-5">
        <Link href="/">
          <img className="block w-16 w-[7.5rem]" alt="" src="/images/logo.svg"/>
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
