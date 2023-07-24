import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import {QrGroup} from "@components/qrGroup";
import classNames from "classnames";
import {useTranslation,Trans} from "react-i18next";
import React from "react";


function Top(){
  const { t,i18n } = useTranslation('automotive');
  return(
  <div className="h-[44.625rem] w-full bg-[url(/images/automotive_banner.jpg)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]">
    <div className={classNames('bg-white/[.76] flex md:flex-col w-[60.5rem] pl-10 text-[2rem] py-10 leading-[2.75rem] md:py-8 md:text-lg md:text-center md:px-4 md:w-auto')}>
      <div className='w-[9.875rem] md:w-full md:max-w-[22rem] md:max-w-[10rem] md:mx-auto md:scale-[0.9]'>
        <div className="py-3 rounded-[2.25rem] outline outline-[5px] outline-green outline-offset-4 border-[1.75px] border-green flex justify-center items-center">
          <div className="flex flex-col items-center justify-between h-full">
            <img className="mb-2 w-[8rem]" src="/images/carbon3_name.svg" alt=""/>
            <img className="w-[6.25rem]" src="/images/earth.png" alt=""/>
          </div>
        </div>
      </div>
      <div className="mt-3 ml-10 md:ml-0">
        <h3 className={classNames('font-bold text-green md:text-[1.75rem] md:leading-9')}>Digital<sup>3</sup> Carbon</h3>
        <p className="mt-3 w-[43.25rem] md:w-full">{t('banner.text')}</p>
      </div>
    </div>
  </div>
  )
}
function BoostingAutomotive(){
  const { t } = useTranslation('automotive');
  const list = [
    {
      img: '/images/database.svg',
      text:
        <Trans
          i18nKey="boostingAutomotive.list.item1.text"
          components={[<strong className="text-green" key='info'></strong>]}
        >
          {t('boostingAutomotive.list.item1.text')}
        </Trans>
    },
    {
      img: '/images/searcheye.svg',
      text:
        <Trans
          i18nKey="boostingAutomotive.list.item1.text"
          components={[<strong className="text-green" key='info'></strong>]}
        >
          {t('boostingAutomotive.list.item2.text')}
        </Trans>
    },
    {
      img: '/images/alt.svg',
      text:
        <Trans
          i18nKey="boostingAutomotive.list.item1.text"
          components={[<strong className="text-green" key='info'></strong>]}
        >
          {t('boostingAutomotive.list.item3.text')}
        </Trans>
    },
    {
      img: '/images/hand.svg',
      text:
        <Trans
          i18nKey="boostingAutomotive.list.item1.text"
          components={[<strong className="text-green" key='info'></strong>]}
        >
          {t('boostingAutomotive.list.item4.text')}
        </Trans>
    }
  ]
  return(
    <div className="flex flex-col items-center pb-20 mx-auto w-container md:text-center md:pb-8 md:w-full">
      <h3 className="my-16 text-center text-green md:mt-7 md:mb-5 md:px-12">{t('boostingAutomotive.title')}</h3>
      <div className="flex justify-between md:flex-col">
        <div className="flex flex-col px-3 w-[32.625rem] mr-[6.875rem] md:w-full md:mr-0">
          <img className="w-full rounded-lg md:mx-auto md:mt-8 md:mt-0" src="/images/solution_intro.png" alt=""/>
          <p className="mt-5">
            <Trans
              i18nKey="boostingAutomotive.list.item1.text"
              components={[<a href="https://aiag.org.cn/" rel="noreferrer" target="_blank" className="font-bold underline" key='info'></a>,<strong className="text-green" key='info'></strong>,<sup key="info" className="font-bold text-green"></sup>]}
            >
              {t('boostingAutomotive.text')}
            </Trans>
          </p>
        </div>
        <ul className="w-[36.725rem] flex flex-wrap justify-between md:flex-col md:w-full md:items-center">
          {
            list.map((v,i)=>{
              return(
                <li key={`list${i}`} className="w-[16.125rem] flex flex-col justify-center items-center md:mt-8">
                  <div>
                    <img src={v.img} alt=""/>
                  </div>
                  <p className="mt-8">{v.text}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
function Carbon3Solution(){
  const { t } = useTranslation('automotive');
  return(
    <div className="flex flex-col items-center w-full text-lg bg-bgc md:text-sm md:pb-5">
      <h3 className="px-12 mt-16 text-center md:mt-8">
        <Trans
          i18nKey="carbon3Solution.title"
          components={[<sup className="" key='info'></sup>]}
        >
          {t('carbon3Solution.title')}
        </Trans>
      </h3>
      <div className="w-[80rem] md:w-full overflow-y-hidden overflow-x-auto">
        <div className="flex justify-center w-full items-center md:justify-start mt-20 pb-20 md:mt-[2.25rem] md:pb-8 md:ml-5 md:text-sm">
          <div className="">
            <img className="w-[7.5rem] md:w-[5.25rem]" src="/images/factory.png" alt=""/>
            <p className="mt-5 md:mt-3.5 w-[10.375rem]">{t('carbon3Solution.group.item1.text')}</p>
          </div>
          <img className="mr-14 ml-10 md:w-[3.125rem] md:ml-8 md:mr-10" src="/images/arrow_80.svg" alt=""/>
          <div className="flex md:mt-0 md:flex-col">
            <div className="flex flex-col w-[19rem] md:w-[14.5rem]">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex">
                    <img className="md:w-[6.125rem] fill-[#29953A]" src="/images/aicp_logo.svg" alt=""/>
                    <span className="ml-4 text-base leading-5 text-green md:text-xs">Digital<sup>3</sup><br/>Carbon</span>
                  </div>
                  <p className="mt-6 md:mt-3">
                    <Trans
                      i18nKey="carbon3Solution.group.item2.group.item1.text"
                      components={[<sup key="info"></sup>]}
                    >
                      {t('carbon3Solution.group.item2.group.item1.text')}
                    </Trans>
                  </p>
                </div>
              </div>
              <img className="h-10 mt-4 mb-5 ml-[-5.5rem]" src="/images/arrow_40.svg" alt=""/>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                  <div className="flex">
                    <img className="md:w-[6.125rem]" src="/images/aicp_logo.svg" alt=""/>
                    <span className="ml-4 text-base leading-5 text-green md:text-xs">Automotive Industry<br/>Carbon Platform</span>
                  </div>
                  <p className="mt-6 md:mt-3">{t('carbon3Solution.group.item2.group.item2.text')}</p>
                </div>
              </div>
              <img className="h-10 mt-4 mb-5 ml-[-5.5rem] rotate-180" src="/images/arrow_40.svg" alt=""/>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-full">
                  <div className="flex ml-[-6.5rem] mt-[-1.5rem] mb-[-1.5rem] md:ml-[-4.5rem] md:mb-[-2rem]">
                    <QrGroup className="scale-[0.6] md:w-[19rem] md:scale-[0.5]" qrText="Product Carbon Footprint Certified"/>
                  </div>
                  <p className="mt-6 md:mt-3">{t('carbon3Solution.group.item2.group.item3.text')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[23rem] ml-14 mr-14 md:ml-8 md:mr-8">
            <img className="md:w-[3.125rem] md:mr-10" src="/images/arrow_80.svg" alt=""/>
            <img className="md:w-[3.125rem] md:mr-10" src="/images/arrow_80.svg" alt=""/>
          </div>
          <div className="flex md:mt-0 md:flex-col md:pr-5">
            <div className="flex flex-col w-[22.8rem] md:w-[18rem] justify-between h-[35.8rem] md:h-[29rem]">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <img className="w-[7.5rem] md:w-[5.25rem]" src="/images/carry.png" alt=""/>
                  <p className="mt-6">
                    <Trans
                      i18nKey="carbon3Solution.group.item3.group.item1.text"
                      components={[<strong className="text-green" key='info'></strong>,<sup key="info"></sup>]}
                    >
                      {t('carbon3Solution.group.item3.group.item1.text')}
                    </Trans>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                  <img className="w-[7.5rem] md:w-[5.25rem]" src="/images/people.png" alt=""/>
                  <p className="mt-6">
                    <Trans
                      i18nKey="boostingAutomotive.list.item1.text"
                      components={[<strong className="text-green" key='info'></strong>]}
                    >
                      {t('carbon3Solution.group.item3.group.item2.text')}
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
function MainProduct(){
  const { t } = useTranslation('automotive');
  const data = [
    {
      title: t('mainProduct.list.item1.title'),
      text:
      <div className="w-[29.25rem] mx-auto leading-6 md:w-full md:leading-5 md:text-center">
        <p>
          {t('mainProduct.list.item1.p1')}
        </p>
        <p>
          <Trans
            i18nKey="mainProduct.list.item1.p2"
            components={[<sup key='info3'></sup>]}
          >
            {t('mainProduct.list.item1.p2')}
          </Trans>
        </p>
      </div>,
      btn:{
        text: t('mainProduct.list.item1.button'),
        onClick: ()=>{
          console.log(process.env.NODE_ENV)
          window.open("https://aicp.gtech-cn.co/", "_blank")
        }
      },
      imgUrl: '/images/roboat.svg'
    },
    {
      title:
        <Trans
          i18nKey=""
          components={[<sup key='info3'></sup>]}
        >
          {t('mainProduct.list.item2.title')}
        </Trans>,
      text:
        <div className="w-[29.25rem] mx-auto leading-6 md:w-full md:leading-5 md:text-center">
          <Trans
            i18nKey="mainProduct.list.item2.title"
            components={[<sup key='info3'></sup>]}
          >
            {t('mainProduct.list.item2.p1')}
          </Trans>
        </div>
      ,
      btn:{
        text:
          <Trans
            i18nKey=""
            components={[<sup key='info3'></sup>]}
          >
            {t('mainProduct.list.item2.button')}
          </Trans>,
        onClick: ()=>{
          window.open("https://aicp.gtech-cn.co/login", "_blank")
        }
      },
      imgUrl: '/images/find.svg'
    }
  ]
  return(
    <div className="flex flex-col items-center px-3">
      <h3 className="my-16 md:my-8 max-w-[1150px] text-center">{t('mainProduct.title')}</h3>
      <div className="flex justify-center md:flex-col">
        {
          data.map((v,i)=>{
            return(
              <div key={`product-${i}`} className={classNames('w-[36.25rem] pb-5 border-4 border-black rounded-2xl flex flex-col justify-center px-5 md:w-full md:mt-8',i===0?'ml-0 md:mt-0':'ml-10 md:ml-0')}>
                <h4 className="font-bold text-[2rem] h-[8rem] md:h-auto leading-9 px-5 text-center pt-6 pb-8 text-green md:text-base md:mt-3 md:pt-3">{v.title}</h4>
                <img className="h-[6.125rem] mb-10 md:h-[5rem] md:mb-8" src={v.imgUrl} alt=""/>
                {v.text}
                {/*<div className="w-[29.25rem] mx-auto leading-6 md:w-full md:leading-5 md:text-center">*/}
                {/*  {*/}
                {/*    v.text.map((child,index)=>{*/}
                {/*      return(*/}
                {/*        <p key={`child-${index}`}>{child}</p>*/}
                {/*      )*/}
                {/*    })*/}
                {/*  }*/}
                {/*</div>*/}
                <Button onClick={()=>v.btn.onClick()} className="mt-8" text={v.btn.text} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function TrustLabel(){
  const { t } = useTranslation('automotive');
  return(
    <div className="px-3 pb-20 mt-10">
      <div className="pb-5 m-auto border-4 border-black w-container rounded-2xl md:w-full md:h-auto">
        <h3 className="text-3.5xl font-bold text-green text-center mt-8 pb-6 md:text-base">{t('mainProduct.qrcode.title')}</h3>
        <div className="flex px-6 md:flex-col-reverse md:px-3">
          <img className="w-[50.625rem] md:w-full" src="/images/car.png" alt=""/>
          <div className="ml-6 md:ml-2">
            <QrGroup className="mt-20 md:mt-8" />
            <p className="mt-8 md:text-center">{t('mainProduct.qrcode.qrIntro')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Index() {
  return(
    <HeaderLayout>
      <Top />
      <BoostingAutomotive />
      <Carbon3Solution />
      <MainProduct />
      <TrustLabel />
    </HeaderLayout>
  )
}
