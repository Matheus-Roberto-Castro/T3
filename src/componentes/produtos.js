import { useState } from "react";

export const produtos = [
  {
    id: 1,
    nome: "Shampoo Fortalecedor",
    descricao: "Shampoo para fortalecimento dos fios, ideal para uso diário.",
    preco: 29.9,
    genero: "Unissex",
    imagem:
      "https://cdn.awsli.com.br/2/2987/produto/45489188/dgsdgsdgsg-1ptj5urzge.png",
  },
  {
    id: 2,
    nome: "Condicionador Hidratante",
    descricao: "Condicionador com ação hidratante para cabelos ressecados.",
    preco: 32.9,
    genero: "Unissex",
    imagem:
      "https://destro.fbitsstatic.net/img/p/condicionador-pantene-equilibrio-hidratante-150ml-84730/271287.jpg?w=500&h=500&v=202501231555&qs=ignore",
  },
  {
    id: 3,
    nome: "Pomada Modeladora",
    descricao: "Pomada de fixação forte para penteados duradouros.",
    preco: 24.5,
    genero: "Masculino",
    imagem:
      "https://cdn.awsli.com.br/2500x2500/2761/2761688/produto/287870401/pomada-modeladora-efeito-teia-85g-embaixador-fa6d02bd-zhbu777ljn.png",
  },
  {
    id: 4,
    nome: "Óleo de Argan",
    descricao: "Óleo nutritivo para brilho e maciez dos cabelos.",
    preco: 39.9,
    genero: "Feminino",
    imagem: "https://www.fashioncosmeticos.com.br/wp-content/uploads/2021/01/argan.png",
  },
  {
    id: 5,
    nome: "Leave-in Protetor Térmico",
    descricao: "Protetor térmico com ação desembaraçante.",
    preco: 34.9,
    genero: "Unissex",
    imagem:
      "https://ikesaki.vteximg.com.br/arquivos/ids/323135/Protetor-Termico-Leave-In-Wella-Professionals-Ultimate-Repair-140ml-4064666337128-1.jpg",
  },
  {
    id: 6,
    nome: "Spray Fixador",
    descricao: "Spray de fixação leve para manter o penteado por mais tempo.",
    preco: 28,
    genero: "Feminino",
    imagem: "https://product-data.raiadrogasil.io/images/3673924.webp",
  },
  {
    id: 7,
    nome: "Gel Capilar",
    descricao: "Gel fixador de longa duração com efeito molhado.",
    preco: 21.9,
    genero: "Masculino",
    imagem:
      "https://ikesaki.vteximg.com.br/arquivos/ids/238686/Gel-Fixador-Ny.-Looks-1-Media-240g-7891350034929.png",
  },
  {
    id: 8,
    nome: "Máscara de Hidratação Profunda",
    descricao: "Máscara para hidratação intensa dos cabelos.",
    preco: 44.9,
    genero: "Feminino",
    imagem:
      "https://cdn.dooca.store/146215/products/captura-de-tela-2024-02-13-as-133006.png?v=1707841892",
  },
  {
    id: 9,
    nome: "Shampoo Anticaspa",
    descricao: "Combate a caspa e alivia coceiras no couro cabeludo.",
    preco: 27.9,
    genero: "Masculino",
    imagem: "https://product-data.raiadrogasil.io/images/5196821.webp",
  },
  {
    id: 10,
    nome: "Creme de Pentear Cachos",
    descricao: "Definidor de cachos com ação anti-frizz.",
    preco: 33.9,
    genero: "Feminino",
    imagem: "https://product-data.raiadrogasil.io/images/3673249.webp",
  },
];

export default function Produtos({ tema }) {
  const [produtosState, setProdutosState] = useState(produtos);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
  const [filtroGenero, setFiltroGenero] = useState("Todos");

  function abrirModalDetalhes(produto) {
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

  function handleFiltroGeneroChange(event) {
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
              src={produto.imagem}
              className="card-img-top img-fluid"
              style={{ objectFit: "cover", height: "200px" }}
              alt={produto.nome}
            />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">{produto.descricao}</p>
              <p className="fw-bold">R$ {produto.preco.toFixed(2)}</p>
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
      >
        <i className="bi bi-plus-lg" style={{ fontSize: "1.75rem" }}></i>
      </button>

      {modalDetalhesAberto && produtoSelecionado && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{produtoSelecionado.nome}</h5>
                <button className="btn-close" onClick={fecharModalDetalhes}></button>
              </div>
              <div className="modal-body">
                <img
                  src={produtoSelecionado.imagem}
                  alt={produtoSelecionado.nome}
                  className="img-fluid mb-3"
                />
                <p>{produtoSelecionado.descricao}</p>
                <p>
                  <strong>Preço:</strong> R$ {produtoSelecionado.preco.toFixed(2)}
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
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar {produtoSelecionado.nome}</h5>
                <button className="btn-close" onClick={fecharModalEdicao}></button>
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
                <h5 className="modal-title">Cadastrar Produto</h5>
                <button type="button" className="btn-close" onClick={fecharModalCadastro}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input className="form-control" placeholder="Nome do Produto" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" placeholder="Descrição"></textarea>
                </div>
                <div className="mb-3">
                  <input className="form-control" placeholder="Preço (R$)" type="number" />
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
