import { useState } from "react";
import BarraNavegacao from "./componentes/barraNavegacao";
import ListaCliente from "./pages/listaCliente";
import FormularioCadastroCliente from "./pages/formularioCadastroCliente";
import Produtos from "./pages/produtos";
import Servicos from "./pages/servicos";
import RegistrarConsumo from "./pages/registrarConsumo";
import Estatisticas from "./pages/estatisticas";
import Home from "./pages/home";
import { clientes } from "./data/clientesData";
import { produtos } from "./data/produtosData";
import { servicos } from "./data/servicosData";

export default function Roteador() {
    const [tela, setTela] = useState("Home");

    const selecionarView = (novaTela:string, evento:any) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
    };

    let barraNavegacao = (
        <BarraNavegacao
            seletorView={selecionarView}
            tema="purple"
            botoes={["Clientes", "Produtos", "Serviços"]}
        />
    );

    let componente;
    switch (tela) {
        case "Home":
            componente = <Home seletorView={selecionarView} />;
            break;
        case "Clientes":
            componente = <ListaCliente tema="lightgray" />;
            break;
        case "Cadastro":
            componente = <FormularioCadastroCliente tema="#e3f2fd" />;
            break;
        case "Produtos":
            componente = <Produtos tema="orange" />;
            break;
        case "Serviços":
            componente = <Servicos tema="orange" />;
            break;
        case "Registrar consumo":
            componente = (
                <RegistrarConsumo
                    tema=""
                    clientes={clientes}
                    servicos={servicos}
                    produtos={produtos}
                />
            );
            break;
        case "Estatisticas":
            componente = <Estatisticas />;
            break;
        default:
            componente = <Home seletorView={selecionarView} />;
    }

    return (
        <>
            {barraNavegacao}
            {componente}
        </>
    );
}
