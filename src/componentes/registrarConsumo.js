import { useState } from "react";

export default function RegistrarConsumo({ tema, clientes, produtos, servicos }) {
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [servicosSelecionados, setServicosSelecionados] = useState([]);

  function handleClienteChange(event) {
    const clienteId = parseInt(event.target.value);
    const cliente = clientes.find((c) => c.id === clienteId) || null;
    setClienteSelecionado(cliente);
  }

  function handleProdutoChange(event) {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    const selecionados = produtos.filter((p) => selectedIds.includes(p.id));
    setProdutosSelecionados(selecionados);
  }

  function handleServicoChange(event) {
    const selectedIds = Array.from(event.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    const selecionados = servicos.filter((s) => selectedIds.includes(s.id));
    setServicosSelecionados(selecionados);
  }

  function registrarConsumo() {
    if (!clienteSelecionado) {
      alert("Selecione o cliente.");
      return;
    }
    console.log("Consumo registrado:", {
      cliente: clienteSelecionado.nome,
      produtos: produtosSelecionados.map((p) => p.nome),
      servicos: servicosSelecionados.map((s) => s.nome),
    });
    alert("Consumo registrado com sucesso!");
  }

  return (
    <div className="container card shadow p-4" style={{ backgroundColor: tema }}>
      <h4 className="mb-4">Registrar Consumo</h4>

      <div className="mb-3">
        <label className="form-label">Cliente</label>
        <select className="form-select" onChange={handleClienteChange}>
          <option value="">Selecione...</option>
          {clientes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Produtos</label>
        <select className="form-select" multiple onChange={handleProdutoChange}>
          {produtos.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Serviços</label>
        <select className="form-select" multiple onChange={handleServicoChange}>
          {servicos.map((s) => (
            <option key={s.id} value={s.id}>
              {s.nome}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-success" onClick={registrarConsumo}>
        Registrar Consumo
      </button>
    </div>
  );
}
