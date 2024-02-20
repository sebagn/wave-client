'use client';
import {
    Box,
    Center,
    Container,
    Flex,
    Grid,
    Group,
    Stack,
    Text,
    Title,
    rem,
} from '@mantine/core';
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
        <Stack w={'100%'}>
            <div className={classes.container}>
                <Title order={1} className={classes.title1}>
                    INFORME 2 - ETAPA {etapa.numeroEtapa}
                </Title>
                <h3 className={classes.title}>
                    Nombre:{' '}
                    <span className={classes.text}>
                        {pac.nombre} {pac.apellido}
                    </span>
                </h3>
                <h3 className={classes.title}>
                    Edad: <span className={classes.text}>{pac.edad}</span>
                </h3>
                <h3 className={classes.title}>
                    Genero: <span className={classes.text}>{pac.genero}</span>
                </h3>
                <h3 className={classes.title}>
                    Alineadores Superior:{' '}
                    <span className={classes.text}>{etapa.alineadoresSup}</span>
                </h3>
                <h3 className={classes.title}>
                    Alineadores inferior:{' '}
                    <span className={classes.text}>{etapa.alineadoresInf}</span>
                </h3>
                <div className={classes.observaciones}>
                    <h3 className={classes.title}>
                        Observaciones:{' '}
                        <span className={classes.text}>
                            {etapa.observaciones}
                        </span>
                    </h3>
                </div>
            </div>
            <Box px={20}>
                <Group justify='space-evenly'>
                    <Stack>
                        <Title order={2} className={classes.title1}>
                            Attachments
                        </Title>
                        <Center className={classes.image}>
                            <Image
                                src={etapa.attaches[0]}
                                alt='Attaches'
                                width={600}
                                height={300}
                                style={{ objectFit: 'contain' }}
                            />
                        </Center>
                    </Stack>
                    <Stack>
                        <Title order={2} className={classes.title1}>
                            IPR
                        </Title>
                        <Flex
                            direction={'row'}
                            justify={'space-between'}
                            gap={10}
                            className={classes.image}
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
                </Group>
            </Box>
        </Stack>
    );
};
export default Paciente;
