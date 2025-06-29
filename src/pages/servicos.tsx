import React, { useState, ChangeEvent } from "react";
import { servicos } from "../data/servicosData";
import { Servico } from "../types/types";

export default function Servicos({ tema }: { tema: string }) {
  const [servicosState, setServicosState] = useState<Servico[]>(servicos);
  const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
  const [filtroGenero, setFiltroGenero] = useState<string>("Todos");

  function abrirModalDetalhes(servico: Servico) {
    setServicoSelecionado(servico);
    setModalDetalhesAberto(true);
  }

  function fecharModalDetalhes() {
    setModalDetalhesAberto(false);
    setServicoSelecionado(null);
  }

  function abrirModalEdicao() {
    setModalEdicaoAberto(true);
    setModalDetalhesAberto(false);
  }

  function fecharModalEdicao() {
    setModalEdicaoAberto(false);
  }

  function abrirModalCadastro() {
    setModalCadastroAberto(true);
  }

  function fecharModalCadastro() {
    setModalCadastroAberto(false);
  }

  function filtrarServicos() {
    if (filtroGenero === "Todos") return servicosState;
    return servicosState.filter((p) => p.genero === filtroGenero);
  }

  function handleFiltroGeneroChange(event: ChangeEvent<HTMLSelectElement>) {
    setFiltroGenero(event.target.value);
  }

  return (
    <div className="container">
      <h2 className="my-4">Lista de Serviços</h2>

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
          <option value="Unissex">Unissex</option>
        </select>
      </div>

      <div className="d-flex flex-wrap gap-4">
        {filtrarServicos().map((servico) => (
          <div
            key={servico.id}
            className="card shadow-sm"
            style={{ width: "15rem", cursor: "pointer", fontSize: "0.9rem" }}
            onClick={() => abrirModalDetalhes(servico)}
          >
            <div className="card-body">
              <h6 className="card-title fw-semibold">{servico.nome}</h6>
              <p className="card-text" style={{ fontSize: "0.85rem" }}>
                {servico.descricao}
              </p>
              <p className="fw-bold">R$ {servico.preco.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn rounded-circle shadow"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: tema,
          color: "white",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
        onClick={abrirModalCadastro}
      >
        <i className="bi bi-plus-lg" style={{ fontSize: "1.75rem" }}></i>
      </button>

      {modalDetalhesAberto && servicoSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{servicoSelecionado.nome}</h5>
                <button className="btn-close" onClick={fecharModalDetalhes}></button>
              </div>
              <div className="modal-body">
                <p>{servicoSelecionado.descricao}</p>
                <p>
                  <strong>Preço:</strong> R$ {servicoSelecionado.preco.toFixed(2)}
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-danger" onClick={fecharModalDetalhes}>
                  Excluir
                </button>
                <button className="btn btn-secondary" onClick={abrirModalEdicao}>
                  Editar
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={fecharModalDetalhes}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalEdicaoAberto && servicoSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar {servicoSelecionado.nome}</h5>
                <button className="btn-close" onClick={fecharModalEdicao}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    className="form-control"
                    defaultValue={servicoSelecionado.nome}
                    placeholder="Nome do Serviço"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    defaultValue={servicoSelecionado.descricao}
                    placeholder="Descrição"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="number"
                    defaultValue={servicoSelecionado.preco}
                    placeholder="Preço (R$)"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={fecharModalEdicao}>
                  Salvar
                </button>
                <button className="btn btn-outline-secondary" onClick={fecharModalEdicao}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalCadastroAberto && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cadastrar Serviço</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={fecharModalCadastro}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input className="form-control" placeholder="Nome do Serviço" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" placeholder="Descrição"></textarea>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Preço (R$)"
                    type="number"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={fecharModalCadastro}>
                  Cadastrar
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={fecharModalCadastro}
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
