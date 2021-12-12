"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const asesor_model_1 = require("./asesor.model");
const avion_model_1 = require("./avion.model");
let Pedido = class Pedido extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedido.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedido.prototype, "id_avion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedido.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedido.prototype, "total", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedido.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => asesor_model_1.Asesor),
    (0, tslib_1.__metadata)("design:type", String)
], Pedido.prototype, "asesorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => avion_model_1.Avion),
    (0, tslib_1.__metadata)("design:type", avion_model_1.Avion)
], Pedido.prototype, "avion", void 0);
Pedido = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.model.js.map