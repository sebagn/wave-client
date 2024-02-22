'use server';
import { urls } from './urls';

export const getEtapas = async () => {
    try {
        const response = await fetch(urls.pacientes.all);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export const getEtapaById = async (id: string) => {
    try {
        const response = await fetch(`${urls.etapas.all}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const createEtapa = async (formData: any) => {
    const etapaData = {
        numeroEtapa: formData.numeroEtapa || 1,
        diagnostico: formData.diagnostico,
        planTratamiento: formData.planTratamiento,
    };

    try {
        const response = await fetch(urls.etapas.all, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(etapaData),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const addEtapa = async (idEtapa: string, idPaciente: string) => {
    const etapaData = {
        etapasId: [idEtapa],
    };
    try {
        const response = await fetch(
            `${urls.pacientes.all}/${idPaciente}/etapas/`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(etapaData),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const addFiles = async (
    formData: FormData,
    idEtapa: string,
    module: string
) => {
    console.log(formData.get('file'));

    try {
        const response = await fetch(
            `${urls.etapas.all}/${idEtapa}/${module}`,
            {
                method: 'PUT',
                body: formData,
            }
        );
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
