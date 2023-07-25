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
    <div classNameNameNameName="h-[32.375rem] md:h-[24rem] w-full bg-[url(/images/news_banner.png)] bg-no-repeat bg-cover bg-left-bottom">
      <div classNameNameNameName="max-w-[61.75rem] mx-auto flex flex-col items-center text-center mt-24 md:mt-12">
        <h3 classNameNameNameName="text-5xl text-green md:text-[1.75rem]">资讯动态</h3>
        <p classNameNameNameName="text-[2rem] leading-[2.75rem] mt-8 md:text-lg md:px-8">
          GTech是一家实时革新、日常精进的技术导向型公司。获取来自GTech以及我们所关注领域的最新资讯、业务进展以及技术信息分享。
        </p>
      </div>
    </div>
  );
}
function ArticleList(p: { data: any[]; cateId: number }) {
  const { cateId, data } = p;
  return (
    <div classNameNameNameName="mt-16 w-container md:w-full md:mt-8 md:px-3">
      {!!data.length &&
        data.map((v, i) => {
          console.log(v.thumbUrl);
          return (
            <div
              key={`data${i}`}
              classNameNameNameName="flex mb-12 md:items-center md:mb-5"
            >
              <div
                classNameNameNameName={classNameNameNameNames(
                  "max-w-[25rem] w-full md:max-w-[7.375rem] h-[16.125rem] md:h-[4.875rem] rounded-lg overflow-hidden"
                )}
              >
                <div classNameNameNameName="w-[100rem] h-full">
                  <img classNameNameNameName="w-auto h-full" src={v.thumbUrl} alt="" />
                </div>
              </div>

              <div classNameNameNameName="flex flex-col justify-between ml-8 md:ml-2.5">
                <div classNameNameNameName="">
                  <h4 classNameNameNameName="text-2xl font-semibold md:text-base">
                    <Link
                      classNameNameNameName="ellipsis-2"
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                    >
                      {v.title}
                    </Link>
                  </h4>
                  <time classNameNameNameName="inline-block py-2.5 md:py-0 md:pt-2  text-gray-2">
                    {moment(v.newsUpdateTime * 1000).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </time>
                  <p classNameNameNameName="md:hidden">{v.digest}</p>
                </div>
                <div classNameNameNameName="pb-1 md:hidden">
                  <Link
                    classNameNameNameName="text-green"
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
    classNameNameNameName: isMobile() ? "" : "border-b border-black",
  };
  return (
    <HeaderLayout headerProps={headerProps}>

    <div className="flex flex-wrap w-[67.5rem] md:w-[32.5rem] mx-40 md:mx-5 rounded-lg shadow-lg">
      <div className="w-[22.5rem] h-[12.75rem] md:w-[16.25rem] rounded-lg shadow-lg">
        <div className="shadow-lg rounded-t-md bg-green">数字双碳</div>
        dasda
      </div>
      <div className="w-[22.5rem] h-[12.75rem] md:w-[16.25rem] rounded-lg shadow-lg">box2</div>
      <div className="w-[22.5rem] h-[12.75rem] md:w-[15rem] rounded-lg shadow-lg">Box 3</div>
    </div>



      {/* <div className="flex flex-wrap justify-center ">
      <div className="w-full p-4 bg-gray-200 md:w-1/3">
          <div className="w-360 md:w-260 h-[3.75rem]  bg-green-1 shadow-lg  rounded-lg text-white">
            数字双碳
          </div>
        </div>
        <div className="w-full p-4 bg-gray-200 md:w-1/3">
          <div className="w-[22.5rem] h-[3.75rem]  bg-green-1 shadow-lg  rounded-lg text-white">
            数字双碳
          </div>
        </div>
         <div className="w-full p-4 bg-gray-200 md:w-1/3">
          <div className="w-[22.5rem] h-[3.75rem]  bg-green-1 shadow-lg  rounded-lg text-white">
            数字双碳
          </div>
        </div>
      </div> */}

      {/* <Top />
      <div classNameNameNameName="flex flex-col items-center justify-center pt-10 pb-7 bg-bgc-1 md:pt-6 md:px-3 md:pb-5">
        <div classNameNameNameName="bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.08)] rounded-2xl md:rounded-lg flex px-3 h-[5.5rem] md:h-[4.25rem] w-container text-2xl md:w-full md:text-base overflow-hidden">
          <div ref={ref} classNameNameNameName="flex items-center justify-between w-full h-full px-24 overflow-x-auto md:px-2">
            {
              tabs.map((v,i)=>{
                return(
                  <div key={`tabs${i}`} onClick={()=>setSelected(i+1)} classNameNameNameName={classNameNameNameNames('cursor-pointer whitespace-nowrap px-8 md:px-1 md:mx-4',i===(selected-1) && 'news-active')}>
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
          loading?<Loading classNameNameNameName="h-[22rem]" />:<ArticleList cateId={selected} data={data} />
        }
        <Pagination classNameNameNameName="py-5" total={total} pgSize={pgSize} pgNum={pgNum} onChange={(v:any)=>{setPgNum(v)}} />
      </div> */}
    </HeaderLayout>
  );
}
