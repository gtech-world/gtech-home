import React, {useEffect, useMemo, useState} from "react";
import {getNavList} from "@lib/utils";
import Link from "next/link";
import {useTranslation} from "react-i18next";

function SubNav(props:any){
  const {data} = props
  return(
    <ul className="flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]">
      {
        data.length && data.map((v:any,i:number)=>{
          return(
            v.href?
            <Link href={v.href} key={`${i}`}>{v.name}</Link>
              :
              <span>{v.name}</span>
          )
        })
      }
    </ul>
  )
}

export function Footer() {
  const {t,i18n} = useTranslation('common')
  const navList = getNavList(t).concat([
    {
      name: t('navigation.list.item3.name'),
      href:'',
      // @ts-ignore
      children: [{name:'hi@gtech.world'}]
    }])
  return (
    <div className="bg-bgc h-[21.875rem] md:h-auto md:px-8 md:py-12">
      <div className="flex flex-col w-container mx-auto md:w-full">
        <div className="flex flex-col mt-12">
          <div className="flex md:flex-col">
            <div>
              <Link className="md:float-left" href="/" ><img src="/images/logo.svg"/></Link>
            </div>
            <ul className="flex justify-between ml-[14.375rem] mt-4 md:flex-col md:ml-0">
              {
                navList.map((v,i)=>{
                  return(
                    <li key={`${i}`} className="mr-24 md:mt-5">
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
