"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorPedidoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AsesorPedidoController = class AsesorPedidoController {
    constructor(asesorRepository) {
        this.asesorRepository = asesorRepository;
    }
    async find(id, filter) {
        return this.asesorRepository.pedidos(id).find(filter);
    }
    async create(id, pedido) {
        return this.asesorRepository.pedidos(id).create(pedido);
    }
    async patch(id, pedido, where) {
        return this.asesorRepository.pedidos(id).patch(pedido, where);
    }
    async delete(id, where) {
        return this.asesorRepository.pedidos(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/asesors/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Array of Asesor has many Pedido',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Pedido) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorPedidoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/asesors/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Asesor model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, {
                    title: 'NewPedidoInAsesor',
                    exclude: ['id'],
                    optional: ['asesorId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorPedidoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/asesors/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Asesor.Pedido PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedido))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorPedidoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/asesors/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Asesor.Pedido DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedido))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AsesorPedidoController.prototype, "delete", null);
AsesorPedidoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AsesorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AsesorRepository])
], AsesorPedidoController);
exports.AsesorPedidoController = AsesorPedidoController;
//# sourceMappingURL=asesor-pedido.controller.js.map