"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("../models/Usuario"));
class UserController {
    //listar una consulta de la base de datos
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listUser = yield Usuario_1.default.find();
            res.json(listUser);
        });
    }
    //listar por individual 
    usuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield Usuario_1.default.findById(req.params.id);
            res.json(user);
            res.status(404).json({ text: "no existe" });
        });
    }
    //inserta en la base de datos.
    crearUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, password, apellido } = req.body;
            const userEmail = yield Usuario_1.default.findOne({ nombre: nombre });
            if (userEmail) {
                res.status(404).send({ error: "Este nombre ya existe" });
            }
            else {
                const NewUsuario = new Usuario_1.default({ nombre, password, apellido });
                // userEmail.password = await userEmail.encryptPassword(password)
                yield NewUsuario.save();
                res.send({ message: "Registrado Usuario nuevo" });
            }
            // res.json({message: 'guardado el usuario'});
        });
    }
    //actualizamos el jueg
    actualizarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Usuario_1.default.findByIdAndUpdate(req.params.id, req.body);
            res.json({ text: 'actualizando usuario' });
        });
    }
    //eliminamos elementos o datos de la base de datos    
    eliminarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Usuario_1.default.findByIdAndDelete(req.params.id);
            res.json({ text: 'eliminando el usuario' });
        });
    }
    //logiare usuario
    logiar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, nombre } = req.body;
            console.log(req.body);
            const userEmail = yield Usuario_1.default.findOne({ nombre: nombre });
            res.send(userEmail);
            res.status(404).send({ error: "La contraseña no es corrrecta" });
        });
    }
}
const userController = new UserController();
exports.default = userController;
