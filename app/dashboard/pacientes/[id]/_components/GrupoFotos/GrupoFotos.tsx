import { Flex, Stack, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import classes from '../Paciente/Paciente.module.css';

export default function GrupoFotos({
    etapa,
    modulo,
}: {
    etapa: any;
    modulo: string;
}) {
    const data = modulo === 'Fotografías' ? etapa.fotos : etapa.rx;

    return (
        <Stack w={'100%'}>
            <Title order={2} className={classes.title1}>
                {modulo}
            </Title>
            <Flex
                direction={'row'}
                justify={'flex-start'}
                gap={25}
                wrap={'wrap'}
            >
                {data.map((imagen: any, index: number) => (
                    <Image
                        key={index}
                        src={imagen}
                        alt={`Foto ${index}`}
                        width={200}
                        height={200}
                        style={{ objectFit: 'contain' }}
                    />
                ))}
            </Flex>
        </Stack>
    );
}
