"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const llaves_1 = require("../config/llaves");
const repositories_1 = require("../repositories");
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    /*
     * Add service methods here
     */
    GenerarClave() {
        let clave = generador(8, false);
        return clave;
    }
    CifrarClave(clave) {
        let claveCifrada = cryptoJS.MD5(clave).toString();
        return claveCifrada;
    }
    IdentificarAsesor(usuario, clave) {
        try {
            let p = this.asesorRepository.findOne({ where: { correo: usuario, clave: clave } });
            if (p) {
                return p;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    }
    GenerarTokenJWT(asesor) {
        let token = jwt.sign({
            data: {
                id: asesor.id,
                correo: asesor.correo,
                nombre: asesor.nombres + " " + asesor.apellidos
            }
        }, llaves_1.Llaves.claveJWT);
        return token;
    }
    ValidarTokenJWT(token) {
        try {
            let datos = jwt.verify(token, llaves_1.Llaves.claveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map