"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoAvionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoAvionController = class PedidoAvionController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async get(id, filter) {
        return this.pedidoRepository.avion(id).get(filter);
    }
    async create(id, avion) {
        return this.pedidoRepository.avion(id).create(avion);
    }
    async patch(id, avion, where) {
        return this.pedidoRepository.avion(id).patch(avion, where);
    }
    async delete(id, where) {
        return this.pedidoRepository.avion(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/{id}/avion', {
        responses: {
            '200': {
                description: 'Pedido has one Avion',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Avion),
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
], PedidoAvionController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pedidos/{id}/avion', {
        responses: {
            '200': {
                description: 'Pedido model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Avion) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Avion, {
                    title: 'NewAvionInPedido',
                    exclude: ['id'],
                    optional: ['pedidoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoAvionController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pedidos/{id}/avion', {
        responses: {
            '200': {
                description: 'Pedido.Avion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Avion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Avion))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoAvionController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pedidos/{id}/avion', {
        responses: {
            '200': {
                description: 'Pedido.Avion DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Avion))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoAvionController.prototype, "delete", null);
PedidoAvionController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoAvionController);
exports.PedidoAvionController = PedidoAvionController;
//# sourceMappingURL=pedido-avion.controller.js.map