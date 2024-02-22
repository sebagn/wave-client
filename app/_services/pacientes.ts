'use server';

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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const createPaciente = async (formData: any) => {
    const pacienteData = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        dni: formData.dni,
        edad: formData.edad,
        sexo: formData.sexo,
    };

    try {
        const response = await fetch(urls.pacientes.all, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pacienteData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const updatePaciente = async (id: string, formData: any) => {
    const pacienteData = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        dni: formData.dni,
        edad: formData.edad,
        sexo: formData.sexo,
    };

    try {
        const response = await fetch(`${urls.pacientes.all}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pacienteData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
