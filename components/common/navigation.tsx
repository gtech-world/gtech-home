import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export function Navigation() {
  const {pathname} = useRouter()
  console.log(pathname)
  const navList = [
    {
      href: '/',
      name: 'HOME',
    },
    {
      href: '/solutions',
      name: 'SOLUTIONS',
    },
    {
      href: '/contact',
      name: 'CONTACT',
    },
  ]
  return (
    <div className="text-xl">
      {
        navList.map((v,i)=>{
          return(
            <Link key={`nav-${i}`} className={`pb-2.5${i === 0?'':' ml-14'}${v.href === pathname?' border-b-2 border-green font-bold':''}`} href={v.href}>
              {v.name}
            </Link>
          )
        })
      }
    </div>
  );
}
