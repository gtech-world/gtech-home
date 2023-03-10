import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import {QrGroup} from "@components/qrGroup";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
function Top(){
  const { t,i18n } = useTranslation('automotive');
  return(
  <div className="h-[44.625rem] text-white w-full bg-[url(/images/automotive_banner.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]">
    <div className={classNames('bg-black/[.8] flex flex-col justify-center w-[58.5rem] pl-8 text-[2rem] py-10 text-green-1 leading-[2.75rem] md:text-lg md:text-center md:px-4 md:w-auto')}>
      <h3 className={classNames('font-bold text-white md:text-[1.75rem] md:leading-9',i18n.language ==='zh'?'text-[2.6rem]':'text-5xl')}>{t('banner.title')}</h3>
      <p className="mt-3">{t('banner.subtitle')}</p>
    </div>
  </div>
  )
}
function BoostingAutomotive(){
  const { t } = useTranslation('automotive');
  return(
    <div className="flex flex-col items-center pb-20 md:text-center md:pb-8">
      <h3 className="my-16 md:my-6 md:px-12">{t('boostingAutomotive.title')}</h3>
      <div className="flex md:flex-col-reverse px-3">
        <img className="w-[34.5rem] md:mx-auto md:mt-8 rounded-lg" src="/images/solution_intro.svg" alt=""/>
        <div className="w-[36.875rem] ml-14 text-lg md:text-sm md:w-full md:ml-0">
          <p className="mb-5">{t('boostingAutomotive.text1')}</p>
          <p className="mb-5">{t('boostingAutomotive.text2')}</p>
          <p>{t('boostingAutomotive.text3')}</p>
        </div>
      </div>
    </div>
  )
}
function IndustryLevel(){
  const { t } = useTranslation('automotive');
  return(
    <div className="w-full bg-green flex flex-col items-center text-white text-lg md:text-sm md:pb-10">
      <h3 className="text-center px-12 mt-16 md:mt-8">{t('industryLevel.title')}</h3>
      <p className="mt-5 max-w-[54.125rem] text-center md:px-5">{t('industryLevel.text')}</p>
      <div className="flex justify-center items-center mt-20 pb-20 ml-[4.8rem] md:flex-col md:ml-0 md:mt-5 md:text-center md:pb-0">
        <div>
          <p className="h-11">
          </p>
          <div className="bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center">{t('industryLevel.group.item1.name')}</div>
          <p className="w-64 h-[5.25rem] mt-5 md:h-auto">{t('industryLevel.group.item1.text')}</p>
        </div>
        <img className="mt-[-3.7rem] w-[6.25rem] md:hidden" src="/images/arrow_lg.svg" alt=""/>
        <img className="hidden md:block w-10 my-6 h-[2.25rem]" src="/images/arrow_down.svg" alt=""/>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-yellow h-11">AICD</p>
          <div className="bg-white text-black text-1.5xl leading-[1.875rem] font-bold rounded-lg h-20 w-[18.75rem] flex justify-center items-center text-center">{t('industryLevel.group.item2.name')}</div>
          <p className="w-[18.75rem] h-[5.25rem] mt-5 md:h-auto">{t('industryLevel.group.item2.text')}</p>
        </div>
        <div className="flex md:mt-0 md:flex-col items-center">
          <img className="hidden md:block w-10 my-6 h-[2.25rem]" src="/images/arrow_down.svg" alt=""/>
          <img className="mt-[-4rem] h-[9.625rem] md:hidden" src="/images/arrow2_lg.svg" alt=""/>
          <div className="ml-[-4.8rem] md:ml-0">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-yellow h-10">Traceability</p>
              <div className="bg-white text-black text-1.5xl leading-[1.875rem] font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center">{t('industryLevel.group.item3.group.item1.name')}</div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-yellow h-10 mt-4">Trust Label</p>
              <div className="bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center">{t('industryLevel.group.item3.group.item2.name')}</div>
            </div>
            <p className="w-[26rem] mt-5 md:w-[16.25rem]">{t('industryLevel.group.item3.group.text')}</p>
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
      text: [
        t('mainProduct.list.item1.p1'),
        t('mainProduct.list.item1.p2')
      ],
      btn:{
        text: t('mainProduct.list.item1.button'),
        onClick: ()=>{
          window.open(`${process.env.NODE_ENV?'https://aicd-beta.gtech.world/':'https://aicd.gtech.world/'}`, "_blank")
        }
      },
      imgUrl: '/images/roboat.svg'
    },
    {
      title: t('mainProduct.list.item2.title'),
      text: [
        t('mainProduct.list.item2.p1')
      ],
      btn:{
        text: t('mainProduct.list.item2.button'),
        onClick: ()=>{
          window.open(`${process.env.NODE_ENV?'https://aicd-beta.gtech.world/login':'https://aicd.gtech.world/login'}`, "_blank")
        }
      },
      imgUrl: '/images/find.svg'
    }
  ]
  return(
    <div className="flex flex-col items-center px-3">
      <h3 className="my-16 md:my-8">{t('mainProduct.title')}</h3>
      <div className="flex justify-center md:flex-col">
        {
          data.map((v,i)=>{
            return(
              <div key={`product-${i}`} className={classNames('w-[36.25rem] pb-5 border-4 border-black rounded-2xl flex flex-col justify-center px-5 md:w-full md:mt-8',i===0?'ml-0 md:mt-0':'ml-10 md:ml-0')}>
                <h4 className="font-bold text-[2rem] leading-9 px-5 text-center pt-6 pb-8 text-green md:text-base md:mt-3 md:pt-3">{v.title}</h4>
                <img className="h-[6.125rem] mb-10 md:h-[5rem] md:mb-8" src={v.imgUrl} alt=""/>
                <div className="w-[29.25rem] mx-auto leading-6 md:w-full md:leading-5 md:text-center">
                  {
                    v.text.map((child,index)=>{
                      return(
                        <p key={`child-${index}`}>{child}</p>
                      )
                    })
                  }
                </div>
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
    <div className="mt-10 pb-20 px-3">
      <div className="w-container m-auto border-4 pb-5 border-black rounded-2xl md:w-full md:h-auto">
        <h3 className="text-3.5xl font-bold text-green text-center mt-8 pb-6 md:text-base">{t('mainProduct.qrcode.title')}</h3>
        <div className="px-6 flex md:flex-col-reverse md:px-3">
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
      <IndustryLevel />
      <MainProduct />
      <TrustLabel />
    </HeaderLayout>
  )
}
