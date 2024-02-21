export const stepperData = [
    {
        label: 'Datos de Paciente',
        component: <NuevoPacStep1 setEtapaId={setEtapaId} />,
    },
    {
        label: 'Fotografías',
        component: (
            <UploadFilesStep
                module='fotos'
                description='Carga las fotografías del paciente en formatos jpg, jpeg, png o pdf.'
                id={etapaId}
            />
        ),
    },
    {
        label: 'Radiografías',
        component: (
            <UploadFilesStep
                module='rx'
                description='Carga las radiografías del paciente y un estudio cefalométrico.'
                id={etapaId}
            />
        ),
    },
    {
        label: 'Escaneos',
        component: (
            <UploadFilesStep
                module='escaneos'
                description='Carga los archivos STL del escaneo del paciente.'
                id={etapaId}
            />
        ),
    },
];
