declare namespace NewsTypesController {
  interface ListRecord {
    id: number;
    typeName: string;
    [typeGroup: string]: string
    createTime: string;
    updateTime: string;
  }
  type ListParams = Pager & {
    statusList?: "pending" | "receiving"; //科室调拨状态
    code?: string; //订单编号
    sourceWarehouseId?: number; //供货仓库id
    targetWarehouseId?: number; //到货仓库id
    pageType?: "handle" | "query"; //query:入库查询；handle：入库处理
  };
}
