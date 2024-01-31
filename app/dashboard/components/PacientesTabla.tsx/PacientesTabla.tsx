'use client';
import { Badge, Button, Table } from '@mantine/core';

const elements = [
    { name: 'Juan Perez', status: 'Activo', lastDate: '12/12/2021' },
    { name: 'Maria Lopez', status: 'Activo', lastDate: '12/12/2021' },
    { name: 'Carlos Sanchez', status: 'En planificación', lastDate: '12/12/2021' },
    { name: 'Ana Rodriguez', status: 'En planificación', lastDate: '12/12/2021' },
    { name: 'Pedro Ramirez', status: 'Finalizado', lastDate: '12/12/2021' },
    { name: 'Josefa Perez', status: 'Activo', lastDate: '12/12/2021' },
    { name: 'Rosa Lopez', status: 'En fabricación', lastDate: '12/12/2021' },
    { name: 'Carlos Sanchez', status: 'Activo', lastDate: '12/12/2021' },
];

const PacientesTabla = () => {
    const rows = elements.map((element) => (
        <Table.Tr key={element.name}>
            <Table.Td>
                {' '}
                <Badge
                    color={
                        element.status === 'Activo'
                            ? 'teal'
                            : element.status === 'En planificación'
                            ? 'blue'
                            : element.status === 'Finalizado'
                            ? 'green'
                            : element.status === 'En fabricación'
                            ? 'pink'
                            : 'gray'
                    }
                    fullWidth
                >
                    {element.status}
                </Badge>
            </Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.lastDate}</Table.Td>
            <Table.Td
                style={{
                    display: 'flex',
                    gap: 10,
                }}
            >
                <Button variant='light' color='green' radius='md' size='sm'>
                    Ver
                </Button>
                <Button variant='light' color='blue' radius='md' size='sm'>
                    Editar
                </Button>
                <Button variant='light' color='pink' radius='md' size='sm'>
                    Eliminar
                </Button>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table 
        highlightOnHover
        >
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

export default PacientesTabla;
