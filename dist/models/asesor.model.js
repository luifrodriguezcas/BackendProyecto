"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asesor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const pedido_model_1 = require("./pedido.model");
let Asesor = class Asesor extends repository_1.Entity {
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
], Asesor.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "celular", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Asesor.prototype, "clave", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => pedido_model_1.Pedido),
    (0, tslib_1.__metadata)("design:type", Array)
], Asesor.prototype, "pedidos", void 0);
Asesor = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Asesor);
exports.Asesor = Asesor;
//# sourceMappingURL=asesor.model.js.map