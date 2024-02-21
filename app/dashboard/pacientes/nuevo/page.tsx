'use client';
import { ReactNode, useState } from 'react';
import { Stepper, Button, Group, Stack, Center } from '@mantine/core';
import NuevoPacStep1 from './_components/NuevoPacForm/NuevoPacStep1';
import UploadFilesStep from './_components/UploadFilesStep/UploadFilesStep';

export default function NuevoPacientePage() {
    const [active, setActive] = useState(0);
    const [etapaId, setEtapaId] = useState('');

    const handleStepChange = (nextStep: number) => {
        const isOutOfBounds = nextStep > 4 || nextStep < 0;
        if (isOutOfBounds) {
            return;
        }
        setActive(nextStep);
    };

    const stepperData = [
        {
            label: 'Datos de Paciente',
            component: <NuevoPacStep1 setEtapaId={setEtapaId} />,
        },
        {
            label: 'Fotografías',
            component: (
                <UploadFilesStep
                    module='fotos'
                    description='Carga las fotografías del paciente en formatos jpg, jpeg, png o pdf.'
                    id={etapaId}
                />
            ),
        },
        {
            label: 'Radiografías',
            component: (
                <UploadFilesStep
                    module='rx'
                    description='Carga las radiografías del paciente y un estudio cefalométrico.'
                    id={etapaId}
                />
            ),
        },
        {
            label: 'Escaneos',
            component: (
                <UploadFilesStep
                    module='escaneos'
                    description='Carga los archivos STL del escaneo del paciente.'
                    id={etapaId}
                />
            ),
        },
    ];

    return (
        <>
            <Stepper active={active} onStepClick={setActive}>
                {stepperData.map((step, index) => (
                    <Stepper.Step key={index} label={step.label}>
                        {step.component}
                    </Stepper.Step>
                ))}
                <Stepper.Completed>
                    <Center>Gracias por completar el formulario</Center>
                </Stepper.Completed>
            </Stepper>
            <Group justify='center' mt='xl'>
                <Button
                    variant='default'
                    onClick={() => handleStepChange(active - 1)}
                >
                    Atras
                </Button>
                <Button onClick={() => handleStepChange(active + 1)}>
                    Siguiente
                </Button>
            </Group>
        </>
    );
}
