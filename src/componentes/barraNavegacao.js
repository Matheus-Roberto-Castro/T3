/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function BarraNavegacao({ tema, botoes, seletorView }) {
    const gerarListaBotoes = () => {
        if (!botoes || botoes.length <= 0) {
            return <></>;
        } else {
            return botoes.map((valor) => (
                <li key={valor} className="nav-item">
                    <a
                        className="nav-link mb-0 text-white nav-link-hover"
                        href="#"
                        onClick={(e) => seletorView(valor, e)}
                    >
                        {valor}
                    </a>
                </li>
            ));
        }
    };

    return (
        <>
            <nav
                className="navbar navbar-expand-lg shadow"
                style={{ backgroundColor: tema, marginBottom: 10 }}
            >
                <div className="container-fluid">
                    <a
                        href="#"
                        onClick={(e) => seletorView("Home", e)}
                        className="navbar-brand mb-0 h nav-link-hover fw-bold"
                        style={{ color: "pink", fontFamily: "Playfair Display" }}
                    >
                        WorldBeauty
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">{gerarListaBotoes()}</ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
