import React, {useState,useRef} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import classNames from "classnames";
import {useClickAway,useToggle} from "react-use";
import { IoCaretDownOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

function PCNav(props:{data:any}){
  const {data=[]} = props
  const {pathname} = useRouter()
  const ref = useRef<any>();
  const [open,setOpen] = useState<string>('')
  useClickAway(ref, () => !!open && setOpen(''));
  return(
    <div className="text-xl flex md:hidden">
      {
        data.map((v:any,i:number)=>{
          return(
            (v.children && v.children.length)?
              (
                <div ref={ref} key={`nav-${i}`} className={`cursor-pointer flex relative${i === 0?'':' ml-14'}`} onClick={()=>setOpen(!!open?'':v.href)}>
                  <span className={`pb-2.5${/^\/solutions\/\w+/.test(pathname)?' border-b-2 border-green font-bold':''}`}>{v.name}</span>
                  <IoCaretDownOutline className={classNames('ml-2 mt-1',!!open?'rotate-180':'')} />
                  {
                    open === v.href &&
                    <ul className="w-[15.375rem] shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg">
                      {
                        v.children.map((child:any,childIndex:number)=>{
                          return(
                            <li key={`nav-children-${childIndex}`}>
                              <Link href={child.href} className={classNames(pathname === child.href?'text-green':'')}>
                                {child.name}
                              </Link>
                            </li>
                          )
                        })
                      }
                    </ul>
                  }
                </div>
              )
              :
              (
                <Link key={`nav-${i}`} className={`${i === 0?'':' ml-14'}`} href={v.href}>
                  <span className={`pb-2.5${v.href === pathname?' border-b-2 border-green font-bold':''}`}>{v.name}</span>
                </Link>
              )
          )
        })
      }
    </div>
  )
}

function MobileSubNav(props:{data:any}){
  const {pathname} = useRouter()
  const {data = []} = props
  return(
    <ul className="text-sm mt-3 leading-8">
      {
        data.map((v:any,i:number)=>{
          return(
            <li key={`MobileSubNav-${i}`}>
              <Link href={v.href} className={classNames('inline-block w-full',pathname === v.href?'text-green':'')}>
                {v.name}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
function MobileNav(props:{data:any}){
  const {data=[]} = props
  const {pathname} = useRouter()
  const [openSubNav,setOpenSubNav] = useState(pathname === '/'?'':pathname)
  const ref = useRef<any>();
  const [open, onToggle] = useToggle(false);
  useClickAway(ref, () => open && onToggle(false));
  return(
    <div className="hidden md:block" ref={ref}>
      <HiOutlineMenu className="text-green text-4xl" onClick={onToggle}/>
      {
        open &&
        <div className="absolute right-0 bg-white w-screen px-5 py-4">
          {
            data.map((v:any,i:number)=>{
              const hasChildren = (v.children && v.children.length)
              return(
                <div key={`MobileNav-${i}`} className={classNames('mt-4',i === 0?'mt-3':'')} onClick={()=>setOpenSubNav(openSubNav?'':v.href)}>
                  <div className="flex items-center justify-between text-base font-bold">
                    {
                      hasChildren?
                        <span>{v.name}</span>
                        :
                        <Link className={classNames('inline-block w-full',pathname === v.href?'text-green':'')} href={v.href}>{v.name}</Link>
                    }
                    {
                      hasChildren && <IoCaretDownOutline className={!!openSubNav?'rotate-180':''} />
                    }
                  </div>
                  {
                    openSubNav.indexOf(v.href)>-1 &&
                    <MobileSubNav data={v.children} />
                  }
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export function Navigation() {
  const navList = [
    {
      href: '/',
      name: 'HOME',
    },
    {
      href: '/solutions',
      name: 'SOLUTIONS',
      children:[
        {
          href: '/solutions/web3',
          name: 'Web3-Featured Data Solutions',
        },
        {
          href: '/solutions/governance',
          name: 'Data Governance & BI Solutios',
        },
        {
          href: '/solutions/automotive',
          name: 'Automotive BI & Data Solutions',
        },
      ]
    },
    {
      href: '/contact',
      name: 'CONTACT',
    },
  ]
  return (
    <>
      <PCNav data={navList} />
      <MobileNav data={navList} />
    </>

  );
}
