export default function FormularioCadastroCliente({ tema }) {
    return (
        <div className="container card shadow my-4">
            <span className="pt-4 px-4 h3">Cadastro de cliente</span>
            <div className="container-fluid p-4">
                <form>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome"
                            />
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Sobrenome"
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="CPF (000.000.000-00)"
                            />
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefone (99) 99999-9999"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <select className="form-select">
                            <option value="">Selecione o gênero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="mb-3 input-group">
                        <span
                            className="input-group-text"
                            style={{ background: tema }}
                        >
                            @
                        </span>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            style={{ background: tema }}
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
