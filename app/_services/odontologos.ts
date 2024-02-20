import { urls } from './urls';

export const getOdontologos = async () => {
    try {
        const response = await fetch(urls.pacientes.all);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

export const getOdontologoById = async (id: string) => {
    try {
        const response = await fetch(`${urls.pacientes.all}/${id}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
