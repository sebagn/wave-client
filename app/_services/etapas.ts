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
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
