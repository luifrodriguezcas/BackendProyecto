import { Entity } from '@loopback/repository';
export declare class Avion extends Entity {
    id?: string;
    nombre: string;
    precio: number;
    imagen: string;
    pedidoId?: string;
    constructor(data?: Partial<Avion>);
}
export interface AvionRelations {
}
export declare type AvionWithRelations = Avion & AvionRelations;
