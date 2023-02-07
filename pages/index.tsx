import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";
import classNames from "classnames";
import {useRouter} from "next/router";

function Top(){
  return(
    <div className="w-full bg-[url(/images/home_banner.svg)] bg-no-repeat bg-center bg-cover flex flex-col items-center">
      <div className="flex flex-col items-center font-bold text-[4rem] leading-normal text-center md:text-[1.75rem]">
        <span className="text-green mt-64 md:mt-36">Trust, Transparency, Traceability.</span>
        <span className="">The Data-driven Future is Now.</span>
      </div>
      <div className="max-w-[34rem] px-3 text-lg text-center mt-[14.375rem] mb-5 md:text-sm md:mt-[8.375rem] md:mb-9">Learn more about GTech and how we solve complex challenges cross-industry with cutting-edge data technologies</div>
      <img alt="" className="md:hidden" src="images/home_head_arrow.svg"/>
    </div>
  )
}

function Technologies(){
  const data = [
    {
      title: 'Perserverance & Immutability',
      text: 'Our solution guarantees long-term data existence, validity and tamper-proofness based on Web3 technologies, which is crucial to many business use scenarios.',
      image: 'images/solution.svg'
    },
    {
      title: 'Programmable Data Privacy',
      text: 'Structured, customizble data access and visibility solution ensures great data privacy under different authorization level according to business demands.',
      image: 'images/eyes.svg'
    },
    {
      title: 'Industry-specific Traceability',
      text: 'GTech provides its customers from various industry sections with specified solutions to meet their special needs, i.e. a traceability framework for multi-tiered supply chain.',
      image: 'images/traceability.svg'
    },
  ]
  return(
    <div className="w-full bg-green flex flex-col items-center pt-16 pb-16 md:pt-8 md:pb-4">
      <h3 className="text-white text-center"><span className="text-yellow">'Greener'</span> Data Technologies</h3>
      <div className="text-white max-w-[59.75rem] px-3 text-center mt-5">GTech is a leading provider of cross-boundary, consolidated decentralized data solutions empowered by Web3.0 technologies. GTech’s ultimate mission is helping its customers to deliever more ‘trusted’ data to their users. </div>
      <ul className="w-container flex text-center justify-between mt-24 md:flex-col md:mt-16">
        {
          data.map((v,i)=>{
            return(
              <li key={`technologies${i}`} className="flex flex-col items-center pb-12">
                <img className="h-[8rem] md:h-[6.125rem]" src={v.image} alt=""/>
                <h5 className="text-yellow mt-7 mb-5 md:text-base">{v.title}</h5>
                <p className="w-[19.375rem] text-sm text-white">{v.text}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
function CrossSolutions(){
  const router = useRouter()
  const data = [
    {
      url: '/solutions/web3',
      layout: 'left',
      imgUrl: 'images/map.png',
      title: 'Web3-Featured Organizational Data Solutions',
      text: 'GTech provides organizational-level users with data management solutions with regard to key web3 features, i.e. decentralization, data immutability, transparency and counter-SPoF. Such solution cover from the sourcing and maintenance of the data content to the regular management, storage and retrieval of the data content.'

    },
    {
      url: '/solutions/governance',
      layout: 'right',
      imgUrl: 'images/governance_banner.svg',
      title: 'Data Governance & BI Solutions',
      text: 'Gtech’s Data Goverance & BI solutions focus on the developement of data strategy, the development of policies concerning the top-level design of information structures and taxonomies and the development of the data analytics system for corporates and regional industry alliances.'
    },
    {
      url: '/solutions/automotive',
      layout: 'left',
      imgUrl: 'images/automotive_banner.svg',
      title: 'Industry-specific BI & Data Solutions',
      text: 'Many industrial sections, despite producing widely different products or services, are facing similar data challenges such as data credibility, data traceability and data abuse. GTech shows professionalities and insights into customizing industry-specific BI & data management solutions to meet urgent demands from cross-industries. '
    }
  ]
  return(
    <div className="flex flex-col items-center pb-32 mt-16 md:mt-8 md:pb-12">
      <h3 className="">Cross-boundary Solutions</h3>
      <p className="text-center mt-5 max-w-[56.25rem]">
        Learn about how GTech helps enterprises, organizations and public sectors to manage complex challenges and risks in data processing, data storage, data traceability and data visibility within diverse scopes.
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
                  <Button onClick={()=>router.push(v.url)} className="mt-8" text="Learn More & View Use Case" />
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
    className: 'absolute'
  }
  return(
    <HeaderLayout headerProps={headerProps} className="relative">
      <Top />
      <Technologies />
      <CrossSolutions />
    </HeaderLayout>
  )
}
