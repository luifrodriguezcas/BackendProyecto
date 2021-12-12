import { Count, Filter, Where } from '@loopback/repository';
import { Pedido, Avion } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoAvionController {
    protected pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    get(id: string, filter?: Filter<Avion>): Promise<Avion>;
    create(id: typeof Pedido.prototype.id, avion: Omit<Avion, 'id'>): Promise<Avion>;
    patch(id: string, avion: Partial<Avion>, where?: Where<Avion>): Promise<Count>;
    delete(id: string, where?: Where<Avion>): Promise<Count>;
}
