'use client';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Center, Checkbox, Group } from '@mantine/core';
import { bases } from './bases';
import { useState } from 'react';
import Swal from 'sweetalert2';

export function BasesModal() {
    const [opened, { open, close }] = useDisclosure(false);
    const [aceptado, setAceptado] = useState(false);

    return (
        <Center>
            <Modal
                opened={opened}
                onClose={close}
                title='Terminos y condiciones'
                size={'xl'}
            >
                {bases}
                <Group>
                    <Checkbox
                        label='Acepto los terminos y condiciones'
                        m={20}
                        checked={aceptado}
                        onChange={(event) =>
                            setAceptado(event.currentTarget.checked)
                        }
                    />
                    {aceptado && (
                        <Button
                            w={150}
                            onClick={() => {
                                setAceptado(false);
                                close();
                                Swal.fire({
                                    titleText: 'Aceptado!',
                                    text: 'Has aprobado el informe, tus alineadores comenzaran a fabricarse',
                                    icon: 'success',
                                    confirmButtonText: 'Aceptar'
                                  })                                
                            }}
                        >
                            Aceptar
                        </Button>
                    )}
                </Group>
            </Modal>

            <Button w={150} onClick={open}>
                Aprobar informe
            </Button>
        </Center>
    );
}
