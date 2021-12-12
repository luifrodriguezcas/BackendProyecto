import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Avion } from '../models';
import { AvionRepository } from '../repositories';
export declare class AvionController {
    avionRepository: AvionRepository;
    constructor(avionRepository: AvionRepository);
    create(avion: Omit<Avion, 'id'>): Promise<Avion>;
    count(where?: Where<Avion>): Promise<Count>;
    find(filter?: Filter<Avion>): Promise<Avion[]>;
    updateAll(avion: Avion, where?: Where<Avion>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Avion>): Promise<Avion>;
    updateById(id: string, avion: Avion): Promise<void>;
    replaceById(id: string, avion: Avion): Promise<void>;
    deleteById(id: string): Promise<void>;
}
