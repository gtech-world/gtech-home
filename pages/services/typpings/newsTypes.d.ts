declare namespace NewsTypesController {
  interface ListRecord {
    id: number;
    typeName: string;
    createTime: string;
    typeGroup:string,
    updateTime: string;
    children:any
  }
  type ListRecords = {
    id:number,
    typeGroup:string,
    children:ListRecord[]
  }
  

  type TypeList = {
    createTime:string
    id:number
    typeGroup:string
    typeName:string
    updateTime:string
  }
}
