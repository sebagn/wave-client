import React from 'react';
import { Button, Container, Flex } from '@mantine/core';
import Link from 'next/link';
import PacientesTabla from './components/PacientesTabla.tsx/PacientesTabla';

const DashboardPage = () => {
    return (
        <Container
        m={10} w={'100%'}>
            <Flex
                justify='space-around'
                align='center'
                h={100}
            >
                <Button
                    component={Link}
                    href='/dashboard/pacientes/nuevo'
                    variant='light'
                    color='blue'
                    radius='md'
                    size='sm'
                >
                    Nuevo Paciente
                </Button>
                <Button
                    component={Link}
                    href='/dashboard'
                    variant='light'
                    color='blue'
                    radius='md'
                    size='sm'
                >
                    Historial de Pacientes
                </Button>
            </Flex>
            <PacientesTabla />
        </Container>
    );
};

export default DashboardPage;
