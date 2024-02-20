'use client';
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

export default function NuevoPacienteLayout() {
    const [active, setActive] = useState(1);
    const [highestStepVisited, setHighestStepVisited] = useState(active);

    const handleStepChange = (nextStep: number) => {
        const isOutOfBounds = nextStep > 5 || nextStep < 0;

        if (isOutOfBounds) {
            return;
        }

        setActive(nextStep);
        setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
    };

    // Allow the user to freely go back and forth between visited steps.
    const shouldAllowSelectStep = (step: number) =>
        highestStepVisited >= step && active !== step;

    const stepperData = [
        {
            label: 'Datos de Paciente',
            description: 'Datos de Paciente',
            // component: <NuevoPacStep1 />,
        },
        {
            label: 'Fotografías',
            description: 'Fotografías',
            // component: <NuevoPacStep2 />,
        },
        {
            label: 'Radiografías',
            description: 'Radiografías',
            // component: <NuevoPacStep3 />,
        },
        {
            label: 'Escaneos',
            description: 'Escaneos',
            // component: <NuevoPacStep4 />,
        },
        {
            label: 'Final',
            description: 'Final',
            // component: <NuevoPacStep5 />,
        },
    ];

    return (
        <>
            <Stepper active={active} onStepClick={setActive}>
                {stepperData.map((step, index) => (
                    <Stepper.Step
                        key={index}
                        label={step.label}
                        description={step.description}
                        disabled={!shouldAllowSelectStep(index + 1)}
                    >
                        step.componente
                    </Stepper.Step>
                ))}
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group justify='center' mt='xl'>
              <Button
                variant='default'
                >
                  Guardar
                </Button>
              
                <Button
                    variant='default'
                    onClick={() => handleStepChange(active - 1)}
                >
                    Back
                </Button>
                <Button onClick={() => handleStepChange(active + 1)}>
                    Next step
                </Button>
            </Group>
        </>
    );
}
