import { Entity } from '@loopback/repository';
import { Pedido } from './pedido.model';
export declare class Asesor extends Entity {
    id?: string;
    nombres: string;
    apellidos: string;
    correo: string;
    celular: string;
    clave: string;
    pedidos: Pedido[];
    constructor(data?: Partial<Asesor>);
}
export interface AsesorRelations {
}
export declare type AsesorWithRelations = Asesor & AsesorRelations;
