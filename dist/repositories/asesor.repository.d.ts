import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Asesor, AsesorRelations, Pedido } from '../models';
import { PedidoRepository } from './pedido.repository';
export declare class AsesorRepository extends DefaultCrudRepository<Asesor, typeof Asesor.prototype.id, AsesorRelations> {
    protected pedidoRepositoryGetter: Getter<PedidoRepository>;
    readonly pedidos: HasManyRepositoryFactory<Pedido, typeof Asesor.prototype.id>;
    constructor(dataSource: MongodbDataSource, pedidoRepositoryGetter: Getter<PedidoRepository>);
}
