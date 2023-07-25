declare namespace NewsTypesController {
  interface ListRecord {
    id: number;
    typeName: string;
    createTime: string;
    typeGroup:string,
    updateTime: string;
    children:any
  }
  type ListRecord = {
    id:number,
    typeGroup:string,
    children:ListRecord[]
  }
  type ListParams = Pager & {
    statusList?: "pending" | "receiving"; //科室调拨状态
    code?: string; //订单编号
    sourceWarehouseId?: number; //供货仓库id
    targetWarehouseId?: number; //到货仓库id
    pageType?: "handle" | "query"; //query:入库查询；handle：入库处理
  };
}
