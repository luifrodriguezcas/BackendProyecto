import { Count, Filter, Where } from '@loopback/repository';
import { Asesor, Pedido } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AsesorPedidoController {
    protected asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    find(id: string, filter?: Filter<Pedido>): Promise<Pedido[]>;
    create(id: typeof Asesor.prototype.id, pedido: Omit<Pedido, 'id'>): Promise<Pedido>;
    patch(id: string, pedido: Partial<Pedido>, where?: Where<Pedido>): Promise<Count>;
    delete(id: string, where?: Where<Pedido>): Promise<Count>;
}
