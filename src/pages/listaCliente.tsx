import React, { useState } from "react";
import { Cliente } from "../types/types";
import { clientes } from "../data/clientesData";

interface ListaClienteProps {
  tema: string;
}

export default function ListaCliente({ tema }: ListaClienteProps) {
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
  const [clientesState, setClientesState] = useState<Cliente[]>(clientes);
  const [edicao, setEdicao] = useState(false);
  const [filtroGenero, setFiltroGenero] = useState("Todos");

  function abrirModal(cliente: Cliente) {
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

  function filtrarClientes(): Cliente[] {
    if (filtroGenero === "Todos") return clientesState;
    return clientesState.filter((c) => c.genero === filtroGenero);
  }

  function handleFiltroGeneroChange(event: React.ChangeEvent<HTMLSelectElement>) {
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
                <p><strong>ID:</strong> {clienteSelecionado.id}</p>
                <p><strong>CPF:</strong> {clienteSelecionado.cpf}</p>
                <p><strong>Telefone:</strong> {clienteSelecionado.telefone}</p>
                <p><strong>Gênero:</strong> {clienteSelecionado.genero}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={fecharModal}>Excluir</button>
                <button className="btn btn-secondary" onClick={abrirModalEdicao}>Editar</button>
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
                <button className="btn btn-success" onClick={fecharModalEdicao}>Salvar</button>
                <button className="btn btn-outline-secondary" onClick={fecharModalEdicao}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
