export interface facturaInterface{
    id?:  number;
    tipoMenu?: string;
    Elementos?: string;
    totalPago?: number;
    tamanoPizza?:string;
    ingredientesExtra?: string;
    cantidad?: number;
    Tipo_factura?: string;
    lugar_pedido?:string;
    codigo_pedido?:string;
    codigo_entrega?:string;
    name_usuario?:string;
    correo?:string;
    pago?:string;
    fechaFactura?: Date;
}