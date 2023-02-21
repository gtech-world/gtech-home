import { HeaderLayout } from "@components/common/headerLayout";
import classNames from "classnames";
import {useTranslation} from "react-i18next";

function Top(){
  const { t } = useTranslation('governance');
  return(
    <div className="h-[44.625rem] text-white w-full bg-[url(/images/governance_banner.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]">
      <div className="bg-blue-1/[.8] flex flex-col justify-center w-[58.5rem] pl-8 h-[13.125rem] text-[2rem] leading-[2.75rem] md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto">
        <h3 className="font-bold text-5xl md:text-[1.75rem] md:leading-9">{t('banner.title')}</h3>
        <p className="mt-3">{t('banner.subtitle1')}</p>
        <p className="">{t('banner.subtitle2')}</p>
      </div>
    </div>
  )
}
function PowerManagement(){
  const { t } = useTranslation('governance');
  return(
    <div className="flex flex-col items-center bg-bgc pb-16 md:pb-8">
      <h3 className="w-[61.5rem] my-16 text-center leading-[65px] md:leading-6 md:w-full md:my-8 md:px-12">{t('powerManagement.title')}</h3>
      <div className="flex flex-col w-container md:w-full">
        <div className="h-[13rem] bg-[url(/images/industrial.svg)] bg-no-repeat bg-center">
        </div>
        <div className="mt-11 md:px-3 md:text-center md:mt-8">
          <p className="mb-5">
            {t('powerManagement.text1')}
          </p>
          <p>
            {t('powerManagement.text2')}
          </p>
        </div>
      </div>
    </div>
  )
}
function GreenData(){
  const { t } = useTranslation('governance');
  const powerManagement = [
    {
      title: t('greenData.item1.list.item1.title'),
      text: t('greenData.item1.list.item1.text'),
    },
    {
      title: t('greenData.item1.list.item2.title'),
      text: t('greenData.item1.list.item2.text'),
    },
    {
      title: t('greenData.item1.list.item3.title'),
      text: t('greenData.item1.list.item3.text'),
    },
    {
      title: t('greenData.item1.list.item4.title'),
      text: t('greenData.item1.list.item4.text'),
    },
  ]

  const greenData = [
    {
      title: t('greenData.item2.list.item1.title'),
      text: t('greenData.item2.list.item1.text'),
    },
    {
      title: t('greenData.item2.list.item2.title'),
      text: t('greenData.item2.list.item2.text'),
    },
    {
      title: t('greenData.item2.list.item3.title'),
      text: t('greenData.item2.list.item3.text'),
    }
  ]
  return(
    <div className="w-full flex flex-col items-center pt-16 pb-20 md:py-8">
      <h3 className="px-12 text-center"><span className="text-green">&apos;{t('greenData.title.green')}&apos;</span> {t('greenData.title.text')}</h3>
      <div className="flex mt-20 md:flex-col-reverse md:mt-8">
        <div className="w-[38.625rem] mr-[5.75rem] md:w-full md:text-center md:px-3">
          <h4 className="text-[1.75rem] leading-[32px] font-bold mb-10 md:text-base">{t('greenData.item1.subtitle')}</h4>
          {
            powerManagement.map((v,i)=>{
              return(
                <div key={`powerManagement-${i}`}>
                  <h6 className={classNames('font-bold',(i !== 0)?'mt-6':'')}>{v.title}</h6>
                  <p>{v.text}</p>
                </div>
              )
            })
          }
        </div>
        <img className="w-[30.625rem] mx-auto md:max-w-[18.375rem] md:w-full md:mb-8" src="/images/platform.svg" alt=""/>
      </div>
      <div className="flex mt-24 md:flex-col md:mt-12">
        <div className="flex flex-col md:flex-col-reverse">
          <h4 className="text-[1.75rem] font-bold mb-8 md:text-base md:text-center md:mt-8">{t('greenData.item2.subtitle')}</h4>
          <img className="mx-auto w-[34.625rem] md:max-w-[20.875rem] md:w-full" src="/images/green_data.svg" alt=""/>
        </div>
        <div className="ml-[4.75rem] w-[35.56rem] px-3 md:w-full md:ml-0 md:text-center">
          {
            greenData.map((v,i)=>{
              return(
                <div key={`greenData-${i}`}>
                  <h6 className="font-bold">{v.title}</h6>
                  <p className="mb-5">{v.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


export default function Index() {
  return(
    <HeaderLayout>
      <Top />
      <PowerManagement />
      <GreenData />
    </HeaderLayout>
  )
}
