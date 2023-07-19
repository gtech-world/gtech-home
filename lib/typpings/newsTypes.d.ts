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
}
