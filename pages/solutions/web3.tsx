import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import {useTranslation} from "react-i18next";


function Top(){
  const { t } = useTranslation('web3');
  return(
    <div className="h-[44.625rem] w-full bg-[url(/images/map.png)] bg-no-repeat bg-[length:auto_100%] bg-center flex justify-center items-center px-9 md:h-[26rem]">
      <div className="bg-green/[.92] flex flex-col justify-center w-[58.5rem] px-8 py-10 text-[2rem] leading-[2.75rem] text-yellow md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto">
        <h3 className="text-white font-bold text-5xl md:text-[1.75rem] md:leading-9">{t('banner.title')}</h3>
        <p className="mt-3">{t('banner.subtitle')}</p>
      </div>
    </div>
  )
}

function StorageInitiative(){
  const { t } = useTranslation('web3');
  return(
    <div className="flex flex-col items-center pb-20 md:pb-8">
      <h3 className="my-16 text-center md:px-8 md:my-12">{t('storageInitiative.title')}</h3>
      <div className="flex md:flex-col md:px-3">
        <img className="mx-auto w-[29.875rem] md:w-full md:max-w-[20.875rem]" src="/images/web3_pic.png" alt=""/>
        <div className="ml-14 w-[39.75rem] leading-6 md:w-full md:ml-0 md:text-center md:mt-8">
          <h4 className="text-2xl font-bold md:text-base">{t('storageInitiative.list.item1.title')}</h4>
          <p className="mt-5">
            {t('storageInitiative.list.item1.text.p1')}
          </p>
          <p>
            {t('storageInitiative.list.item1.text.p2')}
          </p>
          <h4 className="text-2xl font-bold mb-5 mt-8 md:text-base">{t('storageInitiative.list.item2.title')}</h4>
          <p>
            {t('storageInitiative.list.item2.text.p1')}
          </p>
          <p>
            {t('storageInitiative.list.item2.text.p2')}
          </p>
        </div>
      </div>
    </div>
  )
}

function StorageMiddlewares(){
  const { t } = useTranslation('web3');
  return(
    <div className="w-full bg-bgc flex flex-col items-center pt-16 pb-16 md:pt-8 md:pb-10">
      <h3 className="text-green mb-20 px-12 text-center md:mb-8">{t('storageMiddlewares.title')}</h3>
      <div className="flex items-center md:flex-col-reverse text-base">
        <div className="w-[29.875rem] md:w-full md:text-center md:mt-8">
          <div className="px-7">
            <p>
              {t('storageMiddlewares.text')}
            </p>
            <h5 className="mt-8 mb-5">
              {t('storageMiddlewares.list.item1.title')}
            </h5>
            <p>
              {t('storageMiddlewares.list.item1.text')}
            </p>
            <h5 className="mt-8 mb-5">
              {t('storageMiddlewares.list.item2.title')}
            </h5>
            <p>
              {t('storageMiddlewares.list.item2.text')}
            </p>
          </div>
        </div>
        <div className="flex ml-24 md:flex-col md:px-8 md:ml-0">
          <div className="w-[19.625rem] h-[23.5rem] border-2 border-black bg-white rounded-l-xl md:rounded-t-xl md:rounded-b-none md:pb-2">
            <div className="flex flex-col items-center border-b-2 border-black pt-6 pb-5">
              <div className="text-[1.75rem] font-medium">PaaS</div>
              <span className="leading-[1.3125rem] mt-[.625rem]">{t('storageMiddlewares.table.paas.text')}</span>
            </div>
            <div className="flex flex-col items-center py-7">
              <div className="flex items-center text-4xl mb-8">
                <span className="mr-2">W3</span>
                <img src="/images/container.svg" />
                <span className="px-3">+</span>
                <span className="mr-2">W3</span>
                <img src="/images/upload.svg" />
              </div>
              <h6
                // onClick={() => scrollToAnchor("nft")}
                className="text-[1.35rem] leading-5 font-medium leading-7 mb-2 underline no-skip-ink"
              >
                W3Buckets
              </h6>
              <span className="leading-[1.375rem]">{t('storageMiddlewares.table.paas.w3bucket')}</span>
              <h6
                // onClick={() => scrollToAnchor("nft")}
                className="text-[1.35rem] leading-5 font-medium leading-7 mt-6 mb-2 underline no-skip-ink"
              >
                W3Gateways
              </h6>
              <span className="leading-[1.375rem]">{t('storageMiddlewares.table.paas.w3gateways')}</span>
            </div>
          </div>
          <div className="w-[19.625rem] h-[23.5rem] border-l-2 border-black border-2 border-black bg-white rounded-r-xl md:mt-3 md:rounded-b-xl md:rounded-t-none md:pb-12">
            <div className="flex flex-col items-center border-b-2 border-black pt-6 pb-5">
              <div className="text-[1.75rem] font-medium">SaaS</div>
              <span className="leading-[1.3125rem] mt-[.625rem]">{t('storageMiddlewares.table.saas.text')}</span>
            </div>
            <div className="flex flex-col items-center py-7 px-7">
              <div className="flex items-center text-4xl">
                <span className="mr-2">W3</span>
                <img src="/images/widget.svg" alt=""/>
              </div>
              <h6
                // onClick={() => scrollToAnchor("widget")}
                className="text-[1.35rem] leading-5 font-medium leading-7 mt-8 mb-2 underline no-skip-ink"
              >
                Web3 Storage Widgets
              </h6>
              <p className="leading-[1.375rem] text-center">
                {t('storageMiddlewares.table.saas.p1')}
              </p>
              <p className="leading-[1.375rem] text-center">{t('storageMiddlewares.table.saas.p2')}</p>
              <p className="leading-[1.375rem] text-center">{t('storageMiddlewares.table.saas.p3')}</p>
              <p className="leading-[1.375rem] text-center">{t('storageMiddlewares.table.saas.p4')}</p>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={()=>window.open(`https://crustcloud.io/`, "_blank")} className="w-96 mt-16 md:max-w-[19.375rem] md:mt-8" text={t('storageMiddlewares.button')} />
    </div>
  )
}

function StorageCases(){
  const { t } = useTranslation('web3');
  const data = [
    {
      title: t('storageCases.list.item1.title'),
      text: t('storageCases.list.item1.text'),
      imgUrl: '/images/uniswap.svg'
    },
    {
      title: t('storageCases.list.item2.title'),
      text: t('storageCases.list.item2.text'),
      imgUrl: '/images/aave.svg'
    }
  ]
  return(
    <div className="flex flex-col items-center bg-white">
      <h3 className="text-center my-16 px-12 md:my-8">{t('storageCases.title')}</h3>
      <div className="flex flex-col mt-10 md:mt-0">
        {
          data.map((v,i)=>{
            return(
              <div key={`data-${i}`} className="mb-20 flex px-3 md:flex-col md:mb-10">
                <img className="mx-auto w-[21.375rem] md:w-[17.125rem]" src={v.imgUrl} alt=""/>
                <div className="w-[50.75rem] ml-12 md:w-full md:ml-0 md:text-center">
                  <h5 className="md:px-12 md:mt-4">{v.title}</h5>
                  <p className="mt-5">{v.text}</p>
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
  return(
    <HeaderLayout>
      <Top />
      <StorageInitiative />
      <StorageMiddlewares />
      <StorageCases />
    </HeaderLayout>
  )
}
