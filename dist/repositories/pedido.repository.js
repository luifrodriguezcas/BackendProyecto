"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PedidoRepository = class PedidoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, asesorRepositoryGetter, avionRepositoryGetter) {
        super(models_1.Pedido, dataSource);
        this.asesorRepositoryGetter = asesorRepositoryGetter;
        this.avionRepositoryGetter = avionRepositoryGetter;
        this.avion = this.createHasOneRepositoryFactoryFor('avion', avionRepositoryGetter);
        this.registerInclusionResolver('avion', this.avion.inclusionResolver);
        this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter);
        this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    }
};
PedidoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('AsesorRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AvionRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function, Function])
], PedidoRepository);
exports.PedidoRepository = PedidoRepository;
//# sourceMappingURL=pedido.repository.js.map