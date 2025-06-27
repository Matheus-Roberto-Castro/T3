export default function CardFuncao({ funcao, seletorView }) {
    const { titulo, descricao, icone, link } = funcao;

    return (
        <a onClick={(e) => seletorView(link, e)} className="text-decoration-none">
            <div
                className="card d-flex flex-wrap m-2 my-5 shadow-sm"
                style={{ width: "18rem", height: "14rem", cursor: "pointer" }}
            >
                <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                    <i className={icone} style={{ fontSize: "3rem", color: "purple" }}></i>
                    <h5 className="card-title mt-3">{titulo}</h5>
                    <p className="card-text">{descricao}</p>
                </div>
            </div>
        </a>
    );
}
