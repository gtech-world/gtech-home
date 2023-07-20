import { HeaderLayout } from "@components/common/headerLayout";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { isMobile } from "@lib/utils";
import { Pagination } from "@components/common/pagination";
import { getNewsCount, getNewsList, getNewsListCount } from "@lib/http";
import moment from "moment";
import { Loading } from "@components/common/loading";
import { useRouter } from "next/router";

const check: any = {
  true: "/images/checked_top.svg",
  false: "/images/checked_bottom.svg",
};

const tempList = [
  { url: "/images/subtract.svg", id: 1 },
  { url: "/images/frame.svg", id: 2 },
  { url: "/images/three.svg", id: 3 },
];

const ArticleList = (p: {
  data: any[];
  cateId: Record<string, any>;
  onCheck: () => void;
  checked: boolean;
  pgNum: number;
  windowWidth: number;
}) => {
  const { cateId, data, onCheck, checked } = p;

  
  
  return (
    <div
      className={`flex flex-wrap mb-20  md:w-[100%] mx-auto md:mx-0   rounded-lg   w-container md:mt-5`}
    >
      {!!data.length &&
        data.map((v, i) => {
          const name = v.newsTypes.map((e: { typeName: string }) => e.typeName);

          return (
            <Fragment key={`data${i}`}>

              {isMobile() && i === 0 && (
                <div
                  className=" text-[14px]   md:border-b
                  w-full  md: border-[#DDDDDD] 
                  "
                  onClick={() => onCheck()}
                >
                  发布时间
                  <button className=" ml-[10px] md:mb-[10px] mt-1">
                    <img
                      src={check[String(checked)]}
                      className="h-[10.89px] w-[7.82px]"
                      alt=""
                    />
                  </button>
                </div>
              )}

              {isMobile() ? null : (
                <div
                  className={` ${i === 0 ? "mt-5 " : ""
                    }w-full  h-[34px] mb-[32px] border-b  border-[#DDDDDD] 
                 mx-auto  md:w-full md:px-5 cursor-pointer
                 `}
                >
                  {data.length && i === 0 ? (
                    <Fragment>
                      <div
                        className=" text-[14px]   md:border-b
                  w-full  md:border-t md: border-[#DDDDDD] 
                  
                  "
                        onClick={() => onCheck()}
                      >
                        发布时间
                        <button className=" ml-[10px] md:mb-[10px] mt-1">
                          <img
                            src={check[String(checked)]}
                            className="h-[10.89px] w-[7.82px]"
                            alt=""
                          />
                        </button>
                      </div>
                    </Fragment>
                  ) : null}
                </div>
              )}
              <div className=" flex  md:mt-5   w-full sm:w-[100%] md:h-[4.875rem]">
                <div
                  className={
                    " w-[19.375rem] md:w-[7.375rem]  h-[12.5rem] md:h-[4.875rem] rounded-lg "
                  }
                >
                  <img
                    className="max-w-[19.375rem] h-[12.5rem] md:w-[7.375rem]  rounded-lg md:h-[4.875rem] "
                    src={v.thumbUrl}
                    alt=""
                  />
                </div>

                <div
                  className={`flex flex-col md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   h-[12.5rem] ml-[2rem] md:ml-[10px] md:w-[100%]    mx-auto  justify-between  md:h-[4.875rem] `}
                >
                  <div className="h-[9.4375rem]  md:w-[100%] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   ">
                    <Link
                      className="md:w-[100%] font-semibold text-[20px]  md:text-[16px] "
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId.id || cateId.cateId }&id=${v.id
                        }&name=${name.toString().replace(/\&/g,"%26")}&type=${v.author}&typeName=${cateId.typeName}`}
                    >
                      {v.title}
                    </Link>
                    <time className=" mt-[10px] md:mt-[6px] md:mb-[6px] mb-[5px] md:py-0 text-[14px] md:text-[12px] flex text-gray-2">
                      <div className="mr-5 ">{v.author}</div>
                      {moment(v.newsUpdateTime * 1000).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </time>
                    {!isMobile() && (
                      <p
                        style={{
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                        }}
                        className="  md:hidden  text-[14px]  line-clamp-2 overflow-hidden"
                      >
                        {v.digest}
                      </p>
                    )}
                    <div className="flex flex-row items-center  mt-[10px] md:h-[24px]">
                      {v?.newsTypes.map((e: any, i: number) => {
                        return (
                          <div
                            key={`name_${i}`}
                            className="mr-5    rounded-[0.25rem] md:text-[12px] px-[10px] text-[#29953A] text-[14px]  bg-[#29953A1A]"
                          >
                            {e.typeName}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" md:hidden h-[3.0625rem]  flex items-end">
                    <Link
                      className="text-green text-[14px] "
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId.id || cateId.cateId}&id=${v.id
                        }&name=${name.toString().replace(/\&/g,"%26")}&type=${v.author}&typeName=${cateId.typeName}`}
                    >
                      详情 &gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default function Index() {
  const { query, pathname } = useRouter();

  const { cateId, typeName = "数字碳知识库" } = query;
  const tableDataTotal = useRef(0);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [newsType, setNewsType] = useState<NewsTypesController.ListRecord[]>(
    []
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState<
    Partial<NewsTypesController.TypeList>
  >({});
  const [pgNum, setPgNum] = useState(1);
  const [pgSize] = useState(10);
  const router = useRouter();

  // const removeQueryParams = () => {
  //   const urlWithoutQueryParams = pathname.split("?")[0];
  //   router.replace(urlWithoutQueryParams);
  // };

  const getNewsType = async () => {
    setLoading(true);
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
      const finalData: NewsTypesController.ListRecords[] = Object.values(mergedData);
      setNewsType(finalData as NewsTypesController.ListRecord[]);
    } catch (e) {
      console.log("reeee", e);
    } finally {
      setLoading(false);
    }
  };

  const getListTotal = async () => {
    const res = await getNewsListCount(
      selected.id || Number(cateId),
      selected?.typeName || typeName
    );
    tableDataTotal.current = res;
  };

  useEffect(() => {
    getNewsType();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    getListTotal();
  }, [selected.id, cateId]);

  const getList = useCallback(async () => {
    const res = await getNewsList(selected?.id || Number(cateId),
     checked,
      pgNum,
      pgSize
    );
    setData(res || []);
  }, [pgNum, query.cateId, selected.id, checked]);

  useEffect(() => {
    getList();
  }, [getList, query, cateId]);


  const headerProps = {
    className: isMobile() ? "" : "border-b border-black",
  };

  const onCheck = () => {
    setChecked(!checked);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <HeaderLayout headerProps={headerProps}>
      <div className="mx-auto md:mx-3 ">
        <div
          id="content"
          className={` flex flex-wrap justify-between mx-auto md:w-full mt-10 rounded-lg  ${windowWidth > 900 && "w-container"
            } md:mt-5`}
        >
          {newsType.map((e, index) => {
            return (
              <div
                key={`type_${index}`}
                id="box-medium"
                className={`w-[22.5rem]  h-[12.75rem]  rounded-lg shadow
                 sm:w-[49%]
                
                ${index === 2
                    ? "md:w-full md:mt-5 md:h-[139px]  "
                    : " md:h-[140px] "
                  }`}
              >
                <div
                  className={`  rounded-t-md  bg-green h-[4.25rem]  flex items-center
                
               ${index === 2 ? "md:w-full md:h-[50px] " : "md:h-[50px]  "}
              `}
                >
                  <div
                    className={`flex  flex-row items-center justify-between w-full mr-[0.75rem] `}
                  >
                    <div className=" ml-[1.875rem] text-white  text-[1.25rem] md:text-[1.125rem]">
                      {e.typeGroup}
                    </div>
                    <div className="flex justify-end">
                      <img
                        className=" w-[3.6875rem] h-[3.0625rem] md:w-[2.1875rem] md:h-[1.8125rem]"
                        src={tempList[index].url}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row flex-wrap ">
                  {e.children.map(
                    (item: NewsTypesController.ListRecord, i: number) => {
                      return (
                        <div
                          key={`check_${i}`}
                          onClick={() => {
                            setSelected(item);
                            setChecked(false);
                            setPgNum(1);
                          }}
                          className={` ${(selected.id || Number(cateId)) === item.id
                              ? "text-[#29953A]  bg-[#29953A1A]"
                              : " bg-[#E9E9E9]"
                            } text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] 
                          h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]`}
                        >
                          {item.typeName}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="">
          <ArticleList
            onCheck={onCheck}
            cateId={
              JSON.stringify(selected) === "{}"
                ? { typeName, cateId }
                : selected
            }
            checked={checked}
            data={data}
            windowWidth={windowWidth}
            pgNum={pgNum}
          />
        </div>
        {data.length ? (
          <Pagination
            onChange={(v: any) => {
              setPgNum(v);
              scrollToTop();
            }}
            className="my-8"
            total={tableDataTotal.current}
            pgSize={10}
            pgNum={pgNum}
          />
        ) : null}

        {loading ? (
          <Loading className="pt-8" />
        ) : (
          !(data && data.length > 0) && (
            <div className="flex flex-col justify-center w-full py-20 text-center ">
              <div className="flex justify-center ">
                <img width={222} height="125" src="/images/noData.svg" alt="" />
              </div>
              <div>暂无数据</div>
            </div>
          )
        )}
      </div>
    </HeaderLayout>
  );
}
