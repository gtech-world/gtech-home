import { HeaderLayout } from "@components/common/headerLayout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { isMobile } from "@lib/utils";
import { useRouter } from "next/router";
import { Pagination } from "@components/common/pagination";
import { useAsyncM } from "@lib/hooks/useAsyncM";
import { getNewsCount, getNewsList, noArgs } from "@lib/http";
import moment from "moment";
import { Loading } from "@components/common/loading";
// import {useNewsCate} from "@lib/hooks/useNewsCate";

function Top() {
  return (
    <div classNameNameName="h-[32.375rem] md:h-[24rem] w-full bg-[url(/images/news_banner.png)] bg-no-repeat bg-cover bg-left-bottom">
      <div classNameNameName="max-w-[61.75rem] mx-auto flex flex-col items-center text-center mt-24 md:mt-12">
        <h3 classNameNameName="text-5xl text-green md:text-[1.75rem]">资讯动态</h3>
        <p classNameNameName="text-[2rem] leading-[2.75rem] mt-8 md:text-lg md:px-8">
          GTech是一家实时革新、日常精进的技术导向型公司。获取来自GTech以及我们所关注领域的最新资讯、业务进展以及技术信息分享。
        </p>
      </div>
    </div>
  );
}
function ArticleList(p: { data: any[]; cateId: number }) {
  const { cateId, data } = p;
  return (
    <div classNameNameName="mt-16 w-container md:w-full md:mt-8 md:px-3">
      {!!data.length &&
        data.map((v, i) => {
          console.log(v.thumbUrl);
          return (
            <div
              key={`data${i}`}
              classNameNameName="flex mb-12 md:items-center md:mb-5"
            >
              <div
                classNameNameName={classNameNameNames(
                  "max-w-[25rem] w-full md:max-w-[7.375rem] h-[16.125rem] md:h-[4.875rem] rounded-lg overflow-hidden"
                )}
              >
                <div classNameNameName="w-[100rem] h-full">
                  <img classNameNameName="w-auto h-full" src={v.thumbUrl} alt="" />
                </div>
              </div>

              <div classNameNameName="flex flex-col justify-between ml-8 md:ml-2.5">
                <div classNameNameName="">
                  <h4 classNameNameName="text-2xl font-semibold md:text-base">
                    <Link
                      classNameNameName="ellipsis-2"
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                    >
                      {v.title}
                    </Link>
                  </h4>
                  <time classNameNameName="inline-block py-2.5 md:py-0 md:pt-2  text-gray-2">
                    {moment(v.newsUpdateTime * 1000).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </time>
                  <p classNameNameName="md:hidden">{v.digest}</p>
                </div>
                <div classNameNameName="pb-1 md:hidden">
                  <Link
                    classNameNameName="text-green"
                    rel="opener"
                    target={isMobile() ? "" : "_blank"}
                    href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                  >
                    详情 &gt;&gt;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

const tempList = [
  { name: "数据技术", id: 1 },
  { name: "行业动态", id: 2 },
  { name: "行业深度", id: 3 },
  { name: "GTech资讯", id: 4 },
];
export default function Index() {
  const { query } = useRouter();
  const tabs = tempList;
  let tabId = tabs[0].id;
  const ref = useRef(null);
  const [selected, setSelected] = useState(tabId);
  const [pgNum, setPgNum] = useState(1);
  const [pgSize] = useState(10);
  const { value, loading }: any = useAsyncM(
    noArgs(
      async () =>
        Promise.all([
          getNewsList(tabs[selected - 1].name, pgNum, pgSize),
          getNewsCount(tabs[selected - 1].name),
        ]),
      [pgNum, selected]
    ),
    [pgNum, selected]
  );

  const { total, data } = useMemo(() => {
    if (!value || value.length !== 2) return { total: 0, data: [] };
    return {
      total: value[1] || 0,
      data: value[0],
    };
  }, [value]);
  useEffect(() => {
    if (query.cateId) {
      const cur = tabs[+query.cateId - 1];
      tabId = cur?.id || 1;
    }
    setSelected(tabId);
  }, [query]);
  useMemo(() => {
    if (isMobile() && ref?.current) {
      //@ts-ignore
      ref.current.scrollLeft = 30 * (selected - 1);
    }
    setPgNum(1);
    history.replaceState(null, "", `/news?cateId=${selected}`);
  }, [selected]);
  const headerProps = {
    classNameNameName: isMobile() ? "" : "border-b border-black",
  };
  return (
    <HeaderLayout headerProps={headerProps}>
     <div className="flex justify-center">
  <div className="w-1/2 p-4 bg-gray-200 md:w-1/3">
    我我我我
  </div>
  <div className="w-1/2 p-4 bg-gray-200 md:w-1/3">
    我我我我

  </div>
  <div className="w-1/3 p-4 bg-gray-200  md:block">
  我我我我

  </div>
</div>

      {/* <Top />
      <div classNameNameName="flex flex-col items-center justify-center pt-10 pb-7 bg-bgc-1 md:pt-6 md:px-3 md:pb-5">
        <div classNameNameName="bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] rounded-2xl md:rounded-lg flex px-3 h-[5.5rem] md:h-[4.25rem] w-container text-2xl md:w-full md:text-base overflow-hidden">
          <div ref={ref} classNameNameName="flex items-center justify-between w-full h-full px-24 overflow-x-auto md:px-2">
            {
              tabs.map((v,i)=>{
                return(
                  <div key={`tabs${i}`} onClick={()=>setSelected(i+1)} classNameNameName={classNameNameNames('cursor-pointer whitespace-nowrap px-8 md:px-1 md:mx-4',i===(selected-1) && 'news-active')}>
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
          loading?<Loading classNameNameName="h-[22rem]" />:<ArticleList cateId={selected} data={data} />
        }
        <Pagination classNameNameName="py-5" total={total} pgSize={pgSize} pgNum={pgNum} onChange={(v:any)=>{setPgNum(v)}} />
      </div> */}
    </HeaderLayout>
  );
}
