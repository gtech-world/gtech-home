import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {useTranslation} from "react-i18next";
import classNames from "classnames";

function SubNav(props:any){
  const {data} = props
  return(
    <ul className="flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]">
      {
        data.length && data.map((v:any,i:number)=>{
          return(
            v.render?v.render():
              (
                v.href?
                  <Link href={v.href} key={`${i}`}>{v.name}</Link>
                  :
                  <span>{v.name}</span>
              )
          )
        })
      }
    </ul>
  )
}

export function Footer() {
  const {t,i18n} = useTranslation('common')
  // const navList = getNavList(t).concat([
  //   // @ts-ignore
  //   ])
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
      name: t('navigation.list.item4.name'),
      href:'',
      children: [
        {
          render:()=>{
            return(
              <img className="w-[7.5rem]" src="/images/wechat_qrcode.png" alt=""/>
            )
          }
        }
      ]
    }
  ]
  return (
    <div className="bg-bgc h-[21.875rem] md:h-auto md:px-8 md:py-12">
      <div className="flex flex-col w-container mx-auto md:w-full">
        <div className="flex flex-col mt-12">
          <div className="flex justify-between md:flex-col">
            <div>
              <Link className="md:float-left" href="/" ><img className="w-20" src="/images/logo.svg"/></Link>
            </div>
            <ul className="flex justify-between mt-4 md:flex-col md:ml-0">
              {
                navList.map((v,i)=>{
                  return(
                    <li key={`${i}`} className={classNames('md:mt-5',i===(navList.length-1)?'mr-0':'mr-[3.75rem]')}>
                      {
                        v.href && !v.children?
                          <Link className="text-2xl font-bold md:text-xl" href={v.href}>{v.name}</Link>
                          :
                          <span className="text-2xl font-bold md:text-xl">{v.name}</span>
                      }
                      {
                        v.children && <SubNav data={v.children}/>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-4 border-t border-black text-sm flex justify-between md:flex-col md:mt-8">
          <span>{t('footer.company')}</span>
          <span onClick={()=>window.open(i18n.language === 'zh'?'/zhstatement':'/enstatement','_blank')} className="cursor-pointer md:mt-5">{t('footer.viewBtn')}</span>
        </div>
      </div>
    </div>
  );
}
