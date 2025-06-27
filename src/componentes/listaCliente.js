import React, { useState } from "react";

export const clientes = [
  {
    id: 1,
    nome: "Ana Souza",
    genero: "Feminino",
    cpf: "111.111.111-11",
    telefone: "(11) 90000-0001",
    email: "ana.souza@email.com",
    consumoProdutos: [{ produtoId: 1, quantidade: 2 }],
    consumoServicos: [{ servicoId: 2, quantidade: 1 }]
  },
  {
    id: 2,
    nome: "Carlos Silva",
    genero: "Masculino",
    cpf: "222.222.222-22",
    telefone: "(11) 90000-0002",
    email: "carlos.silva@email.com",
    consumoProdutos: [{ produtoId: 3, quantidade: 1 }],
    consumoServicos: [{ servicoId: 1, quantidade: 2 }]
  },
  {
    id: 3,
    nome: "Mariana Lima",
    genero: "Feminino",
    cpf: "333.333.333-33",
    telefone: "(11) 90000-0003",
    email: "mariana.lima@email.com",
    consumoProdutos: [{ produtoId: 2, quantidade: 3 }],
    consumoServicos: [{ servicoId: 2, quantidade: 1 }]
  },
  {
    id: 4,
    nome: "Felipe Rocha",
    genero: "Masculino",
    cpf: "444.444.444-44",
    telefone: "(11) 90000-0004",
    email: "felipe.rocha@email.com",
    consumoProdutos: [],
    consumoServicos: [{ servicoId: 3, quantidade: 2 }]
  },
  {
    id: 5,
    nome: "Jéssica Mendes",
    genero: "Feminino",
    cpf: "555.555.555-55",
    telefone: "(11) 90000-0005",
    email: "jessica.mendes@email.com",
    consumoProdutos: [{ produtoId: 4, quantidade: 2 }],
    consumoServicos: []
  },
  {
    id: 6,
    nome: "Pedro Henrique",
    genero: "Masculino",
    cpf: "666.666.666-66",
    telefone: "(11) 90000-0006",
    email: "pedro.henrique@email.com",
    consumoProdutos: [],
    consumoServicos: []
  },
  {
    id: 7,
    nome: "Larissa Almeida",
    genero: "Feminino",
    cpf: "777.777.777-77",
    telefone: "(11) 90000-0007",
    email: "larissa.almeida@email.com",
    consumoProdutos: [{ produtoId: 2, quantidade: 2 }],
    consumoServicos: [{ servicoId: 2, quantidade: 1 }]
  },
  {
    id: 8,
    nome: "Rafael Costa",
    genero: "Masculino",
    cpf: "888.888.888-88",
    telefone: "(11) 90000-0008",
    email: "rafael.costa@email.com",
    consumoProdutos: [{ produtoId: 1, quantidade: 1 }],
    consumoServicos: [{ servicoId: 3, quantidade: 1 }]
  },
  {
    id: 9,
    nome: "Beatriz Carvalho",
    genero: "Feminino",
    cpf: "999.999.999-99",
    telefone: "(11) 90000-0009",
    email: "beatriz.carvalho@email.com",
    consumoProdutos: [],
    consumoServicos: []
  },
  {
    id: 10,
    nome: "Lucas Martins",
    genero: "Masculino",
    cpf: "000.000.000-00",
    telefone: "(11) 90000-0010",
    email: "lucas.martins@email.com",
    consumoProdutos: [{ produtoId: 4, quantidade: 2}],
    consumoServicos: []
  },
  {
    id: 11,
    nome: "Isabela Ribeiro",
    genero: "Feminino",
    cpf: "123.456.789-00",
    telefone: "(11) 90000-0011",
    email: "isabela.ribeiro@email.com",
    consumoProdutos: [],
    consumoServicos: [{ servicoId: 2, quantidade: 2 }]
  },
  {
    id: 12,
    nome: "Gustavo Freitas",
    genero: "Masculino",
    cpf: "321.654.987-00",
    telefone: "(11) 90000-0012",
    email: "gustavo.freitas@email.com",
    consumoProdutos: [{produtoId: 1, quantidade: 1}],
    consumoServicos: []
  },
  {
    id: 13,
    nome: "Camila Pires",
    genero: "Feminino",
    cpf: "456.789.123-00",
    telefone: "(11) 90000-0013",
    email: "camila.pires@email.com",
    consumoProdutos: [{ produtoId: 1, quantidade: 2 }],
    consumoServicos: [{ servicoId: 2, quantidade: 2 }]
  },
  {
    id: 14,
    nome: "Thiago Alves",
    genero: "Masculino",
    cpf: "654.321.987-00",
    telefone: "(11) 90000-0014",
    email: "thiago.alves@email.com",
    consumoProdutos: [],
    consumoServicos: [{ servicoId: 3, quantidade: 2 }]
  },
  {
    id: 15,
    nome: "Vanessa Moraes",
    genero: "Feminino",
    cpf: "789.123.456-00",
    telefone: "(11) 90000-0015",
    email: "vanessa.moraes@email.com",
    consumoProdutos: [{ produtoId: 2, quantidade: 2 }],
    consumoServicos: []
  },
  {
    id: 16,
    nome: "João Victor",
    genero: "Masculino",
    cpf: "987.654.321-00",
    telefone: "(11) 90000-0016",
    email: "joao.victor@email.com",
    consumoProdutos: [],
    consumoServicos: [{servicoId: 7, quantidade: 2}]
  },
  {
    id: 17,
    nome: "Luana Santos",
    genero: "Feminino",
    cpf: "147.258.369-00",
    telefone: "(11) 90000-0017",
    email: "luana.santos@email.com",
    consumoProdutos: [{produtoId: 1, quantidade: 2}],
    consumoServicos: []
  },
  {
    id: 18,
    nome: "Bruno Oliveira",
    genero: "Masculino",
    cpf: "369.258.147-00",
    telefone: "(11) 90000-0018",
    email: "bruno.oliveira@email.com",
    consumoProdutos: [{produtoId: 7, quantidade: 2}],
    consumoServicos: []
  },
  {
    id: 19,
    nome: "Patrícia Barros",
    genero: "Feminino",
    cpf: "741.852.963-00",
    telefone: "(11) 90000-0019",
    email: "patricia.barros@email.com",
    consumoProdutos: [{produtoId: 8, quantidade: 2}],
    consumoServicos: []
  },
  {
    id: 20,
    nome: "Eduardo Azevedo",
    genero: "Masculino",
    cpf: "963.852.741-00",
    telefone: "(11) 90000-0020",
    email: "eduardo.azevedo@email.com",
    consumoProdutos: [],
    consumoServicos: [{servicoId: 3, quantidade: 2}]
  },
  {
    id: 21,
    nome: "Larissa Neves",
    genero: "Feminino",
    cpf: "135.792.468-00",
    telefone: "(11) 90000-0021",
    email: "larissa.neves@email.com",
    consumoProdutos: [{produtoId: 10, quantidade: 2}],
    consumoServicos: []
  },
  {
    id: 22,
    nome: "Renan Duarte",
    genero: "Masculino",
    cpf: "246.813.579-00",
    telefone: "(11) 90000-0022",
    email: "renan.duarte@email.com",
    consumoProdutos: [],
    consumoServicos: [{servicoId: 8, quantidade: 1}]
  },
  {
    id: 23,
    nome: "Aline Fernandes",
    genero: "Feminino",
    cpf: "357.159.486-00",
    telefone: "(11) 90000-0023",
    email: "aline.fernandes@email.com",
    consumoProdutos: [],
    consumoServicos: [{servicoId: 6, quantidade: 2}]
  },
  {
    id: 24,
    nome: "Leonardo Prado",
    genero: "Masculino",
    cpf: "468.294.753-00",
    telefone: "(11) 90000-0024",
    email: "leonardo.prado@email.com",
    consumoProdutos: [{produtoId: 9, quantidade: 1}],
    consumoServicos: []
  },
  {
    id: 25,
    nome: "Tatiane Ramos",
    genero: "Feminino",
    cpf: "579.631.842-00",
    telefone: "(11) 90000-0025",
    email: "tatiane.ramos@email.com",
    consumoProdutos: [{produtoId: 5, quantidade: 2}],
    consumoServicos: []
  },
  {
    id: 26,
    nome: "Roberto Nunes",
    genero: "Masculino",
    cpf: "680.417.235-00",
    telefone: "(11) 90000-0026",
    email: "roberto.nunes@email.com",
    consumoProdutos: [],
    consumoServicos: [{servicoId: 1, quantidade: 2}]
  },
  {
    id: 27,
    nome: "Elaine Cardoso",
    genero: "Feminino",
    cpf: "791.548.326-00",
    telefone: "(11) 90000-0027",
    email: "elaine.cardoso@email.com",
    consumoProdutos: [{produtoId: 8, quantidade: 1},{produtoId: 10, quantidade: 1}],
    consumoServicos: []
  },
  {
    id: 28,
    nome: "Matheus Oliveira",
    genero: "Masculino",
    cpf: "802.653.417-00",
    telefone: "(11) 90000-0028",
    email: "matheus.oliveira@email.com",
    consumoProdutos: [],
    consumoServicos: []
  },
  {
    id: 29,
    nome: "Paula Teixeira",
    genero: "Feminino",
    cpf: "913.764.528-00",
    telefone: "(11) 90000-0029",
    email: "paula.teixeira@email.com",
    consumoProdutos: [{produtoId: 1, quantidade: 2}, {produtoId: 4, quantidade: 2}, {produtoId: 2, quantidade:2}],
    consumoServicos: [{servicoId: 2, quantidade: 3}]
  },
  {
    id: 30,
    nome: "Diego Gomes",
    genero: "Masculino",
    cpf: "024.875.639-00",
    telefone: "(11) 90000-0030",
    email: "diego.gomes@email.com",
    consumoProdutos: [{produtoId:3, quantidade: 1}],
    consumoServicos: []
  },
];

