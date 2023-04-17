import {HeaderLayout} from "@components/common/headerLayout";
import React, {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import classNames from "classnames";
import {isMobile} from "@lib/utils";
import {useRouter} from "next/router";
import {Pagination} from "@components/common/pagination";
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getNewsCount, getNewsList, noArgs} from "@lib/http";
import moment from 'moment'
import {Loading} from "@components/common/loading";
// import {useNewsCate} from "@lib/hooks/useNewsCate";

function Top(){
  return(
    <div className="h-[34.375rem] md:h-[24rem] w-full bg-[url(/images/news_banner.png)] bg-no-repeat bg-cover bg-center">
      <div className="max-w-[61.75rem] mx-auto flex flex-col items-center text-center mt-20 md:mt-12">
        <h3 className="text-5xl text-green md:text-[1.75rem]">资讯动态</h3>
        <p className="text-[2rem] leading-[2.75rem] mt-8 md:text-lg md:px-8">GTech是一家实时革新、日常精进的技术导向型公司。获取来自GTech以及我们所关注领域的最新资讯、业务进展以及技术信息分享。</p>
      </div>
    </div>
  )
}
function ArticleList(p:{data:any[],cateId:number}){
  const {cateId,data} = p
  return(
    <div className="w-container mt-16 md:w-full md:mt-8 md:px-3">
      {
        !!data.length && data.map((v,i)=>{
          return(
            <div key={`data${i}`} className="flex mb-12 md:mb-5">
              <div className="max-w-[25rem] md:max-w-[6.25rem] h-[16.125rem] md:h-[4rem] rounded-lg overflow-hidden">
                <img className="w-full h-[16.125rem] md:h-[4rem]" src={v.thumbUrl} alt=""/>
              </div>
              <div className="flex flex-col justify-between ml-8 md:ml-2.5">
                <div className="">
                  <h4 className="text-2xl font-bold md:text-base">
                    <Link target={isMobile()?'':'_blank'} href={`/news/detail?cateId=${cateId}&id=${v.id}`}>
                      {v.title}
                    </Link>
                  </h4>
                  <time className="inline-block py-2.5 text-gray-2">{moment(v.newsUpdateTime*1000).format('YYYY-MM-DD HH:mm:ss')}</time>
                  <p className="md:hidden">{v.digest}</p>
                </div>
                <div className="pb-1 md:hidden">
                  <Link className="text-green" target={isMobile()?'':'_blank'} href={`/news/detail?cateId=${cateId}&id=${v.id}`}>
                    详情 &gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const tempList = [
  {name: '数据技术', id:1},
  {name: '行业动态',id:2},
  {name: '行业深度',id:3},
  {name: 'GTech资讯',id:4}
]
export default function Index() {
  const {query} = useRouter()
  const tabs = tempList
  let tabId = tabs[0].id
  const [selected,setSelected] = useState(tabId)
  const [pgNum,setPgNum] = useState(1)
  const [pgSize] = useState(10)
  const { value, loading }:any = useAsyncM(
    noArgs(async () =>Promise.all([getNewsList(tabs[selected-1].name,1,pgSize),getNewsCount(tabs[selected-1].name)])
      , [pgNum,selected]),
    [pgNum,selected]
  );
  const {total,data} = useMemo(()=>{
    if(!value || value.length !== 2) return {total: 0,data:[]}
    return {
      total: value[1] || 0,
      data: value[0]
    }
  },[value])
  useEffect(()=>{
    if(query.cateId){
      const cur = tabs[+query.cateId-1]
      tabId = cur?.id || 1
    }
    setSelected(tabId)
  },[query])
  const headerProps = {
    className: isMobile()?'':'border-b border-black'
  }
  return(
    <HeaderLayout hiddenFooter={true} headerProps={headerProps}>
      <Top />
      <div className="pt-10 pb-16 flex justify-center bg-bgc-1 flex-col items-center md:pt-6 md:px-3 md:pb-10">
        <div className="bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] rounded-2xl md:rounded-lg flex px-3 h-[5.5rem] md:h-[4.25rem] w-container text-2xl md:w-full md:text-base overflow-hidden">
          <div className="overflow-x-auto w-full h-full  flex justify-between items-center px-24 md:px-2">
            {
              tabs.map((v,i)=>{
                return(
                  <div key={`tabs${i}`} onClick={()=>setSelected(i+1)} className={classNames('cursor-pointer whitespace-nowrap px-8 md:px-1 md:mx-4',i===(selected-1) && 'news-active')}>
                    {
                      v.name
                    }
                  </div>
                )
              })
            }
          </div>

        </div>
        {
          loading?<Loading className="h-[22rem]" />:<ArticleList cateId={selected} data={data} />
        }
        <Pagination className="mt-5" total={total} pgSize={pgSize} pgNum={pgNum} onChange={(v:any)=>{setPgNum(v)}} />
      </div>
    </HeaderLayout>
  )
}