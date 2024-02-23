import React, { use, useEffect, useState } from 'react';
import PacientesTablaWrapper from './PacientesTablaWrapper';
import { getPacientes } from '@services/pacientes';

export default async function PacientesTabla() {
    const pacientes = await getPacientes();

    return <PacientesTablaWrapper pacientes={pacientes} />;
}