export default function ListaCliente({ tema }) {
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [clientesState, setClientesState] = useState(clientes);
  const [edicao, setEdicao] = useState(false);
  const [filtroGenero, setFiltroGenero] = useState("Todos");

  function abrirModal(cliente) {
    setClienteSelecionado(cliente);
  }

  function fecharModal() {
    setClienteSelecionado(null);
  }

  function abrirModalEdicao() {
    setEdicao(true);
  }

  function fecharModalEdicao() {
    setEdicao(false);
  }

  function filtrarClientes() {
    if (filtroGenero === "Todos") return clientesState;
    return clientesState.filter((c) => c.genero === filtroGenero);
  }

  function handleFiltroGeneroChange(event) {
    setFiltroGenero(event.target.value);
  }

  return (
    <div className="container">
      <div className="list-group">
        <div className="mb-3">
          <label className="form-label">Filtrar por gênero:</label>
          <select
            className="form-select form-select-sm w-25"
            value={filtroGenero}
            onChange={handleFiltroGeneroChange}
          >
            <option value="Todos">Todos</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        {filtrarClientes().map((cliente) => (
          <a
            href="#"
            key={cliente.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center shadow-sm rounded mb-2"
            style={{ backgroundColor: tema }}
            onClick={() => abrirModal(cliente)}
          >
            <div>
              <strong>{cliente.nome}</strong> <br />
              <small>
                CPF: {cliente.cpf} | Gênero: {cliente.genero}
              </small>
            </div>
            <i className="bi bi-chevron-right"></i>
          </a>
        ))}
      </div>

      {clienteSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{clienteSelecionado.nome}</h5>
                <button type="button" className="btn-close" onClick={fecharModal}></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>ID:</strong> {clienteSelecionado.id}
                </p>
                <p>
                  <strong>CPF:</strong> {clienteSelecionado.cpf}
                </p>
                <p>
                  <strong>Telefone:</strong> {clienteSelecionado.telefone}
                </p>
                <p>
                  <strong>Gênero:</strong> {clienteSelecionado.genero}
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={fecharModal}>
                  Excluir
                </button>
                <button className="btn btn-secondary" onClick={abrirModalEdicao}>
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {edicao && clienteSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar {clienteSelecionado.nome}</h5>
                <button className="btn-close" onClick={fecharModalEdicao}></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  defaultValue={clienteSelecionado.nome}
                  placeholder="Nome"
                />
                <input
                  className="form-control mb-2"
                  defaultValue={clienteSelecionado.cpf}
                  placeholder="CPF"
                />
                <input
                  className="form-control mb-2"
                  defaultValue={clienteSelecionado.telefone}
                  placeholder="Telefone"
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={fecharModalEdicao}>
                  Salvar
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={fecharModalEdicao}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
