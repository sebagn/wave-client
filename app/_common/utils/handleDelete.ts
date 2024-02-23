'use server'
import { deleteEtapas } from "@services/etapas";
import { deletePaciente } from "@services/pacientes";

export const handleDelete = async (paciente: any) => {
    const id = paciente._id;
    const etapas = paciente?.etapas.map((etapa: any) => etapa._id) as string[];
    try {
        await deleteEtapas(etapas);
        const response = await deletePaciente(id);
        if (response) {
            console.log('Paciente eliminado');
        }
    } catch (error) {
        console.error(error);
    }
};