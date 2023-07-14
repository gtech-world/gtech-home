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
import { log } from "console";
// import {useNewsCate} from "@lib/hooks/useNewsCate";
import style from './index.module.css'

function Top() {
  return (
    <div className="h-[32.375rem] md:h-[24rem] w-full bg-[url(/images/news_banner.png)] bg-no-repeat bg-cover bg-left-bottom">
      <div className="max-w-[61.75rem] mx-auto flex flex-col items-center text-center mt-24 md:mt-12">
        <h3 className="text-5xl text-green md:text-[1.75rem]">资讯动态</h3>
        <p className="text-[2rem] leading-[2.75rem] mt-8 md:text-lg md:px-8">
          GTech是一家实时革新、日常精进的技术导向型公司。获取来自GTech以及我们所关注领域的最新资讯、业务进展以及技术信息分享。
        </p>
      </div>
    </div>
  );
}
function ArticleList(p: { data: any[]; cateId: number }) {
  const { cateId, data } = p;
  return (
    <div className="mt-16 w-container md:w-full md:mt-8 md:px-3">
      {!!data.length &&
        data.map((v, i) => {
          console.log(v.thumbUrl);
          return (
            <div
              key={`data${i}`}
              className="flex mb-12 md:items-center md:mb-5"
            >
              <div
                className={
                  "max-w-[25rem] w-full md:max-w-[7.375rem] h-[16.125rem] md:h-[4.875rem] rounded-lg overflow-hidden"
                }
              >
                <div className="w-[100rem] h-full">
                  <img className="w-auto h-full" src={v.thumbUrl} alt="" />
                </div>
              </div>

              <div className="flex flex-col justify-between ml-8 md:ml-2.5">
                <div className="">
                  <h4 className="text-2xl font-semibold md:text-base">
                    <Link
                      className="ellipsis-2"
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId}&id=${v.id}`}
                    >
                      {v.title}
                    </Link>
                  </h4>
                  <time className="inline-block py-2.5 md:py-0 md:pt-2  text-gray-2">
                    {moment(v.newsUpdateTime * 1000).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </time>
                  <p className="md:hidden">{v.digest}</p>
                </div>
                <div className="pb-1 md:hidden">
                  <Link
                    className="text-green"
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
  const [newsType, setNewsType] = useState<NewsTypesController.ListRecord[]>(
    []
  );
  const [pgNum, setPgNum] = useState(1);
  const [pgSize] = useState(10);
  const { value, loading }: any = useAsyncM(
    noArgs(
      async () =>
        Promise.all([
          getNewsList(tabs[selected - 1].name, pgNum, pgSize),
          getNewsCount(),
        ]),
      [pgNum, selected]
    ),
    [pgNum, selected]
  );

  const getNewsType = async () => {
    try {
      const res = await getNewsCount();
      const mergedData: any = {};

      res.forEach((item: NewsTypesController.ListRecord) => {
        const { typeGroup } = item;

        if (!mergedData[typeGroup]) {
          mergedData[typeGroup] = {
            id: item.id,
            typeGroup: item.typeGroup,
            children: [],
          };
        }
        const { id, typeName, createTime, updateTime } = item;
        mergedData[typeGroup].children.push({
          id,
          typeName,
          typeGroup,
          createTime,
          updateTime,
        });
      });
      const finalData = Object.values(mergedData);

      setNewsType(finalData as NewsTypesController.ListRecord[]);
    } catch (e) {
      console.log("reeee", e);
    }
  };

  useEffect(() => {
    getNewsType();
  }, []);

  console.log("valuevalue", newsType);

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
    className: isMobile() ? "" : "border-b border-black",
  };

  const countStrWidth = (text: string) => {
    const canvas = document.createElement("canvas");
    const context: any = canvas.getContext("2d");
    // 设置字体样式，当然，也可以在这里给一个默认值
    context.font = "16px Microsoft YaHei"; // 字体一定要写，不能只写一个字体大小，不启用
    const dimension = context.measureText(text);
    console.log("dimension.width", text, dimension.width);

    return dimension.width + 40;
  };

  return (
    <HeaderLayout headerProps={headerProps}>
      {/* flex mt-10 w-[75rem] md:w-[351px] mx-[155px] md:ml-[20px]  rounded-lg shadow-lg justify-between */}
      <div className="flex flex-wrap md:ml-5 md:mr-5">
        {newsType.map((e) => {
          return (
            <div
              key={`type_${e.id}`}
             
              className="w-[360px] h-[12.75rem] md:w-[10.625rem] rounded-lg shadow-lg  md:mr-[20px]"
            >
              <div className="shadow-lg  rounded-t-md md:w-[170px]  bg-green h-[4.25rem] flex items-center ">
                <div className=" ml-[1.875rem] text-white">{e.typeGroup}</div>
              </div>

              <div className='flex flex-row flex-wrap'>
                {e.children.map((item: NewsTypesController.ListRecord) => {
                  return (
                    <div
                      className=' bg-[#E9E9E9] min-w-[20px] h-[38px] flex items-center ml-5 mt-5 rounded-[0.25rem] shadow-lg px-[1rem]'
                    >
                      {item.typeName}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </HeaderLayout>
  );
}
