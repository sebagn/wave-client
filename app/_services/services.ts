import { urls } from './urls';

export const getAll = async (tipo: string) => {
    try {
        const response = await fetch(urls[tipo].all);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
