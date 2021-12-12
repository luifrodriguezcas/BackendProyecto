import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Avion, AvionRelations } from '../models';
export declare class AvionRepository extends DefaultCrudRepository<Avion, typeof Avion.prototype.id, AvionRelations> {
    constructor(dataSource: MongodbDataSource);
}
