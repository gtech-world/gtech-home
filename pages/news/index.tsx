import {HeaderLayout} from "@components/common/headerLayout";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import classNames from "classnames";
import {NEWS_CATE} from "@lib/const";
import {getCurNewsCate} from "@lib/utils";
import {useRouter} from "next/router";

function Top(){
  return(
    <div className="h-[34.375rem] w-full bg-[url(/images/news_banner.png)] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[61.75rem] mx-auto flex flex-col items-center text-center mt-20">
        <h3 className="text-5xl">资讯动态</h3>
        <p className="text-[2rem] leading-[2.75rem] mt-8">GTech是一家实时革新、日常精进的技术导向型公司。获取来自GTech以及我们所关注领域的最新资讯、业务进展以及技术信息分享。</p>
      </div>
    </div>
  )
}
function CateList(p:{data:any[],code:string}){
  const {code,data} = p
  return(
    <div className="w-container mt-16">
      {
        data.length && data.map((v,i)=>{
          return(
            <div className="flex mb-12">
              <div className="w-[55rem] h-[16.125rem] rounded-lg overflow-hidden">
                <img className="w-[25rem] h-[16.125rem]" src={"/images/home_banner.jpg"} alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-8">
                <div className="">

                  <h4 className="text-2xl font-bold">
                    <Link target="_blank" href={`/news/${1}?cate=${code}`}>
                      零知识证明101
                    </Link>
                  </h4>
                  <time className="inline-block py-2.5 text-gray-2">2023-03-01 17:08</time>
                  <p>零知识证明（Zero-knowledge Proof，简称ZKP）是一种密码学技术，它允许证明某个命题是正确的，而无需透露任何关于这个命题的实际信息。简单来说，零知识证明可以让你证明你拥有某些秘密信息，而无需透露这些信息的任何细节。</p>
                </div>

                <Link className="pb-1 text-green" target="_blank" href={`/news/${1}?cate=${code}`}>
                  详情 &gt;&gt;
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}


export default function Index() {
  const tabs = NEWS_CATE
  const {query} = useRouter()
  let tabId = tabs[0].id
  const [selected,setSelected] = useState(tabId)
  useEffect(()=>{
    if(query.cate){
      const cate = getCurNewsCate(query.cate)
      tabId = cate?.id || 0
    }
    setSelected(tabId)
  },[query])
  // const listData = {
  //   tect:
  //     [
  //       {
  //         title:'零知识证明101',
  //         time: '2023-01-01 11:11',
  //         desc: '零知识证明（Zero-knowledge Proof，简称ZKP）是一种密码学技术，它允许证明某个命题是正确的，而无需透露任何关于这个命题的实际信息。简单来说，零知识证明可以让你证明你拥有某些秘密信息，而无需透露这些信息的任何细节。'
  //       },
  //     ],
  //   tect1:
  //     [
  //       {
  //         title:'零知识证明101',
  //         time: '2023-01-01 11:11',
  //         desc: '零知识证明（Zero-knowledge Proof，简称ZKP）是一种密码学技术，它允许证明某个命题是正确的，而无需透露任何关于这个命题的实际信息。简单来说，零知识证明可以让你证明你拥有某些秘密信息，而无需透露这些信息的任何细节。'
  //       },
  //     ]
  // }
  const headerProps = {
    className: 'border-b border-black'
  }
  return(
    <HeaderLayout hiddenFooter={true} headerProps={headerProps}>
      <Top />
      <div className="pt-10 flex justify-center bg-bgc-1 flex-col items-center">
        <div className="bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] rounded-2xl h-[5.5rem] w-container flex justify-between items-center px-24 text-2xl">
          {
            tabs.map((v,i)=>{
              return(
                <div onClick={()=>setSelected(i)} className={classNames('cursor-pointer px-8',i===selected && 'news-active')}>
                  {
                    v.name
                  }
                </div>
              )
            })
          }
        </div>
        <CateList code={tabs[selected].code} data={[{},{},{}]} />
      </div>
    </HeaderLayout>
  )
}