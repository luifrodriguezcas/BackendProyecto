import { Entity } from '@loopback/repository';
import { Avion } from './avion.model';
export declare class Pedido extends Entity {
    id?: string;
    id_avion: string;
    cantidad: number;
    total: number;
    estado: number;
    asesorId: string;
    avion: Avion;
    constructor(data?: Partial<Pedido>);
}
export interface PedidoRelations {
}
export declare type PedidoWithRelations = Pedido & PedidoRelations;
