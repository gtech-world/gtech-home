import React, {useState, useRef} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import classNames from "classnames";
import {useClickAway,useToggle} from "react-use";
import { IoCaretDownOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import {useTranslation} from "react-i18next";

const statementPage = ['/enstatement','/zhstatement']
function PCNav(){
  const { t, i18n } = useTranslation('common');
  const {pathname,push} = useRouter()
  const ref = useRef<any>();
  const [open,setOpen] = useState<string>('')
  const changeLanguage = () => {
    const language = (i18n.language === 'en'?'zh':'en')
    i18n.changeLanguage(language);
    statementPage.indexOf(pathname)>-1 && push(language === 'en'?'/enstatement':'zhstatement')
  };
  const navList = [
    {
      href: '/',
      isLink: true,
      name: t('navigation.list.item1.name'),
    },
    {
      href: '/solutions',
      isLink: false,
      name: t('navigation.list.item2.name'),
      childrenNode: (
        <div className="w-full flex">
          <div className="w-[28.125rem]">
            <h4 className="font-semibold text-xl">{t('navigation.list.item2.name')}</h4>
            <p className="mt-5">{t('navigation.list.item2.desc')}</p>
          </div>
          <div className="w-[23.125rem] ml-[3.75rem]">
            <h4 className="font-semibold text-xl">
              {t('navigation.list.item2.children.child1.name')}
            </h4>
            <p className="text-gray-1 mt-5">
              <Link className="link-hover" href="/solutions/automotive">
                {t('navigation.list.item2.children.child1.desc')}
              </Link>
            </p>
          </div>
          <div className="ml-[3.75rem]">
            <h4 className="font-semibold text-xl">{t('navigation.list.item2.children.more')}</h4>
            <p className="text-gray-1 mt-5">
              <Link className="link-hover" href="/solutions/web3">{t('navigation.list.item2.children.child2.name')}</Link>
            </p>
            <p className="text-gray-1 mt-2.5">
              <Link className="link-hover" href="/solutions/governance">{t('navigation.list.item2.children.child3.name')}</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      href: '/news',
      isLink: false,
      name: t('navigation.list.item3.name'),
      childrenNode: (
        <div className="w-full flex items-center">
          <div className="w-[28.125rem]">
            <h4 className="font-semibold text-xl">{t('navigation.list.item3.name')}</h4>
            <p className="mt-5">{t('navigation.list.item3.desc')}</p>
          </div>
          <div className="ml-32 text-gray-1">
            <Link className="ml-[3.75rem]" href="">{t('navigation.list.item3.children.child1.name')}</Link>
            <Link className="ml-[3.75rem]" href="">{t('navigation.list.item3.children.child2.name')}</Link>
            <Link className="ml-[3.75rem]" href="">{t('navigation.list.item3.children.child3.name')}</Link>
          </div>
        </div>
      )
    },
    {
      href: '/contact',
      isLink: false,
      name: t('navigation.list.item4.name'),
      childrenNode: (
        <div className="w-full flex">
          <div className="w-[28.125rem]">
            <h4 className="font-semibold text-xl">{t('navigation.list.item4.subName')}</h4>
            <p className="mt-5">{t('navigation.list.item4.desc')}</p>
          </div>
          <div className="ml-[3.75rem]">
            <h4 className="font-semibold text-xl mb-5">{t('navigation.list.item4.children.companySubtitle')}</h4>
            {
              i18n.language === 'zh' && <p className="text-gray-1">吉特科技有限公司</p>
            }
            <p className="text-gray-1">GTech International, Ltd.</p>
          </div>
          <div className="ml-[3.75rem]">
            <h4 className="font-semibold text-xl">{t('navigation.list.item4.children.contactSubtitle')}</h4>
            <p className="text-gray-1 mt-5">hi@gtech.world</p>
            <p className="text-gray-1">(+86)021-66271287</p>
          </div>
          <div className="ml-[3.75rem] flex flex-col">
            <h4 className="font-semibold text-xl max-w-[10rem]">{t('navigation.list.item4.children.qrSubtitle')}</h4>
            <div className="mt-5">
              <img src="/images/wechat_qrcode.png" className="w-[5.5rem] mt-1" alt=""/>
            </div>
          </div>
        </div>
      )
    },
  ]
  const isCurrentPage = (href:string)=>{
    if(href === '/'){
      return pathname === href
    }
    return pathname.indexOf(href)>-1
  }
  return(
    <div className="text-xl flex md:hidden h-[4.6rem] items-center" ref={ref}
         onMouseLeave={(e)=>{setOpen('')}}
    >
      {
        navList.map((v:any,i:number)=>{
          return(
            <div key={`navlist${i}`}
                 className=""
            >
              {
                v.isLink ?
                  <Link onMouseEnter={(e)=>{setOpen(v.href)}} key={`nav-${i}`} className={`${i === 0?'':' ml-14'}`} href={v.href}>
                    <span className={`inline-block cursor-pointer mt-[0.785rem] pb-2.5${isCurrentPage(v.href)?pathname === '/'?' border-b-2 border-green-3':' border-b-2 border-green'+' font-bold':''}`}>{v.name}</span>
                  </Link>:
                  <span onMouseEnter={(e)=>{setOpen(v.href)}} className={`inline-block cursor-pointer mt-[0.785rem] pb-2.5${isCurrentPage(v.href)?pathname === '/'?' border-b-2 border-green-3':' nav-active'+' font-bold':''}${i === 0?'':' ml-14'}`}>{v.name}</span>
              }
              {
                !!v.childrenNode && open === v.href &&
                <div className="absolute left-0 mt-[0.7rem] z-12 w-screen py-10 px-32 bg-white text-black text-lg border-t-2 border-black">
                  {
                    v.childrenNode
                  }
                </div>
              }
            </div>
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
function MobileNav(){
  const { t,i18n } = useTranslation('common');
  // const {data=[]} = props
  const {pathname,push} = useRouter()
  const ref = useRef<any>();
  const [openSub,setOpenSub] = useState<any>([])
  const [open, onToggle] = useToggle(false);
  const navList = [
    {
      href: '/',
      name: t('navigation.list.item1.name'),
    },
    {
      href: '/solutions',
      name: t('navigation.list.item2.name'),
      children:[
        {
          href: '/solutions/automotive',
          name: t('navigation.list.item2.children.child1.name'),
        },
        {
          href: '/solutions/web3',
          name: t('navigation.list.item2.children.child2.name'),
        },
        {
          href: '/solutions/governance',
          name: t('navigation.list.item2.children.child3.name'),
        },
      ]
    },
    {
      href: '/news',
      name: t('navigation.list.item3.name'),
      children:[
        {
          href: '/news/tech',
          name: t('navigation.list.item3.children.child1.name'),
        },
        {
          href: '/news/trade',
          name: t('navigation.list.item3.children.child2.name'),
        },
        {
          href: '/news/gtech',
          name: t('navigation.list.item3.children.child3.name'),
        },
      ]
    },
    {
      href: '/contact',
      name: t('navigation.list.item4.name'),
      children:[
        {
          name: 'hi@gtech.world',
        },
        {
          name: '(+86)021-66271287',
        }
      ]
    },
    {
      href: 'language',
      name: t('translation_m'),
      children: [
        {name: 'English',href: '',onClick: ()=>{changeLanguage('en');onToggle(false)}},
        {name: '中文',href: '',onClick: ()=>{changeLanguage('zh'); onToggle(false)}},
      ]
    }
  ]
  // const fData = data.concat()
  useClickAway(ref, () => open && onToggle(false));
  const changeLanguage = (val:string) => {
    i18n.changeLanguage(val);
    console.log(pathname)
    statementPage.indexOf(pathname)>-1 && push(val === 'en'?'/enstatement':'zhstatement')
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
      <HiOutlineMenu className={classNames('text-4xl',pathname === '/'?'text-white':'text-green')} onClick={onToggle}/>
      {
        open &&
        <div className="absolute text-black right-0 bg-white w-screen px-5 py-4">
          {
            navList.map((v:any,i:number)=>{
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
  return (
    <>
      <PCNav />
      <MobileNav />
    </>

  );
}
