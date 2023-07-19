declare namespace NewsTypesController {
  interface ListRecord {
    id: number;
    typeName: string;
    createTime: string;
    typeGroup:string,
    updateTime: string;
    children:ListRecord[]
  }
  type ListRecords = {
    id:number,
    typeGroup:string,
    children:ListRecord[]
  }
  

  interface TypeList  {
    createTime:string
    id?:number
    typeGroup:string
    typeName:string
    updateTime:string
  }

  type SearchQuery = {
    cateId?:string
  }

  type NewsList = {
    articleId:string;
    author:string
    createTime:string
    deleted:boolean
    digest:string
    hidden:string
    id:number
    newsItem?:string
    newsType:string
    newsTypes:TypeList[]
    newsUpdateTime:number
    thumbUrl:string
    title:string
    updateTime:string
}
}
