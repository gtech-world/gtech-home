import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE } from "./env";
import { sleep } from "./utils";

function creatUrl(path: `/${string}`) {
  return `${API_BASE}${path}`;
}

export interface Res<T> {
  code: number;
  message: string;
  data: T;
}

function getData<T>(res: AxiosResponse<T>) {
  const mRes = res.data as { code: number; msg: string; data: T };
  if (!mRes) return undefined;
  if (mRes.code && mRes.code !== 200) throw mRes.msg;
  return res.data;
}

export function noArgs<T>(fn: () => Promise<T>, deeps: any[]) {
  return () => {
    if (deeps.some((item) => !item)) return sleep();
    return fn();
  };
}
export async function getNewsList(newsTypeId: number=1, pageNumber: number=1,pageSize:number=10) {
  const res = await axios.get(creatUrl(`/wechat/news?newsTypeId=${newsTypeId}&pageNumber=${pageNumber}&pageSize=${pageSize}`));
  return getData(res);
}
export async function getNewsCount (){
  const res = await axios.get(creatUrl(`/wechat/news/types`));
  return getData(res);
}
export async function getNewsDetail(id: any =1) {
  const res = await axios.get(creatUrl(`/wechat/news/detail/${id}`));
  return getData(res);
}