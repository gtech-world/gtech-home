import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import classNames from "classnames";
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";

function Top(){
  const { t } = useTranslation('home');
  return(
    <div className="w-full bg-[url(/images/home_banner.jpg)] bg-no-repeat bg-center bg-cover flex flex-col items-center">
      <div className="flex flex-col items-center font-bold text-[4rem] leading-normal text-center md:text-[1.75rem]">
        <span className="text-green-3 mt-64 md:mt-36">{t('banner.text1')}</span>
        <span className="text-white">{t('banner.text2')}</span>
      </div>
      <div className="max-w-[34rem] text-white h-14 text-lg text-center mt-[14.375rem] mb-5 md:text-sm md:mt-[8.375rem] md:mb-9 md:px-6">{t('banner.tips')}</div>
      <img alt="" className="pb-3 md:hidden" src="images/home_head_arrow.svg"/>
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
  return(
    <div className="w-full bg-bgc flex flex-col items-center pt-16 md:pt-8 md:pb-4">
      <h3 className="text-center"><span className="text-green">{t('technologies.title.yellow')}</span> {t('technologies.title.text')}</h3>
      <div className="max-w-[59.75rem] md:px-3 text-center mt-5">{t('technologies.text')}</div>
      <ul className="w-container flex justify-between mt-20 md:flex-col md:mt-16 md:w-full">
        {
          data.map((v,i)=>{
            return(
              <li key={`technologies${i}`} className="flex flex-col items-center pb-16 md:pb-12">
                <img className="h-[8rem] md:h-[6.125rem]" src={v.image} alt=""/>
                <h6 className="text-green text-center text-xl font-bold mt-7 mb-5 md:text-base">{v.title}</h6>
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
  const { t } = useTranslation('home');
  const btnList = [
    {text:t('assistance.btnList.about'),onClick:()=>{}},
    {text:t('assistance.btnList.aiag'),onClick:()=>{}},
    {text:t('assistance.btnList.database'),onClick:()=>{}},
    {text:t('assistance.btnList.products'),onClick:()=>{}}
  ]
  return(
    <div className="w-container mx-auto md:w-full md:px-3">
      <h3 className="mb-20 text-center mt-16 text-green md:mt-8 md:mb-5">{t('assistance.title')}</h3>
      <div className="flex md:flex-col">
        <div className="min-w-[32.825rem] md:min-w-full rounded-lg overflow-hidden h-80 md:h-[13.375rem] bg-[url(/images/solution_intro.png)] bg-no-repeat bg-center bg-cover">
        </div>
        <div className="ml-[5.375rem] md:ml-0">
          <p className="md:mt-5">{t('assistance.text')}</p>
          <ul className="flex flex-wrap justify-between mt-5 md:flex-col md:items-center">
            {
              btnList.map((v,i)=>{
                return(
                  <li className="mt-5"><Button className="w-[17.7rem]" text={v.text} /></li>
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
