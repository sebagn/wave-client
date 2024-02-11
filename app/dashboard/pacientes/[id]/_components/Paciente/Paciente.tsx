'use client';
import { Flex, Grid, Stack, Text, Title, rem } from '@mantine/core';
import Image from 'next/image';
import classes from './Paciente.module.css';

const pacienteData = {
    id: '123',
    nombre: 'Fulano',
    apellido: 'De Tal',
    edad: 30,
    genero: 'M',
    descripcion: {
        sup: 10,
        inf: 12,
    },
    attaches: 'https://placehold.co/600x400/jpg',
    ipr: {
        sup: 'https://placehold.co/600x400/jpg',
        inf: 'https://placehold.co/600x400/jpg',
    },
    observaciones:
        'Las observaciones son las siguientes Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati ut quis sapiente cupiditate recusandae, inventore voluptatum iusto repellat illum nihil dolorum at fugit dignissimos itaque illo numquam ipsa eius.',
    fecha: '12/12/2021',
    status: 'Activo',
};

const Paciente = ({ id }: { id: string }) => {
    const PRIMARY_COL_HEIGHT = rem(300);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
    return (
        <Flex justify={'flex-start'} w={'100%'}>
            <Grid w={'100%'}>
                <Grid.Col px={20} span={4}>
                    <h1 className={classes.title1}>INFORME 2</h1>
                    <h2 className={classes.title}>
                        Nombre:{' '}
                        <span className={classes.text}>
                            {pacienteData.nombre} {pacienteData.apellido}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Edad:{' '}
                        <span className={classes.text}>
                            {pacienteData.edad}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Genero:{' '}
                        <span className={classes.text}>
                            {pacienteData.genero}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Alineadores Superior:{' '}
                        <span className={classes.text}>
                            {pacienteData.descripcion.sup}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Alineadores inferior:{' '}
                        <span className={classes.text}>
                            {pacienteData.descripcion.inf}
                        </span>
                    </h2>
                    <h2 className={classes.title}>
                        Observaciones:{' '}
                        <span className={classes.text}>
                            {pacienteData.observaciones}
                        </span>
                    </h2>
                </Grid.Col>
                <Grid.Col px={20} span={8}>
                    <Stack align='center'>
                        <Title>Attachments</Title>
                        <Image
                            src={pacienteData.attaches}
                            alt='Attaches'
                            width={600}
                            height={400}
                        />
                        <Title>IPR</Title>
                        <Flex
                            direction={'row'}
                            justify={'space-between'}
                            gap={10}
                        >
                            <Image
                                src={pacienteData.ipr.sup}
                                alt='IPR Superior'
                                width={300}
                                height={200}
                            />
                            <Image
                                src={pacienteData.ipr.inf}
                                alt='IPR Inferior'
                                width={300}
                                height={200}
                            />
                        </Flex>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Flex>
    );
};
export default Paciente;
