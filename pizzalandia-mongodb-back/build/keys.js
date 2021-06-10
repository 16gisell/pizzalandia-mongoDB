"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodb = void 0;
// export default{
//     database:{
//         host: 'localhost', //ubicacion de la base de dato
//         user: 'root', //usuario con que te conectas a la base de datos
//         password: '',
//         database: 'pizzalandia', //nombre de la base de dato que has creado
//     }
// }
exports.mongodb = {
    "URI": process.env.MONGODB_URI
};
