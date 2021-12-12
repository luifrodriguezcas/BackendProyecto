"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const llaves_1 = require("../config/llaves");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require('node-fetch');
let AsesorController = class AsesorController {
    constructor(asesorRepository, servicioAutenticacion) {
        this.asesorRepository = asesorRepository;
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async identificarAsesor(credenciales) {
        let p = await this.servicioAutenticacion.IdentificarAsesor(credenciales.usuario, credenciales.clave);
        if (p) {
            let token = this.servicioAutenticacion.GenerarTokenJWT(p);
            return {
                datos: {
                    nombre: p.nombres,
                    correo: p.correo,
                    id: p.id
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Datos Invalidos");
        }
    }
    async create(asesor) {
        let clave = this.servicioAutenticacion.GenerarClave();
        console.log("esta es la clave" + clave);
        let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
        asesor.clave = claveCifrada;
        let p = await this.asesorRepository.create(asesor);
        //notificar al usuario
        let destino = asesor.correo;
        let asunto = 'Registro en la Pagina Web';
        let mensaje = `Hola ${asesor.nombres}, su nombre de usuario es: ${asesor.correo} y su pass es: ${clave}`;
        fetch(`${llaves_1.Llaves.urlServicioNotificaciones}/enviomail?correo_destino=${destino}&asunto=${asunto}$mensaje=${mensaje}`)
            .then((data) => {
            console.log(data);
        });
        return p;
    }
    async count(where) {
        return this.asesorRepository.count(where);
    }
    async find(filter) {
        return this.asesorRepository.find(filter);
    }
    async updateAll(asesor, where) {
        return this.asesorRepository.updateAll(asesor, where);
    }
    async findById(id, filter) {
        return this.asesorRepository.findById(id, filter);
    }
    async updateById(id, asesor) {
        await this.asesorRepository.updateById(id, asesor);
    }
    async replaceById(id, asesor) {
        await this.asesorRepository.replaceById(id, asesor);
    }
    async deleteById(id) {
        await this.asesorRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)("/identificarAsesor", {
        responses: {
            '200': {
                description: "Identificacion de usuarios"
            }
        }
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "identificarAsesor", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/asesores'),
    (0, rest_1.response)(200, {
        description: 'Asesor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, {
                    title: 'NewAsesor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesores/count'),
    (0, rest_1.response)(200, {
        description: 'Asesor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Asesor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesores'),
    (0, rest_1.response)(200, {
        description: 'Array of Asesor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Asesor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesores'),
    (0, rest_1.response)(200, {
        description: 'Asesor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Asesor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Asesor, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesores/{id}'),
    (0, rest_1.response)(200, {
        description: 'Asesor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Asesor, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Asesor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Asesor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/asesores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Asesor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/asesores/{id}'),
    (0, rest_1.response)(204, {
        description: 'Asesor DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorController.prototype, "deleteById", null);
AsesorController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository,
        services_1.AutenticacionService])
], AsesorController);
exports.AsesorController = AsesorController;
//# sourceMappingURL=asesor.controller.js.map