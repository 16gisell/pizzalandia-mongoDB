"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverA = void 0;
//solo para usar los elementos de mi base de datos en desarrollo
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const nodemailer = require('nodemailer');
const data = {};
class ServerA {
    emailActualizado(Newfactura) {
        console.log(Newfactura, "data0");
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            // Host: 'smtp.gmail.com',
            // port: 465,
            // secure: true, 
            auth: {
                type: "login",
                user: process.env.MAILUSER,
                pass: process.env.MAILPASSWD
            }
        });
        let mail_opcions = {
            from: 'Factura Pizzalandia',
            to: `${process.env.MAILUSER}, ${Newfactura.correo}`,
            subject: 'Usted ha realizado un pago en Pizzalandia',
            html: `
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
                            <h1 style="font-size: 45px; font-family: fantasy; color:white; text-shadow:2px 3px 4px #ca2372;" align="center"> Pagado </h1>            
                        </td>                    
                    </tr>
                    <tr>
                        <td bgcolor="white" style="padding: 40px 30px 40px 30px;">                             
                            <p align="center">Muchas gracias por Preferirnos deseamos para usted un ¡Excelente Dia y Buen Provecho!</p>
                        </td>
                    </tr>
                </table>        
            `
        };
        transporter.sendMail(mail_opcions, (err, inf, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Exito total', inf);
                console.log(res, "data");
            }
        });
    }
}
exports.serverA = new ServerA();
exports.serverA.emailActualizado(data);
