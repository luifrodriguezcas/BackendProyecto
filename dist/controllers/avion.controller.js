"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvionController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AvionController = class AvionController {
    constructor(avionRepository) {
        this.avionRepository = avionRepository;
    }
    async create(avion) {
        return this.avionRepository.create(avion);
    }
    async count(where) {
        return this.avionRepository.count(where);
    }
    async find(filter) {
        return this.avionRepository.find(filter);
    }
    async updateAll(avion, where) {
        return this.avionRepository.updateAll(avion, where);
    }
    async findById(id, filter) {
        return this.avionRepository.findById(id, filter);
    }
    async updateById(id, avion) {
        await this.avionRepository.updateById(id, avion);
    }
    async replaceById(id, avion) {
        await this.avionRepository.replaceById(id, avion);
    }
    async deleteById(id) {
        await this.avionRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/aviones'),
    (0, rest_1.response)(200, {
        description: 'Avion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Avion) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Avion, {
                    title: 'NewAvion',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "create", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/aviones/count'),
    (0, rest_1.response)(200, {
        description: 'Avion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Avion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "count", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/aviones'),
    (0, rest_1.response)(200, {
        description: 'Array of Avion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Avion, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Avion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/aviones'),
    (0, rest_1.response)(200, {
        description: 'Avion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Avion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Avion)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Avion, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/aviones/{id}'),
    (0, rest_1.response)(200, {
        description: 'Avion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Avion, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Avion, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/aviones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Avion PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Avion, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Avion]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/aviones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Avion PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Avion]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.del)('/aviones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Avion DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AvionController.prototype, "deleteById", null);
AvionController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.AvionRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.AvionRepository])
], AvionController);
exports.AvionController = AvionController;
//# sourceMappingURL=avion.controller.js.map