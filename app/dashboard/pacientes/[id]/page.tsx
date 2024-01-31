interface PacientePageProps {
    params: {
        id: string;
    };
}

const PacientePage = (props: PacientePageProps) => {
    const { id } = props.params;
    return (
        <div>
            <h1>PacientePage</h1>
            <p>id: {id}</p>
        </div>
    );
};
export default PacientePage;
