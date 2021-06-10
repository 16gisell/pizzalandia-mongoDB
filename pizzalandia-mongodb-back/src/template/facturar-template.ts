//solo para usar los elementos de mi base de datos en desarrollo
// if(process.env.NODE_ENV !=='production'){
//     require('dotenv').config();
// }
const nodemailer = require('nodemailer');
const data:any={};
class Server{
    
    enviaremail(Newfactura:any){
        let transporter = nodemailer.createTransport({
            service:process.env.SERVICE,
            Host: process.env.HOST,
            port: process.env.PORT, //587 o 465
            secure: true, 
            Authentication: true,
            auth:{
                type: "login",
                user: process.env.MAILUSER,
                pass: process.env.MAILPASSWD
            }
        });
    
        let mail_opcions ={
            from:'Factura Pizzalandia',
            to: `${process.env.MAILUSER}, ${Newfactura.correo}` , 
            subject:'Usted ha realizado un pedido en Pizzalandia',
            html:
            `
                <table border="1" cellpadding="0" cellspacing="0" width="100%">
                    <tr bgcolor="#ad5502"> 
                        <td>            
                            <h1 style="font-size: 45px; font-family: fantasy; color:white; text-shadow:2px 3px 4px #ca2372;" align="center"> Pizzalandia </h1> 
                        </td>                    
                    </tr>
                    <tr bgcolor="#ad5502" align="center"> 
                        <td>
                            <p >CC Giselandia, Miranda, Guaicaipuro Av. radio, calle 13, Despacho 5A</p>
                            <p >fecha: ${Newfactura.created_at}</p>
                            <p > TlF: 0212-0000000/ 0416-0000000</p>
                            <p >Correo: pizzaGiss@pizzasparati.com</p>
                            <p >n° Rif: J-000000030</p>                                   
                            <p >Codigo del pedido: <b style="color: #0e0e0e;"> ${Newfactura.codigo_pedido}</b> </p>            
                        </td>                    
                    </tr>
                    <tr>
                        <td bgcolor="white" style="padding: 40px 30px 40px 30px;">  
                            <p style="color: #0e0e0e;" align="center"> Descripción de la compra </p>
                            <p style="color: #0e0e0e;"> Tipo de compra: <b style="color: #0e0e0e;"> ${Newfactura.tipoMenu},</b></p>
                            <p style="color: #0e0e0e;"> Elementos del pedido: <b style="color: #0e0e0e;"> ${Newfactura.Elementos},</b></p>
                            <p style="color: #0e0e0e;"> Tipo de Factura: <b style="color: #0e0e0e;"> ${Newfactura.Tipo_factura},</b></p>
                            <p style="color: #0e0e0e;"> Pedido realizado desde: <b style="color: #0e0e0e;"> ${Newfactura.lugar_pedido}</b></p>
                            
                            <p style="color: #0e0e0e;" align="center"> Datos Agregados por el cliente </p>
                            <p style="color: #0e0e0e;"> Cantidad pedida: <b style="color: #0e0e0e;"> ${Newfactura.cantidad},</b></p>
                            <p style="color: #0e0e0e;"> Tamaño de Pizza: <b style="color: #0e0e0e;"> ${Newfactura.tamanoPizza},</b></p>
                            <p style="color: #0e0e0e;"> Ingredientes extras: <b style="color: #0e0e0e;"> ${Newfactura.ingredientesExtra},</b></p>

                            <p style="color: #0e0e0e;" align="center">  Datos del cliente </p>
                            <p style="color: #0e0e0e;"> Nombre del cliente: <b style="color: #0e0e0e;"> ${Newfactura.name_usuario},</b></p>
                            <p style="color: #0e0e0e;"> Correo: <b style="color: #0e0e0e;"> ${Newfactura.correo},</b></p>
                            <p style="color: #0e0e0e;"> Ingredientes extras: <b style="color: #0e0e0e;"> ${Newfactura.ingredientesExtra},</b></p>  
                            
                            <p style="color: #0e0e0e;" align="center"> Total de pago </p>
                            <p style="color: #0e0e0e;"> Total: <b style="color: #0e0e0e;"> ${Newfactura.totalPago} $</b></p>                            
                            <p align="center"> Esta factura consta como recibo por el cual usted ha solicitado el pedido, para retirar el pedido debera indicar el codigo de pedido <b style="color: #0e0e0e;"> (${Newfactura.codigo_pedido})</b> y posteriormente pagar lo solicitado en nuestra tienda</p>
                        </td>
                    </tr>
                </table>        
            `
        };
    
        transporter.sendMail(mail_opcions, (err:any, inf:any, res:any)=>{
            if(err){
                console.log(err);
            }else{
                console.log('Exito total', inf)
                console.log(res, "data")
            }
        });
    }

    
}
export  const server = new Server();
server.enviaremail(data);
