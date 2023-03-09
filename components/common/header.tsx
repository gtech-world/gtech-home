import React, {HTMLAttributes, useEffect, useState} from "react";
import {Navigation} from './navigation'
import classNames from "classnames";
import Link from 'next/link'
import {FiX} from "react-icons/fi";
import {useTranslation} from "react-i18next";
import useTips from "@lib/hooks/useTips";
import {useRouter} from "next/router";

export function Header(p:{props: any}) {
  const { sticky=true,isTransparent ,className } = p?.props || {}
  const { t } = useTranslation('common');
  const {pathname} = useRouter()
  const {visible,onCloseTips} = useTips()
  return (
    <div className={classNames(sticky?'sticky':'',"w-full z-10 top-0 ",isTransparent?'bg-transparent':'bg-white',className)}>
      {
        visible &&
        <div className="sticky bg-green text-white text-base py-5 flex justify-center px-6 items-center md:text-sm">
          <span className="inline-block">{t('header.tips')}<span className="underline inline-block ml-1.5"> hi@gtech.world</span></span>
          <FiX onClick={onCloseTips} className="absolute right-6 text-xl cursor-pointer md:top-3 md:right-3" />
        </div>
      }
      <div className="flex justify-between items-center px-32 py-4 md:px-5">
        <Link href="/">
          <img className={classNames('block md:w-16',pathname === '/'?'w-[7.5rem]':'w-20')} alt="" src="/images/logo.svg"/>
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
