import { getEtapaById } from '../../../_services/etapas';
import { getPatientById } from '../../../_services/pacientes';
import Paciente from './_components/Paciente/Paciente';

interface PacientePageProps {
    params: {
        id: string;
    };
}

const PacientePage = async (props: PacientePageProps) => {
    const { id } = props.params;

    const pacienteData = await getPatientById(id);

    if (pacienteData.etapas.length === 0) {
        return <div>El paciente no tiene etapas.</div>;
    }

    const etapasLen = pacienteData.etapas.length;
    const etapaData = await getEtapaById(
        pacienteData.etapas[etapasLen - 1]._id
    );

    return <Paciente pac={pacienteData} etapa={etapaData} />;
};
export default PacientePage;
