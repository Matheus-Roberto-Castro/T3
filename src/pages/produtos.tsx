import React, { useState, ChangeEvent } from "react";
import { Produto } from "../types/types";
import { produtos } from "../data/produtosData";

interface ProdutosProps {
  tema: string;
}

export default function Produtos({ tema }: ProdutosProps) {
  const [produtosState, setProdutosState] = useState<Produto[]>(produtos);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [modalCadastroAberto, setModalCadastroAberto] = useState<boolean>(false);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState<boolean>(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState<boolean>(false);
  const [filtroGenero, setFiltroGenero] = useState<string>("Todos");

  function abrirModalDetalhes(produto: Produto) {
    setProdutoSelecionado(produto);
    setModalDetalhesAberto(true);
  }

  function fecharModalDetalhes() {
    setModalDetalhesAberto(false);
    setProdutoSelecionado(null);
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

  function filtrarProdutos() {
    if (filtroGenero === "Todos") return produtosState;
    return produtosState.filter((p) => p.genero === filtroGenero);
  }

  function handleFiltroGeneroChange(event: ChangeEvent<HTMLSelectElement>) {
    setFiltroGenero(event.target.value);
  }

  return (
    <div className="container">
      <h2 className="my-4">Lista de Produtos</h2>

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
        {filtrarProdutos().map((produto) => (
          <div
            key={produto.id}
            className="card shadow-sm"
            style={{ width: "18rem", cursor: "pointer" }}
            onClick={() => abrirModalDetalhes(produto)}
          >
            <img
              src={produto.imagem ?? ""}
              className="card-img-top img-fluid"
              style={{ objectFit: "cover", height: "200px" }}
              alt={produto.nome}
            />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">{produto.descricao}</p>
              <p className="fw-bold">
                R$ {produto.preco !== undefined ? produto.preco.toFixed(2) : "N/A"}
              </p>
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
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
        onClick={abrirModalCadastro}
        aria-label="Abrir cadastro de produto"
      >
        <i className="bi bi-plus-lg" style={{ fontSize: "1.75rem" }}></i>
      </button>

      {modalDetalhesAberto && produtoSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-detalhes-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="modal-detalhes-title" className="modal-title">
                  {produtoSelecionado.nome}
                </h5>
                <button
                  className="btn-close"
                  onClick={fecharModalDetalhes}
                  aria-label="Fechar detalhes"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={produtoSelecionado.imagem ?? ""}
                  alt={produtoSelecionado.nome}
                  className="img-fluid mb-3"
                />
                <p>{produtoSelecionado.descricao}</p>
                <p>
                  <strong>Preço:</strong>{" "}
                  {produtoSelecionado.preco !== undefined
                    ? `R$ ${produtoSelecionado.preco.toFixed(2)}`
                    : "N/A"}
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

      {modalEdicaoAberto && produtoSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-edicao-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="modal-edicao-title" className="modal-title">
                  Editar {produtoSelecionado.nome}
                </h5>
                <button
                  className="btn-close"
                  onClick={fecharModalEdicao}
                  aria-label="Fechar edição"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    className="form-control"
                    defaultValue={produtoSelecionado.nome}
                    placeholder="Nome do Produto"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    defaultValue={produtoSelecionado.descricao}
                    placeholder="Descrição"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="number"
                    defaultValue={produtoSelecionado.preco}
                    placeholder="Preço (R$)"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    defaultValue={produtoSelecionado.imagem}
                    placeholder="URL da Imagem (opcional)"
                  />
                </div>
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

      {modalCadastroAberto && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cadastro-title"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="modal-cadastro-title" className="modal-title">
                  Cadastrar Produto
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={fecharModalCadastro}
                  aria-label="Fechar cadastro"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input className="form-control" placeholder="Nome do Produto" />
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
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="URL da Imagem (opcional)"
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
