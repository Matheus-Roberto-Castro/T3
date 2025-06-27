import CardFuncao from "./card";

const funcoes = [
    {
        titulo: "Registrar Consumo",
        descricao: "Registre produtos e serviços consumidos por um cliente.",
        icone: "bi bi-cart-fill",
        link: "Registrar consumo",
    },
    {
        titulo: "Cadastrar Cliente",
        descricao: "Adicione um novo pet para um cliente.",
        icone: "fas fa-user",
        link: "Cadastro",
    },
    {
        titulo: "Ver Estatísticas",
        descricao: "Veja os produtos e serviços mais consumidos.",
        icone: "bi bi-bar-chart-fill",
        link: "Estatisticas",
    },
];

export default function Home({ seletorView }) {
    return (
        <div
            className="container-fluid align-items-center justify-content-center d-flex flex-wrap"
            style={{ minHeight: "80vh" }}
        >
            {funcoes.map((f, index) => (
                <CardFuncao key={index} funcao={f} seletorView={seletorView} />
            ))}
        </div>
    );
}
