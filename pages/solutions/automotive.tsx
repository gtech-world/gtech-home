import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import {QrGroup} from "@components/qrGroup";
import classNames from "classnames";
function Top(){
  return(
  <div className="h-[44.625rem] text-white w-full bg-[url(/images/automotive_banner.svg)] bg-no-repeat bg-cover bg-center flex justify-center items-center px-9 md:h-[28rem]">
    <div className="bg-black/[.8] p-8 text-[2rem] text-green-1 leading-[2.75rem] md:text-lg md:text-center">
      <h3 className="font-bold text-white text-5xl md:text-[1.75rem]">Industry-specific BI & Data Solutions</h3>
      <p className="mt-3">Case: Automotive Industry Carbon</p>
      <p className="">Performance Data Solution</p>
    </div>
  </div>
  )
}
function BoostingAutomotive(){
  return(
    <div className="flex flex-col items-center pb-20 md:text-center md:pb-8">
      <h3 className="my-16 md:my-6 md:px-12">Boosting Automotive&apos;s Net Zero Vision</h3>
      <div className="flex md:flex-col-reverse px-3">
        <img className="md:mt-8 rounded-lg" src="/images/solution_intro.svg" alt=""/>
        <div className="w-[590px] ml-14 text-lg md:text-sm md:w-full md:ml-0">
          <p className="mb-5">GTech provides industry-specific business intelligence and data management solutions based on the industry&apos;s particular demands or goals.</p>
          <p className="mb-5">Data is among many key factors in a business that contribute to more responsive decisions and more efficient operations. Especially, data drives us to better achieve our established goal in certain industry because we enjoy more chance to get well informed with facts, statistics, feedbacks and analytics - all of which are powered by the &apos;right&apos; data managed, processed, and delievered to the decision maker - so that we may finally discover the right path to the goal.</p>
          <p>In this case, GTech is helping the automotive industry, which comprises a super wide range of companies and organizations globally, to establish a long-term carbon performance data traceability and visibility framework for the industry&apos;s Net Zero commitment.</p>
        </div>
      </div>
    </div>
  )
}
function IndustryLevel(){
  return(
    <div className="w-full bg-green flex flex-col items-center text-white text-lg md:text-sm md:pb-10">
      <h3 className="text-center px-12 mt-16 md:mt-8">Industry-level Data Solution Explained</h3>
      <p className="mt-5 max-w-[54.125rem] text-center">GTech&apos;s consolidated BI & Data solution covers data collecting, data recording, data storage, database management & maintenance, traceability&visibility interfaces and services for end users.</p>
      <div className="flex justify-center items-center mt-20 pb-20 ml-[4.8rem] md:flex-col md:ml-0 md:mt-5 md:text-center md:pb-0">
        <div>
          <p className="h-11">
          </p>
          <div className="bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center">Collect Data</div>
          <p className="w-64 h-[5.25rem] mt-5 md:h-auto">Running states from supply chain</p>
        </div>
        <img className="mt-[-3.7rem] md:hidden" src="/images/arrow_lg.svg" alt=""/>
        <img className="hidden md:block w-10 my-6 h-[2.25rem]" src="/images/arrow_down.svg" alt=""/>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-yellow h-11">AICD</p>
          <div className="bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[18.75rem] flex justify-center items-center text-center">Automotive Industry Carbon Database</div>
          <p className="w-[18.75rem] h-[5.25rem] mt-5 md:h-auto">Powered by Web technologies, ensures data security, privacy and immutability</p>
        </div>
        <div className="flex md:mt-0 md:flex-col items-center">
          <img className="hidden md:block w-10 my-6 h-[2.25rem]" src="/images/arrow_down.svg" alt=""/>
          <img className="mt-[-4rem] md:hidden" src="/images/arrow2_lg.svg" alt=""/>
          <div className="ml-[-4.8rem] md:ml-0">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-yellow h-11">Traceability</p>
              <div className="bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center">Supply Chain Traceability</div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold text-yellow h-11 mt-7">Trust Label</p>
              <div className="bg-white text-black text-1.5xl font-bold rounded-lg h-20 w-[16.25rem] flex justify-center items-center text-center">Consumer Visibility</div>
            </div>
            <p className="w-[26rem] mt-5 md:w-[16.25rem]">Supply Chain Traceability is based on customized, graded access schemes; Consumer Visibility is based on public accessible data from AICD.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
function MainProduct(){
  const data = [
    {
      title: 'Automotive Industry Carbon Database',
      text: [
        'AICD is the global, industry-level database designed for long-term carbon emission performance traceability and visibility under the Net Zero commitment.',
        'The database offers public view mode and supply chain view mode (Traceability).'
      ],
      btn:{
        text: 'Enter AICD',
        onClick: ()=>{}
      },
      imgUrl: '/images/roboat.svg'
    },
    {
      title: 'Supply Chain Traceability System',
      text: [
        'Supply Chain Traceability is the system that helps authorized organizations in the automotive industry to view data in AICD, track carbon performance alongside its supply chain parties and operate with the AICD database under certain permission.'
      ],
      btn:{
        text: 'Enter Traceability',
        onClick: ()=>{}
      },
      imgUrl: '/images/find.svg'
    }
  ]
  return(
    <div className="flex flex-col items-center px-3">
      <h3 className="my-16 md:my-8">Discover Main Product Modules</h3>
      <div className="flex justify-center md:flex-col">
        {
          data.map((v,i)=>{
            return(
              <div key={`product-${i}`} className={classNames('w-[36.25rem] pb-5 border-4 border-black rounded-2xl flex flex-col justify-center px-5 md:w-full md:mt-8',i===0?'ml-0 md:mt-0':'ml-10 md:ml-0')}>
                <h4 className="font-bold text-[2rem] leading-9 px-5 text-center pt-6 pb-8 text-green md:text-base md:mt-3 md:pt-3">{v.title}</h4>
                <img className="h-[6.125rem] mb-10 md:h-[5rem] md:mb-8" src={v.imgUrl} alt=""/>
                <div className="w-[29.25rem] text-center mx-auto leading-6 md:w-full md:leading-5">
                  {
                    v.text.map((child,index)=>{
                      return(
                        <p key={`child-${index}`}>{child}</p>
                      )
                    })
                  }
                </div>
                <Button className="mt-8" text={v.btn.text} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function TrustLabel(){
  return(
    <div className="mt-10 mb-20 px-3">
      <div className="w-container m-auto border-4 pb-5 border-black rounded-2xl md:w-full md:h-auto">
        <h3 className="text-3.5xl font-bold text-green text-center mt-8 pb-6 md:text-base">The Trust Label System: Visibility for Consumers</h3>
        <div className="px-6 flex md:flex-col-reverse md:px-3">
          <img className="w-[50.625rem] md:w-full" src="/images/car.svg" alt=""/>
          <div className="ml-6 md:ml-2">
            <QrGroup className="mt-20 md:mt-8" />
            <p className="mt-8">Scan Trust Label with your phone and check how much CO2 is emitted by the production of this car.</p>
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
