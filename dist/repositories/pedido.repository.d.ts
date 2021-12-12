import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Pedido, PedidoRelations, Asesor, Avion } from '../models';
import { AsesorRepository } from './asesor.repository';
import { AvionRepository } from './avion.repository';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    protected asesorRepositoryGetter: Getter<AsesorRepository>;
    protected avionRepositoryGetter: Getter<AvionRepository>;
    readonly asesor: BelongsToAccessor<Asesor, typeof Pedido.prototype.id>;
    readonly avion: HasOneRepositoryFactory<Avion, typeof Pedido.prototype.id>;
    constructor(dataSource: MongodbDataSource, asesorRepositoryGetter: Getter<AsesorRepository>, avionRepositoryGetter: Getter<AvionRepository>);
}
