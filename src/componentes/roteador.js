import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente, { clientes } from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Produtos from "./produtos";
import Servicos from "./servicos";
import RegistrarConsumo from "./registrarConsumo";
import Estatisticas from "./estatisticas";
import Home from "./home";
import { produtos } from "./produtos";
import { servicos } from "./servicos";

export default function Roteador() {
    const [tela, setTela] = useState("Home");

    const selecionarView = (novaTela, evento) => {
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
