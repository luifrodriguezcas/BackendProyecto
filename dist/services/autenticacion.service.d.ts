import { Asesor } from '../models';
import { AsesorRepository } from '../repositories';
export declare class AutenticacionService {
    asesorRepository: AsesorRepository;
    constructor(asesorRepository: AsesorRepository);
    GenerarClave(): any;
    CifrarClave(clave: String): any;
    IdentificarAsesor(usuario: string, clave: string): false | Promise<(Asesor & import("../models").AsesorRelations) | null>;
    GenerarTokenJWT(asesor: Asesor): any;
    ValidarTokenJWT(token: string): any;
}
