import { Pedido, Asesor } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoAsesorController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getAsesor(id: typeof Pedido.prototype.id): Promise<Asesor>;
}
