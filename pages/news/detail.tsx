import {HeaderLayout} from "@components/common/headerLayout";
import React, {HTMLAttributes, useEffect, useMemo, useState} from "react";
import {useRouter} from "next/router";
import classNames from "classnames";
import {useAsyncM} from "@lib/hooks/useAsyncM";
import {getNewsDetail, noArgs} from "@lib/http";
import moment from "moment";
import {isMobile} from "@lib/utils";
import { IoIosArrowBack } from "react-icons/io";
import {useNewsCate} from "@lib/hooks/useNewsCate";
import {Loading} from "@components/common/loading";

function Breadcrumb(p:{content:object[]} & HTMLAttributes<HTMLDivElement>){
  const {content,className} = p
  const html:any = []
  content.map((v:any,i:number)=>{
    if(v.href){
      html.push(`<a href="${v.href}" rel="noreferrer">${v.name}</a>`)
    }else {
      html.push(`<span class="text-gray-1">${v.name}</span>`)
    }
  })
  return(
      <div className={classNames('text-sm font-medium',className)} dangerouslySetInnerHTML={{__html: html.join(' / ')}}>
      </div>
  )
}

export default function Detail() {
  const {query} = useRouter()
  const {id = 1, cateId,name = ''} = query
  const {push} = useRouter();
  const cateList = useNewsCate()
  const [isFinish,setIsFinish] = useState(false)
  const { value, loading }:any = useAsyncM(
    noArgs(async () =>getNewsDetail(id?id:1)
      , [id]),
    [id]
  );
  
 
  const article = useMemo(()=>{
    if(!value?.newsItem) return {content:'',title:'',time:''}
    setIsFinish(true)
    return{
      title: value.title,
      time: moment(value.newsUpdateTime*1000).format('YYYY-MM-DD HH:mm:ss'),
      content: JSON.parse(value?.newsItem).content
        .replace(/data-src/g,'src')
        .replace(/color:[\s\S]*?;/g,'')
        .replace(/font-size:\s*16\.?\d*pt;/g,`font-size: ${isMobile()?'1rem':'1.5rem'};`)
        .replace(/font-size:\s*(11|12(\.0)?)pt;/g,`font-size: ${isMobile()?'0.875rem':'1.125rem'};`)
        .replace(/(line|font)-(height|weight):\s+normal;/g,'')
        .replace(/width:\s*100%;/g,'')
        .replace(/height:\s*\d+\.?\d+px;/g,'')
        .replace(/margin-\w+:\s*0\.?\d*pt;/g,'')
        .replace(/<br\s*\/>/g,'')
        .replace(/&nbsp;/g,'')
        // .replace(/(<span\s+style="[\s\S]*?">)(?=(<br\s+\/>))<\/span>/g,'')
        // .replace(/font-family:\s*[\s\S]*?;/g,'')
      // .replace(/style="[\s\S]*?"/g,' ')
    }
  },[value])
  const headerProps = {
    className: isMobile()?'':'border-b border-black'
  }
  return(
    <HeaderLayout hiddenHeader={isMobile()} headerProps={headerProps}>
      <div className="h-[4rem] justify-center items-center hidden md:flex">
        <IoIosArrowBack onClick={()=>push(`/news?cateId=${cateId}`)} className="absolute text-xl left-2 text-green" />
        <h4 className="text-lg text-center text-green">资讯动态</h4>
      </div>
      <div className="mx-auto w-container md:w-full md:px-3 md:mt-2">
        <header className="pb-8 border-b border-gray-10 md:pb-5">
          <Breadcrumb className="py-8 md:hidden" content={[{name:name,href:`/news?cateId=${query.cateId}`},{name:'详情'}]} />
          <h1 className="text-4xl font-semibold md:text-lg">{article.title}</h1>
          <time className="inline-block text-gray-1 pt-2.5 md:text-sm">{article.time}</time>
        </header>
        {
          !isFinish?<Loading className="h-[40rem]" />:
            <div className="mt-9 article-content" dangerouslySetInnerHTML={{__html: article.content}}>
            </div>
        }

      </div>
    </HeaderLayout>

  )
}