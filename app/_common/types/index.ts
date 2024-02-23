export interface Paciente {
    _id: string;
    nombre: string;
    apellido: string;
    dni: string;
    edad: number;
    sexo: string;
    createdAt: string;
    updatedAt: string;
    etapas: Etapa[];
}

export interface Etapa {
    _id: string;
    diagnostico: string;
    planTratamiento: string;
    createdAt: string;
    updatedAt: string;
}
