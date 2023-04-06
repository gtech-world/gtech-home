import {HeaderLayout} from "@components/common/headerLayout";
import React, {HTMLAttributes, useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import {NEWS_CATE} from "@lib/const";
import classNames from "classnames";

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
      <div className={classNames('text-sm',className)} dangerouslySetInnerHTML={{__html: html.join(' / ')}}>
      </div>
  )
}

export default function Id() {
  const {query} = useRouter()
  let curName = ''
  for(let j=0; j<NEWS_CATE.length; j++){
    if(query.cate === NEWS_CATE[j].code){
      curName = NEWS_CATE[j].name
      break;
    }
  }
  const headerProps = {
    className: 'border-b border-black'
  }
  return(
    <HeaderLayout hiddenFooter={true} headerProps={headerProps}>
      <div className="w-container mx-auto">
        <header className="pb-8 border-b-2 border-gray-10">
          <Breadcrumb className="py-8" content={[{name:curName,href:`/news?cate=${query.cate}`},{name:'详情'}]} />
          <h1 className="text-4xl font-semibold">工业时代的数据信任问题探讨</h1>
          <time className="inline-block text-gray-1 pt-2.5">2023-03-01  17:08</time>
        </header>
      </div>
    </HeaderLayout>
  )
}