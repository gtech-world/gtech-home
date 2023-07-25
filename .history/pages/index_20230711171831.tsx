import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import classNames from "classnames";
import {useRouter} from "next/router";
import {Trans, useTranslation} from "react-i18next";
import React from "react";

function Top(){
  const { t } = useTranslation('home');
  console.log('tttttt',t('banner.text2'));
  
  return(
    <div className="w-full relative bg-[url(/images/home_banner.jpg)] bg-no-repeat bg-center bg-cover">
      {/*<div className="absolute w-full h-full bg-linear">*/}
      {/*</div>*/}
      {/* <div className="relative flex flex-col items-center">
        <div className="flex flex-col items-center font-bold text-shadow text-[4rem] leading-normal text-center md:text-[1.75rem]">
          <span className="mt-64 text-green-4 md:mt-36 ">{t('banner.text1')}</span>
          <span className="text-white">{t('banner.text2')}</span>
        </div>
        <div className="max-w-[34rem] text-white h-14 text-lg text-center mt-[14.375rem] mb-5 md:text-sm md:mt-[8.375rem] md:mb-9 md:px-6">{t('banner.tips')}</div>
        <img alt="" className="pb-3 md:hidden" src="images/home_head_arrow.svg"/>
      </div> */}
    </div>
  )
}

function Technologies(){
  const { t } = useTranslation('home');
  const data = [
    {
      title: t('technologies.list.item1.title'),
      text: t('technologies.list.item1.text'),
      image: 'images/solution.svg'
    },
    {
      title: t('technologies.list.item2.title'),
      text: t('technologies.list.item2.text'),
      image: 'images/eyes.svg'
    },
    {
      title: t('technologies.list.item3.title'),
      text: t('technologies.list.item3.text'),
      image: 'images/traceability.svg'
    },
  ]

  console.log('datadata',data);
  
  return(
    <div className="flex flex-col items-center w-full pt-16 bg-bgc md:pt-8 md:pb-4">
      <h3 className="text-center"><span className="text-green">{t('technologies.title.yellow')}</span> {t('technologies.title.text')}</h3>
      <div className="max-w-[59.75rem] md:px-3 text-center mt-5">{t('technologies.text')}</div>
      <ul className="flex justify-between mt-20 w-container md:flex-col md:mt-16 md:w-full">
        {
          data.map((v,i)=>{
            return(
              <li key={`technologies${i}`} className="flex flex-col items-center pb-16 md:pb-12">
                <img className="h-[8rem] md:h-[6.125rem]" src={v.image} alt=""/>
                <h6 className="mb-5 text-xl font-bold text-center text-green mt-7 md:text-base">{v.title}</h6>
                <p className="w-[19.375rem] text-lg md:text-sm md:text-center">{v.text}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
function Assistance(){
  const { t,i18n } = useTranslation('home');
  const {push} = useRouter()
  const btnList = [
    {text:t('assistance.btnList.about'),onClick:()=>{push('/solutions/automotive')},className: i18n.language === 'en'?'w-[19.7rem]':'w-[17.7rem]'},
    {text:t('assistance.btnList.aiag'),onClick:()=>{window.open('https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee','_blank')},className: i18n.language === 'en'?'w-[15.7rem]':'w-[17.7rem]'},
    {text:t('assistance.btnList.platform'),onClick:()=>{window.open('https://aicp.gtech-cn.co/','_blank')},className: i18n.language === 'en'?'w-[19.7rem]':'w-[17.7rem]'},
    {text:t('assistance.btnList.products'),onClick:()=>{window.open('https://aicp.gtech-cn.co/login','_blank')},className: i18n.language === 'en'?'w-[15.7rem]':'w-[17.7rem]'}
  ]
  return(
    <div className="mx-auto w-container md:w-full md:px-3">
      <h3 className="mt-16 mb-20 text-center text-green md:mt-8 md:mb-5">{t('assistance.title')}</h3>
      <div className="flex md:flex-col">
        <div className="min-w-[32.825rem] md:min-w-full rounded-lg overflow-hidden h-80 md:h-[13.375rem] bg-[url(/images/solution_intro.png)] bg-no-repeat bg-center bg-cover">
        </div>
        <div className="ml-[5.375rem] md:ml-0">
          <p className="md:mt-5 md:text-center">
            <Trans
              i18nKey="boostingAutomotive.list.item1.text"
              components={[<a href="https://aiag.org.cn/" rel="noreferrer" target="_blank" className="font-bold underline" key='info1'></a>,<strong className="text-green" key='info2'></strong>,<sup className="font-bold text-green" key='info3'></sup>]}
            >
              {t('assistance.text')}
            </Trans>
          </p>
          <ul className="flex flex-wrap justify-between mt-5 md:flex-col md:items-center">
            {
              btnList.map((v,i)=>{
                return(
                  <li key={`btnlist${i}`} className="mt-5">
                    <Button onClick={()=>v.onClick()} className={classNames(v.className,'pl-0 pr-0 md:w-[20rem]')}>
                      <Trans
                        i18nKey="boostingAutomotive.list.item1.text"
                        components={[<sup className="" key='info3'></sup>]}
                      >
                        {v.text}
                      </Trans>
                    </Button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
function CrossSolutions(){
  const { t } = useTranslation('home');
  const router = useRouter()
  const data = [
    {
      url: '/solutions/web3',
      layout: 'left',
      imgUrl: 'images/map.png',
      title: t('crossSolutions.list.item1.title'),
      text: t('crossSolutions.list.item1.text'),
    },
    {
      url: '/solutions/governance',
      layout: 'right',
      imgUrl: 'images/governance_banner.jpg',
      title: t('crossSolutions.list.item2.title'),
      text: t('crossSolutions.list.item2.text'),
    },
    {
      url: '/solutions/automotive',
      layout: 'left',
      imgUrl: 'images/automotive_banner.jpg',
      title: t('crossSolutions.list.item3.title'),
      text: t('crossSolutions.list.item3.text'),
    }
  ]
  return(
    <div className="flex flex-col items-center pb-32 mt-20 md:mt-8 md:pb-12">
      <h3 className="">{t('crossSolutions.title')}</h3>
      <p className="text-center mt-5 max-w-[56.25rem] md:px-3">
        {t('crossSolutions.text')}
      </p>
      <div className="w-container md:w-full md:px-3">
        {
          data.map((v,i)=>{
            return(
              <div key={`data-${i}`} className={classNames('mt-20 flex justify-between md:mt-12',v.layout ==='left'?'':'flex-row-reverse','md:flex-col')}>
                <div className="md:mx-auto">
                  <img className="block w-[35rem] rounded-lg overflow-hidden md:max-w-full" src={v.imgUrl} alt=""/>
                </div>
                <div className='w-[35rem] md:w-full md:text-center md:mt-8'>
                  <h5 className="md:px-12">{v.title}</h5>
                  <p className={classNames('mt-5',v.layout === 'left'?'w-[36.5rem] md:w-full':'')}>
                    {v.text}
                  </p>
                  <Button onClick={()=>router.push(v.url)} className="mt-8 w-[19.25rem]" text={t('crossSolutions.list.button')} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default function Index() {
  const headerProps = {
    sticky: false,
    isTransparent: true,
    className: 'absolute text-white'
  }
  return(
    <HeaderLayout headerProps={headerProps} className="relative">
      <Top />
      <Technologies />
      <Assistance />
      <CrossSolutions />
    </HeaderLayout>
  )
}
