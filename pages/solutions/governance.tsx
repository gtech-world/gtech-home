import { HeaderLayout } from "@components/common/headerLayout";
import classNames from "classnames";

function Top(){
  return(
    <div className="h-[44.625rem] text-white w-full bg-[url(/images/governance_banner.png)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]">
      <div className="bg-blue-1/[.8] flex flex-col justify-center w-[58.5rem] pl-8 h-[13.125rem] text-[2rem] leading-[2.75rem] md:text-lg md:text-center md:px-4 md:py-11 md:w-auto md:h-auto">
        <h3 className="font-bold text-5xl md:text-[1.75rem] md:leading-9">Data Governance Solutions</h3>
        <p className="mt-3">Case: Green Power Industrial Park</p>
        <p className="">Consolidated Data Management Solution</p>
      </div>
    </div>
  )
}
function PowerManagement(){
  return(
    <div className="flex flex-col items-center bg-bgc pb-16 md:pb-8">
      <h3 className="w-[61.5rem] my-16 text-center leading-[65px] md:leading-6 md:w-full md:my-8 md:px-12">Consolidated Digitalized Power Management Solution for Industrial Park</h3>
      <div className="flex flex-col w-container md:w-full">
        <div className="h-[13rem] bg-[url(/images/industrial.svg)] bg-no-repeat bg-center">
        </div>
        <div className="mt-11 md:px-3 md:text-center md:mt-8">
          <p className="mb-5">
            Green power supply (hydro power, wind power, photovoltaics, etc.) and manufacturing industry activities are alway grographically mismatched. As the major global economies begin to increasely realize the significance and urgency to acquire green power for the industry capacity, engineers from cross sections are making attemptions to match green power supply to industry demands despite of timing and spatial gaps.
          </p>
          <p>
            A joint force of in Sichuan Province, China, seeks opportunities in addressing the power matching puzzle based on the dramatically abundant natural resources in this area. The project leverages collective technologies and solutions from world&apos;s leading automation and data solution providers such as Siemens, Honeywell and GTech to solve problems in power transmission, power dispatching, power accounting, carbon emission mitigation and system optimization. GTech’s expertise and experience in Data Governance plays a key role and contributes to the formation of the final consolidated solution.
          </p>
        </div>
      </div>
    </div>
  )
}
function GreenData(){
  const powerManagement = [
    {
      title: 'Consolidated Power Management',
      text: 'enhances power availability and reliability, and ensures the supply of good power quality in critical sites of the industrial park.'
    },
    {
      title: 'Power Accounting & Settlement',
      text: 'provides precise measurement of the power consumption for each single unit break-down from the load side.'
    },
    {
      title: 'Real-time Power Consumption Monitoring',
      text: 'provides real-time, cross-checked measurement results of running states.'
    },
    {
      title: 'Power Programming & Optimization',
      text: 'automatic, smart modeling technique based on power load forcast, power consumption recurrence and customizable strategies.'
    },
  ]

  const greenData = [
    {
      title: 'Trusted Data for Multi-party Collaboration',
      text: 'GTech’s solution builds the trust framework between multi parties who participate in the power supply chain. GTech defines how data should be stored, transmitted, processed, authorized and used across the full data life cycle based on this huge ‘trust machine’.',
    },
    {
      title: 'Carbon-related Services Integrated',
      text: 'Based on trusted data acquired from the users’ power purchase, consumption and recycling activities, the consolidated solution brings carbon-related add-on services into the platform. The services include carbon emission accounting, carbon credit development and carbon financing support.'
    },
    {
      title: 'Downstream to Upstream Coverage',
      text: 'The solution benefits a great deal of corporate, governmental and other types of organizations from upstream to downstream in the power supply business, e.g. power plants, regional power grids, dispatch service providers, industrial parks, carbon development agencies and certification agencies.'
    }
  ]
  return(
    <div className="w-full flex flex-col items-center pt-16 pb-20 md:py-8">
      <h3 className="px-12 text-center"><span className="text-green">&apos;Green Data&apos;</span> Management & BI Platform</h3>
      <div className="flex mt-20 md:flex-col-reverse md:mt-8">
        <div className="w-[38.625rem] mr-24 md:w-full md:text-center md:px-3">
          <h4 className="text-[28px] leading-[32px] font-bold mb-10 md:text-base">Digitalized & Consolidated Power<br/>Management System</h4>
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
          <h4 className="text-[28px] font-bold mb-8 md:text-base md:text-center md:mt-8">The Platform Made for &apos;Green Data&apos;</h4>
          <img className="mx-auto md:max-w-[20.875rem] md:w-full" src="/images/green_data.svg" alt=""/>
        </div>
        <div className="ml-20 w-[35.56rem] px-3 md:w-full md:ml-0 md:text-center">
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
