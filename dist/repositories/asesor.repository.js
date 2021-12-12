"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsesorRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AsesorRepository = class AsesorRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, pedidoRepositoryGetter) {
        super(models_1.Asesor, dataSource);
        this.pedidoRepositoryGetter = pedidoRepositoryGetter;
        this.pedidos = this.createHasManyRepositoryFactoryFor('pedidos', pedidoRepositoryGetter);
        this.registerInclusionResolver('pedidos', this.pedidos.inclusionResolver);
    }
};
AsesorRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('PedidoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], AsesorRepository);
exports.AsesorRepository = AsesorRepository;
//# sourceMappingURL=asesor.repository.js.map