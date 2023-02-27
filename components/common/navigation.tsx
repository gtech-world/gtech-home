import React, {useState, useRef, useMemo} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import classNames from "classnames";
import {useClickAway,useToggle} from "react-use";
import { IoCaretDownOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import {useTranslation} from "react-i18next";

function PCNav(props:{data:any}){
  const { t, i18n } = useTranslation('common');
  const {data=[]} = props
  const {pathname} = useRouter()
  const ref = useRef<any>();
  const [open,setOpen] = useState<string>('')
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en'?'zh':'en');
  };
  useClickAway(ref, () => !!open && setOpen(''));
  return(
    <div className="text-xl flex md:hidden" ref={ref}>
      {
        data.map((v:any,i:number)=>{
          return(
            (v.children && v.children.length)?
              (
                <div key={`nav-${i}`} className={`relative${i === 0?'':' ml-14'}`}>
                  <div className="cursor-pointer flex" onClick={()=>setOpen(!!open?'':v.href)}>
                    <span className={`pb-2.5${/^\/solutions\/\w+/.test(pathname)?' border-b-2 border-green font-bold':''}`}>{v.name}</span>
                    <IoCaretDownOutline className={classNames('ml-2 mt-1',!!open?'rotate-180':'')} />
                  </div>
                  {
                    open === v.href &&
                    <ul style={{whiteSpace:"nowrap"}} className="w-auto shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] absolute top-[3.25rem] right-0 bg-white text-sm py-2 px-5 leading-loose rounded-lg">
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
      <span className="cursor-pointer ml-12" onClick={changeLanguage}>{t('translation')}</span>
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
              {
                v.href ?
                  <Link href={v.href} className={classNames('inline-block w-full',pathname === v.href?'text-green':'')}>
                    {v.name}
                  </Link>:
                  <span className="inline-block w-full" onClick={()=>v.onClick()}>{v.name}</span>
              }
            </li>
          )
        })
      }
    </ul>
  )
}
function MobileNav(props:{data:any}){
  const { t,i18n } = useTranslation('common');
  const {data=[]} = props
  const {pathname} = useRouter()
  const ref = useRef<any>();
  const [openSub,setOpenSub] = useState<any>([])
  const [open, onToggle] = useToggle(false);
  const fData = data.concat({
    href: 'language',
    name: t('translation_m'),
    children: [
      {name: 'English',href: '',onClick: ()=>{changeLanguage('en')}},
      {name: '中文',href: '',onClick: ()=>{changeLanguage('zh')}},
    ]
  })
  useClickAway(ref, () => open && onToggle(false));
  const changeLanguage = (val:string) => {
    i18n.changeLanguage(val);
  };
  const openSubFc = (e:any,val:any)=>{
    e.stopPropagation()
    const arr = [...openSub]
    if(val){
      const index = arr.indexOf(val)
      if(index === -1){
        arr.push(val)
      }else {
        arr.splice(index,1)
      }
      setOpenSub(arr)
    }
  }
  return(
    <div className="hidden md:block" ref={ref}>
      <HiOutlineMenu className="text-green text-4xl" onClick={onToggle}/>
      {
        open &&
        <div className="absolute right-0 bg-white w-screen px-5 py-4">
          {
            fData.map((v:any,i:number)=>{
              const hasChildren = (v.children && v.children.length)
              return(
                <div key={`MobileNav-${i}`} className={classNames('mt-4',i === 0?'mt-3':'')}>
                  <div className="flex items-center justify-between text-base font-bold">
                    {
                      hasChildren?
                        <span onClick={(e)=>openSubFc(e,v.href)} className="inline-block; w-full">{v.name}</span>
                        :
                        <Link className={classNames('inline-block w-full',pathname === v.href?'text-green':'')} href={v.href}>{v.name}</Link>
                    }
                    {
                      hasChildren && <IoCaretDownOutline className={openSub?.indexOf(v.href)>-1?'rotate-180':''} />
                    }
                  </div>
                  {
                    openSub?.indexOf(v.href)>-1 &&
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
  const { t } = useTranslation('common');
  const navList = [
    {
      href: '/',
      name: t('navigation.list.item1.name'),
    },
    {
      href: '/solutions',
      name: t('navigation.list.item2.name'),
      isSelected: false,
      children:[
        {
          href: '/solutions/web3',
          name: t('navigation.list.item2.children.child1.name'),
        },
        {
          href: '/solutions/governance',
          name: t('navigation.list.item2.children.child2.name'),
        },
        {
          href: '/solutions/automotive',
          name: t('navigation.list.item2.children.child3.name'),
        },
      ]
    }
    // {
    //   href: '/contact',
    //   name: t('navigation.list.item3.name'),
    // },
  ]
  return (
    <>
      <PCNav data={navList} />
      <MobileNav data={navList} />
    </>

  );
}
