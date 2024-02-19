import { urls } from './urls';

export const getEtapaById = async (id: string) => {
    try {
        const response = await fetch(`${urls.etapas.all}/${id}`);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
