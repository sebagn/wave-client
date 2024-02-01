import Paciente from "./components/Paciente/Paciente";

interface PacientePageProps {
    params: {
        id: string;
    };
}

const PacientePage = (props: PacientePageProps) => {
    const { id } = props.params;
    return (
            <Paciente id={id} />
    );
};
export default PacientePage;
