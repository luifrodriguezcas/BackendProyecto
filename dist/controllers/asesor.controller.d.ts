import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Asesor, Credenciales } from '../models';
import { AsesorRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class AsesorController {
    asesorRepository: AsesorRepository;
    servicioAutenticacion: AutenticacionService;
    constructor(asesorRepository: AsesorRepository, servicioAutenticacion: AutenticacionService);
    identificarAsesor(credenciales: Credenciales): Promise<{
        datos: {
            nombre: string;
            correo: string;
            id: string | undefined;
        };
        tk: any;
    }>;
    create(asesor: Omit<Asesor, 'id'>): Promise<Asesor>;
    count(where?: Where<Asesor>): Promise<Count>;
    find(filter?: Filter<Asesor>): Promise<Asesor[]>;
    updateAll(asesor: Asesor, where?: Where<Asesor>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Asesor>): Promise<Asesor>;
    updateById(id: string, asesor: Asesor): Promise<void>;
    replaceById(id: string, asesor: Asesor): Promise<void>;
    deleteById(id: string): Promise<void>;
}
