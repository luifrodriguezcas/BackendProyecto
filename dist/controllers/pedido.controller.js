"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoController = class PedidoController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async create(pedido) {
        return this.pedidoRepository.create(pedido);
    }
    // @authenticate.skip()
    async count(where) {
        return this.pedidoRepository.count(where);
    }
    async find(filter) {
        return this.pedidoRepository.find(filter);
    }
    async updateAll(pedido, where) {
        return this.pedidoRepository.updateAll(pedido, where);
    }
    async findById(id, filter) {
        return this.pedidoRepository.findById(id, filter);
    }
    async updateById(id, pedido) {
        await this.pedidoRepository.updateById(id, pedido);
    }
    async replaceById(id, pedido) {
        await this.pedidoRepository.replaceById(id, pedido);
    }
    async deleteById(id) {
        await this.pedidoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Pedido model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, {
                    title: 'NewPedido',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/count'),
    (0, rest_1.response)(200, {
        description: 'Pedido model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Pedido)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Array of Pedido model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Pedido)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Pedido PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Pedido)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Pedido, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pedido model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Pedido, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedido PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Pedido]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedido PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Pedido]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedido DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "deleteById", null);
PedidoController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map