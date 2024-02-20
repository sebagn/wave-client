import { env } from '../_config/env';

export const urls = {
    pacientes: {
        all: `${env.api.url}/pacientes`,
    },
    etapas: {
        all: `${env.api.url}/etapas`,
    },
    odontologos: {
        all: `${env.api.url}/odontologos`,
    },
};
