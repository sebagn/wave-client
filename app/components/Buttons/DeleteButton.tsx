'use server';
import { Button } from '@mantine/core';

export const DeleteButton = ({ element, handleDelete }) => (
    <Button radius='xl' color='red' onClick={() => handleDelete(element._id)}>
        Borrar
    </Button>
);
