'use client';
import {
    Badge,
    Button,
    Table,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
} from '@mantine/core';
import { handleDelete } from '_common/utils/handleDelete';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface PacientesTablaProps {
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

const handleColor = (estado: string) => {
    switch (estado) {
        case 'Esperando documentación':
            return 'orange';
        case 'En planificación':
            return 'teal';
        case 'Esperando aprobación':
            return 'pink';
        case 'En fabricación':
            return 'red';
        case 'Entregado':
            return 'green';
        default:
            return 'gray';
    }
};

const PacientesTablaWrapper = ({ pacientes }: PacientesTablaProps) => {
    const rows = pacientes
        ? pacientes.map(
              (element) => (
                  // Formatear mejor la fecha
                  (element.updatedAt = new Date(
                      element.updatedAt
                  ).toDateString()),
                  (
                      <TableTr key={element.nombre}>
                          <TableTd>
                              <Badge color={handleColor(element.estado)}>
                                  {element.estado}
                              </Badge>
                          </TableTd>
                          <TableTd>
                              {element.nombre} {element.apellido}
                          </TableTd>
                          <TableTd>{element.updatedAt}</TableTd>
                          <TableTd
                              style={{
                                  display: 'flex',
                                  gap: 10,
                              }}
                          >
                              <Button
                                  size='xs'
                                  component={Link}
                                  href={`/dashboard/pacientes/${element._id}`}
                                  radius='xl'
                              >
                                  Ver
                              </Button>
                              <Button
                                  color='red'
                                  radius='xl'
                                  size='xs'
                                  onClick={() => {
                                      handleDelete(element);
                                  }}
                              >
                                  Borrar
                              </Button>
                          </TableTd>
                      </TableTr>
                  )
              )
          )
        : [];
    return (
        <Table highlightOnHover>
            <TableThead>
                <TableTr>
                    <TableTh>Estado</TableTh>
                    <TableTh>Nombre del Paciente</TableTh>
                    <TableTh>Ultima modificación</TableTh>
                    <TableTh>Acciones</TableTh>
                </TableTr>
            </TableThead>
            <TableTbody>
                {pacientes ? rows : <p>No hay pacientes aún.</p>}
            </TableTbody>
        </Table>
    );
};

export default PacientesTablaWrapper;
