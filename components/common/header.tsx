import React from "react";
import {Navigation} from './navigation'
import classNames from "classnames";
import Link from 'next/link'
import {useRouter} from "next/router";
import {TopTips} from "@components/common/topTips";

export function Header(p:{props: any}) {
  const { sticky=true,isTransparent ,className } = p?.props || {}
  const {pathname} = useRouter()
  return (
    <div className={classNames(sticky?'sticky':'',"w-full z-10 top-0 ",isTransparent?'bg-transparent':'bg-white',className)}>
      <div className="md:hidden">
        <TopTips />
      </div>

      <div className="flex justify-between items-center px-32 py-4 md:px-5">
        <Link href="/">
          <img className={classNames('block md:w-16',pathname === '/'?'w-[7.5rem]':'w-20')} alt="" src={pathname === '/'?'/images/logo_light.svg':'/images/logo.svg'}/>
        </Link>
        <Navigation />
      </div>
    </div>
  );
}
