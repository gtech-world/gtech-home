import React, {HTMLAttributes, useEffect, useState} from "react";
import {Navigation} from './navigation'
import classNames from "classnames";
import Link from 'next/link'
import {FiX} from "react-icons/fi";
import {useTranslation} from "react-i18next";

export function Header(p:{props: any}) {
  const { sticky=true,isTransparent ,className } = p?.props || {}
  const [visible,setVisible] = useState(false);
  const { t } = useTranslation('common');
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
        <div className="bg-green text-white text-base py-5 flex justify-center px-8 items-center md:text-sm">
          <span className="inline-block">{t('header.tips')}<span className="underline inline-block ml-1.5"> hi@gtech.world</span>.</span>
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
