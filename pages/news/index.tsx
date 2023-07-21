import { HeaderLayout } from "@components/common/headerLayout";
import React, {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useMemo,
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
import classNames from "classnames";
import { check, tempList } from "utils";



const ArticleList: FC<NewsTypesController.ArticleList> = ({ cateId, data, onCheck, checked, windowWidth }) => {

  return (
    <div
      className={`flex flex-wrap mb-[50px]  md:w-[100%] mx-auto md:mx-0   rounded-lg   w-container md:mt-5`}
    >
      {!!data.length &&
        data.map((v, i) => {
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
                  className={` ${
                    i === 0 ? "mt-5 " : ""
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
              <div className=" flex  md:mt-5    w-full sm:w-[100%] md:h-[4.75rem]" >
                <div
                  className={
                    " w-[19.375rem] md:w-[7.375rem]  h-[12.5rem] md:h-[4.75rem] rounded-lg "
                  }
                >
                  <img
                    className="max-w-[19.375rem] h-[12.5rem] md:w-[7.375rem]  rounded-lg md:h-[4.75rem] object-cover"
                    src={v.thumbUrl}
                    alt=""
                  />
                </div>

                <div
                  className={`flex flex-col md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   h-[12.5rem] ml-[2rem] md:ml-[10px] md:w-[100%]    mx-auto  justify-between  md:h-[4.75rem] `}
                >
                  <div className=" h-[9.4375rem]  md:w-[100%] md:overflow-hidden md:text-ellipsis md:whitespace-nowrap   ">
                    <Link
                      className=" md:w-[100%] font-semibold text-[20px]  md:text-[16px] "
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${cateId.id || cateId.cateId }&id=${v.id}&typeName=${
                        cateId.typeName?.replace(
                        /\&/g,
                        "%26"
                      )}`}
                    >
                      {v.title}
                    </Link>
                    <time className=" md:h-[18px] leading-[18px] mt-[10px] md:mt-[6px] md:mb-[6px] mb-[5px] md:py-0 text-[14px] md:text-[12px] flex text-gray-2">
                      <div className="mr-5 ">{v.author}</div>
                      {moment(v.newsUpdateTime * 1000).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </time>
                    {!isMobile() && (
                      <p
                        title={v.digest}
                        style={{
                          WebkitLineClamp: windowWidth > 1200 ? 2 : 1,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                        }}
                        className=" leading-[21px]   text-ellipsis md:hidden  text-[14px] line  line-clamp-1 overflow-hidden"
                      >
                        {v.digest}
                      </p>
                    )}
                    <div className={`flex flex-row items-center   mt-[10px] md:h-[24px]`}>
                      {v?.newsTypes.map((e: any, i: number) => {
                        return (
                          <div
                            key={`name_${i}`}
                            className="mr-5 font-OpenSans   rounded-[0.25rem] md:text-[12px] px-[10px] text-[#29953A] text-[14px]  bg-[#29953A1A]"
                          >
                            {e.typeName}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" md:hidden h-[3.0625rem]  flex items-end mb-[-5px]">
                    <Link
                      className="text-green text-[14px] "
                      rel="opener"
                      target={isMobile() ? "" : "_blank"}
                      href={`/news/detail?cateId=${
                        cateId.id || cateId.cateId
                      }&id=${v.id}&typeName=${cateId.typeName?.replace(
                        /\&/g,
                        "%26"
                      )}`}
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

type newsListRecord =  Pick<NewsTypesController.ListRecord, 'children' | 'id' | 'typeGroup'>;
export default function Index() {
  const { query } = useRouter();
  const { cateId, typeName = "数字碳知识库" } = query;
  const tableDataTotal = useRef<number>(0);
  const [checked, setChecked] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<NewsTypesController.NewsList[]>([]);
  const [newsType, setNewsType] = useState<newsListRecord[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState<Partial<NewsTypesController.TypeList>>({});
  const [pgNum, setPgNum] = useState<number>(1);
  const [pgSize] = useState<number>(10);
  const router = useRouter();

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
      const finalData: NewsTypesController.ListRecords[] =Object.values(mergedData);
      setNewsType(finalData);
    } catch (e) {
      console.log("reeee", e);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    setSelected({
      id: Number(router.query.cateId),
      typeName: decodeURIComponent(router.query.typeName as string),
    });
  }, [router.query.id, router.query.typeName]);

  const getListTotal = async () => {
    const res = await getNewsListCount(
      selected?.id,
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
    const res = await getNewsList(selected?.id, checked == 1, pgNum, pgSize);
    setData(res || []);
  }, [pgNum, selected.id, checked]);

  useEffect(() => {
    getList();
  }, [getList, query, cateId]);

  const headerProps = {
    className: isMobile() ? "" : "border-b border-black",
  };

  const onCheck = () => {
    setChecked(checked === 2 ? 1 : checked + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <HeaderLayout headerProps={headerProps}>
      <div className="mx-auto md:mx-3 ">
        <div
          id="content"
          className={
            "flex  flex-wrap justify-between mx-auto md:w-full mt-10 rounded-lg  w-container md:mt-5"
          }
        >
          {newsType.map((e, index) => {
            return (
              <div
                key={`type_${index}`}
                id="box-medium"
                className={classNames(
                  "w-[22.5rem]  h-[12.75rem] border-[#DDDDDD]  rounded-lg border sm:w-[49%]",
                  {
                    "md:w-full md:mt-5 md:h-[139px]  ": index === 2,
                    " md:h-[140px] ": index !== 2,
                  }
                )}
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
                    <div className="flex justify-end ">
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
                    (item, i: number) => {
                      return (
                        <div
                          key={`check_${i}`}
                          onClick={() => {
                            setSelected(item);
                            setPgNum(1);
                            setChecked(0);
                            router.push(
                              `/news?cateId=${item.id}&typeName=${item.typeName}`
                            );
                          }}

                          className={classNames(
                            "text-[1rem] md:text-[0.875rem] cursor-pointer  min-w-[1.25rem] h-[2.375rem] md:h-[27px] flex items-center ml-5 mt-5 md:mt-[12px] rounded-[0.25rem] px-[1rem]",
                            {
                              "text-[#29953A]  bg-[#29953A1A]": selected.id === item.id,
                              " bg-[#E9E9E9]": selected.id !== item.id,
                            }
                          )}
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
            windowWidth={windowWidth}
            onCheck={onCheck}
            cateId={selected}
            checked={checked}
            data={data}
            pgNum={pgNum}
          />
        </div>
        {data.length ? (
          <Pagination
            onChange={(v: any) => {
              setPgNum(v);
              scrollToTop();
            }}
            className="mb-10 mt-50 md:mt-0 "
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
