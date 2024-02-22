import { Box, Button, Center, Flex, Group, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import GrupoFotos from '../GrupoFotos/GrupoFotos';
import classes from './Paciente.module.css';

interface PacienteProps {
    _id: string;
    nombre: string;
    apellido: string;
    dni: number;
    edad?: number;
    genero?: string;
    estado: string;
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
                    Alineadores superiores:{' '}
                    <span className={classes.text}>{etapa.alineadoresSup}</span>
                </h3>
                <h3 className={classes.title}>
                    Alineadores inferiores:{' '}
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
                    {etapa.attaches.length > 0 && (
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
                    )}
                    {etapa.ipr.length > 0 && (
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
                    )}
                    {etapa.fotos.length > 0 && (
                        <GrupoFotos etapa={etapa} modulo='Fotografías' />
                    )}
                    {etapa.rx.length > 0 && (
                        <GrupoFotos etapa={etapa} modulo='Radiografías' />
                    )}
                </Group>
            </Box>
              {pac.estado === 'Esperando documentación' && (
                <Center>
                    <Button
                        component={Link}
                        href={`/dashboard/pacientes/nuevo/${pac._id}/etapa/${etapa._id}`}
                        color='red'
                    >
                        Cargar mas documentación
                    </Button>
                </Center>
            )}
        </Stack>
    );
};
export default Paciente;
