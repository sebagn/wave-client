'use client';
import { Badge, Button, Table } from '@mantine/core';
import Link from 'next/link';

interface PacientesTablaProps {
    pacientes: [
        {
            estado: string;
            _id: string;
            codigo: number;
            nombre: string;
            apellido: string;
            dni: number;
            etapas: [{ _id: string; numeroEtapa: number }];
            __v: number;
            createdAt: string;
            updatedAt: string;
        }
    ];
}

const PacientesTablaWrapper = ({ pacientes }: PacientesTablaProps) => {
    const rows = pacientes.map(
        (element) => (
            
            // Formatear mejor la fecha
            (element.updatedAt = new Date(
                element.updatedAt
            ).toDateString()),

            (
                <Table.Tr key={element.nombre}>
                    <Table.Td>
                        <Badge
                            color={
                                // refactorizar mejor 
                                element.estado === 'Esperando documentación'
                                    ? 'red'
                                    : element.estado === 'En planificación'
                                    ? 'blue'
                                    : element.estado === 'Finalizado'
                                    ? 'gray'
                                    : element.estado === 'En fabricación'
                                    ? 'green'
                                    : 'gray'
                            }
                        >
                            {element.estado}
                        </Badge>
                    </Table.Td>
                    <Table.Td>
                        {element.nombre} {element.apellido}
                    </Table.Td>
                    <Table.Td>{element.updatedAt}</Table.Td>
                    <Table.Td
                        style={{
                            display: 'flex',
                            gap: 10,
                        }}
                    >
                        <Link
                            href={`/dashboard/pacientes/${element._id}`}
                            passHref
                        >
                            <Button
                                radius='md'
                                size='sm'
                                gradient={{ from: 'blue', to: 'cyan', deg: 97 }}
                            >
                                Ver
                            </Button>
                        </Link>
                        {/* <Button variant='light' color='blue' radius='md' size='sm'>
                    Editar
                </Button>
                <Button variant='light' color='pink' radius='md' size='sm'>
                    Eliminar
                </Button> */}
                    </Table.Td>
                </Table.Tr>
            )
        )
    );
    return (
        <Table highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Estado</Table.Th>
                    <Table.Th>Nombre del Paciente</Table.Th>
                    <Table.Th>Ultima modificación</Table.Th>
                    <Table.Th>Acciones</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
};

export default PacientesTablaWrapper;
