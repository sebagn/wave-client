import {
    TextInput,
    Button,
    Textarea,
    Center,
    Select,
    SimpleGrid,
    NumberInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './NuevoPacStep1.module.css';
import { createPaciente } from '../../../../../_services/pacientes';
import { addEtapa, createEtapa } from '../../../../../_services/etapas';

export default function NuevoPacStep1({setEtapaId}) {
    const form = useForm({
        initialValues: {
            nombre: '',
            apellido: '',
            dni: '',
            edad: '',
            sexo: '',
            diagnostico: '',
            planTratamiento: '',
        },

        validate: {},
    });

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const paciente = await createPaciente(form.values);

        let etapa;
        if (!!paciente) {
            etapa = await createEtapa(form.values);
        }

        if (!!etapa) {
            await addEtapa(etapa._id, paciente._id);
        }
        setEtapaId(etapa._id);

        console.log('success', paciente, etapa);
    };

    return (
        <Center mx='auto'>
            <form className={classes.form} onSubmit={handleOnSubmit}>
                <SimpleGrid cols={2}>
                    <TextInput
                        withAsterisk
                        label='Nombre'
                        placeholder='Nombre del paciente'
                        {...form.getInputProps('nombre')}
                        maw={500}
                    />
                    <TextInput
                        withAsterisk
                        label='Apellido'
                        placeholder='Apellido del paciente'
                        {...form.getInputProps('apellido')}
                        maw={500}
                    />
                    <NumberInput
                        withAsterisk
                        label='DNI'
                        placeholder='DNI del paciente'
                        {...form.getInputProps('dni')}
                        maw={500}
                    />
                    <NumberInput
                        withAsterisk
                        label='Edad'
                        placeholder='Edad del paciente'
                        {...form.getInputProps('edad')}
                        maw={500}
                    />
                    <Select
                        withAsterisk
                        label='Sexo'
                        placeholder='Sexo del paciente'
                        data={['Masculino', 'Femenino']}
                        {...form.getInputProps('sexo')}
                        maw={500}
                    />
                </SimpleGrid>
                <Textarea
                    withAsterisk
                    label='Diagnóstico'
                    placeholder='Diagnóstico del paciente'
                    {...form.getInputProps('diagnostico')}
                    maw={1075}
                    rows={4}
                />
                <Textarea
                    withAsterisk
                    label='Plan de Tratamiento'
                    placeholder='Plan de Tratamiento del paciente'
                    {...form.getInputProps('planTratamiento')}
                    maw={1075}
                    rows={4}
                />
                <Button type='submit' color='blue' size='md' w={150}>
                    Guardar
                </Button>
            </form>
        </Center>
    );
}
