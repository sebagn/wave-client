import { urls } from './urls';

export const getPacientes = async () => {
    try {
        const response = await fetch(urls.pacientes.all);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export const getPatientById = async (id: string) => {
    try {
        const response = await fetch(`${urls.pacientes.all}/${id}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
