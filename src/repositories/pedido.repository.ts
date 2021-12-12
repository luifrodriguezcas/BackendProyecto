import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Pedido, PedidoRelations, Asesor, Avion} from '../models';
import {AsesorRepository} from './asesor.repository';
import {AvionRepository} from './avion.repository';

export class PedidoRepository extends DefaultCrudRepository<
  Pedido,
  typeof Pedido.prototype.id,
  PedidoRelations
> {

  public readonly asesor: BelongsToAccessor<Asesor, typeof Pedido.prototype.id>;

  public readonly avion: HasOneRepositoryFactory<Avion, typeof Pedido.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>, @repository.getter('AvionRepository') protected avionRepositoryGetter: Getter<AvionRepository>,
  ) {
    super(Pedido, dataSource);
    this.avion = this.createHasOneRepositoryFactoryFor('avion', avionRepositoryGetter);
    this.registerInclusionResolver('avion', this.avion.inclusionResolver);
    this.asesor = this.createBelongsToAccessorFor('asesor', asesorRepositoryGetter,);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
  }
}
