import React, {HTMLAttributes} from "react";
import {Navigation} from './navigation'
import classNames from "classnames";
import Link from 'next/link'

export function Header(p:{props: any}) {
  const { sticky=true,isTransparent ,className } = p?.props || {}
  console.log(p?.props)
  return (
    <div className={classNames(sticky?'sticky':'',"w-full z-10 flex justify-between items-center top-0 px-32 py-3 md:px-5",isTransparent?'bg-transparent':'bg-white',className)}>
      <Link href="/">
        <img className="block w-16" alt="" src="/images/logo.svg"/>
      </Link>
      <Navigation />
    </div>
  );
}