'use client';
import { Box, Flex, Grid, Stack, Text, Title, rem } from '@mantine/core';
import Image from 'next/image';
import classes from './Paciente.module.css';

interface PacienteProps {
    codigo: number;
    nombre: string;
    apellido: string;
    dni: number;
    edad?: number;
    genero?: string;
    etapas: EtapaProps[];
}
interface EtapaProps {
    _id: string;
    numeroEtapa: number;
    diagnostico: string;
    planTratamiento: string;
    ipr: string[];
    fotos: string[];
    rx: string[];
    escaneos: string[];
    attaches: string[];
    observaciones: string;
    alineadoresSup: number;
    alineadoresInf: number;
}

const Paciente = ({
    pac,
    etapa,
}: {
    pac: PacienteProps;
    etapa: EtapaProps;
}) => {
    return (
        <Flex justify={'flex-start'} w={'100%'}>
            <Grid w={'100%'}>
                <Grid.Col px={20} span={4}>
                    <h1 className={classes.title1}>INFORME 2</h1>
                    <h2 className={classes.title}>
                        Nombre:{' '}
                        <span className={classes.text}>
                            {pac.nombre} {pac.apellido}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Edad: <span className={classes.text}>{pac.edad}</span>
                    </h2>
                    <h2 className={classes.title}>
                        Genero:{' '}
                        <span className={classes.text}>{pac.genero}</span>
                    </h2>
                    <h2 className={classes.title}>
                        Alineadores Superior:{' '}
                        <span className={classes.text}>
                            {etapa.alineadoresSup}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Alineadores inferior:{' '}
                        <span className={classes.text}>
                            {etapa.alineadoresInf}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Observaciones:{' '}
                        <span className={classes.text}>
                            {etapa.observaciones}
                        </span>
                    </h2>
                </Grid.Col>
                <Grid.Col px={20} span={8}>
                    <Stack align='center'>
                        <Title>Attachments</Title>
                        <Box
                            className={classes.image}
                            style={{ width: '50%', height: '50%' }}
                        >
                            <Image
                                src={etapa.attaches[0]}
                                alt='Attaches'
                                width={600}
                                height={300}
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                        <Title>IPR</Title>
                        <Flex
                            direction={'row'}
                            justify={'space-between'}
                            gap={10}
                        >
                            <Image
                                src={etapa.ipr[0]}
                                alt='IPR Superior'
                                width={300}
                                height={300}
                                style={{ objectFit: 'contain' }}
                            />
                            <Image
                                src={etapa.ipr[1]}
                                alt='IPR Inferior'
                                width={300}
                                height={300}
                                style={{ objectFit: 'contain' }}
                            />
                        </Flex>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};
export default Paciente;
