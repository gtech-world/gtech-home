import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import {Trans, useTranslation} from "react-i18next";
import classNames from "classnames";
import {useNewsCate} from "@lib/hooks/useNewsCate";

function SubNav(props:any){
  const {className,data} = props
  return(
    <ul className={classNames('flex flex-col text-base mt-4 leading-[2.2] font-normal md:text-[0.9375rem]',className)}>
      {
        data.length && data.map((v:any,i:number)=>{
          return(
            v.render?v.render():
              (
                v.href?
                  <Link href={v.href} className="link-hover" key={`${i}`}>{v.name}</Link>
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
  const cateList = useNewsCate()
  // const navList = getNavList(t).concat([
  //   // @ts-ignore
  //   ])
  const navList = [
    // {
    //   href: '/',
    //   name: t('navigation.list.item1.name'),
    // },
    {
      href: '/solutions',
      name: t('navigation.list.item2.name'),
      children:[
        {
          href: '/solutions/automotive',
          name:
            <Trans
              i18nKey="2"
              components={[<sup key="dsd"></sup>]}
            >
              {t('navigation.list.item2.children.child1.name')}
            </Trans>,
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
      children: cateList.map(v=>{
        return(
          {
            href: `/news?cateId=${v.id}`,
            name: v.name,
          }
        )
      })
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
      name: t('navigation.list.item4.children.qrSubtitle'),
      href:'',
      children: [
        {
          render:()=>{
            return(
              <img className="w-[7.5rem] mt-2" src="/images/wechat_qrcode.png" alt=""/>
            )
          }
        }
      ]
    }
  ]
  if(i18n.language === 'en') navList.splice(1,1)
  return (
    <div className="bg-bgc pb-5 md:px-8 md:py-12">
      <div className="flex flex-col w-container mx-auto md:w-full">
        <div className="flex flex-col mt-12 md:mt-0">
          <div className="flex justify-between flex-col">
            {/*<div>*/}
            {/*  <Link className="md:float-left" href="/" ><img className="w-20" src="/images/logo.svg"/></Link>*/}
            {/*</div>*/}
            <ul className="flex md:flex-col mt-5">
              <li className="mr-14 mt-[-1.3rem]">
                <Link className="md:float-left" href="/" ><img className="w-20" src="/images/logo.svg"/></Link>
              </li>
              {
                navList.map((v,i)=>{
                  return(
                    <li key={`${i}`} className={classNames('md:mt-5',i===(navList.length-1)?'mr-0':'mr-[3.75rem] md:mr-2')}>
                      {
                        v.href && !v.children?
                          <Link className="text-xl link-hover font-bold md:text-xl" href={v.href}>{v.name}</Link>
                          :
                          <span className="text-xl font-bold md:text-xl">{v.name}</span>
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

          <div>
            {/*<span>{t('footer.company')}</span>*/}
            {/*<a href="https://beian.miit.gov.cn/" target="_blank">您的备案号</a>*/}
            <a rel="noreferrer" href="https://beian.miit.gov.cn/" target="_blank"> 沪ICP备2022024704号-2</a>
          </div>
          <span onClick={()=>window.open(i18n.language === 'zh'?'/zhstatement':'/enstatement','_blank')} className="cursor-pointer md:mt-5 link-hover">{t('footer.viewBtn')}</span>
        </div>
      </div>
    </div>
  );
}
