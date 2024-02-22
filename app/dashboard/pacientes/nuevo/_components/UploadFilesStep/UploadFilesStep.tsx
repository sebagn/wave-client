import { Button, Container, FileInput, Flex, Stack } from '@mantine/core';
import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { addFiles } from '@services/etapas';
import { useForm } from '@mantine/form';

interface UploadFilesProps {
    module: string;
    description: string;
    id: string;
}

interface FormValues {
    files: File[];
}

export default function UploadFiles({
    module,
    description,
    id,
}: UploadFilesProps) {
    const [preview, setPreview] = useState<string[]>([]);
    const form = useForm<FormValues>({
        initialValues: {
            files: [],
        },
    });

    useEffect(() => {
        return () => {
            setPreview([]);
        };
    }, [module]);

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        form.values.files.forEach(async (file) => {
            const formData = new FormData();
            formData.append('file', file);
            const response = await addFiles(formData, id, module);
            if (response) {
                console.log('success');
            }
        });
        form.reset()
    };

    return (
        <Stack w={'100%'} align='center'>
            <h2>{description}</h2>
            <form onSubmit={handleOnSubmit}>
                <FileInput
                    w={300}
                    mb={10}
                    accept='image/jpg, image/jpeg, image/png, file/pdf'
                    label={`Cargar ${module}`}
                    placeholder='jpg, jpeg, png, pdf'
                    multiple
                    onChange={(files) => {
                        const urls = Array.from(files).map((file) =>
                            URL.createObjectURL(file)
                        );
                        setPreview([...preview, ...urls]);
                        form.setFieldValue('files', [...files]);
                    }}
                />

                <Flex
                    justify='center'
                    align='center'
                    maw={'100%'}
                    wrap={'wrap'}
                >
                    {preview.map((_, index) => (
                        <Container
                            h={200}
                            w={200}
                            m={10}
                            key={index}
                            pos={'relative'}
                        >
                            <Image
                                style={{
                                    margin: 10,
                                    borderRadius: 10,
                                    objectFit: 'contain',
                                }}
                                key={index}
                                src={preview[index]}
                                alt={`foto_${index}`}
                                fill
                            />
                        </Container>
                    ))}
                </Flex>
                <Button type='submit' color='blue' w={150} mt={10}>
                    Guardar
                </Button>
            </form>
        </Stack>
    );
}
