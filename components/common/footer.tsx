import React, {useEffect, useMemo, useState} from "react";
import {getNavList} from "@lib/utils";
import Link from "next/link";
import {useTranslation} from "react-i18next";

function SubNav(props:any){
  const {data} = props
  return(
    <ul className="flex flex-col text-base mt-4 leading-[2.2] font-normal">
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
  const {t} = useTranslation('common')
  const navList = getNavList(t).concat([
    {
      name: t('navigation.list.item3.name'),
      href:'',
      // @ts-ignore
      children: [{name:'hi@gtech.world'}]
    }])
  return (
    <div className="bg-bgc h-[21.875rem]">
      <div className="flex flex-col w-container mx-auto">
        <div className="flex flex-col mt-12">
          <div className="flex">
            <div>
              <Link href="/" ><img src="/images/logo.svg"/></Link>
            </div>
            <ul className="flex justify-between ml-[14.375rem] mt-4">
              {
                navList.map((v,i)=>{
                  return(
                    <li key={`${i}`} className="mr-24">
                      {
                        v.href && !v.children?
                          <Link className="text-2xl font-bold" href={v.href}>{v.name}</Link>
                          :
                          <span className="text-2xl font-bold">{v.name}</span>
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
        <div className="mt-16 pt-4 border-t-2 text-sm">
          GTech International, LTD.
        </div>
      </div>
    </div>
  );
}
